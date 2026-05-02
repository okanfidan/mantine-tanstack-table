import clsx from "clsx";

import classes from "./MTT_TableBodyRow.module.css";

import { type DragEvent, memo, useMemo, useRef } from "react";

import {
  Box,
  type TableProps,
  TableTr,
  type TableTrProps,
} from "@mantine/core";

import { Memo_MTT_TableBodyCell, MTT_TableBodyCell } from "./MTT_TableBodyCell";
import { MTT_TableDetailPanel } from "./MTT_TableDetailPanel";

import {
  type MTT_Cell,
  type MTT_ColumnVirtualizer,
  type MTT_DensityState,
  type MTT_Row,
  type MTT_RowData,
  type MTT_RowVirtualizer,
  type MTT_TableInstance,
  type MTT_VirtualItem,
} from "../../types";
import { getIsRowSelected } from "../../utils/row.utils";
import { parseFromValuesOrFunc } from "../../utils/utils";

interface Props<TData extends MTT_RowData> extends TableTrProps {
  columnVirtualizer?: MTT_ColumnVirtualizer;
  numRows?: number;
  pinnedRowIds?: string[];
  renderedRowIndex?: number;
  row: MTT_Row<TData>;
  rowVirtualizer?: MTT_RowVirtualizer;
  table: MTT_TableInstance<TData>;
  tableProps: Partial<TableProps>;
  virtualRow?: MTT_VirtualItem;
}

export const MTT_TableBodyRow = <TData extends MTT_RowData>({
  children,
  columnVirtualizer,
  numRows,
  pinnedRowIds,
  renderedRowIndex = 0,
  row,
  rowVirtualizer,
  table,
  tableProps,
  virtualRow,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enableRowOrdering,
      enableRowPinning,
      enableStickyFooter,
      enableStickyHeader,
      layoutMode,
      mantineTableBodyRowProps,
      memoMode,
      renderDetailPanel,
      rowPinningDisplayMode,
    },
    refs: { tableFooterRef, tableHeadRef },
    setHoveredRow,
  } = table;
  const {
    density,
    draggingColumn,
    draggingRow,
    editingCell,
    editingRow,
    hoveredRow,
    isFullScreen,
    rowPinning,
  } = getState();

  const visibleCells = row.getVisibleCells();

  const { virtualColumns, virtualPaddingLeft, virtualPaddingRight } =
    columnVirtualizer ?? {};

  const isRowSelected = getIsRowSelected({ row, table });
  const isRowPinned = enableRowPinning && row.getIsPinned();
  const isRowStickyPinned =
    isRowPinned && rowPinningDisplayMode?.includes("sticky") && "sticky";
  const isDraggingRow = draggingRow?.id === row.id;
  const isHoveredRow = hoveredRow?.id === row.id;

  const tableRowProps = {
    ...parseFromValuesOrFunc(mantineTableBodyRowProps, {
      renderedRowIndex,
      row,
      table,
    }),
    ...rest,
  };

  const [bottomPinnedIndex, topPinnedIndex] = useMemo(() => {
    if (
      !enableRowPinning ||
      !isRowStickyPinned ||
      !pinnedRowIds ||
      !row.getIsPinned()
    )
      return [];
    return [
      [...pinnedRowIds].reverse().indexOf(row.id),
      pinnedRowIds.indexOf(row.id),
    ];
  }, [pinnedRowIds, rowPinning]);

  const tableHeadHeight =
    ((enableStickyHeader || isFullScreen) &&
      tableHeadRef.current?.clientHeight) ||
    0;
  const tableFooterHeight =
    (enableStickyFooter && tableFooterRef.current?.clientHeight) || 0;

  const defaultRowHeightByDensity: Record<MTT_DensityState, number> = {
    lg: 61,
    md: 53,
    sm: 45,
    xl: 69,
    xs: 37,
  };

  const rowHeight =
    // @ts-ignore
    parseInt(tableRowProps?.style?.height, 10) ||
    (defaultRowHeightByDensity[density] ?? defaultRowHeightByDensity["md"]);

  const handleDragEnter = (_e: DragEvent) => {
    if (enableRowOrdering && draggingRow) {
      setHoveredRow(row);
    }
  };

  const rowRef = useRef<HTMLTableRowElement | null>(null);

  let striped = tableProps.striped as boolean | string;

  if (striped) {
    if (striped === true) {
      striped = "odd";
    }
    if (striped === "odd" && renderedRowIndex % 2 !== 0) {
      striped = false;
    }
    if (striped === "even" && renderedRowIndex % 2 === 0) {
      striped = false;
    }
  }

  return (
    <>
      <TableTr
        data-dragging-row={isDraggingRow || undefined}
        data-hovered-row-target={isHoveredRow || undefined}
        data-index={renderDetailPanel ? renderedRowIndex * 2 : renderedRowIndex}
        data-row-pinned={isRowStickyPinned || isRowPinned || undefined}
        data-selected={isRowSelected || undefined}
        data-striped={striped}
        onDragEnter={handleDragEnter}
        ref={(node: HTMLTableRowElement) => {
          if (node) {
            rowRef.current = node;
            rowVirtualizer?.measureElement(node);
          }
        }}
        {...tableRowProps}
        __vars={{
          ...tableRowProps?.__vars,
          "--mtt-pinned-row-bottom":
            !virtualRow && bottomPinnedIndex !== undefined && isRowPinned
              ? `${
                  bottomPinnedIndex * rowHeight +
                  (enableStickyFooter ? tableFooterHeight - 1 : 0)
                }`
              : undefined,
          "--mtt-pinned-row-top": virtualRow
            ? undefined
            : topPinnedIndex !== undefined && isRowPinned
              ? `${
                  topPinnedIndex * rowHeight +
                  (enableStickyHeader || isFullScreen ? tableHeadHeight - 1 : 0)
                }`
              : undefined,
          "--mtt-virtual-row-start": virtualRow
            ? `${virtualRow.start}`
            : undefined,
        }}
        className={clsx(
          classes.root,
          layoutMode?.startsWith("grid") && classes["root-grid"],
          virtualRow && classes["root-virtualized"],
          tableRowProps?.className,
        )}
      >
        {virtualPaddingLeft ? (
          <Box component="td" display="flex" w={virtualPaddingLeft} />
        ) : null}
        {children
          ? children
          : (virtualColumns ?? row.getVisibleCells()).map(
              (cellOrVirtualCell, renderedColumnIndex) => {
                let cell = cellOrVirtualCell as MTT_Cell<TData>;
                if (columnVirtualizer) {
                  renderedColumnIndex = (cellOrVirtualCell as MTT_VirtualItem)
                    .index;
                  cell = visibleCells[renderedColumnIndex];
                }
                const cellProps = {
                  cell,
                  numRows,
                  renderedColumnIndex,
                  renderedRowIndex,
                  rowRef,
                  table,
                  virtualCell: columnVirtualizer
                    ? (cellOrVirtualCell as MTT_VirtualItem)
                    : undefined,
                };
                return memoMode === "cells" &&
                  cell.column.columnDef.columnDefType === "data" &&
                  !draggingColumn &&
                  !draggingRow &&
                  editingCell?.id !== cell.id &&
                  editingRow?.id !== row.id ? (
                  <Memo_MTT_TableBodyCell key={cell.id} {...cellProps} />
                ) : (
                  <MTT_TableBodyCell key={cell.id} {...cellProps} />
                );
              },
            )}
        {virtualPaddingRight ? (
          <Box component="td" display="flex" w={virtualPaddingRight} />
        ) : null}
      </TableTr>
      {renderDetailPanel && !row.getIsGrouped() && (
        <MTT_TableDetailPanel
          parentRowRef={rowRef}
          renderedRowIndex={renderedRowIndex}
          row={row}
          rowVirtualizer={rowVirtualizer}
          striped={striped}
          table={table}
          virtualRow={virtualRow}
        />
      )}
    </>
  );
};

export const Memo_MTT_TableBodyRow = memo(
  MTT_TableBodyRow,
  (prev, next) => prev.row === next.row,
) as typeof MTT_TableBodyRow;
