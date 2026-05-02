import { type RefObject } from "react";

import { MTT_TableBodyRowGrabHandle } from "../../components/body/MTT_TableBodyRowGrabHandle";
import {
  type MTT_ColumnDef,
  type MTT_RowData,
  type MTT_StatefulTableOptions,
} from "../../types";
import { defaultDisplayColumnProps } from "../../utils/displayColumn.utils";

export const getMTT_RowDragColumnDef = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): MTT_ColumnDef<TData> | null => {
  return {
    Cell: ({ row, rowRef, table }) => (
      <MTT_TableBodyRowGrabHandle
        row={row}
        rowRef={rowRef as RefObject<HTMLTableRowElement>}
        table={table}
      />
    ),
    grow: false,
    ...defaultDisplayColumnProps({
      header: "move",
      id: "mtt-row-drag",
      size: 60,
      tableOptions,
    }),
  };
};
