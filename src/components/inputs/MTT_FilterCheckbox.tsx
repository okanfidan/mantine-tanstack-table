import clsx from "clsx";

import classes from "./MTT_FilterCheckBox.module.css";

import { Checkbox, type CheckboxProps, Tooltip } from "@mantine/core";

import {
  type MTT_CellValue,
  type MTT_Column,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";

interface Props<
  TData extends MTT_RowData,
  TValue = MTT_CellValue,
> extends CheckboxProps {
  column: MTT_Column<TData, TValue>;
  table: MTT_TableInstance<TData>;
}

export const MTT_FilterCheckbox = <TData extends MTT_RowData>({
  column,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { localization, mantineFilterCheckboxProps },
  } = table;
  const { density } = getState();
  const { columnDef } = column;

  const arg = { column, table };
  const checkboxProps = {
    ...parseFromValuesOrFunc(mantineFilterCheckboxProps, arg),
    ...parseFromValuesOrFunc(columnDef.mantineFilterCheckboxProps, arg),
    ...rest,
  } as CheckboxProps;

  const filterLabel = localization.filterByColumn?.replace(
    "{column}",
    columnDef.header,
  );

  const value = column.getFilterValue();

  return (
    <Tooltip
      label={checkboxProps?.title ?? filterLabel}
      openDelay={1000}
      withinPortal
    >
      <Checkbox
        checked={value === "true"}
        className={clsx("mtt-filter-checkbox", classes.root)}
        indeterminate={value === undefined}
        label={checkboxProps.title ?? filterLabel}
        size={density === "xs" ? "sm" : "md"}
        {...checkboxProps}
        onChange={(e) => {
          column.setFilterValue(
            column.getFilterValue() === undefined
              ? "true"
              : column.getFilterValue() === "true"
                ? "false"
                : undefined,
          );
          checkboxProps?.onChange?.(e);
        }}
        onClick={(e) => {
          e.stopPropagation();
          checkboxProps?.onClick?.(e);
        }}
        title={undefined}
      />
    </Tooltip>
  );
};
