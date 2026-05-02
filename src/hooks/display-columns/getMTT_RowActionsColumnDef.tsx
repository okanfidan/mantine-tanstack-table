import { MTT_ToggleRowActionMenuButton } from "../../components/buttons/MTT_ToggleRowActionMenuButton";
import {
  type MTT_ColumnDef,
  type MTT_RowData,
  type MTT_StatefulTableOptions,
} from "../../types";
import { defaultDisplayColumnProps } from "../../utils/displayColumn.utils";

export const getMTT_RowActionsColumnDef = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): MTT_ColumnDef<TData> | null => {
  return {
    Cell: ({ cell, row, table }) => (
      <MTT_ToggleRowActionMenuButton cell={cell} row={row} table={table} />
    ),
    ...defaultDisplayColumnProps({
      header: "actions",
      id: "mtt-row-actions",
      size: 70,
      tableOptions,
    }),
  };
};
