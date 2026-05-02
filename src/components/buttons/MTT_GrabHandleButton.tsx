import clsx from "clsx";

import classes from "./MTT_GrabHandleButton.module.css";

import { type DragEventHandler } from "react";

import { ActionIcon, type ActionIconProps, Tooltip } from "@mantine/core";

import {
  type HTMLPropsRef,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";

interface Props<TData extends MTT_RowData> {
  actionIconProps?: ActionIconProps & HTMLPropsRef<HTMLButtonElement>;
  onDragEnd: DragEventHandler<HTMLButtonElement>;
  onDragStart: DragEventHandler<HTMLButtonElement>;
  table: MTT_TableInstance<TData>;
}

export const MTT_GrabHandleButton = <TData extends MTT_RowData>({
  actionIconProps,
  onDragEnd,
  onDragStart,
  table: {
    options: {
      icons: { IconGripHorizontal },
      localization: { move },
    },
  },
}: Props<TData>) => {
  return (
    <Tooltip
      label={actionIconProps?.title ?? move}
      openDelay={1000}
      withinPortal
    >
      <ActionIcon
        aria-label={actionIconProps?.title ?? move}
        draggable
        {...actionIconProps}
        className={clsx(
          "mtt-grab-handle-button",
          classes["grab-icon"],
          actionIconProps?.className,
        )}
        color="gray"
        onClick={(e) => {
          e.stopPropagation();
          actionIconProps?.onClick?.(e);
        }}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        size="sm"
        title={undefined}
        variant="transparent"
      >
        <IconGripHorizontal size="100%" />
      </ActionIcon>
    </Tooltip>
  );
};
