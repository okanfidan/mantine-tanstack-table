import { type FocusEvent, type KeyboardEvent, useState } from "react";

import {
  MultiSelect,
  type MultiSelectProps,
  Select,
  type SelectProps,
  TextInput,
  type TextInputProps,
} from "@mantine/core";

import {
  type HTMLPropsRef,
  type MTT_Cell,
  type MTT_CellValue,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { assignRef, parseFromValuesOrFunc } from "../../utils/utils";

interface PropsTextInput<
  TData extends MTT_RowData,
  TValue = MTT_CellValue,
> extends TextInputProps {
  cell: MTT_Cell<TData, TValue>;
  table: MTT_TableInstance<TData>;
}

interface PropsSelect<
  TData extends MTT_RowData,
  TValue = MTT_CellValue,
> extends SelectProps {
  cell: MTT_Cell<TData, TValue>;
  table: MTT_TableInstance<TData>;
}

interface PropsMultiSelect<
  TData extends MTT_RowData,
  TValue = MTT_CellValue,
> extends MultiSelectProps {
  cell: MTT_Cell<TData, TValue>;
  table: MTT_TableInstance<TData>;
}

type MTT_TextInputProps = HTMLPropsRef<HTMLInputElement> & TextInputProps;
type MTT_SelectProps = HTMLPropsRef<HTMLInputElement> & SelectProps;
type MTT_MultiSelectProps = HTMLPropsRef<HTMLInputElement> & MultiSelectProps;

export const MTT_EditCellTextInput = <TData extends MTT_RowData>({
  cell,
  table,
  ...rest
}: PropsMultiSelect<TData> | PropsSelect<TData> | PropsTextInput<TData>) => {
  const {
    getState,
    options: {
      createDisplayMode,
      editDisplayMode,
      mantineEditSelectProps,
      mantineEditTextInputProps,
    },
    refs: { editInputRefs },
    setCreatingRow,
    setEditingCell,
    setEditingRow,
  } = table;
  const { column, row } = cell;
  const { columnDef } = column;
  const { creatingRow, editingRow } = getState();

  const isCreating = creatingRow?.id === row.id;
  const isEditing = editingRow?.id === row.id;
  const isSelectEdit = columnDef.editVariant === "select";
  const isMultiSelectEdit = columnDef.editVariant === "multi-select";

  const [value, setValue] = useState(() => cell.getValue<any>());

  const arg = { cell, column, row, table };
  const textInputProps = {
    ...parseFromValuesOrFunc(mantineEditTextInputProps, arg),
    ...parseFromValuesOrFunc(columnDef.mantineEditTextInputProps, arg),
    ...rest,
  } as MTT_TextInputProps;

  const selectProps = {
    ...parseFromValuesOrFunc(mantineEditSelectProps, arg),
    ...parseFromValuesOrFunc(columnDef.mantineEditSelectProps, arg),
    ...rest,
  };

  const saveInputValueToRowCache = (newValue: null | string) => {
    //@ts-ignore
    row._valuesCache[column.id] = newValue;
    if (isCreating) {
      setCreatingRow(row);
    } else if (isEditing) {
      setEditingRow(row);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    textInputProps.onBlur?.(event);
    saveInputValueToRowCache(value);
    setEditingCell(null);
  };

  const handleEnterKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    textInputProps.onKeyDown?.(event);
    if (event.key === "Enter") {
      editInputRefs.current[cell.id]?.blur();
    }
  };

  if (columnDef.Edit) {
    return columnDef.Edit?.({ cell, column, row, table });
  }

  const commonProps = {
    disabled: parseFromValuesOrFunc(columnDef.enableEditing, row) === false,
    label: ["custom", "modal"].includes(
      (isCreating ? createDisplayMode : editDisplayMode) as string,
    )
      ? column.columnDef.header
      : undefined,
    name: cell.id,
    onClick: (e: any) => {
      e.stopPropagation();
      textInputProps?.onClick?.(e);
    },
    placeholder: !["custom", "modal"].includes(
      (isCreating ? createDisplayMode : editDisplayMode) as string,
    )
      ? columnDef.header
      : undefined,
    value,
    variant: editDisplayMode === "table" ? "unstyled" : "default",
  } as const;

  if (isSelectEdit) {
    return (
      <Select
        {...commonProps}
        searchable
        value={value as any}
        {...(selectProps as MTT_SelectProps)}
        onBlur={handleBlur}
        onChange={(value, option) => {
          (selectProps as MTT_SelectProps).onChange?.(value as any, option);
          setValue(value);
        }}
        onClick={(e) => {
          e.stopPropagation();
          selectProps?.onClick?.(e);
        }}
        ref={(node) => {
          if (node) {
            editInputRefs.current[cell.id] = node;
            assignRef(selectProps.ref, node);
          }
        }}
      />
    );
  }

  if (isMultiSelectEdit) {
    return (
      <MultiSelect
        {...commonProps}
        searchable
        value={value}
        {...(selectProps as MTT_MultiSelectProps)}
        onBlur={handleBlur}
        onChange={(newValue) => {
          (selectProps as MTT_MultiSelectProps).onChange?.(value as any);
          setValue(newValue);
          // Save if not in focus, otherwise it will be handled by onBlur
          if (document.activeElement === editInputRefs.current[cell.id]) return;
          saveInputValueToRowCache(newValue as any);
        }}
        onClick={(e) => {
          e.stopPropagation();
          selectProps?.onClick?.(e);
        }}
        ref={(node) => {
          if (node) {
            editInputRefs.current[cell.id] = node;
            assignRef(selectProps.ref, node);
          }
        }}
      />
    );
  }

  return (
    <TextInput
      {...commonProps}
      onKeyDown={handleEnterKeyDown}
      value={value ?? ""}
      {...textInputProps}
      onBlur={handleBlur}
      onChange={(event) => {
        textInputProps.onChange?.(event);
        setValue(event.target.value);
      }}
      onClick={(event) => {
        event.stopPropagation();
        textInputProps?.onClick?.(event);
      }}
      ref={(node) => {
        if (node) {
          editInputRefs.current[cell.id] = node;
          assignRef(textInputProps.ref, node);
        }
      }}
    />
  );
};
