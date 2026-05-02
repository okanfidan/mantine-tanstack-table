import clsx from "clsx";

import classes from "./MTT_TableHeadCellResizeHandle.module.css";

import { Box, type BoxProps } from "@mantine/core";

import {
  type MTT_Header,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";

interface Props<TData extends MTT_RowData> extends BoxProps {
  header: MTT_Header<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_TableHeadCellResizeHandle = <TData extends MTT_RowData>({
  header,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { columnResizeDirection, columnResizeMode },
    setColumnSizingInfo,
  } = table;
  const { density } = getState();
  const { column } = header;
  const handler = header.getResizeHandler();

  const offset =
    column.getIsResizing() && columnResizeMode === "onEnd"
      ? `translateX(${
          (columnResizeDirection === "rtl" ? -1 : 1) *
          (getState().columnSizingInfo.deltaOffset ?? 0)
        }px)`
      : undefined;

  return (
    <Box
      onDoubleClick={() => {
        setColumnSizingInfo((old) => ({
          ...old,
          isResizingColumn: false,
        }));
        column.resetSize();
      }}
      onMouseDown={handler}
      onTouchStart={handler}
      role="separator"
      {...rest}
      __vars={{ "--mtt-transform": offset, ...rest.__vars }}
      className={clsx(
        "mtt-table-head-cell-resize-handle",
        classes.root,
        classes[`root-${columnResizeDirection}`],
        !header.subHeaders.length &&
          columnResizeMode === "onChange" &&
          classes["root-hide"],
        density,
        rest.className,
      )}
    />
  );
};
