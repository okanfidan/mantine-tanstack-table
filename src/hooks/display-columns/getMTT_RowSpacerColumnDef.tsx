import { MTT_DefaultDisplayColumn } from "../useMTT_TableOptions";

import {
  type MTT_ColumnDef,
  type MTT_RowData,
  type MTT_StatefulTableOptions,
} from "../../types";
import { defaultDisplayColumnProps } from "../../utils/displayColumn.utils";

const blankColProps = {
  children: null,
  style: {
    minWidth: 0,
    padding: 0,
    width: 0,
  },
};

export const getMTT_RowSpacerColumnDef = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): MTT_ColumnDef<TData> | null => {
  return {
    ...defaultDisplayColumnProps({
      id: "mtt-row-spacer",
      size: 0,
      tableOptions,
    }),
    grow: true,
    ...MTT_DefaultDisplayColumn,
    mantineTableBodyCellProps: blankColProps,
    mantineTableFooterCellProps: blankColProps,
    mantineTableHeadCellProps: blankColProps,
  };
};
