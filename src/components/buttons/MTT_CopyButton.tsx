import clsx from "clsx";

import classes from "./MTT_CopyButton.module.css";

import { type ReactNode } from "react";

import {
  CopyButton,
  Tooltip,
  UnstyledButton,
  type UnstyledButtonProps,
} from "@mantine/core";

import {
  type MTT_Cell,
  type MTT_CellValue,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";

interface Props<
  TData extends MTT_RowData,
  TValue = MTT_CellValue,
> extends UnstyledButtonProps {
  cell: MTT_Cell<TData, TValue>;
  children: ReactNode;
  table: MTT_TableInstance<TData>;
}

export const MTT_CopyButton = <TData extends MTT_RowData>({
  cell,
  children,
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: {
      localization: { clickToCopy, copiedToClipboard },
      mantineCopyButtonProps,
    },
  } = table;
  const { column, row } = cell;
  const { columnDef } = column;

  const arg = { cell, column, row, table };
  const buttonProps = {
    ...parseFromValuesOrFunc(mantineCopyButtonProps, arg),
    ...parseFromValuesOrFunc(columnDef.mantineCopyButtonProps, arg),
    ...rest,
  };

  return (
    <CopyButton value={cell.getValue<string>()}>
      {({ copied, copy }) => (
        <Tooltip
          color={copied ? "green" : undefined}
          label={
            buttonProps?.title ?? (copied ? copiedToClipboard : clickToCopy)
          }
          openDelay={1000}
          withinPortal
        >
          <UnstyledButton
            {...buttonProps}
            className={clsx(
              "mtt-copy-button",
              classes.root,
              buttonProps?.className,
            )}
            onClick={(e) => {
              e.stopPropagation();
              copy();
            }}
            role="presentation"
            title={undefined}
          >
            {children}
          </UnstyledButton>
        </Tooltip>
      )}
    </CopyButton>
  );
};
