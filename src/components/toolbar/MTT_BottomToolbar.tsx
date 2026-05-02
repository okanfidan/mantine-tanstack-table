import clsx from "clsx";

import commonClasses from "./common.styles.module.css";
import classes from "./MTT_BottomToolbar.module.css";

import { Box, type BoxProps } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { MTT_ProgressBar } from "./MTT_ProgressBar";
import { MTT_TablePagination } from "./MTT_TablePagination";
import { MTT_ToolbarAlertBanner } from "./MTT_ToolbarAlertBanner";
import { MTT_ToolbarDropZone } from "./MTT_ToolbarDropZone";

import { type MTT_RowData, type MTT_TableInstance } from "../../types";
import { assignRef, parseFromValuesOrFunc } from "../../utils/utils";

interface Props<TData extends MTT_RowData> extends BoxProps {
  table: MTT_TableInstance<TData>;
}

export const MTT_BottomToolbar = <TData extends MTT_RowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enablePagination,
      mantineBottomToolbarProps,
      positionPagination,
      positionToolbarAlertBanner,
      positionToolbarDropZone,
      renderBottomToolbarCustomActions,
    },
    refs: { bottomToolbarRef },
  } = table;
  const { isFullScreen } = getState();

  const isMobile = useMediaQuery("(max-width: 720px)");

  const toolbarProps = {
    ...parseFromValuesOrFunc(mantineBottomToolbarProps, {
      table,
    }),
    ...rest,
  };

  const stackAlertBanner = isMobile || !!renderBottomToolbarCustomActions;

  return (
    <Box
      {...toolbarProps}
      className={clsx(
        "mtt-bottom-toolbar",
        classes.root,
        commonClasses["common-toolbar-styles"],
        isFullScreen && classes["root-fullscreen"],
        toolbarProps?.className,
      )}
      ref={(node: HTMLDivElement) => {
        if (node) {
          bottomToolbarRef.current = node;
          assignRef(toolbarProps?.ref, node);
        }
      }}
    >
      <MTT_ProgressBar isTopToolbar={false} table={table} />
      {positionToolbarAlertBanner === "bottom" && (
        <MTT_ToolbarAlertBanner
          stackAlertBanner={stackAlertBanner}
          table={table}
        />
      )}
      {["both", "bottom"].includes(positionToolbarDropZone ?? "") && (
        <MTT_ToolbarDropZone table={table} />
      )}
      <Box className={classes["custom-toolbar-container"]}>
        {renderBottomToolbarCustomActions ? (
          renderBottomToolbarCustomActions({ table })
        ) : (
          <span />
        )}
        <Box
          className={clsx(
            classes["paginator-container"],
            stackAlertBanner && classes["paginator-container-alert-banner"],
          )}
        >
          {enablePagination &&
            ["both", "bottom"].includes(positionPagination ?? "") && (
              <MTT_TablePagination position="bottom" table={table} />
            )}
        </Box>
      </Box>
    </Box>
  );
};
