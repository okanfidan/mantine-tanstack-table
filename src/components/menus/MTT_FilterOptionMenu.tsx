import classes from "./MTT_FilterOptionMenu.module.css";

import { Fragment, useMemo } from "react";

import { Menu } from "@mantine/core";

import {
  type MTT_FilterOption,
  type MTT_Header,
  type MTT_InternalFilterOption,
  type MTT_Localization,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";

export const mttFilterOptions = (
  localization: MTT_Localization,
): MTT_InternalFilterOption[] => [
  {
    divider: false,
    label: localization.filterFuzzy,
    option: "fuzzy",
    symbol: "≈",
  },
  {
    divider: false,
    label: localization.filterContains,
    option: "contains",
    symbol: "*",
  },
  {
    divider: false,
    label: localization.filterStartsWith,
    option: "startsWith",
    symbol: "a",
  },
  {
    divider: true,
    label: localization.filterEndsWith,
    option: "endsWith",
    symbol: "z",
  },
  {
    divider: false,
    label: localization.filterEquals,
    option: "equals",
    symbol: "=",
  },
  {
    divider: true,
    label: localization.filterNotEquals,
    option: "notEquals",
    symbol: "≠",
  },
  {
    divider: false,
    label: localization.filterBetween,
    option: "between",
    symbol: "⇿",
  },
  {
    divider: true,
    label: localization.filterBetweenInclusive,
    option: "betweenInclusive",
    symbol: "⬌",
  },
  {
    divider: false,
    label: localization.filterGreaterThan,
    option: "greaterThan",
    symbol: ">",
  },
  {
    divider: false,
    label: localization.filterGreaterThanOrEqualTo,
    option: "greaterThanOrEqualTo",
    symbol: "≥",
  },
  {
    divider: false,
    label: localization.filterLessThan,
    option: "lessThan",
    symbol: "<",
  },
  {
    divider: true,
    label: localization.filterLessThanOrEqualTo,
    option: "lessThanOrEqualTo",
    symbol: "≤",
  },
  {
    divider: false,
    label: localization.filterEmpty,
    option: "empty",
    symbol: "∅",
  },
  {
    divider: false,
    label: localization.filterNotEmpty,
    option: "notEmpty",
    symbol: "!∅",
  },
];

const rangeModes = ["between", "betweenInclusive", "inNumberRange"];
const emptyModes = ["empty", "notEmpty"];
const arrModes = ["arrIncludesSome", "arrIncludesAll", "arrIncludes"];
const rangeVariants = ["range-slider", "date-range", "range"];

interface Props<TData extends MTT_RowData> {
  header?: MTT_Header<TData>;
  onSelect?: () => void;
  table: MTT_TableInstance<TData>;
}

export const MTT_FilterOptionMenu = <TData extends MTT_RowData>({
  header,
  onSelect,
  table,
}: Props<TData>) => {
  const {
    getState,
    options: {
      columnFilterModeOptions,
      globalFilterModeOptions,
      localization,
      renderColumnFilterModeMenuItems,
      renderGlobalFilterModeMenuItems,
    },
    setColumnFilterFns,
    setGlobalFilterFn,
  } = table;
  const { globalFilterFn } = getState();
  const { column } = header ?? {};
  const { columnDef } = column ?? {};
  const currentFilterValue = column?.getFilterValue();

  let allowedColumnFilterOptions =
    columnDef?.columnFilterModeOptions ?? columnFilterModeOptions;

  if (rangeVariants.includes(columnDef?.filterVariant as string)) {
    allowedColumnFilterOptions = [
      ...rangeModes,
      ...(allowedColumnFilterOptions ?? []),
    ].filter((option) => rangeModes.includes(option));
  }

  const internalFilterOptions = useMemo(() => {
    const filterOptions = mttFilterOptions(localization).filter(
      (filterOption) =>
        columnDef
          ? allowedColumnFilterOptions === undefined ||
            allowedColumnFilterOptions?.includes(filterOption.option)
          : (!globalFilterModeOptions ||
              globalFilterModeOptions.includes(filterOption.option)) &&
            ["contains", "fuzzy", "startsWith"].includes(filterOption.option),
    );
    if (filterOptions[filterOptions.length - 1].divider) {
      filterOptions[filterOptions.length - 1].divider = false;
    }
    return filterOptions;
  }, [columnDef, globalFilterModeOptions]);

  const handleSelectFilterMode = (option: MTT_FilterOption) => {
    const prevFilterMode = columnDef?._filterFn ?? "";
    if (!header || !column) {
      // global filter mode
      setGlobalFilterFn(option);
    } else if (option !== prevFilterMode) {
      // column filter mode
      setColumnFilterFns((prev: { [key: string]: any }) => ({
        ...prev,
        [header.id]: option,
      }));

      // reset filter value and/or perform new filter render
      if (emptyModes.includes(option)) {
        // will now be empty/notEmpty filter mode
        if (
          currentFilterValue !== " " &&
          !emptyModes.includes(prevFilterMode)
        ) {
          column.setFilterValue(" ");
        } else if (currentFilterValue) {
          column.setFilterValue(currentFilterValue); // perform new filter render
        }
      } else if (
        columnDef?.filterVariant === "multi-select" ||
        arrModes.includes(option as string)
      ) {
        // will now be array filter mode
        if (
          currentFilterValue instanceof String ||
          (currentFilterValue as Array<any>)?.length
        ) {
          column.setFilterValue([]);
        } else if (currentFilterValue) {
          column.setFilterValue(currentFilterValue); // perform new filter render
        }
      } else if (
        rangeVariants.includes(columnDef?.filterVariant as string) ||
        rangeModes.includes(option as MTT_FilterOption)
      ) {
        // will now be range filter mode
        if (
          !Array.isArray(currentFilterValue) ||
          (!(currentFilterValue as Array<any>)?.every((v) => v === "") &&
            !rangeModes.includes(prevFilterMode))
        ) {
          column.setFilterValue(["", ""]);
        } else {
          column.setFilterValue(currentFilterValue); // perform new filter render
        }
      } else {
        // will now be single value filter mode
        if (Array.isArray(currentFilterValue)) {
          column.setFilterValue("");
        } else if (
          currentFilterValue === " " &&
          emptyModes.includes(prevFilterMode)
        ) {
          column.setFilterValue(undefined);
        } else {
          column.setFilterValue(currentFilterValue); // perform new filter render
        }
      }
    }
    onSelect?.();
  };

  const filterOption =
    !!header && columnDef ? columnDef._filterFn : globalFilterFn;

  return (
    <Menu.Dropdown>
      {(header && column && columnDef
        ? (columnDef.renderColumnFilterModeMenuItems?.({
            column: column as any,
            internalFilterOptions,
            onSelectFilterMode: handleSelectFilterMode,
            table,
          }) ??
          renderColumnFilterModeMenuItems?.({
            column: column as any,
            internalFilterOptions,
            onSelectFilterMode: handleSelectFilterMode,
            table,
          }))
        : renderGlobalFilterModeMenuItems?.({
            internalFilterOptions,
            onSelectFilterMode: handleSelectFilterMode,
            table,
          })) ??
        internalFilterOptions.map(
          ({ divider, label, option, symbol }, index) => (
            <Fragment key={index}>
              <Menu.Item
                color={option === filterOption ? "blue" : undefined}
                leftSection={<span className={classes.symbol}>{symbol}</span>}
                onClick={() =>
                  handleSelectFilterMode(option as MTT_FilterOption)
                }
                value={option}
              >
                {label}
              </Menu.Item>
              {divider && <Menu.Divider />}
            </Fragment>
          ),
        )}
    </Menu.Dropdown>
  );
};
