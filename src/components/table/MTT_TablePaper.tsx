import clsx from "clsx";

import classes from "./MTT_TablePaper.module.css";

import { Paper, type PaperProps } from "@mantine/core";

import { MTT_TableContainer } from "./MTT_TableContainer";

import { type MTT_RowData, type MTT_TableInstance } from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_BottomToolbar } from "../toolbar/MTT_BottomToolbar";
import { MTT_TopToolbar } from "../toolbar/MTT_TopToolbar";

interface Props<TData extends MTT_RowData> extends PaperProps {
  table: MTT_TableInstance<TData>;
}

export const MTT_TablePaper = <TData extends MTT_RowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enableBottomToolbar,
      enableTopToolbar,
      mantinePaperProps,
      renderBottomToolbar,
      renderTopToolbar,
    },
    refs: { tablePaperRef },
  } = table;
  const { isFullScreen } = getState();

  const tablePaperProps = {
    ...parseFromValuesOrFunc(mantinePaperProps, { table }),
    ...rest,
  };

  return (
    <Paper
      shadow="xs"
      withBorder
      {...tablePaperProps}
      className={clsx(
        "mtt-table-paper",
        classes.root,
        isFullScreen && "mtt-table-paper-fullscreen",
        tablePaperProps?.className,
      )}
      ref={(ref: HTMLDivElement) => {
        tablePaperRef.current = ref;
        if (tablePaperProps?.ref) {
          tablePaperProps.ref.current = ref;
        }
      }}
      // rare case where we should use inline styles to guarantee highest specificity
      style={(theme) => ({
        zIndex: isFullScreen ? 200 : undefined,
        ...parseFromValuesOrFunc(tablePaperProps?.style, theme),
        ...(isFullScreen
          ? {
              border: 0,
              borderRadius: 0,
              bottom: 0,
              height: "100vh",
              left: 0,
              margin: 0,
              maxHeight: "100vh",
              maxWidth: "100vw",
              padding: 0,
              position: "fixed",
              right: 0,
              top: 0,
              width: "100vw",
            }
          : null),
      })}
    >
      {enableTopToolbar &&
        (parseFromValuesOrFunc(renderTopToolbar, { table }) ?? (
          <MTT_TopToolbar table={table} />
        ))}
      <MTT_TableContainer table={table} />
      {enableBottomToolbar &&
        (parseFromValuesOrFunc(renderBottomToolbar, { table }) ?? (
          <MTT_BottomToolbar table={table} />
        ))}
    </Paper>
  );
};
