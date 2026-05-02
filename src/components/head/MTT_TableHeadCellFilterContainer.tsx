import classes from "./MTT_TableHeadCellFilterContainer.module.css";

import {
  ActionIcon,
  Collapse,
  Flex,
  type FlexProps,
  Menu,
  Text,
  Tooltip,
} from "@mantine/core";

import { localizedFilterOption } from "../../fns/filterFns";
import {
  type MTT_Header,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { MTT_FilterCheckbox } from "../inputs/MTT_FilterCheckbox";
import { MTT_FilterRangeFields } from "../inputs/MTT_FilterRangeFields";
import { MTT_FilterRangeSlider } from "../inputs/MTT_FilterRangeSlider";
import { MTT_FilterTextInput } from "../inputs/MTT_FilterTextInput";
import { MTT_FilterOptionMenu } from "../menus/MTT_FilterOptionMenu";

interface Props<TData extends MTT_RowData> extends FlexProps {
  header: MTT_Header<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_TableHeadCellFilterContainer = <TData extends MTT_RowData>({
  header,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      columnFilterDisplayMode,
      columnFilterModeOptions,
      enableColumnFilterModes,
      icons: { IconFilterCog },
      localization,
    },
    refs: { filterInputRefs },
  } = table;
  const { showColumnFilters } = getState();
  const { column } = header;
  const { columnDef } = column;

  const currentFilterOption = columnDef._filterFn;
  const allowedColumnFilterOptions =
    columnDef?.columnFilterModeOptions ?? columnFilterModeOptions;
  const showChangeModeButton =
    enableColumnFilterModes &&
    columnDef.enableColumnFilterModes !== false &&
    (allowedColumnFilterOptions === undefined ||
      !!allowedColumnFilterOptions?.length);

  return (
    <Collapse
      expanded={showColumnFilters || columnFilterDisplayMode === "popover"}
    >
      <Flex direction="column" {...rest}>
        <Flex align="flex-end">
          {columnDef.filterVariant === "checkbox" ? (
            <MTT_FilterCheckbox column={column} table={table} />
          ) : columnDef.filterVariant === "range-slider" ? (
            <MTT_FilterRangeSlider header={header} table={table} />
          ) : ["date-range", "range"].includes(columnDef.filterVariant ?? "") ||
            ["between", "betweenInclusive", "inNumberRange"].includes(
              columnDef._filterFn,
            ) ? (
            <MTT_FilterRangeFields header={header} table={table} />
          ) : (
            <MTT_FilterTextInput header={header} table={table} />
          )}
          {showChangeModeButton && (
            <Menu withinPortal={columnFilterDisplayMode !== "popover"}>
              <Tooltip
                label={localization.changeFilterMode}
                position="bottom-start"
                withinPortal
              >
                <Menu.Target>
                  <ActionIcon
                    aria-label={localization.changeFilterMode}
                    color="gray"
                    size="md"
                    variant="subtle"
                  >
                    <IconFilterCog />
                  </ActionIcon>
                </Menu.Target>
              </Tooltip>
              <MTT_FilterOptionMenu
                header={header}
                onSelect={() =>
                  setTimeout(
                    () => filterInputRefs.current[`${column.id}-0`]?.focus(),
                    100,
                  )
                }
                table={table}
              />
            </Menu>
          )}
        </Flex>
        {showChangeModeButton ? (
          <Text
            c="dimmed"
            className={classes["filter-mode-label"]}
            component="label"
          >
            {localization.filterMode.replace(
              "{filterType}",
              localizedFilterOption(localization, currentFilterOption),
            )}
          </Text>
        ) : null}
      </Flex>
    </Collapse>
  );
};
