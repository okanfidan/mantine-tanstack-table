import {
  type MTT_ColumnDef,
  type MTT_DefinedTableOptions,
  type MTT_DisplayColumnIds,
  type MTT_Localization,
  type MTT_RowData,
  type MTT_StatefulTableOptions,
} from "../types";
import { getAllLeafColumnDefs, getColumnId } from "./column.utils";

export function defaultDisplayColumnProps<TData extends MTT_RowData>({
  header,
  id,
  size,
  tableOptions,
}: {
  header?: keyof MTT_Localization;
  id: MTT_DisplayColumnIds;
  size: number;
  tableOptions: MTT_DefinedTableOptions<TData>;
}): MTT_ColumnDef<TData> {
  const { defaultDisplayColumn, displayColumnDefOptions, localization } =
    tableOptions;
  return {
    ...defaultDisplayColumn,
    header: header ? localization[header]! : "",
    size,
    ...displayColumnDefOptions?.[id],
    id,
  };
}

export const showRowPinningColumn = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): boolean => {
  const { enableRowPinning, rowPinningDisplayMode } = tableOptions;
  return !!(enableRowPinning && !rowPinningDisplayMode?.startsWith("select"));
};

export const showRowDragColumn = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): boolean => {
  const { enableRowDragging, enableRowOrdering } = tableOptions;
  return !!(enableRowDragging || enableRowOrdering);
};

export const showRowExpandColumn = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): boolean => {
  const {
    enableExpanding,
    enableGrouping,
    renderDetailPanel,
    state: { grouping },
  } = tableOptions;
  return !!(
    enableExpanding ||
    (enableGrouping && grouping?.length) ||
    renderDetailPanel
  );
};

export const showRowActionsColumn = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): boolean => {
  const {
    createDisplayMode,
    editDisplayMode,
    enableEditing,
    enableRowActions,
    state: { creatingRow },
  } = tableOptions;
  return !!(
    enableRowActions ||
    (creatingRow && createDisplayMode === "row") ||
    (enableEditing && ["modal", "row"].includes(editDisplayMode ?? ""))
  );
};

export const showRowSelectionColumn = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): boolean => !!tableOptions.enableRowSelection;

export const showRowNumbersColumn = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): boolean => !!tableOptions.enableRowNumbers;

export const showRowSpacerColumn = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): boolean => tableOptions.layoutMode === "grid-no-grow";

export const getLeadingDisplayColumnIds = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
) =>
  [
    showRowPinningColumn(tableOptions) && "mtt-row-pin",
    showRowDragColumn(tableOptions) && "mtt-row-drag",
    tableOptions.positionActionsColumn === "first" &&
      showRowActionsColumn(tableOptions) &&
      "mtt-row-actions",
    tableOptions.positionExpandColumn === "first" &&
      showRowExpandColumn(tableOptions) &&
      "mtt-row-expand",
    showRowSelectionColumn(tableOptions) && "mtt-row-select",
    showRowNumbersColumn(tableOptions) && "mtt-row-numbers",
  ].filter(Boolean) as MTT_DisplayColumnIds[];

export const getTrailingDisplayColumnIds = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
) =>
  [
    tableOptions.positionActionsColumn === "last" &&
      showRowActionsColumn(tableOptions) &&
      "mtt-row-actions",
    tableOptions.positionExpandColumn === "last" &&
      showRowExpandColumn(tableOptions) &&
      "mtt-row-expand",
    showRowSpacerColumn(tableOptions) && "mtt-row-spacer",
  ].filter(Boolean) as MTT_DisplayColumnIds[];

export const getDefaultColumnOrderIds = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
  reset = false,
) => {
  const {
    state: { columnOrder: currentColumnOrderIds = [] },
  } = tableOptions;

  const leadingDisplayColIds: string[] =
    getLeadingDisplayColumnIds(tableOptions);
  const trailingDisplayColIds: string[] =
    getTrailingDisplayColumnIds(tableOptions);

  const defaultColumnDefIds = getAllLeafColumnDefs(tableOptions.columns).map(
    (columnDef) => getColumnId(columnDef),
  );

  let allLeafColumnDefIds = reset
    ? defaultColumnDefIds
    : Array.from(new Set([...currentColumnOrderIds, ...defaultColumnDefIds]));

  allLeafColumnDefIds = allLeafColumnDefIds.filter(
    (colId) =>
      !leadingDisplayColIds.includes(colId) &&
      !trailingDisplayColIds.includes(colId),
  );

  return [
    ...leadingDisplayColIds,
    ...allLeafColumnDefIds,
    ...trailingDisplayColIds,
  ];
};
