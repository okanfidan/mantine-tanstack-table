import {
  type Dispatch,
  type HTMLProps,
  type MutableRefObject,
  type ReactNode,
  type RefObject,
  type SetStateAction,
} from "react";

import {
  type AccessorFn,
  type AggregationFn,
  type Cell,
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnOrderState,
  type ColumnPinningState,
  type ColumnSizingInfoState,
  type ColumnSizingState,
  type DeepKeys,
  type DeepValue,
  type ExpandedState,
  type FilterFn,
  type GroupingState,
  type Header,
  type HeaderGroup,
  type OnChangeFn,
  type PaginationState,
  type Row,
  type RowSelectionState,
  type SortingFn,
  type SortingState,
  type Table,
  type TableOptions,
  type TableState,
  type Updater,
  type VisibilityState,
} from "@tanstack/react-table";
import {
  type VirtualItem,
  type Virtualizer,
  type VirtualizerOptions,
} from "@tanstack/react-virtual";

import {
  type ActionIconProps,
  type AlertProps,
  type AutocompleteProps,
  type BadgeProps,
  type BoxProps,
  type CheckboxProps,
  type HighlightProps,
  type LoadingOverlayProps,
  type ModalProps,
  type MultiSelectProps,
  type PaginationProps,
  type PaperProps,
  type ProgressProps,
  type RadioProps,
  type RangeSliderProps,
  type SelectProps,
  type SkeletonProps,
  type SwitchProps,
  type TableProps,
  type TableTbodyProps,
  type TableTdProps,
  type TableTfootProps,
  type TableTheadProps,
  type TableThProps,
  type TableTrProps,
  type TextInputProps,
  type UnstyledButtonProps,
} from "@mantine/core";
import { type DateInputProps } from "@mantine/dates";

import { type MTT_AggregationFns } from "./fns/aggregationFns";
import { type MTT_FilterFns } from "./fns/filterFns";
import { type MTT_SortingFns } from "./fns/sortingFns";
import { type MTT_Icons } from "./icons";

export type { MTT_Icons };

export type LiteralUnion<T extends U, U = string> =
  | (Record<never, never> & U)
  | T;

export type Prettify<T> = { [K in keyof T]: T[K] } & unknown;

export type Xor<A, B> =
  | Prettify<{ [k in keyof A]?: never } & B>
  | Prettify<{ [k in keyof B]?: never } & A>;

export type HTMLPropsRef<T extends HTMLElement> = {
  ref?: MutableRefObject<null | T> | null;
} & Omit<
  HTMLProps<T>,
  "color" | "data" | "label" | "ref" | "size" | "style" | "type"
>;

export type MantineShade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type MTT_PaginationProps = {
  rowsPerPageOptions?: string[];
  showRowsPerPage?: boolean;
} & Partial<PaginationProps>;

export type MTT_DensityState = "lg" | "md" | "sm" | "xl" | "xs";

export type MTT_ColumnFilterFnsState = Record<string, MTT_FilterOption>;

export type MTT_RowData = Record<string, any>;

export type MTT_CellValue = unknown;

export type MTT_ColumnFiltersState = ColumnFiltersState;
export type MTT_ColumnOrderState = ColumnOrderState;
export type MTT_ColumnPinningState = ColumnPinningState;
export type MTT_ColumnSizingInfoState = ColumnSizingInfoState;
export type MTT_ColumnSizingState = ColumnSizingState;
export type MTT_ExpandedState = ExpandedState;
export type MTT_GroupingState = GroupingState;
export type MTT_PaginationState = PaginationState;
export type MTT_RowSelectionState = RowSelectionState;
export type MTT_SortingState = SortingState;
export type MTT_Updater<T> = Updater<T>;
export type MTT_VirtualItem = VirtualItem;
export type MTT_VisibilityState = VisibilityState;

export type MTT_VirtualizerOptions<
  TScrollElement extends Element | Window = Element | Window,
  TItemElement extends Element = Element,
> = VirtualizerOptions<TScrollElement, TItemElement>;

export type MTT_ColumnVirtualizer<
  TScrollElement extends Element | Window = HTMLDivElement,
  TItemElement extends Element = HTMLTableCellElement,
> = {
  virtualColumns: MTT_VirtualItem[];
  virtualPaddingLeft?: number;
  virtualPaddingRight?: number;
} & Virtualizer<TScrollElement, TItemElement>;

export type MTT_RowVirtualizer<
  TScrollElement extends Element | Window = HTMLDivElement,
  TItemElement extends Element = HTMLTableRowElement,
> = {
  virtualRows: MTT_VirtualItem[];
} & Virtualizer<TScrollElement, TItemElement>;

export type MTT_ColumnHelper<TData extends MTT_RowData> = {
  accessor: <
    TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
    TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
      ? TReturn
      : TAccessor extends DeepKeys<TData>
        ? DeepValue<TData, TAccessor>
        : never,
  >(
    accessor: TAccessor,
    column: MTT_DisplayColumnDef<TData, TValue>,
  ) => MTT_ColumnDef<TData, TValue>;
  display: (column: MTT_DisplayColumnDef<TData>) => MTT_ColumnDef<TData>;
  group: (column: MTT_GroupColumnDef<TData>) => MTT_ColumnDef<TData>;
};

export interface MTT_Localization {
  actions: string;
  and: string;
  cancel: string;
  changeFilterMode: string;
  changeSearchMode: string;
  clearFilter: string;
  clearSearch: string;
  clearSelection: string;
  clearSort: string;
  clickToCopy: string;
  collapse: string;
  collapseAll: string;
  columnActions: string;
  copiedToClipboard: string;
  copy: string;
  dropToGroupBy: string;
  edit: string;
  expand: string;
  expandAll: string;
  filterArrIncludes: string;
  filterArrIncludesAll: string;
  filterArrIncludesSome: string;
  filterBetween: string;
  filterBetweenInclusive: string;
  filterByColumn: string;
  filterContains: string;
  filterEmpty: string;
  filterEndsWith: string;
  filterEquals: string;
  filterEqualsString: string;
  filterFuzzy: string;
  filterGreaterThan: string;
  filterGreaterThanOrEqualTo: string;
  filterIncludesString: string;
  filterIncludesStringSensitive: string;
  filteringByColumn: string;
  filterInNumberRange: string;
  filterLessThan: string;
  filterLessThanOrEqualTo: string;
  filterMode: string;
  filterNotEmpty: string;
  filterNotEquals: string;
  filterStartsWith: string;
  filterWeakEquals: string;
  goToFirstPage: string;
  goToLastPage: string;
  goToNextPage: string;
  goToPreviousPage: string;
  grab: string;
  groupByColumn: string;
  groupedBy: string;
  hideAll: string;
  hideColumn: string;
  max: string;
  min: string;
  move: string;
  noRecordsToDisplay: string;
  noResultsFound: string;
  of: string;
  or: string;
  pin: string;
  pinToLeft: string;
  pinToRight: string;
  resetColumnSize: string;
  resetOrder: string;
  rowActions: string;
  rowNumber: string;
  rowNumbers: string;
  rowsPerPage: string;
  save: string;
  search: string;
  select: string;
  selectedCountOfRowCountRowsSelected: string;
  showAll: string;
  showAllColumns: string;
  showHideColumns: string;
  showHideFilters: string;
  showHideSearch: string;
  sortByColumnAsc: string;
  sortByColumnDesc: string;
  sortedByColumnAsc: string;
  sortedByColumnDesc: string;
  thenBy: string;
  toggleDensity: string;
  toggleFullScreen: string;
  toggleSelectAll: string;
  toggleSelectRow: string;
  toggleVisibility: string;
  ungroupByColumn: string;
  unpin: string;
  unpinAll: string;
}

export interface MTT_RowModel<TData extends MTT_RowData> {
  flatRows: MTT_Row<TData>[];
  rows: MTT_Row<TData>[];
  rowsById: { [key: string]: MTT_Row<TData> };
}

export type MTT_TableInstance<TData extends MTT_RowData> = {
  getAllColumns: () => MTT_Column<TData>[];
  getAllFlatColumns: () => MTT_Column<TData>[];
  getAllLeafColumns: () => MTT_Column<TData>[];
  getBottomRows: () => MTT_Row<TData>[];
  getCenterLeafColumns: () => MTT_Column<TData>[];
  getCenterRows: () => MTT_Row<TData>[];
  getColumn: (columnId: string) => MTT_Column<TData>;
  getExpandedRowModel: () => MTT_RowModel<TData>;
  getFilteredSelectedRowModel: () => MTT_RowModel<TData>;
  getFlatHeaders: () => MTT_Header<TData>[];
  getHeaderGroups: () => MTT_HeaderGroup<TData>[];
  getLeftLeafColumns: () => MTT_Column<TData>[];
  getPaginationRowModel: () => MTT_RowModel<TData>;
  getPreFilteredRowModel: () => MTT_RowModel<TData>;
  getPrePaginationRowModel: () => MTT_RowModel<TData>;
  getRightLeafColumns: () => MTT_Column<TData>[];
  getRowModel: () => MTT_RowModel<TData>;
  getSelectedRowModel: () => MTT_RowModel<TData>;
  getState: () => MTT_TableState<TData>;
  getTopRows: () => MTT_Row<TData>[];
  options: MTT_StatefulTableOptions<TData>;
  refs: {
    bottomToolbarRef: MutableRefObject<HTMLDivElement | null>;
    editInputRefs: MutableRefObject<Record<string, HTMLInputElement>>;
    filterInputRefs: MutableRefObject<Record<string, HTMLInputElement>>;
    lastSelectedRowId: MutableRefObject<null | string>;
    searchInputRef: MutableRefObject<HTMLInputElement | null>;
    tableContainerRef: MutableRefObject<HTMLDivElement | null>;
    tableFooterRef: MutableRefObject<HTMLTableSectionElement | null>;
    tableHeadCellRefs: MutableRefObject<Record<string, HTMLTableCellElement>>;
    tableHeadRef: MutableRefObject<HTMLTableSectionElement | null>;
    tablePaperRef: MutableRefObject<HTMLDivElement | null>;
    topToolbarRef: MutableRefObject<HTMLDivElement | null>;
  };
  setColumnFilterFns: Dispatch<SetStateAction<MTT_ColumnFilterFnsState>>;
  setCreatingRow: Dispatch<SetStateAction<MTT_Row<TData> | null | true>>;
  setDensity: Dispatch<SetStateAction<MTT_DensityState>>;
  setDraggingColumn: Dispatch<SetStateAction<MTT_Column<TData> | null>>;
  setDraggingRow: Dispatch<SetStateAction<MTT_Row<TData> | null>>;
  setEditingCell: Dispatch<SetStateAction<MTT_Cell<TData> | null>>;
  setEditingRow: Dispatch<SetStateAction<MTT_Row<TData> | null>>;
  setGlobalFilterFn: Dispatch<SetStateAction<MTT_FilterOption>>;
  setHoveredColumn: Dispatch<SetStateAction<null | Partial<MTT_Column<TData>>>>;
  setHoveredRow: Dispatch<SetStateAction<null | Partial<MTT_Row<TData>>>>;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>;
  setShowAlertBanner: Dispatch<SetStateAction<boolean>>;
  setShowColumnFilters: Dispatch<SetStateAction<boolean>>;
  setShowGlobalFilter: Dispatch<SetStateAction<boolean>>;
  setShowToolbarDropZone: Dispatch<SetStateAction<boolean>>;
} & Omit<
  Table<TData>,
  | "getAllColumns"
  | "getAllFlatColumns"
  | "getAllLeafColumns"
  | "getBottomRows"
  | "getCenterLeafColumns"
  | "getCenterRows"
  | "getColumn"
  | "getExpandedRowModel"
  | "getFlatHeaders"
  | "getHeaderGroups"
  | "getLeftLeafColumns"
  | "getPaginationRowModel"
  | "getPreFilteredRowModel"
  | "getPrePaginationRowModel"
  | "getRightLeafColumns"
  | "getRowModel"
  | "getSelectedRowModel"
  | "getState"
  | "getTopRows"
  | "options"
>;

export type MTT_DefinedTableOptions<TData extends MTT_RowData> = {
  icons: MTT_Icons;
  localization: MTT_Localization;
} & Omit<MTT_TableOptions<TData>, "icons" | "localization">;

export type MTT_StatefulTableOptions<TData extends MTT_RowData> = {
  state: Pick<
    MTT_TableState<TData>,
    | "columnFilterFns"
    | "columnOrder"
    | "columnSizingInfo"
    | "creatingRow"
    | "density"
    | "draggingColumn"
    | "draggingRow"
    | "editingCell"
    | "editingRow"
    | "globalFilterFn"
    | "grouping"
    | "hoveredColumn"
    | "hoveredRow"
    | "isFullScreen"
    | "pagination"
    | "showAlertBanner"
    | "showColumnFilters"
    | "showGlobalFilter"
    | "showToolbarDropZone"
  >;
} & MTT_DefinedTableOptions<TData>;

export type MTT_TableState<TData extends MTT_RowData> = Prettify<
  {
    columnFilterFns: MTT_ColumnFilterFnsState;
    creatingRow: MTT_Row<TData> | null;
    density: MTT_DensityState;
    draggingColumn: MTT_Column<TData> | null;
    draggingRow: MTT_Row<TData> | null;
    editingCell: MTT_Cell<TData> | null;
    editingRow: MTT_Row<TData> | null;
    globalFilterFn: MTT_FilterOption;
    hoveredColumn: null | Partial<MTT_Column<TData>>;
    hoveredRow: null | Partial<MTT_Row<TData>>;
    isFullScreen: boolean;
    isLoading: boolean;
    isSaving: boolean;
    showAlertBanner: boolean;
    showColumnFilters: boolean;
    showGlobalFilter: boolean;
    showLoadingOverlay: boolean;
    showProgressBars: boolean;
    showSkeletons: boolean;
    showToolbarDropZone: boolean;
  } & TableState
>;

export type MTT_ColumnDef<TData extends MTT_RowData, TValue = unknown> = {
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify a function here to point to the correct property in the data object.
   *
   * @example accessorFn: (row) => row.username
   */
  accessorFn?: (originalRow: TData) => any;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify which key in the row this column should use to access the correct data.
   * Also supports Deep Key Dot Notation.
   *
   * @example accessorKey: 'username' //simple
   * @example accessorKey: 'name.firstName' //deep key dot notation
   */
  accessorKey?: ({} & string) | DeepKeys<TData>;
  AggregatedCell?: (props: {
    cell: MTT_Cell<TData, TValue>;
    column: MTT_Column<TData, TValue>;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  aggregationFn?: Array<MTT_AggregationFn<TData>> | MTT_AggregationFn<TData>;
  Cell?: (props: {
    cell: MTT_Cell<TData, TValue>;
    column: MTT_Column<TData, TValue>;
    renderedCellValue: number | ReactNode | string;
    renderedColumnIndex?: number;
    renderedRowIndex?: number;
    row: MTT_Row<TData>;
    rowRef?: RefObject<HTMLTableRowElement | null>;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  /**
   * Specify what type of column this is. Either `data`, `display`, or `group`. Defaults to `data`.
   * Leave this blank if you are just creating a normal data column.
   *
   * @default 'data'
   *
   * @example columnDefType: 'display'
   */
  columnDefType?: "data" | "display" | "group";
  columnFilterModeOptions?: Array<
    LiteralUnion<MTT_FilterOption & string>
  > | null;
  columns?: MTT_ColumnDef<TData>[];
  Edit?: (props: {
    cell: MTT_Cell<TData, TValue>;
    column: MTT_Column<TData, TValue>;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  editVariant?: "multi-select" | "select" | "text";
  enableCellHoverReveal?: boolean;
  enableClickToCopy?: ((cell: MTT_Cell<TData>) => boolean) | boolean;
  enableColumnActions?: boolean;
  enableColumnDragging?: boolean;
  enableColumnFilterModes?: boolean;
  enableColumnOrdering?: boolean;
  enableEditing?: ((row: MTT_Row<TData>) => boolean) | boolean;
  enableFilterMatchHighlighting?: boolean;
  Filter?: (props: {
    column: MTT_Column<TData, TValue>;
    header: MTT_Header<TData>;
    rangeFilterIndex?: number;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  filterFn?: MTT_FilterFn<TData>;
  filterTooltipValueFn?: MTT_FilterTooltipValueFn;
  filterVariant?:
    | "autocomplete"
    | "checkbox"
    | "date"
    | "date-range"
    | "multi-select"
    | "range"
    | "range-slider"
    | "select"
    | "text";
  Footer?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        footer: MTT_Header<TData>;
        table: MTT_TableInstance<TData>;
      }) => ReactNode)
    | ReactNode;
  /**
   * footer must be a string. If you want custom JSX to render the footer, you can also specify a `Footer` option. (Capital F)
   */
  footer?: string;
  GroupedCell?: (props: {
    cell: MTT_Cell<TData, TValue>;
    column: MTT_Column<TData, TValue>;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  /**
   * If `layoutMode` is `'grid'` or `'grid-no-grow'`, you can specify the flex grow value for individual columns to still grow and take up remaining space, or set to `false`/0 to not grow.
   */
  grow?: boolean | number;
  Header?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        header: MTT_Header<TData>;
        table: MTT_TableInstance<TData>;
      }) => ReactNode)
    | ReactNode;
  /**
   * header must be a string. If you want custom JSX to render the header, you can also specify a `Header` option. (Capital H)
   */
  header: string;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   *
   * If you have also specified an `accessorFn`, MTT still needs to have a valid `id` to be able to identify the column uniquely.
   *
   * `id` defaults to the `accessorKey` or `header` if not specified.
   *
   * @default gets set to the same value as `accessorKey` by default
   */
  id?: LiteralUnion<keyof TData & string>;
  mantineColumnActionsButtonProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineColumnDragHandleProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineCopyButtonProps?:
    | ((props: {
        cell: MTT_Cell<TData, TValue>;
        column: MTT_Column<TData, TValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
  mantineEditSelectProps?:
    | ((props: {
        cell: MTT_Cell<TData, TValue>;
        column: MTT_Column<TData, TValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
  mantineEditTextInputProps?:
    | ((props: {
        cell: MTT_Cell<TData, TValue>;
        column: MTT_Column<TData, TValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineFilterAutocompleteProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
  mantineFilterCheckboxProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>);
  mantineFilterDateInputProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
  mantineFilterMultiSelectProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
  mantineFilterRangeSliderProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
  mantineFilterSelectProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
  mantineFilterTextInputProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineTableBodyCellProps?:
    | ((props: {
        cell: MTT_Cell<TData, TValue>;
        column: MTT_Column<TData, TValue>;
        renderedRowIndex?: number;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableTdProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableTdProps);
  mantineTableFooterCellProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
  mantineTableHeadCellProps?:
    | ((props: {
        column: MTT_Column<TData, TValue>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
  PlaceholderCell?: (props: {
    cell: MTT_Cell<TData, TValue>;
    column: MTT_Column<TData, TValue>;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderColumnActionsMenuItems?: (props: {
    column: MTT_Column<TData, TValue>;
    internalColumnMenuItems: ReactNode;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderColumnFilterModeMenuItems?: (props: {
    column: MTT_Column<TData, TValue>;
    internalFilterOptions: MTT_InternalFilterOption[];
    onSelectFilterMode: (filterMode: MTT_FilterOption) => void;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  sortingFn?: MTT_SortingFn<TData>;
  visibleInShowHideMenu?: boolean;
} & Omit<
  ColumnDef<TData, TValue>,
  | "accessorKey"
  | "aggregatedCell"
  | "aggregationFn"
  | "cell"
  | "columns"
  | "filterFn"
  | "footer"
  | "header"
  | "id"
  | "sortingFn"
>;

export type MTT_DisplayColumnDef<
  TData extends MTT_RowData,
  TValue = unknown,
> = Omit<MTT_ColumnDef<TData, TValue>, "accessorFn" | "accessorKey">;

export type MTT_GroupColumnDef<TData extends MTT_RowData> = {
  columns: MTT_ColumnDef<TData>[];
} & MTT_DisplayColumnDef<TData, any>;

export type MTT_DefinedColumnDef<
  TData extends MTT_RowData,
  TValue = unknown,
> = {
  _filterFn: MTT_FilterOption;
  defaultDisplayColumn: Partial<MTT_ColumnDef<TData, TValue>>;
  id: string;
} & Omit<MTT_ColumnDef<TData, TValue>, "defaultDisplayColumn" | "id">;

export type MTT_Column<TData extends MTT_RowData, TValue = unknown> = {
  columnDef: MTT_DefinedColumnDef<TData, TValue>;
  columns?: MTT_Column<TData>[];
  filterFn?: MTT_FilterFn<TData>;
  footer: string;
  header: string;
} & Omit<
  Column<TData, MTT_CellValue>,
  "columnDef" | "columns" | "filterFn" | "footer" | "header"
>;

export type MTT_Header<TData extends MTT_RowData, TValue = unknown> = {
  column: MTT_Column<TData, TValue>;
} & Omit<Header<TData, MTT_CellValue>, "column">;

export type MTT_HeaderGroup<TData extends MTT_RowData> = {
  headers: MTT_Header<TData>[];
} & Omit<HeaderGroup<TData>, "headers">;

export type MTT_Row<TData extends MTT_RowData> = {
  _valuesCache: Record<LiteralUnion<DeepKeys<TData> & string>, any>;
  getAllCells: () => MTT_Cell<TData>[];
  getVisibleCells: () => MTT_Cell<TData>[];
  subRows?: MTT_Row<TData>[];
} & Omit<
  Row<TData>,
  "_valuesCache" | "getAllCells" | "getVisibleCells" | "subRows"
>;

export type MTT_Cell<TData extends MTT_RowData, TValue = unknown> = {
  column: MTT_Column<TData, TValue>;
  row: MTT_Row<TData>;
} & Omit<Cell<TData, TValue>, "column" | "row">;

export type MTT_AggregationOption = keyof typeof MTT_AggregationFns & string;

export type MTT_AggregationFn<TData extends MTT_RowData> =
  | AggregationFn<TData>
  | MTT_AggregationOption;

export type MTT_SortingOption = LiteralUnion<
  keyof typeof MTT_SortingFns & string
>;

export type MTT_SortingFn<TData extends MTT_RowData> =
  | MTT_SortingOption
  | SortingFn<TData>;

export type MTT_FilterOption = LiteralUnion<
  keyof typeof MTT_FilterFns & string
>;

export type MTT_FilterFn<TData extends MTT_RowData> =
  | FilterFn<TData>
  | MTT_FilterOption;

export type MTT_FilterTooltipValueFn<TValue = any> = (value: TValue) => string;

export type MTT_InternalFilterOption = {
  divider: boolean;
  label: string;
  option: string;
  symbol: string;
};

export type MTT_DisplayColumnIds =
  | "mtt-row-actions"
  | "mtt-row-drag"
  | "mtt-row-expand"
  | "mtt-row-numbers"
  | "mtt-row-pin"
  | "mtt-row-select"
  | "mtt-row-spacer";

export type MTT_CreateTableFeature<
  TData extends MTT_RowData,
  TFeature = any,
> = (table: MTT_TableInstance<TData>) => TFeature;

/**
 * `columns` and `data` props are the only required props, but there are over 150 other optional props.
 */
export type MTT_TableOptions<TData extends MTT_RowData> = {
  columnFilterDisplayMode?: "custom" | "popover" | "subheader";
  columnFilterModeOptions?: Array<
    LiteralUnion<MTT_FilterOption & string>
  > | null;
  /**
   * The columns to display in the table. `accessorKey`s or `accessorFn`s must match keys in the `data` prop.
   */
  columns: MTT_ColumnDef<TData>[];
  columnVirtualizerInstanceRef?: MutableRefObject<null | Virtualizer<
    HTMLDivElement,
    HTMLTableCellElement
  >>;
  columnVirtualizerOptions?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>)
    | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>;
  createDisplayMode?: "custom" | "modal" | "row";
  /**
   * Pass your data as an array of objects. Objects can theoretically be any shape, but it's best to keep them consistent.
   */
  data: TData[];
  /**
   * Instead of specifying a bunch of the same options for each column, you can just change an option in the `defaultColumn` prop to change a default option for all columns.
   */
  defaultColumn?: Partial<MTT_ColumnDef<TData>>;
  /**
   * Change the default options for display columns.
   */
  defaultDisplayColumn?: Partial<MTT_DisplayColumnDef<TData>>;
  displayColumnDefOptions?: Partial<{
    [key in MTT_DisplayColumnIds]: Partial<MTT_DisplayColumnDef<TData>>;
  }>;
  editDisplayMode?: "cell" | "custom" | "modal" | "row" | "table";
  enableBatchRowSelection?: boolean;
  enableBottomToolbar?: boolean;
  enableClickToCopy?: ((cell: MTT_Cell<TData>) => boolean) | boolean;
  enableColumnActions?: boolean;
  enableColumnDragging?: boolean;
  enableColumnFilterModes?: boolean;
  enableColumnOrdering?: boolean;
  enableColumnVirtualization?: boolean;
  enableDensityToggle?: boolean;
  enableEditing?: ((row: MTT_Row<TData>) => boolean) | boolean;
  enableExpandAll?: boolean;
  enableFacetedValues?: boolean;
  enableFilterMatchHighlighting?: boolean;
  enableFullScreenToggle?: boolean;
  enableGlobalFilterModes?: boolean;
  enableGlobalFilterRankedResults?: boolean;
  enableHeaderActionsHoverReveal?: boolean;
  enablePagination?: boolean;
  enableRowActions?: boolean;
  enableRowDragging?: boolean;
  enableRowNumbers?: boolean;
  enableRowOrdering?: boolean;
  enableRowSelection?: ((row: MTT_Row<TData>) => boolean) | boolean;
  enableRowVirtualization?: boolean;
  enableSelectAll?: boolean;
  enableStickyFooter?: boolean;
  enableStickyHeader?: boolean;
  enableTableFooter?: boolean;
  enableTableHead?: boolean;
  enableToolbarInternalActions?: boolean;
  enableTopToolbar?: boolean;
  expandRowsFn?: (dataRow: TData) => TData[];
  getRowId?: (
    originalRow: TData,
    index: number,
    parentRow: MTT_Row<TData>,
  ) => string | undefined;
  globalFilterFn?: MTT_FilterOption;
  globalFilterModeOptions?: MTT_FilterOption[] | null;
  icons?: Partial<MTT_Icons>;
  initialState?: Partial<MTT_TableState<TData>>;
  /**
   * Changes which kind of CSS layout is used to render the table. `semantic` uses default semantic HTML elements, while `grid` adds CSS grid and flexbox styles
   */
  layoutMode?: "grid" | "grid-no-grow" | "semantic";
  /**
   * Pass in either a locale imported from `mantine-tanstack-table/locales/*` or a custom locale object.
   */
  localization?: Partial<MTT_Localization>;
  mantineBottomToolbarProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => BoxProps & HTMLPropsRef<HTMLDivElement>)
    | (BoxProps & HTMLPropsRef<HTMLDivElement>);
  mantineColumnActionsButtonProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineColumnDragHandleProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineCopyButtonProps?:
    | ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
  mantineCreateRowModalProps?:
    | ((props: {
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>)
    | (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
  mantineDetailPanelProps?:
    | ((props: {
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => BoxProps & HTMLPropsRef<HTMLTableCellElement>)
    | (BoxProps & HTMLPropsRef<HTMLTableCellElement>);
  mantineEditRowModalProps?:
    | ((props: {
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>)
    | (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
  mantineEditSelectProps?:
    | ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
  mantineEditTextInputProps?:
    | ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineExpandAllButtonProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineExpandButtonProps?:
    | ((props: {
        renderedRowIndex?: number;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineFilterAutocompleteProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
  mantineFilterCheckboxProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>);
  mantineFilterDateInputProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
  mantineFilterMultiSelectProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
  mantineFilterRangeSliderProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
  mantineFilterSelectProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
  mantineFilterTextInputProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineHighlightProps?:
    | ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLSpanElement> & Partial<HighlightProps>)
    | (HTMLPropsRef<HTMLSpanElement> & Partial<HighlightProps>);
  mantineLoadingOverlayProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<LoadingOverlayProps>)
    | (HTMLPropsRef<HTMLDivElement> & Partial<LoadingOverlayProps>);
  mantinePaginationProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => Partial<HTMLPropsRef<HTMLDivElement> & MTT_PaginationProps>)
    | Partial<HTMLPropsRef<HTMLDivElement> & MTT_PaginationProps>;
  mantinePaperProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & PaperProps)
    | (HTMLPropsRef<HTMLDivElement> & PaperProps);
  mantineProgressProps?:
    | ((props: {
        isTopToolbar: boolean;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & ProgressProps)
    | (HTMLPropsRef<HTMLDivElement> & ProgressProps);
  mantineRowDragHandleProps?:
    | ((props: {
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>)
    | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
  mantineSearchTextInputProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>)
    | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
  mantineSelectAllCheckboxProps?:
    | ((CheckboxProps | RadioProps | SwitchProps) &
        HTMLPropsRef<HTMLInputElement>)
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => (CheckboxProps | RadioProps | SwitchProps) &
        HTMLPropsRef<HTMLInputElement>);
  mantineSelectCheckboxProps?:
    | ((CheckboxProps | RadioProps | SwitchProps) &
        HTMLPropsRef<HTMLInputElement>)
    | ((props: {
        renderedRowIndex?: number;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => (CheckboxProps | RadioProps | SwitchProps) &
        HTMLPropsRef<HTMLInputElement>);
  mantineSkeletonProps?:
    | ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & SkeletonProps)
    | (HTMLPropsRef<HTMLDivElement> & SkeletonProps);
  mantineTableBodyCellProps?:
    | ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        renderedColumnIndex?: number;
        renderedRowIndex?: number;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableTdProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableTdProps);
  mantineTableBodyProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableSectionElement> & TableTbodyProps)
    | (HTMLPropsRef<HTMLTableSectionElement> & TableTbodyProps);
  mantineTableBodyRowProps?:
    | ((props: {
        isDetailPanel?: boolean;
        renderedRowIndex?: number;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps)
    | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
  mantineTableContainerProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => BoxProps & HTMLPropsRef<HTMLDivElement>)
    | (BoxProps & HTMLPropsRef<HTMLDivElement>);
  mantineTableFooterCellProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
  mantineTableFooterProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableSectionElement> & TableTfootProps)
    | (HTMLPropsRef<HTMLTableSectionElement> & TableTfootProps);
  mantineTableFooterRowProps?:
    | ((props: {
        footerGroup: MTT_HeaderGroup<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps)
    | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
  mantineTableHeadCellProps?:
    | ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps)
    | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
  mantineTableHeadProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableSectionElement> & TableTheadProps)
    | (HTMLPropsRef<HTMLTableSectionElement> & TableTheadProps);
  mantineTableHeadRowProps?:
    | ((props: {
        headerGroup: MTT_HeaderGroup<TData>;
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps)
    | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
  mantineTableProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLTableElement> & TableProps)
    | (HTMLPropsRef<HTMLTableElement> & TableProps);
  mantineToolbarAlertBannerBadgeProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>)
    | (HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>);
  mantineToolbarAlertBannerProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => HTMLPropsRef<HTMLDivElement> & Partial<AlertProps>)
    | (HTMLPropsRef<HTMLDivElement> & Partial<AlertProps>);
  mantineTopToolbarProps?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => BoxProps & HTMLPropsRef<HTMLDivElement>)
    | (BoxProps & HTMLPropsRef<HTMLDivElement>);
  /**
   * Memoize cells, rows, or the entire table body to potentially improve render performance.
   *
   * @warning This will break some dynamic rendering features.
   */
  memoMode?: "cells" | "rows" | "table-body";
  onColumnFilterFnsChange?: OnChangeFn<{ [key: string]: MTT_FilterOption }>;
  onCreatingRowCancel?: (props: {
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => void;
  onCreatingRowChange?: OnChangeFn<MTT_Row<TData> | null>;
  onCreatingRowSave?: (props: {
    exitCreatingMode: () => void;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
    values: Record<LiteralUnion<DeepKeys<TData> & string>, any>;
  }) => void;
  onDensityChange?: OnChangeFn<MTT_DensityState>;
  onDraggingColumnChange?: OnChangeFn<MTT_Column<TData> | null>;
  onDraggingRowChange?: OnChangeFn<MTT_Row<TData> | null>;
  onEditingCellChange?: OnChangeFn<MTT_Cell<TData> | null>;
  onEditingRowCancel?: (props: {
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => void;
  onEditingRowChange?: OnChangeFn<MTT_Row<TData> | null>;
  onEditingRowSave?: (props: {
    exitEditingMode: () => void;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
    values: Record<LiteralUnion<DeepKeys<TData> & string>, any>;
  }) => Promise<void> | void;
  onGlobalFilterFnChange?: OnChangeFn<MTT_FilterOption>;
  onHoveredColumnChange?: OnChangeFn<null | Partial<MTT_Column<TData>>>;
  onHoveredRowChange?: OnChangeFn<null | Partial<MTT_Row<TData>>>;
  onIsFullScreenChange?: OnChangeFn<boolean>;
  onShowAlertBannerChange?: OnChangeFn<boolean>;
  onShowColumnFiltersChange?: OnChangeFn<boolean>;
  onShowGlobalFilterChange?: OnChangeFn<boolean>;
  onShowToolbarDropZoneChange?: OnChangeFn<boolean>;
  paginationDisplayMode?: "custom" | "default" | "pages";
  positionActionsColumn?: "first" | "last";
  positionCreatingRow?: "bottom" | "top" | number;
  positionExpandColumn?: "first" | "last";
  positionGlobalFilter?: "left" | "none" | "right";
  positionPagination?: "both" | "bottom" | "none" | "top";
  positionToolbarAlertBanner?: "bottom" | "head-overlay" | "none" | "top";
  positionToolbarDropZone?: "both" | "bottom" | "none" | "top";
  renderBottomToolbar?:
    | ((props: { table: MTT_TableInstance<TData> }) => ReactNode)
    | ReactNode;
  renderBottomToolbarCustomActions?: (props: {
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderColumnActionsMenuItems?: (props: {
    column: MTT_Column<TData, MTT_CellValue>;
    internalColumnMenuItems: ReactNode;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderColumnFilterModeMenuItems?: (props: {
    column: MTT_Column<TData, MTT_CellValue>;
    internalFilterOptions: MTT_InternalFilterOption[];
    onSelectFilterMode: (filterMode: MTT_FilterOption) => void;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderCreateRowModalContent?: (props: {
    internalEditComponents: ReactNode[];
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderDetailPanel?: (props: {
    internalEditComponents: ReactNode[];
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderEditRowModalContent?: (props: {
    internalEditComponents: ReactNode[];
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderEmptyRowsFallback?: (props: {
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderGlobalFilterModeMenuItems?: (props: {
    internalFilterOptions: MTT_InternalFilterOption[];
    onSelectFilterMode: (filterMode: MTT_FilterOption) => void;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderRowActionMenuItems?: (props: {
    renderedRowIndex?: number;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderRowActions?: (props: {
    cell: MTT_Cell<TData, MTT_CellValue>;
    renderedRowIndex?: number;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderToolbarAlertBannerContent?: (props: {
    groupedAlert: null | ReactNode;
    selectedAlert: null | ReactNode;
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderToolbarInternalActions?: (props: {
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  renderTopToolbar?:
    | ((props: { table: MTT_TableInstance<TData> }) => ReactNode)
    | ReactNode;
  renderTopToolbarCustomActions?: (props: {
    table: MTT_TableInstance<TData>;
  }) => ReactNode;
  rowCount?: number;
  rowNumberDisplayMode?: "original" | "static";
  rowPinningDisplayMode?:
    | "bottom"
    | "select-bottom"
    | "select-sticky"
    | "select-top"
    | "sticky"
    | "top"
    | "top-and-bottom";
  rowVirtualizerInstanceRef?: MutableRefObject<null | Virtualizer<
    HTMLDivElement,
    HTMLTableRowElement
  >>;
  rowVirtualizerOptions?:
    | ((props: {
        table: MTT_TableInstance<TData>;
      }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>)
    | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>;
  selectAllMode?: "all" | "page";
  selectDisplayMode?: "checkbox" | "radio" | "switch";
  /**
   * Manage state externally any way you want, then pass it back into MTT.
   */
  state?: Partial<MTT_TableState<TData>>;
} & Omit<
  Partial<TableOptions<TData>>,
  | "columns"
  | "data"
  | "defaultColumn"
  | "enableRowSelection"
  | "expandRowsFn"
  | "getRowId"
  | "globalFilterFn"
  | "initialState"
  | "onStateChange"
  | "state"
>;
