import { type ReactElement, type ReactNode } from "react";

import {
  createRow as _createRow,
  flexRender as _flexRender,
  type Renderable,
} from "@tanstack/react-table";

import {
  type MTT_ColumnHelper,
  type MTT_DisplayColumnDef,
  type MTT_GroupColumnDef,
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../types";
import { getAllLeafColumnDefs, getColumnId } from "./column.utils";

export const flexRender = _flexRender as (
  Comp: Renderable<any>,
  props: any,
) => ReactElement | ReactNode;

export function createMTTColumnHelper<
  TData extends MTT_RowData,
>(): MTT_ColumnHelper<TData> {
  return {
    accessor: (accessor, column) => {
      return typeof accessor === "function"
        ? ({
            ...column,
            accessorFn: accessor,
          } as any)
        : {
            ...column,
            accessorKey: accessor,
          };
    },
    display: (column) => column as MTT_DisplayColumnDef<TData>,
    group: (column) => column as MTT_GroupColumnDef<TData>,
  };
}

export const createRow = <TData extends MTT_RowData>(
  table: MTT_TableInstance<TData>,
  originalRow?: TData,
  rowIndex = -1,
  depth = 0,
  subRows?: MTT_Row<TData>[],
  parentId?: string,
): MTT_Row<TData> =>
  _createRow(
    table as any,
    "mtt-row-create",
    originalRow ??
      Object.assign(
        {},
        ...getAllLeafColumnDefs(table.options.columns).map((col) => ({
          [getColumnId(col)]: "",
        })),
      ),
    rowIndex,
    depth,
    subRows as any,
    parentId,
  ) as MTT_Row<TData>;
