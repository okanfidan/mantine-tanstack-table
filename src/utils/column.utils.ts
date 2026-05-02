import { type Row } from "@tanstack/react-table";

import {
  type MTT_Column,
  type MTT_ColumnDef,
  type MTT_ColumnOrderState,
  type MTT_DefinedColumnDef,
  type MTT_DefinedTableOptions,
  type MTT_FilterOption,
  type MTT_RowData,
} from "../types";

export const getColumnId = <TData extends MTT_RowData>(
  columnDef: MTT_ColumnDef<TData>,
): string =>
  columnDef.id ?? columnDef.accessorKey?.toString?.() ?? columnDef.header;

export const getAllLeafColumnDefs = <TData extends MTT_RowData>(
  columns: MTT_ColumnDef<TData>[],
): MTT_ColumnDef<TData>[] => {
  const allLeafColumnDefs: MTT_ColumnDef<TData>[] = [];
  const getLeafColumns = (cols: MTT_ColumnDef<TData>[]) => {
    cols.forEach((col) => {
      if (col.columns) {
        getLeafColumns(col.columns);
      } else {
        allLeafColumnDefs.push(col);
      }
    });
  };
  getLeafColumns(columns);
  return allLeafColumnDefs;
};

export const prepareColumns = <TData extends MTT_RowData>({
  columnDefs,
  tableOptions,
}: {
  columnDefs: MTT_ColumnDef<TData>[];
  tableOptions: MTT_DefinedTableOptions<TData>;
}): MTT_DefinedColumnDef<TData>[] => {
  const {
    aggregationFns = {},
    defaultDisplayColumn,
    filterFns = {},
    sortingFns = {},
    state: { columnFilterFns = {} } = {},
  } = tableOptions;
  return columnDefs.map((columnDef) => {
    //assign columnId
    if (!columnDef.id) columnDef.id = getColumnId(columnDef);
    //assign columnDefType
    if (!columnDef.columnDefType) columnDef.columnDefType = "data";
    if (columnDef.columns?.length) {
      columnDef.columnDefType = "group";
      //recursively prepare columns if this is a group column
      columnDef.columns = prepareColumns({
        columnDefs: columnDef.columns,
        tableOptions,
      });
    } else if (columnDef.columnDefType === "data") {
      //assign aggregationFns if multiple aggregationFns are provided
      if (Array.isArray(columnDef.aggregationFn)) {
        const aggFns = columnDef.aggregationFn as string[];
        columnDef.aggregationFn = (
          columnId: string,
          leafRows: Row<TData>[],
          childRows: Row<TData>[],
        ) =>
          aggFns.map((fn) =>
            aggregationFns[fn]?.(columnId, leafRows, childRows),
          );
      }

      //assign filterFns
      if (Object.keys(filterFns).includes(columnFilterFns[columnDef.id])) {
        columnDef.filterFn =
          filterFns[columnFilterFns[columnDef.id]] ?? filterFns.fuzzy;
        (columnDef as MTT_DefinedColumnDef<TData>)._filterFn =
          columnFilterFns[columnDef.id];
      }

      //assign sortingFns
      if (Object.keys(sortingFns).includes(columnDef.sortingFn as string)) {
        // @ts-ignore
        columnDef.sortingFn = sortingFns[columnDef.sortingFn];
      }
    } else if (columnDef.columnDefType === "display") {
      columnDef = {
        ...(defaultDisplayColumn as MTT_ColumnDef<TData>),
        ...columnDef,
      };
    }
    return columnDef;
  }) as MTT_DefinedColumnDef<TData>[];
};

export const reorderColumn = <TData extends MTT_RowData>(
  draggedColumn: MTT_Column<TData>,
  targetColumn: MTT_Column<TData>,
  columnOrder: MTT_ColumnOrderState,
): MTT_ColumnOrderState => {
  if (draggedColumn.getCanPin()) {
    draggedColumn.pin(targetColumn.getIsPinned());
  }
  const newColumnOrder = [...columnOrder];
  newColumnOrder.splice(
    newColumnOrder.indexOf(targetColumn.id),
    0,
    newColumnOrder.splice(newColumnOrder.indexOf(draggedColumn.id), 1)[0],
  );
  return newColumnOrder;
};

export const getDefaultColumnFilterFn = <TData extends MTT_RowData>(
  columnDef: MTT_ColumnDef<TData>,
): MTT_FilterOption => {
  const { filterVariant } = columnDef;
  if (filterVariant === "multi-select") return "arrIncludesSome";
  if (filterVariant?.includes("range")) return "betweenInclusive";
  if (["checkbox", "date", "select"].includes(filterVariant || ""))
    return "equals";
  return "fuzzy";
};
