import clsx from "clsx";

import classes from "./MTT_TableBodyCell.module.css";

import {
  type CSSProperties,
  type DragEvent,
  memo,
  type MouseEvent,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Skeleton,
  TableTd,
  type TableTdProps,
  useDirection,
} from "@mantine/core";

import { MTT_TableBodyCellValue } from "./MTT_TableBodyCellValue";

import {
  type MTT_Cell,
  type MTT_CellValue,
  type MTT_RowData,
  type MTT_TableInstance,
  type MTT_VirtualItem,
} from "../../types";
import { parseCSSVarId } from "../../utils/style.utils";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_CopyButton } from "../buttons/MTT_CopyButton";
import { MTT_EditCellTextInput } from "../inputs/MTT_EditCellTextInput";

interface Props<
  TData extends MTT_RowData,
  TValue = MTT_CellValue,
> extends TableTdProps {
  cell: MTT_Cell<TData, TValue>;
  numRows?: number;
  renderedColumnIndex?: number;
  renderedRowIndex?: number;
  rowRef: RefObject<HTMLTableRowElement | null>;
  table: MTT_TableInstance<TData>;
  virtualCell?: MTT_VirtualItem;
}

export const MTT_TableBodyCell = <TData extends MTT_RowData>({
  cell,
  numRows = 1,
  renderedColumnIndex = 0,
  renderedRowIndex = 0,
  rowRef,
  table,
  virtualCell,
  ...rest
}: Props<TData>) => {
  const direction = useDirection();

  const {
    getState,
    options: {
      columnResizeDirection,
      columnResizeMode,
      createDisplayMode,
      editDisplayMode,
      enableClickToCopy,
      enableColumnOrdering,
      enableColumnPinning,
      enableEditing,
      enableGrouping,
      layoutMode,
      mantineSkeletonProps,
      mantineTableBodyCellProps,
    },
    refs: { editInputRefs },
    setEditingCell,
    setHoveredColumn,
  } = table;
  const {
    columnSizingInfo,
    creatingRow,
    density,
    draggingColumn,
    editingCell,
    editingRow,
    hoveredColumn,
    isLoading,
    showSkeletons,
  } = getState();
  const { column, row } = cell;
  const { columnDef } = column;
  const { columnDefType } = columnDef;

  const args = {
    cell,
    column,
    renderedColumnIndex,
    renderedRowIndex,
    row,
    table,
  };
  const tableCellProps = {
    ...parseFromValuesOrFunc(mantineTableBodyCellProps, args),
    ...parseFromValuesOrFunc(columnDef.mantineTableBodyCellProps, args),
    ...rest,
  };

  const skeletonProps = parseFromValuesOrFunc(mantineSkeletonProps, args);

  const [skeletonWidth, setSkeletonWidth] = useState(100);
  useEffect(() => {
    if ((!isLoading && !showSkeletons) || skeletonWidth !== 100) return;
    const size = column.getSize();
    setSkeletonWidth(
      columnDefType === "display"
        ? size / 2
        : Math.round(Math.random() * (size - size / 3) + size / 3),
    );
  }, [isLoading, showSkeletons]);

  const widthStyles: CSSProperties = {
    minWidth: `max(calc(var(--col-${parseCSSVarId(
      column?.id,
    )}-size) * 1px), ${columnDef.minSize ?? 30}px)`,
    width: `calc(var(--col-${parseCSSVarId(column.id)}-size) * 1px)`,
  };
  if (layoutMode === "grid") {
    widthStyles.flex = `${
      [0, false].includes(columnDef.grow!)
        ? 0
        : `var(--col-${parseCSSVarId(column.id)}-size)`
    } 0 auto`;
  } else if (layoutMode === "grid-no-grow") {
    widthStyles.flex = `${+(columnDef.grow || 0)} 0 auto`;
  }
  const isDraggingColumn = draggingColumn?.id === column.id;
  const isHoveredColumn = hoveredColumn?.id === column.id;
  const isColumnPinned =
    enableColumnPinning &&
    columnDef.columnDefType !== "group" &&
    column.getIsPinned();

  const isEditable =
    !cell.getIsPlaceholder() &&
    parseFromValuesOrFunc(enableEditing, row) &&
    parseFromValuesOrFunc(columnDef.enableEditing, row) !== false;

  const isEditing =
    isEditable &&
    !["custom", "modal"].includes(editDisplayMode as string) &&
    (editDisplayMode === "table" ||
      editingRow?.id === row.id ||
      editingCell?.id === cell.id) &&
    !row.getIsGrouped();

  const isCreating =
    isEditable && createDisplayMode === "row" && creatingRow?.id === row.id;

  const showClickToCopyButton =
    parseFromValuesOrFunc(enableClickToCopy, cell) ||
    (parseFromValuesOrFunc(columnDef.enableClickToCopy, cell) &&
      parseFromValuesOrFunc(columnDef.enableClickToCopy, cell) !== false);

  const handleDoubleClick = (event: MouseEvent<HTMLTableCellElement>) => {
    tableCellProps?.onDoubleClick?.(event);
    if (isEditable && editDisplayMode === "cell") {
      setEditingCell(cell);
      setTimeout(() => {
        const textField = editInputRefs.current[cell.id];
        if (textField) {
          textField.focus();
          textField.select?.();
        }
      }, 100);
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLTableCellElement>) => {
    tableCellProps?.onDragEnter?.(e);
    if (enableGrouping && hoveredColumn?.id === "drop-zone") {
      setHoveredColumn(null);
    }
    if (enableColumnOrdering && draggingColumn) {
      setHoveredColumn(
        columnDef.enableColumnOrdering !== false ? column : null,
      );
    }
  };

  const cellValueProps = {
    cell,
    renderedColumnIndex,
    renderedRowIndex,
    table,
  };

  const cellHoverRevealDivRef = useRef<any>(null);
  const [isCellContentOverflowing, setIsCellContentOverflowing] =
    useState(false);

  const onMouseEnter = () => {
    if (!columnDef.enableCellHoverReveal) return;
    const div = cellHoverRevealDivRef.current;
    if (div) {
      const isOverflow = div.scrollWidth > div.clientWidth;
      setIsCellContentOverflowing(isOverflow);
    }
  };

  const onMouseLeave = () => {
    if (!columnDef.enableCellHoverReveal) return;
    setIsCellContentOverflowing(false);
  };

  const renderCellContent = () => {
    if (cell.getIsPlaceholder()) {
      return columnDef.PlaceholderCell?.({ cell, column, row, table }) ?? null;
    }

    if (showSkeletons !== false && (isLoading || showSkeletons)) {
      return <Skeleton height={20} width={skeletonWidth} {...skeletonProps} />;
    }

    if (
      columnDefType === "display" &&
      (["mtt-row-expand", "mtt-row-numbers", "mtt-row-select"].includes(
        column.id,
      ) ||
        !row.getIsGrouped())
    ) {
      return columnDef.Cell?.({
        column,
        renderedCellValue: cell.renderValue() as any,
        row,
        rowRef,
        ...cellValueProps,
      });
    }

    if (isCreating || isEditing) {
      return <MTT_EditCellTextInput cell={cell} table={table} />;
    }

    if (showClickToCopyButton && columnDef.enableClickToCopy !== false) {
      return (
        <MTT_CopyButton cell={cell} table={table}>
          <MTT_TableBodyCellValue {...cellValueProps} />
        </MTT_CopyButton>
      );
    }

    return <MTT_TableBodyCellValue {...cellValueProps} />;
  };

  return (
    <TableTd
      data-column-pinned={isColumnPinned || undefined}
      data-dragging-column={isDraggingColumn || undefined}
      data-first-right-pinned={
        (isColumnPinned === "right" &&
          column.getIsFirstColumn(isColumnPinned)) ||
        undefined
      }
      data-hovered-column-target={isHoveredColumn || undefined}
      data-index={renderedColumnIndex}
      data-last-left-pinned={
        (isColumnPinned === "left" && column.getIsLastColumn(isColumnPinned)) ||
        undefined
      }
      data-last-row={renderedRowIndex === numRows - 1 || undefined}
      data-resizing={
        (columnResizeMode === "onChange" &&
          columnSizingInfo?.isResizingColumn === column.id &&
          columnResizeDirection) ||
        undefined
      }
      {...tableCellProps}
      __vars={{
        "--mtt-cell-align":
          tableCellProps.align ?? (direction.dir === "rtl" ? "right" : "left"),
        "--mtt-table-cell-left":
          isColumnPinned === "left"
            ? `${column.getStart(isColumnPinned)}`
            : undefined,
        "--mtt-table-cell-right":
          isColumnPinned === "right"
            ? `${column.getAfter(isColumnPinned)}`
            : undefined,
        ...tableCellProps.__vars,
      }}
      className={clsx(
        classes.root,
        layoutMode?.startsWith("grid") && classes["root-grid"],
        virtualCell && classes["root-virtualized"],
        isEditable &&
          editDisplayMode === "cell" &&
          classes["root-cursor-pointer"],
        isEditable &&
          ["cell", "table"].includes(editDisplayMode ?? "") &&
          columnDefType !== "display" &&
          classes["root-editable-hover"],
        columnDefType === "data" && classes["root-data-col"],
        density === "xs" && classes["root-nowrap"],
        columnDef.enableCellHoverReveal && classes["root-cell-hover-reveal"],
        tableCellProps?.className,
      )}
      onDoubleClick={handleDoubleClick}
      onDragEnter={handleDragEnter}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={(theme) => ({
        ...widthStyles,
        ...parseFromValuesOrFunc(tableCellProps.style, theme),
      })}
    >
      <>
        {tableCellProps.children ??
          (columnDef.enableCellHoverReveal ? (
            <div
              className={clsx(
                columnDef.enableCellHoverReveal &&
                  !(isCreating || isEditing) &&
                  classes["cell-hover-reveal"],
                isCellContentOverflowing && classes["overflowing"],
              )}
              ref={cellHoverRevealDivRef}
            >
              {renderCellContent()}
              {cell.getIsGrouped() && !columnDef.GroupedCell && (
                <> ({row.subRows?.length})</>
              )}
            </div>
          ) : (
            <>
              {renderCellContent()}
              {cell.getIsGrouped() && !columnDef.GroupedCell && (
                <> ({row.subRows?.length})</>
              )}
            </>
          ))}
      </>
    </TableTd>
  );
};

export const Memo_MTT_TableBodyCell = memo(
  MTT_TableBodyCell,
  (prev, next) => next.cell === prev.cell,
) as typeof MTT_TableBodyCell;
