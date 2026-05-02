import { ActionIcon, type ActionIconProps, Tooltip } from "@mantine/core";

import {
  type HTMLPropsRef,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";

interface Props<TData extends MTT_RowData>
  extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
  table: MTT_TableInstance<TData>;
}

export const MTT_ToggleFiltersButton = <TData extends MTT_RowData>({
  table: {
    getState,
    options: {
      icons: { IconFilter, IconFilterOff },
      localization: { showHideFilters },
    },
    setShowColumnFilters,
  },
  title,
  ...rest
}: Props<TData>) => {
  const { showColumnFilters } = getState();

  return (
    <Tooltip label={title ?? showHideFilters} withinPortal>
      <ActionIcon
        aria-label={title ?? showHideFilters}
        color="gray"
        onClick={() => setShowColumnFilters((current) => !current)}
        size="lg"
        variant="subtle"
        {...rest}
      >
        {showColumnFilters ? <IconFilterOff /> : <IconFilter />}
      </ActionIcon>
    </Tooltip>
  );
};
