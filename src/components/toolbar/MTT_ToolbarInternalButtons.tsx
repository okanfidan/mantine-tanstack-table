import clsx from "clsx";

import classes from "./MTT_ToolbarInternalButtons.module.css";

import { Flex, type FlexProps } from "@mantine/core";

import { type MTT_RowData, type MTT_TableInstance } from "../../types";
import { MTT_ShowHideColumnsButton } from "../buttons/MTT_ShowHideColumnsButton";
import { MTT_ToggleDensePaddingButton } from "../buttons/MTT_ToggleDensePaddingButton";
import { MTT_ToggleFiltersButton } from "../buttons/MTT_ToggleFiltersButton";
import { MTT_ToggleFullScreenButton } from "../buttons/MTT_ToggleFullScreenButton";
import { MTT_ToggleGlobalFilterButton } from "../buttons/MTT_ToggleGlobalFilterButton";

interface Props<TData extends MTT_RowData> extends FlexProps {
  table: MTT_TableInstance<TData>;
}

export const MTT_ToolbarInternalButtons = <TData extends MTT_RowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: {
      columnFilterDisplayMode,
      enableColumnFilters,
      enableColumnOrdering,
      enableColumnPinning,
      enableDensityToggle,
      enableFilters,
      enableFullScreenToggle,
      enableGlobalFilter,
      enableHiding,
      initialState,
      renderToolbarInternalActions,
    },
  } = table;

  return (
    <Flex
      {...rest}
      className={clsx(
        "mtt-toolbar-internal-buttons",
        classes.root,
        rest?.className,
      )}
    >
      {renderToolbarInternalActions?.({ table }) ?? (
        <>
          {enableFilters &&
            enableGlobalFilter &&
            !initialState?.showGlobalFilter && (
              <MTT_ToggleGlobalFilterButton table={table} />
            )}
          {enableFilters &&
            enableColumnFilters &&
            columnFilterDisplayMode !== "popover" && (
              <MTT_ToggleFiltersButton table={table} />
            )}
          {(enableHiding || enableColumnOrdering || enableColumnPinning) && (
            <MTT_ShowHideColumnsButton table={table} />
          )}
          {enableDensityToggle && (
            <MTT_ToggleDensePaddingButton table={table} />
          )}
          {enableFullScreenToggle && (
            <MTT_ToggleFullScreenButton table={table} />
          )}
        </>
      )}
    </Flex>
  );
};
