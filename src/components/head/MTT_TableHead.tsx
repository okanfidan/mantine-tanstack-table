import clsx from "clsx";

import classes from "./MTT_TableHead.module.css";

import {
  TableTh,
  TableThead,
  type TableTheadProps,
  TableTr,
} from "@mantine/core";

import { MTT_TableHeadRow } from "./MTT_TableHeadRow";

import {
  type MTT_ColumnVirtualizer,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_ToolbarAlertBanner } from "../toolbar/MTT_ToolbarAlertBanner";

interface Props<TData extends MTT_RowData> extends TableTheadProps {
  columnVirtualizer?: MTT_ColumnVirtualizer;
  table: MTT_TableInstance<TData>;
}

export const MTT_TableHead = <TData extends MTT_RowData>({
  columnVirtualizer,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getHeaderGroups,
    getSelectedRowModel,
    getState,
    options: {
      enableStickyHeader,
      layoutMode,
      mantineTableHeadProps,
      positionToolbarAlertBanner,
    },
    refs: { tableHeadRef },
  } = table;
  const { isFullScreen, showAlertBanner } = getState();

  const tableHeadProps = {
    ...parseFromValuesOrFunc(mantineTableHeadProps, {
      table,
    }),
    ...rest,
  };

  const stickyHeader = enableStickyHeader || isFullScreen;

  return (
    <TableThead
      {...tableHeadProps}
      className={clsx(
        classes.root,
        layoutMode?.startsWith("grid")
          ? classes["root-grid"]
          : classes["root-table-row-group"],
        stickyHeader && classes["root-sticky"],
        tableHeadProps?.className,
      )}
      pos={
        stickyHeader && layoutMode?.startsWith("grid") ? "sticky" : "relative"
      }
      ref={(ref: HTMLTableSectionElement) => {
        tableHeadRef.current = ref;
        if (tableHeadProps?.ref) {
          // @ts-ignore
          tableHeadProps.ref.current = ref;
        }
      }}
    >
      {positionToolbarAlertBanner === "head-overlay" &&
      (showAlertBanner || getSelectedRowModel().rows.length > 0) ? (
        <TableTr
          className={clsx(
            classes["banner-tr"],
            layoutMode?.startsWith("grid") && classes.grid,
          )}
        >
          <TableTh
            className={clsx(
              classes["banner-th"],
              layoutMode?.startsWith("grid") && classes.grid,
            )}
            colSpan={table.getVisibleLeafColumns().length}
          >
            <MTT_ToolbarAlertBanner table={table} />
          </TableTh>
        </TableTr>
      ) : (
        getHeaderGroups().map((headerGroup) => (
          <MTT_TableHeadRow
            columnVirtualizer={columnVirtualizer}
            headerGroup={headerGroup as any}
            key={headerGroup.id}
            table={table}
          />
        ))
      )}
    </TableThead>
  );
};
