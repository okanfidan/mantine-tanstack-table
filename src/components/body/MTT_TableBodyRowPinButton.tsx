import { type ActionIconProps, Box } from "@mantine/core";

import {
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_RowPinButton } from "../buttons/MTT_RowPinButton";

interface Props<TData extends MTT_RowData> extends ActionIconProps {
  row: MTT_Row<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_TableBodyRowPinButton = <TData extends MTT_RowData>({
  row,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { enableRowPinning, rowPinningDisplayMode },
  } = table;
  const { density } = getState();

  const canPin = parseFromValuesOrFunc(enableRowPinning, row as any);

  if (!canPin) return null;

  const rowPinButtonProps = {
    row,
    table,
    ...rest,
  };

  if (rowPinningDisplayMode === "top-and-bottom" && !row.getIsPinned()) {
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: density === "xs" ? "row" : "column",
        }}
      >
        <MTT_RowPinButton pinningPosition="top" {...rowPinButtonProps} />
        <MTT_RowPinButton pinningPosition="bottom" {...rowPinButtonProps} />
      </Box>
    );
  }

  return (
    <MTT_RowPinButton
      pinningPosition={rowPinningDisplayMode === "bottom" ? "bottom" : "top"}
      {...rowPinButtonProps}
    />
  );
};
