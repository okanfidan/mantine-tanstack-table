import { type MouseEvent } from "react";

import { ActionIcon, Tooltip } from "@mantine/core";

import { MTT_EditActionButtons } from "./MTT_EditActionButtons";

import {
  type MTT_Cell,
  type MTT_CellValue,
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_RowActionMenu } from "../menus/MTT_RowActionMenu";

interface Props<TData extends MTT_RowData, TValue = MTT_CellValue> {
  cell: MTT_Cell<TData, TValue>;
  row: MTT_Row<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_ToggleRowActionMenuButton = <TData extends MTT_RowData>({
  cell,
  row,
  table,
}: Props<TData>) => {
  const {
    getState,
    options: {
      createDisplayMode,
      editDisplayMode,
      enableEditing,
      icons: { IconEdit },
      localization: { edit },
      renderRowActionMenuItems,
      renderRowActions,
    },
    setEditingRow,
  } = table;

  const { creatingRow, editingRow } = getState();

  const isCreating = creatingRow?.id === row.id;
  const isEditing = editingRow?.id === row.id;

  const handleStartEditMode = (event: MouseEvent) => {
    event.stopPropagation();
    setEditingRow({ ...row });
  };

  const showEditActionButtons =
    (isCreating && createDisplayMode === "row") ||
    (isEditing && editDisplayMode === "row");

  return (
    <>
      {renderRowActions && !showEditActionButtons ? (
        renderRowActions({ cell, row, table })
      ) : showEditActionButtons ? (
        <MTT_EditActionButtons row={row} table={table} />
      ) : !renderRowActionMenuItems &&
        parseFromValuesOrFunc(enableEditing, row) ? (
        <Tooltip label={edit} openDelay={1000} position="right" withinPortal>
          <ActionIcon
            aria-label={edit}
            color="gray"
            disabled={!!editingRow && editingRow.id !== row.id}
            onClick={handleStartEditMode}
            size="md"
            variant="subtle"
          >
            <IconEdit />
          </ActionIcon>
        </Tooltip>
      ) : renderRowActionMenuItems ? (
        <MTT_RowActionMenu
          handleEdit={handleStartEditMode}
          row={row}
          table={table}
        />
      ) : null}
    </>
  );
};
