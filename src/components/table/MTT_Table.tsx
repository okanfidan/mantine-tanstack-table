import clsx from "clsx";

import classes from "./MTT_Table.module.css";

import { useMemo } from "react";

import {
  darken,
  lighten,
  Table,
  type TableProps,
  useMantineColorScheme,
} from "@mantine/core";

import { useMTT_ColumnVirtualizer } from "../../hooks/useMTT_ColumnVirtualizer";
import { type MTT_RowData, type MTT_TableInstance } from "../../types";
import { parseCSSVarId } from "../../utils/style.utils";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { Memo_MTT_TableBody, MTT_TableBody } from "../body/MTT_TableBody";
import { MTT_TableFooter } from "../footer/MTT_TableFooter";
import { MTT_TableHead } from "../head/MTT_TableHead";

interface Props<TData extends MTT_RowData> extends TableProps {
  table: MTT_TableInstance<TData>;
}

export const MTT_Table = <TData extends MTT_RowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getFlatHeaders,
    getState,
    options: {
      columns,
      enableTableFooter,
      enableTableHead,
      layoutMode,
      mantineTableProps,
      memoMode,
    },
  } = table;
  const { columnSizing, columnSizingInfo, columnVisibility, density } =
    getState();

  const tableProps = {
    highlightOnHover: true,
    horizontalSpacing: density,
    verticalSpacing: density,
    ...parseFromValuesOrFunc(mantineTableProps, { table }),
    ...rest,
  };

  const columnSizeVars = useMemo(() => {
    const headers = getFlatHeaders();
    const colSizes: { [key: string]: number } = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      const colSize = header.getSize();
      colSizes[`--header-${parseCSSVarId(header.id)}-size`] = colSize;
      colSizes[`--col-${parseCSSVarId(header.column.id)}-size`] = colSize;
    }
    return colSizes;
  }, [columns, columnSizing, columnSizingInfo, columnVisibility]);

  const columnVirtualizer = useMTT_ColumnVirtualizer(table);

  const commonTableGroupProps = {
    columnVirtualizer,
    table,
  };

  const { colorScheme } = useMantineColorScheme();

  const { stripedColor } = tableProps;

  return (
    <Table
      className={clsx(
        "mtt-table",
        classes.root,
        layoutMode?.startsWith("grid") && classes["root-grid"],
        tableProps.className,
      )}
      {...tableProps}
      __vars={{
        ...columnSizeVars,
        "--mtt-striped-row-background-color": stripedColor,
        "--mtt-striped-row-hover-background-color": stripedColor
          ? colorScheme === "dark"
            ? lighten(stripedColor, 0.08)
            : darken(stripedColor, 0.12)
          : undefined,
        ...tableProps.__vars,
      }}
    >
      {enableTableHead && <MTT_TableHead {...commonTableGroupProps} />}
      {memoMode === "table-body" || columnSizingInfo.isResizingColumn ? (
        <Memo_MTT_TableBody
          {...commonTableGroupProps}
          tableProps={tableProps}
        />
      ) : (
        <MTT_TableBody {...commonTableGroupProps} tableProps={tableProps} />
      )}
      {enableTableFooter && <MTT_TableFooter {...commonTableGroupProps} />}
    </Table>
  );
};
