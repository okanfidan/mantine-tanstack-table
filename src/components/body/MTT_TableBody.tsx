import clsx from "clsx";

import classes from "./MTT_TableBody.module.css";

import { memo, useMemo } from "react";

import {
  type TableProps,
  TableTbody,
  type TableTbodyProps,
} from "@mantine/core";

import { MTT_TableBodyEmptyRow } from "./MTT_TableBodyEmptyRow";
import { Memo_MTT_TableBodyRow, MTT_TableBodyRow } from "./MTT_TableBodyRow";

import { useMTT_Rows } from "../../hooks/useMTT_Rows";
import { useMTT_RowVirtualizer } from "../../hooks/useMTT_RowVirtualizer";
import {
  type MTT_ColumnVirtualizer,
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
  type MTT_VirtualItem,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";

export interface MTT_TableBodyProps<
  TData extends MTT_RowData,
> extends TableTbodyProps {
  columnVirtualizer?: MTT_ColumnVirtualizer;
  table: MTT_TableInstance<TData>;
  tableProps: Partial<TableProps>;
}

export const MTT_TableBody = <TData extends MTT_RowData>({
  columnVirtualizer,
  table,
  tableProps,
  ...rest
}: MTT_TableBodyProps<TData>) => {
  const {
    getBottomRows,
    getIsSomeRowsPinned,
    getRowModel,
    getState,
    getTopRows,
    options: {
      enableStickyFooter,
      enableStickyHeader,
      layoutMode,
      mantineTableBodyProps,
      memoMode,
      renderDetailPanel,
      rowPinningDisplayMode,
    },
    refs: { tableFooterRef, tableHeadRef },
  } = table;
  const { isFullScreen, rowPinning } = getState();

  const tableBodyProps = {
    ...parseFromValuesOrFunc(mantineTableBodyProps, { table }),
    ...rest,
  };

  const tableHeadHeight =
    ((enableStickyHeader || isFullScreen) &&
      tableHeadRef.current?.clientHeight) ||
    0;
  const tableFooterHeight =
    (enableStickyFooter && tableFooterRef.current?.clientHeight) || 0;

  const pinnedRowIds = useMemo(() => {
    if (!rowPinning.bottom?.length && !rowPinning.top?.length) return [];
    return getRowModel()
      .rows.filter((row) => row.getIsPinned())
      .map((r) => r.id);
  }, [rowPinning, getRowModel().rows]);

  const rows = useMTT_Rows(table);

  const rowVirtualizer = useMTT_RowVirtualizer(table, rows);

  const { virtualRows } = rowVirtualizer ?? {};

  const commonRowProps = {
    columnVirtualizer,
    numRows: rows.length,
    table,
    tableProps,
  };

  return (
    <>
      {!rowPinningDisplayMode?.includes("sticky") &&
        getIsSomeRowsPinned("top") && (
          <TableTbody
            {...tableBodyProps}
            __vars={{
              "--mtt-table-head-height": `${tableHeadHeight}`,
              ...tableBodyProps?.__vars,
            }}
            className={clsx(
              classes.pinned,
              layoutMode?.startsWith("grid") && classes["root-grid"],
              tableBodyProps?.className,
            )}
          >
            {getTopRows().map((row, renderedRowIndex) => {
              const rowProps = {
                ...commonRowProps,
                renderedRowIndex,
                row,
              };
              return memoMode === "rows" ? (
                <Memo_MTT_TableBodyRow key={row.id} {...rowProps} />
              ) : (
                <MTT_TableBodyRow key={row.id} {...rowProps} />
              );
            })}
          </TableTbody>
        )}
      <TableTbody
        {...tableBodyProps}
        __vars={{
          "--mtt-table-body-height": rowVirtualizer
            ? `${rowVirtualizer.getTotalSize()}px`
            : undefined,
          ...tableBodyProps?.__vars,
        }}
        className={clsx(
          classes.root,
          layoutMode?.startsWith("grid") && classes["root-grid"],
          !rows.length && classes["root-no-rows"],
          rowVirtualizer && classes["root-virtualized"],
          tableBodyProps?.className,
        )}
      >
        {tableBodyProps?.children ??
          (!rows.length ? (
            <MTT_TableBodyEmptyRow {...commonRowProps} />
          ) : (
            <>
              {(virtualRows ?? rows).map(
                (rowOrVirtualRow, renderedRowIndex) => {
                  if (rowVirtualizer) {
                    if (renderDetailPanel) {
                      if (rowOrVirtualRow.index % 2 === 1) {
                        return null;
                      } else {
                        renderedRowIndex = rowOrVirtualRow.index / 2;
                      }
                    } else {
                      renderedRowIndex = rowOrVirtualRow.index;
                    }
                  }
                  const row = rowVirtualizer
                    ? rows[renderedRowIndex]
                    : (rowOrVirtualRow as MTT_Row<TData>);
                  const props = {
                    ...commonRowProps,
                    pinnedRowIds,
                    renderedRowIndex,
                    row,
                    rowVirtualizer,
                    virtualRow: rowVirtualizer
                      ? (rowOrVirtualRow as MTT_VirtualItem)
                      : undefined,
                  };
                  const key = `${row.id}-${row.index}`;
                  return memoMode === "rows" ? (
                    <Memo_MTT_TableBodyRow key={key} {...props} />
                  ) : (
                    <MTT_TableBodyRow key={key} {...props} />
                  );
                },
              )}
            </>
          ))}
      </TableTbody>
      {!rowPinningDisplayMode?.includes("sticky") &&
        getIsSomeRowsPinned("bottom") && (
          <TableTbody
            {...tableBodyProps}
            __vars={{
              "--mtt-table-footer-height": `${tableFooterHeight}`,
              ...tableBodyProps?.__vars,
            }}
            className={clsx(
              classes.pinned,
              layoutMode?.startsWith("grid") && classes["root-grid"],
              tableBodyProps?.className,
            )}
          >
            {getBottomRows().map((row, renderedRowIndex) => {
              const props = {
                ...commonRowProps,
                renderedRowIndex,
                row,
              };
              return memoMode === "rows" ? (
                <Memo_MTT_TableBodyRow key={row.id} {...props} />
              ) : (
                <MTT_TableBodyRow key={row.id} {...props} />
              );
            })}
          </TableTbody>
        )}
    </>
  );
};

export const Memo_MTT_TableBody = memo(
  MTT_TableBody,
  (prev, next) => prev.table.options.data === next.table.options.data,
) as typeof MTT_TableBody;
