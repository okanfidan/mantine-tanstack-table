import clsx from "clsx";

import classes from "./MTT_GlobalFilterTextInput.module.css";

import { useEffect, useRef, useState } from "react";

import {
  ActionIcon,
  Collapse,
  Menu,
  TextInput,
  type TextInputProps,
  Tooltip,
} from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";

import { type MTT_RowData, type MTT_TableInstance } from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_FilterOptionMenu } from "../menus/MTT_FilterOptionMenu";

interface Props<TData extends MTT_RowData> extends TextInputProps {
  table: MTT_TableInstance<TData>;
}

export const MTT_GlobalFilterTextInput = <TData extends MTT_RowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enableGlobalFilterModes,
      icons: { IconSearch, IconX },
      localization,
      mantineSearchTextInputProps,
      manualFiltering,
      positionGlobalFilter,
    },
    refs: { searchInputRef },
    setGlobalFilter,
  } = table;
  const { globalFilter, showGlobalFilter } = getState();

  const textFieldProps = {
    ...parseFromValuesOrFunc(mantineSearchTextInputProps, {
      table,
    }),
    ...rest,
  };

  const isMounted = useRef(false);
  const [searchValue, setSearchValue] = useState(globalFilter ?? "");

  const [debouncedSearchValue] = useDebouncedValue(
    searchValue,
    manualFiltering ? 500 : 250,
  );

  useEffect(() => {
    setGlobalFilter(debouncedSearchValue || undefined);
  }, [debouncedSearchValue]);

  const handleClear = () => {
    setSearchValue("");
    setGlobalFilter(undefined);
  };

  useEffect(() => {
    if (isMounted.current) {
      if (globalFilter === undefined) {
        handleClear();
      } else {
        setSearchValue(globalFilter);
      }
    }
    isMounted.current = true;
  }, [globalFilter]);

  return (
    <Collapse className={classes.collapse} expanded={showGlobalFilter}>
      {enableGlobalFilterModes && (
        <Menu withinPortal>
          <Menu.Target>
            <ActionIcon
              aria-label={localization.changeSearchMode}
              color="gray"
              size="sm"
              variant="transparent"
            >
              <IconSearch />
            </ActionIcon>
          </Menu.Target>
          <MTT_FilterOptionMenu onSelect={handleClear} table={table} />
        </Menu>
      )}
      <TextInput
        leftSection={!enableGlobalFilterModes && <IconSearch />}
        mt={0}
        mx={positionGlobalFilter !== "left" ? "mx" : undefined}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder={localization.search}
        rightSection={
          <ActionIcon
            aria-label={localization.clearSearch}
            color="gray"
            disabled={!searchValue?.length}
            hidden={!searchValue}
            onClick={handleClear}
            size="sm"
            style={{
              visibility: !searchValue ? "hidden" : undefined,
            }}
            variant="transparent"
          >
            <Tooltip label={localization.clearSearch} withinPortal>
              <IconX />
            </Tooltip>
          </ActionIcon>
        }
        value={searchValue ?? ""}
        variant="filled"
        {...textFieldProps}
        className={clsx(
          "mtt-global-filter-text-input",
          classes.root,
          textFieldProps?.className,
        )}
        ref={(node) => {
          if (node) {
            searchInputRef.current = node;
            if (textFieldProps?.ref) {
              // @ts-ignore
              textFieldProps.ref = node;
            }
          }
        }}
      />
    </Collapse>
  );
};
