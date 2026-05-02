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

export const MTT_ToggleGlobalFilterButton = <TData extends MTT_RowData>({
  table: {
    getState,
    options: {
      icons: { IconSearch, IconSearchOff },
      localization: { showHideSearch },
    },
    refs: { searchInputRef },
    setShowGlobalFilter,
  },
  title,
  ...rest
}: Props<TData>) => {
  const { globalFilter, showGlobalFilter } = getState();

  const handleToggleSearch = () => {
    setShowGlobalFilter(!showGlobalFilter);
    setTimeout(() => searchInputRef.current?.focus(), 100);
  };

  return (
    <Tooltip label={title ?? showHideSearch} withinPortal>
      <ActionIcon
        aria-label={title ?? showHideSearch}
        color="gray"
        disabled={!!globalFilter}
        onClick={handleToggleSearch}
        size="lg"
        variant="subtle"
        {...rest}
      >
        {showGlobalFilter ? <IconSearchOff /> : <IconSearch />}
      </ActionIcon>
    </Tooltip>
  );
};
