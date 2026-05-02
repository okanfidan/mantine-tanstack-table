import clsx from "clsx";

import commonClasses from "./common.styles.module.css";
import classes from "./MTT_TopToolbar.module.css";

import { Box, type BoxProps, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { MTT_ProgressBar } from "./MTT_ProgressBar";
import { MTT_TablePagination } from "./MTT_TablePagination";
import { MTT_ToolbarAlertBanner } from "./MTT_ToolbarAlertBanner";
import { MTT_ToolbarDropZone } from "./MTT_ToolbarDropZone";
import { MTT_ToolbarInternalButtons } from "./MTT_ToolbarInternalButtons";

import { type MTT_RowData, type MTT_TableInstance } from "../../types";
import { assignRef, parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_GlobalFilterTextInput } from "../inputs/MTT_GlobalFilterTextInput";

interface Props<TData extends MTT_RowData> extends BoxProps {
  table: MTT_TableInstance<TData>;
}

export const MTT_TopToolbar = <TData extends MTT_RowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enableGlobalFilter,
      enablePagination,
      enableToolbarInternalActions,
      mantineTopToolbarProps,
      positionGlobalFilter,
      positionPagination,
      positionToolbarAlertBanner,
      positionToolbarDropZone,
      renderTopToolbarCustomActions,
    },
    refs: { topToolbarRef },
  } = table;

  const { isFullScreen, showGlobalFilter } = getState();

  const isMobile = useMediaQuery("(max-width:720px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  const toolbarProps = {
    ...parseFromValuesOrFunc(mantineTopToolbarProps, { table }),
    ...rest,
  };

  const stackAlertBanner =
    isMobile ||
    !!renderTopToolbarCustomActions ||
    (showGlobalFilter && isTablet);

  const globalFilterProps = {
    style: !isTablet
      ? {
          zIndex: 3,
        }
      : undefined,
    table,
  };

  return (
    <Box
      {...toolbarProps}
      className={clsx(
        commonClasses["common-toolbar-styles"],
        classes["root"],
        isFullScreen && classes["root-fullscreen"],
        toolbarProps?.className,
      )}
      ref={(node: HTMLDivElement) => {
        if (node) {
          topToolbarRef.current = node;
          assignRef(toolbarProps?.ref, node);
        }
      }}
    >
      {positionToolbarAlertBanner === "top" && (
        <MTT_ToolbarAlertBanner
          stackAlertBanner={stackAlertBanner}
          table={table}
        />
      )}
      {["both", "top"].includes(positionToolbarDropZone ?? "") && (
        <MTT_ToolbarDropZone table={table} />
      )}
      <Flex
        className={clsx(
          classes["actions-container"],
          stackAlertBanner && classes["actions-container-stack-alert"],
        )}
      >
        {enableGlobalFilter && positionGlobalFilter === "left" && (
          <MTT_GlobalFilterTextInput {...globalFilterProps} />
        )}
        {renderTopToolbarCustomActions?.({ table }) ?? <span />}
        {enableToolbarInternalActions ? (
          <Flex justify={"end"} wrap={"wrap-reverse"}>
            {enableGlobalFilter && positionGlobalFilter === "right" && (
              <MTT_GlobalFilterTextInput {...globalFilterProps} />
            )}
            <MTT_ToolbarInternalButtons table={table} />
          </Flex>
        ) : (
          enableGlobalFilter &&
          positionGlobalFilter === "right" && (
            <MTT_GlobalFilterTextInput {...globalFilterProps} />
          )
        )}
      </Flex>
      {enablePagination &&
        ["both", "top"].includes(positionPagination ?? "") && (
          <Flex justify="end">
            <MTT_TablePagination position="top" table={table} />
          </Flex>
        )}
      <MTT_ProgressBar isTopToolbar table={table} />
    </Box>
  );
};
