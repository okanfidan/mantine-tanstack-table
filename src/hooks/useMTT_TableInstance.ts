import { useMemo, useRef, useState } from "react";

import { useReactTable } from "@tanstack/react-table";

import {
  type MTT_Cell,
  type MTT_Column,
  type MTT_ColumnDef,
  type MTT_ColumnFilterFnsState,
  type MTT_ColumnOrderState,
  type MTT_ColumnSizingInfoState,
  type MTT_DefinedTableOptions,
  type MTT_DensityState,
  type MTT_FilterOption,
  type MTT_GroupingState,
  type MTT_PaginationState,
  type MTT_Row,
  type MTT_RowData,
  type MTT_StatefulTableOptions,
  type MTT_TableInstance,
  type MTT_TableState,
  type MTT_Updater,
} from "../types";
import {
  getAllLeafColumnDefs,
  getColumnId,
  getDefaultColumnFilterFn,
  prepareColumns,
} from "../utils/column.utils";
import {
  getDefaultColumnOrderIds,
  showRowActionsColumn,
  showRowDragColumn,
  showRowExpandColumn,
  showRowNumbersColumn,
  showRowPinningColumn,
  showRowSelectionColumn,
  showRowSpacerColumn,
} from "../utils/displayColumn.utils";
import { createRow } from "../utils/tanstack.helpers";
import { getMTT_RowActionsColumnDef } from "./display-columns/getMTT_RowActionsColumnDef";
import { getMTT_RowDragColumnDef } from "./display-columns/getMTT_RowDragColumnDef";
import { getMTT_RowExpandColumnDef } from "./display-columns/getMTT_RowExpandColumnDef";
import { getMTT_RowNumbersColumnDef } from "./display-columns/getMTT_RowNumbersColumnDef";
import { getMTT_RowPinningColumnDef } from "./display-columns/getMTT_RowPinningColumnDef";
import { getMTT_RowSelectColumnDef } from "./display-columns/getMTT_RowSelectColumnDef";
import { getMTT_RowSpacerColumnDef } from "./display-columns/getMTT_RowSpacerColumnDef";
import { useMTT_Effects } from "./useMTT_Effects";

/**
 * The MTT hook that wraps the TanStack useReactTable hook and adds additional functionality
 * @param definedTableOptions - table options with proper defaults set
 * @returns the MTT table instance
 */
export const useMTT_TableInstance = <TData extends MTT_RowData>(
  definedTableOptions: MTT_DefinedTableOptions<TData>,
): MTT_TableInstance<TData> => {
  const lastSelectedRowId = useRef<null | string>(null);
  const bottomToolbarRef = useRef<HTMLDivElement>(null);
  const editInputRefs = useRef<Record<string, HTMLInputElement>>({});
  const filterInputRefs = useRef<Record<string, HTMLInputElement>>({});
  const searchInputRef = useRef<HTMLInputElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const tableHeadCellRefs = useRef<Record<string, HTMLTableCellElement>>({});
  const tablePaperRef = useRef<HTMLDivElement>(null);
  const topToolbarRef = useRef<HTMLDivElement>(null);
  const tableHeadRef = useRef<HTMLTableSectionElement>(null);
  const tableFooterRef = useRef<HTMLTableSectionElement>(null);

  //transform initial state with proper column order
  const initialState: Partial<MTT_TableState<TData>> = useMemo(() => {
    const initState = definedTableOptions.initialState ?? {};
    initState.columnOrder =
      initState.columnOrder ??
      getDefaultColumnOrderIds({
        ...definedTableOptions,
        state: {
          ...definedTableOptions.initialState,
          ...definedTableOptions.state,
        },
      } as MTT_StatefulTableOptions<TData>);
    initState.globalFilterFn = definedTableOptions.globalFilterFn ?? "fuzzy";
    return initState;
  }, []);

  definedTableOptions.initialState = initialState;

  const [creatingRow, _setCreatingRow] = useState<MTT_Row<TData> | null>(
    initialState.creatingRow ?? null,
  );
  const [columnFilterFns, setColumnFilterFns] =
    useState<MTT_ColumnFilterFnsState>(() =>
      Object.assign(
        {},
        ...getAllLeafColumnDefs(
          definedTableOptions.columns as MTT_ColumnDef<TData>[],
        ).map((col) => ({
          [getColumnId(col)]:
            col.filterFn instanceof Function
              ? (col.filterFn.name ?? "custom")
              : (col.filterFn ??
                initialState?.columnFilterFns?.[getColumnId(col)] ??
                getDefaultColumnFilterFn(col)),
        })),
      ),
    );
  const [columnOrder, onColumnOrderChange] = useState<MTT_ColumnOrderState>(
    initialState.columnOrder ?? [],
  );
  const [columnSizingInfo, onColumnSizingInfoChange] =
    useState<MTT_ColumnSizingInfoState>(
      initialState.columnSizingInfo ?? ({} as MTT_ColumnSizingInfoState),
    );
  const [density, setDensity] = useState<MTT_DensityState>(
    initialState?.density ?? "md",
  );
  const [draggingColumn, setDraggingColumn] =
    useState<MTT_Column<TData> | null>(initialState.draggingColumn ?? null);
  const [draggingRow, setDraggingRow] = useState<MTT_Row<TData> | null>(
    initialState.draggingRow ?? null,
  );
  const [editingCell, setEditingCell] = useState<MTT_Cell<TData> | null>(
    initialState.editingCell ?? null,
  );
  const [editingRow, setEditingRow] = useState<MTT_Row<TData> | null>(
    initialState.editingRow ?? null,
  );
  const [globalFilterFn, setGlobalFilterFn] = useState<MTT_FilterOption>(
    initialState.globalFilterFn ?? "fuzzy",
  );
  const [grouping, onGroupingChange] = useState<MTT_GroupingState>(
    initialState.grouping ?? [],
  );
  const [hoveredColumn, setHoveredColumn] = useState<null | Partial<
    MTT_Column<TData>
  >>(initialState.hoveredColumn ?? null);
  const [hoveredRow, setHoveredRow] = useState<null | Partial<MTT_Row<TData>>>(
    initialState.hoveredRow ?? null,
  );
  const [isFullScreen, setIsFullScreen] = useState<boolean>(
    initialState?.isFullScreen ?? false,
  );
  const [pagination, onPaginationChange] = useState<MTT_PaginationState>(
    initialState?.pagination ?? { pageIndex: 0, pageSize: 10 },
  );
  const [showAlertBanner, setShowAlertBanner] = useState<boolean>(
    initialState?.showAlertBanner ?? false,
  );
  const [showColumnFilters, setShowColumnFilters] = useState<boolean>(
    initialState?.showColumnFilters ?? false,
  );
  const [showGlobalFilter, setShowGlobalFilter] = useState<boolean>(
    initialState?.showGlobalFilter ?? false,
  );
  const [showToolbarDropZone, setShowToolbarDropZone] = useState<boolean>(
    initialState?.showToolbarDropZone ?? false,
  );

  definedTableOptions.state = {
    columnFilterFns,
    columnOrder,
    columnSizingInfo,
    creatingRow,
    density,
    draggingColumn,
    draggingRow,
    editingCell,
    editingRow,
    globalFilterFn,
    grouping,
    hoveredColumn,
    hoveredRow,
    isFullScreen,
    pagination,
    showAlertBanner,
    showColumnFilters,
    showGlobalFilter,
    showToolbarDropZone,
    ...definedTableOptions.state,
  };

  //The table options now include all state needed to help determine column visibility and order logic
  const statefulTableOptions =
    definedTableOptions as MTT_StatefulTableOptions<TData>;

  //don't recompute columnDefs while resizing column or dragging column/row
  const columnDefsRef = useRef<MTT_ColumnDef<TData>[]>([]);
  statefulTableOptions.columns =
    statefulTableOptions.state.columnSizingInfo.isResizingColumn ||
    statefulTableOptions.state.draggingColumn ||
    statefulTableOptions.state.draggingRow
      ? columnDefsRef.current
      : prepareColumns({
          columnDefs: [
            ...([
              showRowPinningColumn(statefulTableOptions) &&
                getMTT_RowPinningColumnDef(statefulTableOptions),
              showRowDragColumn(statefulTableOptions) &&
                getMTT_RowDragColumnDef(statefulTableOptions),
              showRowActionsColumn(statefulTableOptions) &&
                getMTT_RowActionsColumnDef(statefulTableOptions),
              showRowExpandColumn(statefulTableOptions) &&
                getMTT_RowExpandColumnDef(statefulTableOptions),
              showRowSelectionColumn(statefulTableOptions) &&
                getMTT_RowSelectColumnDef(statefulTableOptions),
              showRowNumbersColumn(statefulTableOptions) &&
                getMTT_RowNumbersColumnDef(statefulTableOptions),
            ].filter(Boolean) as MTT_ColumnDef<TData>[]),
            ...statefulTableOptions.columns,
            ...([
              showRowSpacerColumn(statefulTableOptions) &&
                getMTT_RowSpacerColumnDef(statefulTableOptions),
            ].filter(Boolean) as MTT_ColumnDef<TData>[]),
          ],
          tableOptions: statefulTableOptions,
        });
  columnDefsRef.current = statefulTableOptions.columns;

  //if loading, generate blank rows to show skeleton loaders
  statefulTableOptions.data = useMemo(
    () =>
      (statefulTableOptions.state.isLoading ||
        statefulTableOptions.state.showSkeletons) &&
      !statefulTableOptions.data.length
        ? [
            ...Array(
              Math.min(statefulTableOptions.state.pagination.pageSize, 20),
            ).fill(null),
          ].map(() =>
            Object.assign(
              {},
              ...getAllLeafColumnDefs(statefulTableOptions.columns).map(
                (col) => ({
                  [getColumnId(col)]: null,
                }),
              ),
            ),
          )
        : statefulTableOptions.data,
    [
      statefulTableOptions.data,
      statefulTableOptions.state.isLoading,
      statefulTableOptions.state.showSkeletons,
    ],
  );

  //@ts-ignore
  const table = useReactTable({
    onColumnOrderChange,
    onColumnSizingInfoChange,
    onGroupingChange,
    onPaginationChange,
    ...statefulTableOptions,
    globalFilterFn: statefulTableOptions.filterFns?.[globalFilterFn ?? "fuzzy"],
  }) as MTT_TableInstance<TData>;

  table.refs = {
    bottomToolbarRef,
    editInputRefs,
    filterInputRefs,
    lastSelectedRowId,
    searchInputRef,
    tableContainerRef,
    tableFooterRef,
    tableHeadCellRefs,
    tableHeadRef,
    tablePaperRef,
    topToolbarRef,
  };

  table.setCreatingRow = (row: MTT_Updater<MTT_Row<TData> | null | true>) => {
    let _row = row;
    if (row === true) {
      _row = createRow(table);
    }
    if (statefulTableOptions?.onCreatingRowChange) {
      statefulTableOptions.onCreatingRowChange(_row as MTT_Row<TData> | null);
    } else {
      _setCreatingRow(_row as MTT_Row<TData> | null);
    }
  };
  table.setColumnFilterFns =
    statefulTableOptions.onColumnFilterFnsChange ?? setColumnFilterFns;
  table.setDensity = statefulTableOptions.onDensityChange ?? setDensity;
  table.setDraggingColumn =
    statefulTableOptions.onDraggingColumnChange ?? setDraggingColumn;
  table.setDraggingRow =
    statefulTableOptions.onDraggingRowChange ?? setDraggingRow;
  table.setEditingCell =
    statefulTableOptions.onEditingCellChange ?? setEditingCell;
  table.setEditingRow =
    statefulTableOptions.onEditingRowChange ?? setEditingRow;
  table.setGlobalFilterFn =
    statefulTableOptions.onGlobalFilterFnChange ?? setGlobalFilterFn;
  table.setHoveredColumn =
    statefulTableOptions.onHoveredColumnChange ?? setHoveredColumn;
  table.setHoveredRow =
    statefulTableOptions.onHoveredRowChange ?? setHoveredRow;
  table.setIsFullScreen =
    statefulTableOptions.onIsFullScreenChange ?? setIsFullScreen;
  table.setShowAlertBanner =
    statefulTableOptions.onShowAlertBannerChange ?? setShowAlertBanner;
  table.setShowColumnFilters =
    statefulTableOptions.onShowColumnFiltersChange ?? setShowColumnFilters;
  table.setShowGlobalFilter =
    statefulTableOptions.onShowGlobalFilterChange ?? setShowGlobalFilter;
  table.setShowToolbarDropZone =
    statefulTableOptions.onShowToolbarDropZoneChange ?? setShowToolbarDropZone;

  useMTT_Effects(table);

  return table;
};
