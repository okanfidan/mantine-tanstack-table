import { MTT_SelectCheckbox } from "../../components/inputs/MTT_SelectCheckbox";
import {
  type MTT_ColumnDef,
  type MTT_RowData,
  type MTT_StatefulTableOptions,
} from "../../types";
import { defaultDisplayColumnProps } from "../../utils/displayColumn.utils";

export const getMTT_RowSelectColumnDef = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): MTT_ColumnDef<TData> | null => {
  const { enableMultiRowSelection, enableSelectAll } = tableOptions;

  return {
    Cell: ({ renderedRowIndex, row, table }) => (
      <MTT_SelectCheckbox
        renderedRowIndex={renderedRowIndex}
        row={row}
        table={table}
      />
    ),
    grow: false,
    Header:
      enableSelectAll && enableMultiRowSelection
        ? ({ table }) => <MTT_SelectCheckbox table={table} />
        : undefined,
    ...defaultDisplayColumnProps({
      header: "select",
      id: "mtt-row-select",
      size: enableSelectAll ? 60 : 70,
      tableOptions,
    }),
  };
};
