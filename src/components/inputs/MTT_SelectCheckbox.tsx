import { type MouseEvent } from "react";

import {
  Checkbox,
  type CheckboxProps,
  Radio,
  type RadioProps,
  Switch,
  type SwitchProps,
  Tooltip,
} from "@mantine/core";

import {
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import {
  getIsRowSelected,
  getMTT_RowSelectionHandler,
  getMTT_SelectAllHandler,
} from "../../utils/row.utils";
import { parseFromValuesOrFunc } from "../../utils/utils";

interface Props<TData extends MTT_RowData> extends CheckboxProps {
  renderedRowIndex?: number;
  row?: MTT_Row<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_SelectCheckbox = <TData extends MTT_RowData>({
  renderedRowIndex = 0,
  row,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enableMultiRowSelection,
      localization,
      mantineSelectAllCheckboxProps,
      mantineSelectCheckboxProps,
      selectAllMode,
      selectDisplayMode,
    },
  } = table;
  const { density, isLoading } = getState();

  const selectAll = !row;

  const allRowsSelected = selectAll
    ? selectAllMode === "page"
      ? table.getIsAllPageRowsSelected()
      : table.getIsAllRowsSelected()
    : undefined;

  const isChecked = selectAll
    ? allRowsSelected
    : getIsRowSelected({ row, table });

  const checkboxProps = {
    ...(selectAll
      ? parseFromValuesOrFunc(mantineSelectAllCheckboxProps, { table })
      : parseFromValuesOrFunc(mantineSelectCheckboxProps, {
          row,
          table,
        })),
    ...rest,
  };

  const onSelectionChange = row
    ? getMTT_RowSelectionHandler({
        renderedRowIndex,
        row,
        table,
      })
    : undefined;

  const onSelectAllChange = getMTT_SelectAllHandler({ table });

  const commonProps = {
    "aria-label": selectAll
      ? localization.toggleSelectAll
      : localization.toggleSelectRow,
    checked: isChecked,
    disabled:
      isLoading || (row && !row.getCanSelect()) || row?.id === "mtt-row-create",
    onChange: (event) => {
      event.stopPropagation();
      if (selectAll) {
        onSelectAllChange(event);
      } else {
        onSelectionChange!(event);
      }
    },
    size: density === "xs" ? "sm" : "md",
    ...checkboxProps,
    onClick: (e: MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      checkboxProps?.onClick?.(e);
    },
    title: undefined,
  } as CheckboxProps & RadioProps & SwitchProps;

  return (
    <Tooltip
      label={
        checkboxProps?.title ??
        (selectAll
          ? localization.toggleSelectAll
          : localization.toggleSelectRow)
      }
      openDelay={1000}
      withinPortal
    >
      <span>
        {selectDisplayMode === "switch" ? (
          <Switch {...commonProps} />
        ) : selectDisplayMode === "radio" ||
          enableMultiRowSelection === false ? (
          <Radio {...commonProps} />
        ) : (
          <Checkbox
            indeterminate={
              !isChecked && selectAll
                ? table.getIsSomeRowsSelected()
                : row?.getIsSomeSelected() && row.getCanSelectSubRows()
            }
            {...commonProps}
          />
        )}
      </span>
    </Tooltip>
  );
};
