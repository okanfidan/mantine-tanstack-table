import clsx from "clsx";

import classes from "./MTT_TableBody.module.css";

import { useMemo } from "react";

import { createRow } from "@tanstack/react-table";

import {
  type TableProps,
  TableTd,
  type TableTrProps,
  Text,
} from "@mantine/core";

import { MTT_TableBodyRow } from "./MTT_TableBodyRow";

import {
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { MTT_ExpandButton } from "../buttons/MTT_ExpandButton";

interface Props<TData extends MTT_RowData> extends TableTrProps {
  table: MTT_TableInstance<TData>;
  tableProps: Partial<TableProps>;
}

export const MTT_TableBodyEmptyRow = <TData extends MTT_RowData>({
  table,
  tableProps,
  ...commonRowProps
}: Props<TData>) => {
  const {
    getState,
    options: {
      layoutMode,
      localization,
      renderDetailPanel,
      renderEmptyRowsFallback,
    },
    refs: { tablePaperRef },
  } = table;
  const { columnFilters, globalFilter } = getState();

  const emptyRow = useMemo(
    () =>
      createRow(
        table as any,
        "mtt-row-empty",
        {} as TData,
        0,
        0,
      ) as MTT_Row<TData>,
    [],
  );

  const emptyRowProps = {
    ...commonRowProps,
    renderedRowIndex: 0,
    row: emptyRow,
    virtualRow: undefined,
  };

  return (
    <MTT_TableBodyRow
      className={clsx(
        "mtt-table-body-row",
        layoutMode?.startsWith("grid") && classes["empty-row-tr-grid"],
      )}
      table={table}
      tableProps={tableProps}
      {...emptyRowProps}
    >
      {renderDetailPanel && (
        <TableTd
          className={clsx(
            "mtt-table-body-cell",
            layoutMode?.startsWith("grid") && classes["empty-row-td-grid"],
          )}
          colSpan={1}
        >
          <MTT_ExpandButton row={emptyRow} table={table} />
        </TableTd>
      )}
      <td
        className={clsx(
          "mtt-table-body-cell",
          layoutMode?.startsWith("grid") && classes["empty-row-td-grid"],
        )}
        colSpan={table.getVisibleLeafColumns().length}
      >
        {renderEmptyRowsFallback?.({ table }) ?? (
          <Text
            __vars={{
              "--mtt-paper-width": `${tablePaperRef.current?.clientWidth}`,
            }}
            className={clsx(classes["empty-row-td-content"])}
          >
            {globalFilter || columnFilters.length
              ? localization.noResultsFound
              : localization.noRecordsToDisplay}
          </Text>
        )}
      </td>
    </MTT_TableBodyRow>
  );
};
