import { MTT_TableBodyRowPinButton } from "../../components/body/MTT_TableBodyRowPinButton";
import {
  type MTT_ColumnDef,
  type MTT_RowData,
  type MTT_StatefulTableOptions,
} from "../../types";
import { defaultDisplayColumnProps } from "../../utils/displayColumn.utils";

export const getMTT_RowPinningColumnDef = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): MTT_ColumnDef<TData> | null => {
  return {
    Cell: ({ row, table }) => (
      <MTT_TableBodyRowPinButton row={row} table={table} />
    ),
    grow: false,
    ...defaultDisplayColumnProps({
      header: "pin",
      id: "mtt-row-pin",
      size: 60,
      tableOptions,
    }),
  };
};
