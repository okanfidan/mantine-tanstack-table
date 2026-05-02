import { type DragEvent, type RefObject } from "react";

import { type ActionIconProps } from "@mantine/core";

import {
  type MTT_CellValue,
  type MTT_Column,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { reorderColumn } from "../../utils/column.utils";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_GrabHandleButton } from "../buttons/MTT_GrabHandleButton";

interface Props<
  TData extends MTT_RowData,
  TValue = MTT_CellValue,
> extends ActionIconProps {
  column: MTT_Column<TData, TValue>;
  table: MTT_TableInstance<TData>;
  tableHeadCellRef: RefObject<HTMLTableCellElement>;
}

export const MTT_TableHeadCellGrabHandle = <TData extends MTT_RowData>({
  column,
  table,
  tableHeadCellRef,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { enableColumnOrdering, mantineColumnDragHandleProps },
    setColumnOrder,
    setDraggingColumn,
    setHoveredColumn,
  } = table;
  const { columnDef } = column;
  const { columnOrder, draggingColumn, hoveredColumn } = getState();

  const arg = { column, table };
  const actionIconProps = {
    ...parseFromValuesOrFunc(mantineColumnDragHandleProps, arg),
    ...parseFromValuesOrFunc(columnDef.mantineColumnDragHandleProps, arg),
    ...rest,
  };

  const handleDragStart = (event: DragEvent<HTMLButtonElement>) => {
    actionIconProps?.onDragStart?.(event);
    setDraggingColumn(column);
    event.dataTransfer.setDragImage(
      tableHeadCellRef.current as HTMLElement,
      0,
      0,
    );
  };

  const handleDragEnd = (event: DragEvent<HTMLButtonElement>) => {
    actionIconProps?.onDragEnd?.(event);
    if (hoveredColumn?.id === "drop-zone") {
      column.toggleGrouping();
    } else if (
      enableColumnOrdering &&
      hoveredColumn &&
      hoveredColumn?.id !== draggingColumn?.id
    ) {
      setColumnOrder(
        reorderColumn(column, hoveredColumn as MTT_Column<TData>, columnOrder),
      );
    }
    setDraggingColumn(null);
    setHoveredColumn(null);
  };

  return (
    <MTT_GrabHandleButton
      actionIconProps={actionIconProps}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      table={table}
    />
  );
};
