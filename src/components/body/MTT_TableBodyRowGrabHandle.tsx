import { type DragEvent, type RefObject } from "react";

import { type ActionIconProps } from "@mantine/core";

import {
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_GrabHandleButton } from "../buttons/MTT_GrabHandleButton";

interface Props<TData extends MTT_RowData> extends ActionIconProps {
  row: MTT_Row<TData>;
  rowRef: RefObject<HTMLTableRowElement>;
  table: MTT_TableInstance<TData>;
}

export const MTT_TableBodyRowGrabHandle = <TData extends MTT_RowData>({
  row,
  rowRef,
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: { mantineRowDragHandleProps },
  } = table;

  const actionIconProps = {
    ...parseFromValuesOrFunc(mantineRowDragHandleProps, {
      row,
      table,
    }),
    ...rest,
  };

  const handleDragStart = (event: DragEvent<HTMLButtonElement>) => {
    actionIconProps?.onDragStart?.(event);
    event.dataTransfer.setDragImage(rowRef.current as HTMLElement, 0, 0);
    table.setDraggingRow(row as any);
  };

  const handleDragEnd = (event: DragEvent<HTMLButtonElement>) => {
    actionIconProps?.onDragEnd?.(event);
    table.setDraggingRow(null);
    table.setHoveredRow(null);
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
