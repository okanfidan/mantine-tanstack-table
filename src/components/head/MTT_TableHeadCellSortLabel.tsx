import clsx from "clsx";

import classes from "./MTT_TableHeadCellSortLabel.module.css";

import {
  ActionIcon,
  type ActionIconProps,
  Indicator,
  Tooltip,
} from "@mantine/core";

import type { MTT_Header, MTT_RowData, MTT_TableInstance } from "../../types";
import { dataVariable } from "../../utils/style.utils";

interface Props<TData extends MTT_RowData> extends ActionIconProps {
  header: MTT_Header<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_TableHeadCellSortLabel = <TData extends MTT_RowData>({
  header,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      icons: { IconArrowsSort, IconSortAscending, IconSortDescending },
      localization,
    },
  } = table;
  const column = header.column;
  const { columnDef } = column;
  const { sorting } = getState();
  const sorted = column.getIsSorted();
  const sortIndex = column.getSortIndex();

  const sortTooltip = sorted
    ? sorted === "desc"
      ? localization.sortedByColumnDesc.replace("{column}", columnDef.header)
      : localization.sortedByColumnAsc.replace("{column}", columnDef.header)
    : column.getNextSortingOrder() === "desc"
      ? localization.sortByColumnDesc.replace("{column}", columnDef.header)
      : localization.sortByColumnAsc.replace("{column}", columnDef.header);

  const SortActionButton = (
    <ActionIcon
      aria-label={sortTooltip}
      {...dataVariable("sorted", sorted)}
      {...rest}
      className={clsx(
        "mtt-table-head-sort-button",
        classes["sort-icon"],
        rest.className,
      )}
    >
      {sorted === "desc" ? (
        <IconSortDescending size="100%" />
      ) : sorted === "asc" ? (
        <IconSortAscending size="100%" />
      ) : (
        <IconArrowsSort size="100%" />
      )}
    </ActionIcon>
  );

  return (
    <Tooltip label={sortTooltip} openDelay={1000} withinPortal>
      {sorting.length < 2 || sortIndex === -1 ? (
        SortActionButton
      ) : (
        <Indicator
          classNames={{
            root: clsx(
              "mtt-table-head-multi-sort-indicator",
              classes["multi-sort-indicator"],
            ),
          }}
          inline
          label={sortIndex + 1}
          offset={4}
        >
          {SortActionButton}
        </Indicator>
      )}
    </Tooltip>
  );
};
