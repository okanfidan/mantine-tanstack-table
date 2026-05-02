import * as react_jsx_runtime from 'react/jsx-runtime';
import { ActionIconProps, UnstyledButtonProps, SelectProps, TextInputProps, AutocompleteProps, CheckboxProps, MultiSelectProps, RangeSliderProps, TableTdProps, TableThProps, BoxProps, ModalProps, HighlightProps, LoadingOverlayProps, PaginationProps, PaperProps, ProgressProps, RadioProps, SwitchProps, SkeletonProps, TableTbodyProps, TableTrProps, TableTfootProps, TableTheadProps, TableProps, BadgeProps, AlertProps, FlexProps, MenuProps, MantineTheme } from '@mantine/core';
import * as react from 'react';
import { MutableRefObject, HTMLProps, ReactNode, RefObject, Dispatch, SetStateAction, DragEventHandler, MouseEvent, ChangeEvent, ReactElement, Ref } from 'react';
import * as _tanstack_react_table from '@tanstack/react-table';
import { Row, AggregationFn, DeepKeys, Cell, Header, FilterFn, SortingFn, ColumnDef, Column, HeaderGroup, TableState, OnChangeFn, TableOptions, Table, ColumnFiltersState, AccessorFn, DeepValue, ColumnOrderState, ColumnPinningState, ColumnSizingInfoState, ColumnSizingState, ExpandedState, GroupingState, PaginationState, RowSelectionState, SortingState, Updater, VisibilityState, RowPinningPosition, Renderable } from '@tanstack/react-table';
import { Virtualizer, VirtualizerOptions, VirtualItem } from '@tanstack/react-virtual';
import { DateInputProps } from '@mantine/dates';
import { RankingInfo } from '@tanstack/match-sorter-utils';
import * as _tabler_icons_react from '@tabler/icons-react';

declare const MTT_AggregationFns: {
    sum: _tanstack_react_table.AggregationFn<any>;
    min: _tanstack_react_table.AggregationFn<any>;
    max: _tanstack_react_table.AggregationFn<any>;
    extent: _tanstack_react_table.AggregationFn<any>;
    mean: _tanstack_react_table.AggregationFn<any>;
    median: _tanstack_react_table.AggregationFn<any>;
    unique: _tanstack_react_table.AggregationFn<any>;
    uniqueCount: _tanstack_react_table.AggregationFn<any>;
    count: _tanstack_react_table.AggregationFn<any>;
};

declare const MTT_FilterFns: {
    between: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValues: [number | string, number | string]): boolean;
        autoRemove(val: any): boolean;
    };
    betweenInclusive: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValues: [number | string, number | string]): boolean;
        autoRemove(val: any): boolean;
    };
    contains: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    empty: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, _filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    endsWith: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    equals: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    fuzzy: {
        <TData extends MTT_RowData>(row: Row<TData>, columnId: string, filterValue: number | string, addMeta: (item: RankingInfo) => void): boolean;
        autoRemove(val: any): boolean;
    };
    greaterThan: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    greaterThanOrEqualTo: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    lessThan: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    lessThanOrEqualTo: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    notEmpty: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, _filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    notEquals: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    startsWith: {
        <TData extends MTT_RowData>(row: Row<TData>, id: string, filterValue: number | string): boolean;
        autoRemove(val: any): boolean;
    };
    includesString: _tanstack_react_table.FilterFn<any>;
    includesStringSensitive: _tanstack_react_table.FilterFn<any>;
    equalsString: _tanstack_react_table.FilterFn<any>;
    arrIncludes: _tanstack_react_table.FilterFn<any>;
    arrIncludesAll: _tanstack_react_table.FilterFn<any>;
    arrIncludesSome: _tanstack_react_table.FilterFn<any>;
    weakEquals: _tanstack_react_table.FilterFn<any>;
    inNumberRange: _tanstack_react_table.FilterFn<any>;
};
declare function localizedFilterOption(localization: MTT_Localization, option: MTT_FilterOption): string;

declare const MTT_SortingFns: {
    fuzzy: <TData extends MTT_RowData>(rowA: Row<TData>, rowB: Row<TData>, columnId: string) => number;
    alphanumeric: _tanstack_react_table.SortingFn<any>;
    alphanumericCaseSensitive: _tanstack_react_table.SortingFn<any>;
    text: _tanstack_react_table.SortingFn<any>;
    textCaseSensitive: _tanstack_react_table.SortingFn<any>;
    datetime: _tanstack_react_table.SortingFn<any>;
    basic: _tanstack_react_table.SortingFn<any>;
};
declare const rankGlobalFuzzy: <TData extends MTT_RowData>(rowA: MTT_Row<TData>, rowB: MTT_Row<TData>) => number;

declare const MTT_Default_Icons: {
    readonly IconArrowAutofitContent: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconArrowsSort: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconBaselineDensityLarge: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconBaselineDensityMedium: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconBaselineDensitySmall: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconBoxMultiple: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconChevronDown: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconChevronLeft: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconChevronLeftPipe: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconChevronRight: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconChevronRightPipe: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconChevronsDown: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconCircleX: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconClearAll: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconColumns: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconDeviceFloppy: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconDots: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconDotsVertical: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconEdit: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconEyeOff: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconFilter: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconFilterCog: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconFilterOff: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconGripHorizontal: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconMaximize: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconMinimize: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconPinned: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconPinnedOff: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconSearch: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconSearchOff: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconSortAscending: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconSortDescending: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
    readonly IconX: react.ForwardRefExoticComponent<_tabler_icons_react.IconProps & react.RefAttributes<SVGSVGElement>>;
};
type MTT_Icons = Record<keyof typeof MTT_Default_Icons, any>;

type LiteralUnion<T extends U, U = string> = (Record<never, never> & U) | T;
type Prettify<T> = {
    [K in keyof T]: T[K];
} & unknown;
type Xor<A, B> = Prettify<{
    [k in keyof A]?: never;
} & B> | Prettify<{
    [k in keyof B]?: never;
} & A>;
type HTMLPropsRef<T extends HTMLElement> = {
    ref?: MutableRefObject<null | T> | null;
} & Omit<HTMLProps<T>, "color" | "data" | "label" | "ref" | "size" | "style" | "type">;
type MantineShade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type MTT_PaginationProps = {
    rowsPerPageOptions?: string[];
    showRowsPerPage?: boolean;
} & Partial<PaginationProps>;
type MTT_DensityState = "lg" | "md" | "sm" | "xl" | "xs";
type MTT_ColumnFilterFnsState = Record<string, MTT_FilterOption>;
type MTT_RowData = Record<string, any>;
type MTT_CellValue = unknown;
type MTT_ColumnFiltersState = ColumnFiltersState;
type MTT_ColumnOrderState = ColumnOrderState;
type MTT_ColumnPinningState = ColumnPinningState;
type MTT_ColumnSizingInfoState = ColumnSizingInfoState;
type MTT_ColumnSizingState = ColumnSizingState;
type MTT_ExpandedState = ExpandedState;
type MTT_GroupingState = GroupingState;
type MTT_PaginationState = PaginationState;
type MTT_RowSelectionState = RowSelectionState;
type MTT_SortingState = SortingState;
type MTT_Updater<T> = Updater<T>;
type MTT_VirtualItem = VirtualItem;
type MTT_VisibilityState = VisibilityState;
type MTT_VirtualizerOptions<TScrollElement extends Element | Window = Element | Window, TItemElement extends Element = Element> = VirtualizerOptions<TScrollElement, TItemElement>;
type MTT_ColumnVirtualizer<TScrollElement extends Element | Window = HTMLDivElement, TItemElement extends Element = HTMLTableCellElement> = {
    virtualColumns: MTT_VirtualItem[];
    virtualPaddingLeft?: number;
    virtualPaddingRight?: number;
} & Virtualizer<TScrollElement, TItemElement>;
type MTT_RowVirtualizer<TScrollElement extends Element | Window = HTMLDivElement, TItemElement extends Element = HTMLTableRowElement> = {
    virtualRows: MTT_VirtualItem[];
} & Virtualizer<TScrollElement, TItemElement>;
type MTT_ColumnHelper<TData extends MTT_RowData> = {
    accessor: <TAccessor extends AccessorFn<TData> | DeepKeys<TData>, TValue extends TAccessor extends AccessorFn<TData, infer TReturn> ? TReturn : TAccessor extends DeepKeys<TData> ? DeepValue<TData, TAccessor> : never>(accessor: TAccessor, column: MTT_DisplayColumnDef<TData, TValue>) => MTT_ColumnDef<TData, TValue>;
    display: (column: MTT_DisplayColumnDef<TData>) => MTT_ColumnDef<TData>;
    group: (column: MTT_GroupColumnDef<TData>) => MTT_ColumnDef<TData>;
};
interface MTT_Localization {
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
interface MTT_RowModel<TData extends MTT_RowData> {
    flatRows: MTT_Row<TData>[];
    rows: MTT_Row<TData>[];
    rowsById: {
        [key: string]: MTT_Row<TData>;
    };
}
type MTT_TableInstance<TData extends MTT_RowData> = {
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
} & Omit<Table<TData>, "getAllColumns" | "getAllFlatColumns" | "getAllLeafColumns" | "getBottomRows" | "getCenterLeafColumns" | "getCenterRows" | "getColumn" | "getExpandedRowModel" | "getFlatHeaders" | "getHeaderGroups" | "getLeftLeafColumns" | "getPaginationRowModel" | "getPreFilteredRowModel" | "getPrePaginationRowModel" | "getRightLeafColumns" | "getRowModel" | "getSelectedRowModel" | "getState" | "getTopRows" | "options">;
type MTT_DefinedTableOptions<TData extends MTT_RowData> = {
    icons: MTT_Icons;
    localization: MTT_Localization;
} & Omit<MTT_TableOptions<TData>, "icons" | "localization">;
type MTT_StatefulTableOptions<TData extends MTT_RowData> = {
    state: Pick<MTT_TableState<TData>, "columnFilterFns" | "columnOrder" | "columnSizingInfo" | "creatingRow" | "density" | "draggingColumn" | "draggingRow" | "editingCell" | "editingRow" | "globalFilterFn" | "grouping" | "hoveredColumn" | "hoveredRow" | "isFullScreen" | "pagination" | "showAlertBanner" | "showColumnFilters" | "showGlobalFilter" | "showToolbarDropZone">;
} & MTT_DefinedTableOptions<TData>;
type MTT_TableState<TData extends MTT_RowData> = Prettify<{
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
} & TableState>;
type MTT_ColumnDef<TData extends MTT_RowData, TValue = unknown> = {
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
    columnFilterModeOptions?: Array<LiteralUnion<MTT_FilterOption & string>> | null;
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
    filterVariant?: "autocomplete" | "checkbox" | "date" | "date-range" | "multi-select" | "range" | "range-slider" | "select" | "text";
    Footer?: ((props: {
        column: MTT_Column<TData, TValue>;
        footer: MTT_Header<TData>;
        table: MTT_TableInstance<TData>;
    }) => ReactNode) | ReactNode;
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
    Header?: ((props: {
        column: MTT_Column<TData, TValue>;
        header: MTT_Header<TData>;
        table: MTT_TableInstance<TData>;
    }) => ReactNode) | ReactNode;
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
    mantineColumnActionsButtonProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineColumnDragHandleProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineCopyButtonProps?: ((props: {
        cell: MTT_Cell<TData, TValue>;
        column: MTT_Column<TData, TValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
    mantineEditSelectProps?: ((props: {
        cell: MTT_Cell<TData, TValue>;
        column: MTT_Column<TData, TValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineEditTextInputProps?: ((props: {
        cell: MTT_Cell<TData, TValue>;
        column: MTT_Column<TData, TValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineFilterAutocompleteProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
    mantineFilterCheckboxProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>);
    mantineFilterDateInputProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
    mantineFilterMultiSelectProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
    mantineFilterRangeSliderProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
    mantineFilterSelectProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineFilterTextInputProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineTableBodyCellProps?: ((props: {
        cell: MTT_Cell<TData, TValue>;
        column: MTT_Column<TData, TValue>;
        renderedRowIndex?: number;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableTdProps) | (HTMLPropsRef<HTMLTableCellElement> & TableTdProps);
    mantineTableFooterCellProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps) | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
    mantineTableHeadCellProps?: ((props: {
        column: MTT_Column<TData, TValue>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps) | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
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
} & Omit<ColumnDef<TData, TValue>, "accessorKey" | "aggregatedCell" | "aggregationFn" | "cell" | "columns" | "filterFn" | "footer" | "header" | "id" | "sortingFn">;
type MTT_DisplayColumnDef<TData extends MTT_RowData, TValue = unknown> = Omit<MTT_ColumnDef<TData, TValue>, "accessorFn" | "accessorKey">;
type MTT_GroupColumnDef<TData extends MTT_RowData> = {
    columns: MTT_ColumnDef<TData>[];
} & MTT_DisplayColumnDef<TData, any>;
type MTT_DefinedColumnDef<TData extends MTT_RowData, TValue = unknown> = {
    _filterFn: MTT_FilterOption;
    defaultDisplayColumn: Partial<MTT_ColumnDef<TData, TValue>>;
    id: string;
} & Omit<MTT_ColumnDef<TData, TValue>, "defaultDisplayColumn" | "id">;
type MTT_Column<TData extends MTT_RowData, TValue = unknown> = {
    columnDef: MTT_DefinedColumnDef<TData, TValue>;
    columns?: MTT_Column<TData>[];
    filterFn?: MTT_FilterFn<TData>;
    footer: string;
    header: string;
} & Omit<Column<TData, MTT_CellValue>, "columnDef" | "columns" | "filterFn" | "footer" | "header">;
type MTT_Header<TData extends MTT_RowData, TValue = unknown> = {
    column: MTT_Column<TData, TValue>;
} & Omit<Header<TData, MTT_CellValue>, "column">;
type MTT_HeaderGroup<TData extends MTT_RowData> = {
    headers: MTT_Header<TData>[];
} & Omit<HeaderGroup<TData>, "headers">;
type MTT_Row<TData extends MTT_RowData> = {
    _valuesCache: Record<LiteralUnion<DeepKeys<TData> & string>, any>;
    getAllCells: () => MTT_Cell<TData>[];
    getVisibleCells: () => MTT_Cell<TData>[];
    subRows?: MTT_Row<TData>[];
} & Omit<Row<TData>, "_valuesCache" | "getAllCells" | "getVisibleCells" | "subRows">;
type MTT_Cell<TData extends MTT_RowData, TValue = unknown> = {
    column: MTT_Column<TData, TValue>;
    row: MTT_Row<TData>;
} & Omit<Cell<TData, TValue>, "column" | "row">;
type MTT_AggregationOption = keyof typeof MTT_AggregationFns & string;
type MTT_AggregationFn<TData extends MTT_RowData> = AggregationFn<TData> | MTT_AggregationOption;
type MTT_SortingOption = LiteralUnion<keyof typeof MTT_SortingFns & string>;
type MTT_SortingFn<TData extends MTT_RowData> = MTT_SortingOption | SortingFn<TData>;
type MTT_FilterOption = LiteralUnion<keyof typeof MTT_FilterFns & string>;
type MTT_FilterFn<TData extends MTT_RowData> = FilterFn<TData> | MTT_FilterOption;
type MTT_FilterTooltipValueFn<TValue = any> = (value: TValue) => string;
type MTT_InternalFilterOption = {
    divider: boolean;
    label: string;
    option: string;
    symbol: string;
};
type MTT_DisplayColumnIds = "mtt-row-actions" | "mtt-row-drag" | "mtt-row-expand" | "mtt-row-numbers" | "mtt-row-pin" | "mtt-row-select" | "mtt-row-spacer";
type MTT_CreateTableFeature<TData extends MTT_RowData, TFeature = any> = (table: MTT_TableInstance<TData>) => TFeature;
/**
 * `columns` and `data` props are the only required props, but there are over 150 other optional props.
 */
type MTT_TableOptions<TData extends MTT_RowData> = {
    columnFilterDisplayMode?: "custom" | "popover" | "subheader";
    columnFilterModeOptions?: Array<LiteralUnion<MTT_FilterOption & string>> | null;
    /**
     * The columns to display in the table. `accessorKey`s or `accessorFn`s must match keys in the `data` prop.
     */
    columns: MTT_ColumnDef<TData>[];
    columnVirtualizerInstanceRef?: MutableRefObject<null | Virtualizer<HTMLDivElement, HTMLTableCellElement>>;
    columnVirtualizerOptions?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>) | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>;
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
    getRowId?: (originalRow: TData, index: number, parentRow: MTT_Row<TData>) => string | undefined;
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
    mantineBottomToolbarProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => BoxProps & HTMLPropsRef<HTMLDivElement>) | (BoxProps & HTMLPropsRef<HTMLDivElement>);
    mantineColumnActionsButtonProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineColumnDragHandleProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineCopyButtonProps?: ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<UnstyledButtonProps>);
    mantineCreateRowModalProps?: ((props: {
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>) | (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
    mantineDetailPanelProps?: ((props: {
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => BoxProps & HTMLPropsRef<HTMLTableCellElement>) | (BoxProps & HTMLPropsRef<HTMLTableCellElement>);
    mantineEditRowModalProps?: ((props: {
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>) | (HTMLPropsRef<HTMLDivElement> & Partial<ModalProps>);
    mantineEditSelectProps?: ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineEditTextInputProps?: ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineExpandAllButtonProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineExpandButtonProps?: ((props: {
        renderedRowIndex?: number;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineFilterAutocompleteProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<AutocompleteProps>);
    mantineFilterCheckboxProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<CheckboxProps>);
    mantineFilterDateInputProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<DateInputProps>);
    mantineFilterMultiSelectProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<MultiSelectProps>);
    mantineFilterRangeSliderProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<RangeSliderProps>);
    mantineFilterSelectProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<SelectProps>);
    mantineFilterTextInputProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        rangeFilterIndex?: number;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineHighlightProps?: ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLSpanElement> & Partial<HighlightProps>) | (HTMLPropsRef<HTMLSpanElement> & Partial<HighlightProps>);
    mantineLoadingOverlayProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<LoadingOverlayProps>) | (HTMLPropsRef<HTMLDivElement> & Partial<LoadingOverlayProps>);
    mantinePaginationProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => Partial<HTMLPropsRef<HTMLDivElement> & MTT_PaginationProps>) | Partial<HTMLPropsRef<HTMLDivElement> & MTT_PaginationProps>;
    mantinePaperProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & PaperProps) | (HTMLPropsRef<HTMLDivElement> & PaperProps);
    mantineProgressProps?: ((props: {
        isTopToolbar: boolean;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & ProgressProps) | (HTMLPropsRef<HTMLDivElement> & ProgressProps);
    mantineRowDragHandleProps?: ((props: {
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>) | (HTMLPropsRef<HTMLButtonElement> & Partial<ActionIconProps>);
    mantineSearchTextInputProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>) | (HTMLPropsRef<HTMLInputElement> & Partial<TextInputProps>);
    mantineSelectAllCheckboxProps?: ((CheckboxProps | RadioProps | SwitchProps) & HTMLPropsRef<HTMLInputElement>) | ((props: {
        table: MTT_TableInstance<TData>;
    }) => (CheckboxProps | RadioProps | SwitchProps) & HTMLPropsRef<HTMLInputElement>);
    mantineSelectCheckboxProps?: ((CheckboxProps | RadioProps | SwitchProps) & HTMLPropsRef<HTMLInputElement>) | ((props: {
        renderedRowIndex?: number;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => (CheckboxProps | RadioProps | SwitchProps) & HTMLPropsRef<HTMLInputElement>);
    mantineSkeletonProps?: ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & SkeletonProps) | (HTMLPropsRef<HTMLDivElement> & SkeletonProps);
    mantineTableBodyCellProps?: ((props: {
        cell: MTT_Cell<TData, MTT_CellValue>;
        column: MTT_Column<TData, MTT_CellValue>;
        renderedColumnIndex?: number;
        renderedRowIndex?: number;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableTdProps) | (HTMLPropsRef<HTMLTableCellElement> & TableTdProps);
    mantineTableBodyProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableSectionElement> & TableTbodyProps) | (HTMLPropsRef<HTMLTableSectionElement> & TableTbodyProps);
    mantineTableBodyRowProps?: ((props: {
        isDetailPanel?: boolean;
        renderedRowIndex?: number;
        row: MTT_Row<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps) | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
    mantineTableContainerProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => BoxProps & HTMLPropsRef<HTMLDivElement>) | (BoxProps & HTMLPropsRef<HTMLDivElement>);
    mantineTableFooterCellProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps) | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
    mantineTableFooterProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableSectionElement> & TableTfootProps) | (HTMLPropsRef<HTMLTableSectionElement> & TableTfootProps);
    mantineTableFooterRowProps?: ((props: {
        footerGroup: MTT_HeaderGroup<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps) | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
    mantineTableHeadCellProps?: ((props: {
        column: MTT_Column<TData, MTT_CellValue>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableCellElement> & TableThProps) | (HTMLPropsRef<HTMLTableCellElement> & TableThProps);
    mantineTableHeadProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableSectionElement> & TableTheadProps) | (HTMLPropsRef<HTMLTableSectionElement> & TableTheadProps);
    mantineTableHeadRowProps?: ((props: {
        headerGroup: MTT_HeaderGroup<TData>;
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableRowElement> & TableTrProps) | (HTMLPropsRef<HTMLTableRowElement> & TableTrProps);
    mantineTableProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLTableElement> & TableProps) | (HTMLPropsRef<HTMLTableElement> & TableProps);
    mantineToolbarAlertBannerBadgeProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>) | (HTMLPropsRef<HTMLDivElement> & Partial<BadgeProps>);
    mantineToolbarAlertBannerProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => HTMLPropsRef<HTMLDivElement> & Partial<AlertProps>) | (HTMLPropsRef<HTMLDivElement> & Partial<AlertProps>);
    mantineTopToolbarProps?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => BoxProps & HTMLPropsRef<HTMLDivElement>) | (BoxProps & HTMLPropsRef<HTMLDivElement>);
    /**
     * Memoize cells, rows, or the entire table body to potentially improve render performance.
     *
     * @warning This will break some dynamic rendering features.
     */
    memoMode?: "cells" | "rows" | "table-body";
    onColumnFilterFnsChange?: OnChangeFn<{
        [key: string]: MTT_FilterOption;
    }>;
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
    renderBottomToolbar?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => ReactNode) | ReactNode;
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
    renderTopToolbar?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => ReactNode) | ReactNode;
    renderTopToolbarCustomActions?: (props: {
        table: MTT_TableInstance<TData>;
    }) => ReactNode;
    rowCount?: number;
    rowNumberDisplayMode?: "original" | "static";
    rowPinningDisplayMode?: "bottom" | "select-bottom" | "select-sticky" | "select-top" | "sticky" | "top" | "top-and-bottom";
    rowVirtualizerInstanceRef?: MutableRefObject<null | Virtualizer<HTMLDivElement, HTMLTableRowElement>>;
    rowVirtualizerOptions?: ((props: {
        table: MTT_TableInstance<TData>;
    }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>) | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>;
    selectAllMode?: "all" | "page";
    selectDisplayMode?: "checkbox" | "radio" | "switch";
    /**
     * Manage state externally any way you want, then pass it back into MTT.
     */
    state?: Partial<MTT_TableState<TData>>;
} & Omit<Partial<TableOptions<TData>>, "columns" | "data" | "defaultColumn" | "enableRowSelection" | "expandRowsFn" | "getRowId" | "globalFilterFn" | "initialState" | "onStateChange" | "state">;

interface MTT_TableBodyProps<TData extends MTT_RowData> extends TableTbodyProps {
    columnVirtualizer?: MTT_ColumnVirtualizer;
    table: MTT_TableInstance<TData>;
    tableProps: Partial<TableProps>;
}
declare const MTT_TableBody: <TData extends MTT_RowData>({ columnVirtualizer, table, tableProps, ...rest }: MTT_TableBodyProps<TData>) => react_jsx_runtime.JSX.Element;
declare const Memo_MTT_TableBody: typeof MTT_TableBody;

interface Props$R<TData extends MTT_RowData, TValue = MTT_CellValue> extends TableTdProps {
    cell: MTT_Cell<TData, TValue>;
    numRows?: number;
    renderedColumnIndex?: number;
    renderedRowIndex?: number;
    rowRef: RefObject<HTMLTableRowElement | null>;
    table: MTT_TableInstance<TData>;
    virtualCell?: MTT_VirtualItem;
}
declare const MTT_TableBodyCell: <TData extends MTT_RowData>({ cell, numRows, renderedColumnIndex, renderedRowIndex, rowRef, table, virtualCell, ...rest }: Props$R<TData>) => react_jsx_runtime.JSX.Element;
declare const Memo_MTT_TableBodyCell: typeof MTT_TableBodyCell;

interface Props$Q<TData extends MTT_RowData, TValue = MTT_CellValue> {
    cell: MTT_Cell<TData, TValue>;
    renderedColumnIndex?: number;
    renderedRowIndex?: number;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableBodyCellValue: <TData extends MTT_RowData>({ cell, renderedColumnIndex, renderedRowIndex, table, }: Props$Q<TData>) => react.ReactNode;

interface Props$P<TData extends MTT_RowData> extends TableTrProps {
    table: MTT_TableInstance<TData>;
    tableProps: Partial<TableProps>;
}
declare const MTT_TableBodyEmptyRow: <TData extends MTT_RowData>({ table, tableProps, ...commonRowProps }: Props$P<TData>) => react_jsx_runtime.JSX.Element;

interface Props$O<TData extends MTT_RowData> extends TableTrProps {
    columnVirtualizer?: MTT_ColumnVirtualizer;
    numRows?: number;
    pinnedRowIds?: string[];
    renderedRowIndex?: number;
    row: MTT_Row<TData>;
    rowVirtualizer?: MTT_RowVirtualizer;
    table: MTT_TableInstance<TData>;
    tableProps: Partial<TableProps>;
    virtualRow?: MTT_VirtualItem;
}
declare const MTT_TableBodyRow: <TData extends MTT_RowData>({ children, columnVirtualizer, numRows, pinnedRowIds, renderedRowIndex, row, rowVirtualizer, table, tableProps, virtualRow, ...rest }: Props$O<TData>) => react_jsx_runtime.JSX.Element;
declare const Memo_MTT_TableBodyRow: typeof MTT_TableBodyRow;

interface Props$N<TData extends MTT_RowData> extends ActionIconProps {
    row: MTT_Row<TData>;
    rowRef: RefObject<HTMLTableRowElement>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableBodyRowGrabHandle: <TData extends MTT_RowData>({ row, rowRef, table, ...rest }: Props$N<TData>) => react_jsx_runtime.JSX.Element;

interface Props$M<TData extends MTT_RowData> extends ActionIconProps {
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableBodyRowPinButton: <TData extends MTT_RowData>({ row, table, ...rest }: Props$M<TData>) => react_jsx_runtime.JSX.Element | null;

interface Props$L<TData extends MTT_RowData> extends TableTdProps {
    parentRowRef: RefObject<HTMLTableRowElement | null>;
    renderedRowIndex?: number;
    row: MTT_Row<TData>;
    rowVirtualizer?: MTT_RowVirtualizer;
    striped?: false | string;
    table: MTT_TableInstance<TData>;
    virtualRow?: MTT_VirtualItem;
}
declare const MTT_TableDetailPanel: <TData extends MTT_RowData>({ parentRowRef, renderedRowIndex, row, rowVirtualizer, striped, table, virtualRow, ...rest }: Props$L<TData>) => react_jsx_runtime.JSX.Element;

interface Props$K<TData extends MTT_RowData> {
    column: MTT_Column<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_ColumnPinningButtons: <TData extends MTT_RowData>({ column, table, }: Props$K<TData>) => react_jsx_runtime.JSX.Element;

interface Props$J<TData extends MTT_RowData, TValue = MTT_CellValue> extends UnstyledButtonProps {
    cell: MTT_Cell<TData, TValue>;
    children: ReactNode;
    table: MTT_TableInstance<TData>;
}
declare const MTT_CopyButton: <TData extends MTT_RowData>({ cell, children, table, ...rest }: Props$J<TData>) => react_jsx_runtime.JSX.Element;

interface Props$I<TData extends MTT_RowData> extends BoxProps {
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
    variant?: "icon" | "text";
}
declare const MTT_EditActionButtons: <TData extends MTT_RowData>({ row, table, variant, ...rest }: Props$I<TData>) => react_jsx_runtime.JSX.Element;

interface Props$H<TData extends MTT_RowData> extends ActionIconProps {
    table: MTT_TableInstance<TData>;
}
declare const MTT_ExpandAllButton: <TData extends MTT_RowData>({ table, ...rest }: Props$H<TData>) => react_jsx_runtime.JSX.Element;

interface Props$G<TData extends MTT_RowData> extends ActionIconProps {
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_ExpandButton: <TData extends MTT_RowData>({ row, table, ...rest }: Props$G<TData>) => react_jsx_runtime.JSX.Element;

interface Props$F<TData extends MTT_RowData> {
    actionIconProps?: ActionIconProps & HTMLPropsRef<HTMLButtonElement>;
    onDragEnd: DragEventHandler<HTMLButtonElement>;
    onDragStart: DragEventHandler<HTMLButtonElement>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_GrabHandleButton: <TData extends MTT_RowData>({ actionIconProps, onDragEnd, onDragStart, table: { options: { icons: { IconGripHorizontal }, localization: { move }, }, }, }: Props$F<TData>) => react_jsx_runtime.JSX.Element;

interface Props$E<TData extends MTT_RowData> extends ActionIconProps {
    pinningPosition: RowPinningPosition;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_RowPinButton: <TData extends MTT_RowData>({ pinningPosition, row, table, ...rest }: Props$E<TData>) => react_jsx_runtime.JSX.Element;

interface Props$D<TData extends MTT_RowData> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MTT_TableInstance<TData>;
}
declare const MTT_ShowHideColumnsButton: <TData extends MTT_RowData>({ table, title, ...rest }: Props$D<TData>) => react_jsx_runtime.JSX.Element;

interface Props$C<TData extends MTT_RowData> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MTT_TableInstance<TData>;
}
declare const MTT_ToggleDensePaddingButton: <TData extends MTT_RowData>({ table: { getState, options: { icons: { IconBaselineDensityLarge, IconBaselineDensityMedium, IconBaselineDensitySmall, }, localization: { toggleDensity }, }, setDensity, }, title, ...rest }: Props$C<TData>) => react_jsx_runtime.JSX.Element;

interface Props$B<TData extends MTT_RowData> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MTT_TableInstance<TData>;
}
declare const MTT_ToggleFiltersButton: <TData extends MTT_RowData>({ table: { getState, options: { icons: { IconFilter, IconFilterOff }, localization: { showHideFilters }, }, setShowColumnFilters, }, title, ...rest }: Props$B<TData>) => react_jsx_runtime.JSX.Element;

interface Props$A<TData extends MTT_RowData> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MTT_TableInstance<TData>;
}
declare const MTT_ToggleFullScreenButton: <TData extends MTT_RowData>({ table: { getState, options: { icons: { IconMaximize, IconMinimize }, localization: { toggleFullScreen }, }, setIsFullScreen, }, title, ...rest }: Props$A<TData>) => react_jsx_runtime.JSX.Element;

interface Props$z<TData extends MTT_RowData> extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
    table: MTT_TableInstance<TData>;
}
declare const MTT_ToggleGlobalFilterButton: <TData extends MTT_RowData>({ table: { getState, options: { icons: { IconSearch, IconSearchOff }, localization: { showHideSearch }, }, refs: { searchInputRef }, setShowGlobalFilter, }, title, ...rest }: Props$z<TData>) => react_jsx_runtime.JSX.Element;

interface Props$y<TData extends MTT_RowData, TValue = MTT_CellValue> {
    cell: MTT_Cell<TData, TValue>;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_ToggleRowActionMenuButton: <TData extends MTT_RowData>({ cell, row, table, }: Props$y<TData>) => react_jsx_runtime.JSX.Element;

interface Props$x<TData extends MTT_RowData> extends TableTfootProps {
    columnVirtualizer?: MTT_ColumnVirtualizer;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableFooter: <TData extends MTT_RowData>({ columnVirtualizer, table, ...rest }: Props$x<TData>) => react_jsx_runtime.JSX.Element;

interface Props$w<TData extends MTT_RowData> extends TableThProps {
    footer: MTT_Header<TData>;
    renderedColumnIndex?: number;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableFooterCell: <TData extends MTT_RowData>({ footer, renderedColumnIndex, table, ...rest }: Props$w<TData>) => react_jsx_runtime.JSX.Element;

interface Props$v<TData extends MTT_RowData> extends TableTrProps {
    columnVirtualizer?: MTT_ColumnVirtualizer;
    footerGroup: MTT_HeaderGroup<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableFooterRow: <TData extends MTT_RowData>({ columnVirtualizer, footerGroup, table, ...rest }: Props$v<TData>) => react_jsx_runtime.JSX.Element | null;

interface Props$u<TData extends MTT_RowData> extends TableTheadProps {
    columnVirtualizer?: MTT_ColumnVirtualizer;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableHead: <TData extends MTT_RowData>({ columnVirtualizer, table, ...rest }: Props$u<TData>) => react_jsx_runtime.JSX.Element;

interface Props$t<TData extends MTT_RowData> extends TableThProps {
    columnVirtualizer?: MTT_ColumnVirtualizer;
    header: MTT_Header<TData>;
    renderedHeaderIndex?: number;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableHeadCell: <TData extends MTT_RowData>({ columnVirtualizer, header, renderedHeaderIndex, table, ...rest }: Props$t<TData>) => react_jsx_runtime.JSX.Element;

interface Props$s<TData extends MTT_RowData> extends FlexProps {
    header: MTT_Header<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableHeadCellFilterContainer: <TData extends MTT_RowData>({ header, table, ...rest }: Props$s<TData>) => react_jsx_runtime.JSX.Element;

interface Props$r<TData extends MTT_RowData> extends ActionIconProps {
    header: MTT_Header<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableHeadCellFilterLabel: <TData extends MTT_RowData>({ header, table, ...rest }: Props$r<TData>) => react_jsx_runtime.JSX.Element;

interface Props$q<TData extends MTT_RowData, TValue = MTT_CellValue> extends ActionIconProps {
    column: MTT_Column<TData, TValue>;
    table: MTT_TableInstance<TData>;
    tableHeadCellRef: RefObject<HTMLTableCellElement>;
}
declare const MTT_TableHeadCellGrabHandle: <TData extends MTT_RowData>({ column, table, tableHeadCellRef, ...rest }: Props$q<TData>) => react_jsx_runtime.JSX.Element;

interface Props$p<TData extends MTT_RowData> extends BoxProps {
    header: MTT_Header<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableHeadCellResizeHandle: <TData extends MTT_RowData>({ header, table, ...rest }: Props$p<TData>) => react_jsx_runtime.JSX.Element;

interface Props$o<TData extends MTT_RowData> extends ActionIconProps {
    header: MTT_Header<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableHeadCellSortLabel: <TData extends MTT_RowData>({ header, table, ...rest }: Props$o<TData>) => react_jsx_runtime.JSX.Element;

interface Props$n<TData extends MTT_RowData> extends TableTrProps {
    columnVirtualizer?: MTT_ColumnVirtualizer;
    headerGroup: MTT_HeaderGroup<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableHeadRow: <TData extends MTT_RowData>({ columnVirtualizer, headerGroup, table, ...rest }: Props$n<TData>) => react_jsx_runtime.JSX.Element;

interface PropsTextInput<TData extends MTT_RowData, TValue = MTT_CellValue> extends TextInputProps {
    cell: MTT_Cell<TData, TValue>;
    table: MTT_TableInstance<TData>;
}
interface PropsSelect<TData extends MTT_RowData, TValue = MTT_CellValue> extends SelectProps {
    cell: MTT_Cell<TData, TValue>;
    table: MTT_TableInstance<TData>;
}
interface PropsMultiSelect<TData extends MTT_RowData, TValue = MTT_CellValue> extends MultiSelectProps {
    cell: MTT_Cell<TData, TValue>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_EditCellTextInput: <TData extends MTT_RowData>({ cell, table, ...rest }: PropsMultiSelect<TData> | PropsSelect<TData> | PropsTextInput<TData>) => string | number | bigint | boolean | Iterable<react.ReactNode> | Promise<string | number | bigint | boolean | react.ReactPortal | react.ReactElement<unknown, string | react.JSXElementConstructor<any>> | Iterable<react.ReactNode> | null | undefined> | react_jsx_runtime.JSX.Element | null | undefined;

interface Props$m<TData extends MTT_RowData, TValue = MTT_CellValue> extends CheckboxProps {
    column: MTT_Column<TData, TValue>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_FilterCheckbox: <TData extends MTT_RowData>({ column, table, ...rest }: Props$m<TData>) => react_jsx_runtime.JSX.Element;

interface Props$l<TData extends MTT_RowData> extends BoxProps {
    header: MTT_Header<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_FilterRangeFields: <TData extends MTT_RowData>({ header, table, ...rest }: Props$l<TData>) => react_jsx_runtime.JSX.Element;

interface Props$k<TData extends MTT_RowData> extends RangeSliderProps {
    header: MTT_Header<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_FilterRangeSlider: <TData extends MTT_RowData>({ header, table, ...rest }: Props$k<TData>) => react_jsx_runtime.JSX.Element;

interface Props$j<TData extends MTT_RowData> extends TextInputProps {
    header: MTT_Header<TData>;
    rangeFilterIndex?: number;
    table: MTT_TableInstance<TData>;
}
declare const MTT_FilterTextInput: <TData extends MTT_RowData>({ header, rangeFilterIndex, table, ...rest }: Props$j<TData>) => react_jsx_runtime.JSX.Element;

interface Props$i<TData extends MTT_RowData> extends TextInputProps {
    table: MTT_TableInstance<TData>;
}
declare const MTT_GlobalFilterTextInput: <TData extends MTT_RowData>({ table, ...rest }: Props$i<TData>) => react_jsx_runtime.JSX.Element;

interface Props$h<TData extends MTT_RowData> extends CheckboxProps {
    renderedRowIndex?: number;
    row?: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_SelectCheckbox: <TData extends MTT_RowData>({ renderedRowIndex, row, table, ...rest }: Props$h<TData>) => react_jsx_runtime.JSX.Element;

type TableInstanceProp<TData extends MTT_RowData> = {
    table: MTT_TableInstance<TData>;
};
type Props$g<TData extends MTT_RowData> = Xor<TableInstanceProp<TData>, MTT_TableOptions<TData>>;
declare const MantineTanstackTable: <TData extends MTT_RowData>(props: Props$g<TData>) => react_jsx_runtime.JSX.Element;

interface Props$f<TData extends MTT_RowData> extends MenuProps {
    header: MTT_Header<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_ColumnActionMenu: <TData extends MTT_RowData>({ header, table, ...rest }: Props$f<TData>) => react_jsx_runtime.JSX.Element;

declare const mttFilterOptions: (localization: MTT_Localization) => MTT_InternalFilterOption[];
interface Props$e<TData extends MTT_RowData> {
    header?: MTT_Header<TData>;
    onSelect?: () => void;
    table: MTT_TableInstance<TData>;
}
declare const MTT_FilterOptionMenu: <TData extends MTT_RowData>({ header, onSelect, table, }: Props$e<TData>) => react_jsx_runtime.JSX.Element;

interface Props$d<TData extends MTT_RowData> extends ActionIconProps {
    handleEdit: (event: MouseEvent) => void;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_RowActionMenu: <TData extends MTT_RowData>({ handleEdit, row, table, ...rest }: Props$d<TData>) => react_jsx_runtime.JSX.Element;

interface Props$c<TData extends MTT_RowData> {
    table: MTT_TableInstance<TData>;
}
declare const MTT_ShowHideColumnsMenu: <TData extends MTT_RowData>({ table, }: Props$c<TData>) => react_jsx_runtime.JSX.Element;

interface Props$b<TData extends MTT_RowData, TValue = MTT_CellValue> {
    allColumns: MTT_Column<TData>[];
    column: MTT_Column<TData, TValue>;
    hoveredColumn: MTT_Column<TData> | null;
    setHoveredColumn: Dispatch<SetStateAction<MTT_Column<TData> | null>>;
    table: MTT_TableInstance<TData>;
}
declare const MTT_ShowHideColumnsMenuItems: <TData extends MTT_RowData>({ allColumns, column, hoveredColumn, setHoveredColumn, table, }: Props$b<TData>) => react_jsx_runtime.JSX.Element | null;

interface Props$a<TData extends MTT_RowData> extends Partial<ModalProps> {
    open: boolean;
    table: MTT_TableInstance<TData>;
}
declare const MTT_EditRowModal: <TData extends MTT_RowData>({ open, table, ...rest }: Props$a<TData>) => react_jsx_runtime.JSX.Element;

interface Props$9<TData extends MTT_RowData> extends TableProps {
    table: MTT_TableInstance<TData>;
}
declare const MTT_Table: <TData extends MTT_RowData>({ table, ...rest }: Props$9<TData>) => react_jsx_runtime.JSX.Element;

interface Props$8<TData extends MTT_RowData> extends BoxProps {
    table: MTT_TableInstance<TData>;
}
declare const MTT_TableContainer: <TData extends MTT_RowData>({ table, ...rest }: Props$8<TData>) => react_jsx_runtime.JSX.Element;

interface Props$7<TData extends MTT_RowData> extends PaperProps {
    table: MTT_TableInstance<TData>;
}
declare const MTT_TablePaper: <TData extends MTT_RowData>({ table, ...rest }: Props$7<TData>) => react_jsx_runtime.JSX.Element;

interface Props$6<TData extends MTT_RowData> extends BoxProps {
    table: MTT_TableInstance<TData>;
}
declare const MTT_BottomToolbar: <TData extends MTT_RowData>({ table, ...rest }: Props$6<TData>) => react_jsx_runtime.JSX.Element;

interface Props$5<TData extends MTT_RowData> extends Partial<ProgressProps> {
    isTopToolbar: boolean;
    table: MTT_TableInstance<TData>;
}
declare const MTT_ProgressBar: <TData extends MTT_RowData>({ isTopToolbar, table, ...rest }: Props$5<TData>) => react_jsx_runtime.JSX.Element;

interface Props$4<TData extends MTT_RowData> extends Partial<PaginationProps> {
    position?: "bottom" | "top";
    table: MTT_TableInstance<TData>;
}
declare const MTT_TablePagination: <TData extends MTT_RowData>({ position, table, ...props }: Props$4<TData>) => react_jsx_runtime.JSX.Element;

interface Props$3<TData extends MTT_RowData> extends Partial<AlertProps> {
    stackAlertBanner?: boolean;
    table: MTT_TableInstance<TData>;
}
declare const MTT_ToolbarAlertBanner: <TData extends MTT_RowData>({ stackAlertBanner, table, ...rest }: Props$3<TData>) => react_jsx_runtime.JSX.Element;

interface Props$2<TData extends MTT_RowData> extends FlexProps {
    table: MTT_TableInstance<TData>;
}
declare const MTT_ToolbarDropZone: <TData extends MTT_RowData>({ table, ...rest }: Props$2<TData>) => react_jsx_runtime.JSX.Element;

interface Props$1<TData extends MTT_RowData> extends FlexProps {
    table: MTT_TableInstance<TData>;
}
declare const MTT_ToolbarInternalButtons: <TData extends MTT_RowData>({ table, ...rest }: Props$1<TData>) => react_jsx_runtime.JSX.Element;

interface Props<TData extends MTT_RowData> extends BoxProps {
    table: MTT_TableInstance<TData>;
}
declare const MTT_TopToolbar: <TData extends MTT_RowData>({ table, ...rest }: Props<TData>) => react_jsx_runtime.JSX.Element;

declare const useMantineTanstackTable: <TData extends MTT_RowData>(tableOptions: MTT_TableOptions<TData>) => MTT_TableInstance<TData>;

declare const useMTT_ColumnVirtualizer: <TData extends MTT_RowData, TScrollElement extends Element | Window = HTMLDivElement, TItemElement extends Element = HTMLTableCellElement>(table: MTT_TableInstance<TData>) => MTT_ColumnVirtualizer | undefined;

declare const useMTT_Effects: <TData extends MTT_RowData>(table: MTT_TableInstance<TData>) => void;

declare const useMTT_Rows: <TData extends MTT_RowData>(table: MTT_TableInstance<TData>) => MTT_Row<TData>[];

declare const useMTT_RowVirtualizer: <TData extends MTT_RowData, TScrollElement extends Element | Window = HTMLDivElement, TItemElement extends Element = HTMLTableRowElement>(table: MTT_TableInstance<TData>, rows?: MTT_Row<TData>[]) => MTT_RowVirtualizer<TScrollElement, TItemElement> | undefined;

/**
 * The MTT hook that wraps the TanStack useReactTable hook and adds additional functionality
 * @param definedTableOptions - table options with proper defaults set
 * @returns the MTT table instance
 */
declare const useMTT_TableInstance: <TData extends MTT_RowData>(definedTableOptions: MTT_DefinedTableOptions<TData>) => MTT_TableInstance<TData>;

declare const MTT_DefaultColumn: {
    readonly filterVariant: "text";
    readonly maxSize: 1000;
    readonly minSize: 40;
    readonly size: 180;
};
declare const MTT_DefaultDisplayColumn: {
    readonly columnDefType: "display";
    readonly enableClickToCopy: false;
    readonly enableColumnActions: false;
    readonly enableColumnDragging: false;
    readonly enableColumnFilter: false;
    readonly enableColumnOrdering: false;
    readonly enableEditing: false;
    readonly enableGlobalFilter: false;
    readonly enableGrouping: false;
    readonly enableHiding: false;
    readonly enableResizing: false;
    readonly enableSorting: false;
};
declare const useMTT_TableOptions: <TData extends MTT_RowData>(tableOptions: MTT_TableOptions<TData>) => MTT_DefinedTableOptions<TData>;

declare const getColumnId: <TData extends MTT_RowData>(columnDef: MTT_ColumnDef<TData>) => string;
declare const getAllLeafColumnDefs: <TData extends MTT_RowData>(columns: MTT_ColumnDef<TData>[]) => MTT_ColumnDef<TData>[];
declare const prepareColumns: <TData extends MTT_RowData>({ columnDefs, tableOptions, }: {
    columnDefs: MTT_ColumnDef<TData>[];
    tableOptions: MTT_DefinedTableOptions<TData>;
}) => MTT_DefinedColumnDef<TData>[];
declare const reorderColumn: <TData extends MTT_RowData>(draggedColumn: MTT_Column<TData>, targetColumn: MTT_Column<TData>, columnOrder: MTT_ColumnOrderState) => MTT_ColumnOrderState;
declare const getDefaultColumnFilterFn: <TData extends MTT_RowData>(columnDef: MTT_ColumnDef<TData>) => MTT_FilterOption;

declare function defaultDisplayColumnProps<TData extends MTT_RowData>({ header, id, size, tableOptions, }: {
    header?: keyof MTT_Localization;
    id: MTT_DisplayColumnIds;
    size: number;
    tableOptions: MTT_DefinedTableOptions<TData>;
}): MTT_ColumnDef<TData>;
declare const showRowPinningColumn: <TData extends MTT_RowData>(tableOptions: MTT_StatefulTableOptions<TData>) => boolean;
declare const showRowDragColumn: <TData extends MTT_RowData>(tableOptions: MTT_StatefulTableOptions<TData>) => boolean;
declare const showRowExpandColumn: <TData extends MTT_RowData>(tableOptions: MTT_StatefulTableOptions<TData>) => boolean;
declare const showRowActionsColumn: <TData extends MTT_RowData>(tableOptions: MTT_StatefulTableOptions<TData>) => boolean;
declare const showRowSelectionColumn: <TData extends MTT_RowData>(tableOptions: MTT_StatefulTableOptions<TData>) => boolean;
declare const showRowNumbersColumn: <TData extends MTT_RowData>(tableOptions: MTT_StatefulTableOptions<TData>) => boolean;
declare const showRowSpacerColumn: <TData extends MTT_RowData>(tableOptions: MTT_StatefulTableOptions<TData>) => boolean;
declare const getLeadingDisplayColumnIds: <TData extends MTT_RowData>(tableOptions: MTT_StatefulTableOptions<TData>) => MTT_DisplayColumnIds[];
declare const getTrailingDisplayColumnIds: <TData extends MTT_RowData>(tableOptions: MTT_StatefulTableOptions<TData>) => MTT_DisplayColumnIds[];
declare const getDefaultColumnOrderIds: <TData extends MTT_RowData>(tableOptions: MTT_StatefulTableOptions<TData>, reset?: boolean) => string[];

declare const getMTT_Rows: <TData extends MTT_RowData>(table: MTT_TableInstance<TData>, all?: boolean) => MTT_Row<TData>[];
declare const getCanRankRows: <TData extends MTT_RowData>(table: MTT_TableInstance<TData>) => boolean | undefined;
declare const getIsRankingRows: <TData extends MTT_RowData>(table: MTT_TableInstance<TData>) => any;
declare const getIsRowSelected: <TData extends MTT_RowData>({ row, table, }: {
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
}) => boolean | undefined;
declare const getMTT_RowSelectionHandler: <TData extends MTT_RowData>({ renderedRowIndex, row, table, }: {
    renderedRowIndex?: number;
    row: MTT_Row<TData>;
    table: MTT_TableInstance<TData>;
}) => (event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLTableRowElement>, value?: boolean) => void;
declare const getMTT_SelectAllHandler: <TData extends MTT_RowData>({ table }: {
    table: MTT_TableInstance<TData>;
}) => (event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>, value?: boolean, forceAll?: boolean) => void;

declare const parseCSSVarId: (id: string) => string;
declare const getPrimaryShade: (theme: MantineTheme) => number;
declare const getPrimaryColor: (theme: MantineTheme, shade?: MantineShade) => string;
declare function dataVariable(name: string, value: boolean | number | string | undefined): {
    [x: string]: string;
} | null;

declare const flexRender: (Comp: Renderable<any>, props: any) => ReactElement | ReactNode;
declare function createMTTColumnHelper<TData extends MTT_RowData>(): MTT_ColumnHelper<TData>;
declare const createRow: <TData extends MTT_RowData>(table: MTT_TableInstance<TData>, originalRow?: TData, rowIndex?: number, depth?: number, subRows?: MTT_Row<TData>[], parentId?: string) => MTT_Row<TData>;

declare const assignRef: <T>(ref: Ref<T> | undefined | null, value: T) => void;
declare const parseFromValuesOrFunc: <T, U>(fn: ((arg: U) => T) | T | undefined, arg: U) => T | undefined;

export { MTT_AggregationFns, MTT_BottomToolbar, MTT_ColumnActionMenu, MTT_ColumnPinningButtons, MTT_CopyButton, MTT_DefaultColumn, MTT_DefaultDisplayColumn, MTT_EditActionButtons, MTT_EditCellTextInput, MTT_EditRowModal, MTT_ExpandAllButton, MTT_ExpandButton, MTT_FilterCheckbox, MTT_FilterFns, MTT_FilterOptionMenu, MTT_FilterRangeFields, MTT_FilterRangeSlider, MTT_FilterTextInput, MTT_GlobalFilterTextInput, MTT_GrabHandleButton, MTT_ProgressBar, MTT_RowActionMenu, MTT_RowPinButton, MTT_SelectCheckbox, MTT_ShowHideColumnsButton, MTT_ShowHideColumnsMenu, MTT_ShowHideColumnsMenuItems, MTT_SortingFns, MTT_Table, MTT_TableBody, MTT_TableBodyCell, MTT_TableBodyCellValue, MTT_TableBodyEmptyRow, MTT_TableBodyRow, MTT_TableBodyRowGrabHandle, MTT_TableBodyRowPinButton, MTT_TableContainer, MTT_TableDetailPanel, MTT_TableFooter, MTT_TableFooterCell, MTT_TableFooterRow, MTT_TableHead, MTT_TableHeadCell, MTT_TableHeadCellFilterContainer, MTT_TableHeadCellFilterLabel, MTT_TableHeadCellGrabHandle, MTT_TableHeadCellResizeHandle, MTT_TableHeadCellSortLabel, MTT_TableHeadRow, MTT_TablePagination, MTT_TablePaper, MTT_ToggleDensePaddingButton, MTT_ToggleFiltersButton, MTT_ToggleFullScreenButton, MTT_ToggleGlobalFilterButton, MTT_ToggleRowActionMenuButton, MTT_ToolbarAlertBanner, MTT_ToolbarDropZone, MTT_ToolbarInternalButtons, MTT_TopToolbar, MantineTanstackTable, Memo_MTT_TableBody, Memo_MTT_TableBodyCell, Memo_MTT_TableBodyRow, assignRef, createMTTColumnHelper, createRow, dataVariable, defaultDisplayColumnProps, flexRender, getAllLeafColumnDefs, getCanRankRows, getColumnId, getDefaultColumnFilterFn, getDefaultColumnOrderIds, getIsRankingRows, getIsRowSelected, getLeadingDisplayColumnIds, getMTT_RowSelectionHandler, getMTT_Rows, getMTT_SelectAllHandler, getPrimaryColor, getPrimaryShade, getTrailingDisplayColumnIds, localizedFilterOption, mttFilterOptions, parseCSSVarId, parseFromValuesOrFunc, prepareColumns, rankGlobalFuzzy, reorderColumn, showRowActionsColumn, showRowDragColumn, showRowExpandColumn, showRowNumbersColumn, showRowPinningColumn, showRowSelectionColumn, showRowSpacerColumn, useMTT_ColumnVirtualizer, useMTT_Effects, useMTT_RowVirtualizer, useMTT_Rows, useMTT_TableInstance, useMTT_TableOptions, useMantineTanstackTable };
export type { HTMLPropsRef, LiteralUnion, MTT_AggregationFn, MTT_AggregationOption, MTT_Cell, MTT_CellValue, MTT_Column, MTT_ColumnDef, MTT_ColumnFilterFnsState, MTT_ColumnFiltersState, MTT_ColumnHelper, MTT_ColumnOrderState, MTT_ColumnPinningState, MTT_ColumnSizingInfoState, MTT_ColumnSizingState, MTT_ColumnVirtualizer, MTT_CreateTableFeature, MTT_DefinedColumnDef, MTT_DefinedTableOptions, MTT_DensityState, MTT_DisplayColumnDef, MTT_DisplayColumnIds, MTT_ExpandedState, MTT_FilterFn, MTT_FilterOption, MTT_FilterTooltipValueFn, MTT_GroupColumnDef, MTT_GroupingState, MTT_Header, MTT_HeaderGroup, MTT_Icons, MTT_InternalFilterOption, MTT_Localization, MTT_PaginationProps, MTT_PaginationState, MTT_Row, MTT_RowData, MTT_RowModel, MTT_RowSelectionState, MTT_RowVirtualizer, MTT_SortingFn, MTT_SortingOption, MTT_SortingState, MTT_StatefulTableOptions, MTT_TableBodyProps, MTT_TableInstance, MTT_TableOptions, MTT_TableState, MTT_Updater, MTT_VirtualItem, MTT_VirtualizerOptions, MTT_VisibilityState, MantineShade, Prettify, Xor };
