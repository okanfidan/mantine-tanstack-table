import {
  type MTT_ColumnDef,
  type MTT_RowData,
  type MTT_StatefulTableOptions,
} from "../../types";
import { defaultDisplayColumnProps } from "../../utils/displayColumn.utils";

export const getMTT_RowNumbersColumnDef = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): MTT_ColumnDef<TData> | null => {
  const { localization, rowNumberDisplayMode } = tableOptions;
  const {
    pagination: { pageIndex, pageSize },
  } = tableOptions.state;

  return {
    Cell: ({ renderedRowIndex = 0, row }) =>
      ((rowNumberDisplayMode === "static"
        ? renderedRowIndex + pageSize * pageIndex
        : row.index) ?? 0) + 1,
    grow: false,
    Header: () => localization.rowNumber,
    ...defaultDisplayColumnProps({
      header: "rowNumbers",
      id: "mtt-row-numbers",
      size: 50,
      tableOptions,
    }),
  };
};
