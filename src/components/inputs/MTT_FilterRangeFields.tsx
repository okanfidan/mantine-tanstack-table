import clsx from "clsx";

import classes from "./MTT_FilterRangeFields.module.css";

import { Box, type BoxProps } from "@mantine/core";

import { MTT_FilterTextInput } from "./MTT_FilterTextInput";

import {
  type MTT_Header,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";

interface Props<TData extends MTT_RowData> extends BoxProps {
  header: MTT_Header<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_FilterRangeFields = <TData extends MTT_RowData>({
  header,
  table,
  ...rest
}: Props<TData>) => {
  return (
    <Box
      {...rest}
      className={clsx("mtt-filter-range-fields", classes.root, rest.className)}
    >
      <MTT_FilterTextInput header={header} rangeFilterIndex={0} table={table} />
      <MTT_FilterTextInput header={header} rangeFilterIndex={1} table={table} />
    </Box>
  );
};
