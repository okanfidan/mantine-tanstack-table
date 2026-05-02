import { Flex, Modal, type ModalProps, Stack } from "@mantine/core";

import {
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_EditActionButtons } from "../buttons/MTT_EditActionButtons";
import { MTT_EditCellTextInput } from "../inputs/MTT_EditCellTextInput";

interface Props<TData extends MTT_RowData> extends Partial<ModalProps> {
  open: boolean;
  table: MTT_TableInstance<TData>;
}

export const MTT_EditRowModal = <TData extends MTT_RowData>({
  open,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      mantineCreateRowModalProps,
      mantineEditRowModalProps,
      onCreatingRowCancel,
      onEditingRowCancel,
      renderCreateRowModalContent,
      renderEditRowModalContent,
    },
    setCreatingRow,
    setEditingRow,
  } = table;
  const { creatingRow, editingRow } = getState();
  const row = (creatingRow ?? editingRow) as MTT_Row<TData>;

  const arg = { row, table };
  const modalProps = {
    ...parseFromValuesOrFunc(mantineEditRowModalProps, arg),
    ...(creatingRow && parseFromValuesOrFunc(mantineCreateRowModalProps, arg)),
    ...rest,
  };

  const internalEditComponents = row
    .getAllCells()
    .filter((cell) => cell.column.columnDef.columnDefType === "data")
    .map((cell) => (
      <MTT_EditCellTextInput cell={cell} key={cell.id} table={table} />
    ));

  const handleCancel = () => {
    if (creatingRow) {
      onCreatingRowCancel?.({ row, table });
      setCreatingRow(null);
    } else {
      onEditingRowCancel?.({ row, table });
      setEditingRow(null);
    }
    row._valuesCache = {} as any; //reset values cache
    modalProps.onClose?.();
  };

  return (
    <Modal
      opened={open}
      withCloseButton={false}
      {...modalProps}
      key={row.id}
      onClose={handleCancel}
    >
      {((creatingRow &&
        renderCreateRowModalContent?.({
          internalEditComponents,
          row,
          table,
        })) ||
        renderEditRowModalContent?.({
          internalEditComponents,
          row,
          table,
        })) ?? (
        <>
          <form onSubmit={(e) => e.preventDefault()}>
            <Stack gap="lg" pb={24} pt={16}>
              {internalEditComponents}
            </Stack>
          </form>
          <Flex justify="flex-end">
            <MTT_EditActionButtons row={row} table={table} variant="text" />
          </Flex>
        </>
      )}
    </Modal>
  );
};
