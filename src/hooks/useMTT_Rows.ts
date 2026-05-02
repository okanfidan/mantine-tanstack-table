import { useMemo } from "react";

import {
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../types";
import { getMTT_Rows } from "../utils/row.utils";

export const useMTT_Rows = <TData extends MTT_RowData>(
  table: MTT_TableInstance<TData>,
): MTT_Row<TData>[] => {
  const {
    getRowModel,
    getState,
    options: { data, enableGlobalFilterRankedResults, positionCreatingRow },
  } = table;
  const {
    creatingRow,
    expanded,
    globalFilter,
    pagination,
    rowPinning,
    sorting,
  } = getState();

  const rows = useMemo(
    () => getMTT_Rows(table),
    [
      creatingRow,
      data,
      enableGlobalFilterRankedResults,
      expanded,
      getRowModel().rows,
      globalFilter,
      pagination.pageIndex,
      pagination.pageSize,
      positionCreatingRow,
      rowPinning,
      sorting,
    ],
  );

  return rows;
};
