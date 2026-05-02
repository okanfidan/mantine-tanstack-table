import { type MouseEvent } from "react";

import { ActionIcon, type ActionIconProps, Menu, Tooltip } from "@mantine/core";

import {
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";

interface Props<TData extends MTT_RowData> extends ActionIconProps {
  handleEdit: (event: MouseEvent) => void;
  row: MTT_Row<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_RowActionMenu = <TData extends MTT_RowData>({
  handleEdit,
  row,
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: {
      editDisplayMode,
      enableEditing,
      icons: { IconDots, IconEdit },
      localization,
      positionActionsColumn,
      renderRowActionMenuItems,
    },
  } = table;

  return (
    <Menu
      closeOnItemClick
      position={
        positionActionsColumn === "first"
          ? "bottom-start"
          : positionActionsColumn === "last"
            ? "bottom-end"
            : undefined
      }
      withinPortal
    >
      <Tooltip label={localization.rowActions} openDelay={1000} withinPortal>
        <Menu.Target>
          <ActionIcon
            aria-label={localization.rowActions}
            color="gray"
            onClick={(event) => event.stopPropagation()}
            size="sm"
            variant="subtle"
            {...rest}
          >
            <IconDots />
          </ActionIcon>
        </Menu.Target>
      </Tooltip>
      <Menu.Dropdown onClick={(event) => event.stopPropagation()}>
        {enableEditing && editDisplayMode !== "table" && (
          <Menu.Item leftSection={<IconEdit />} onClick={handleEdit}>
            {localization.edit}
          </Menu.Item>
        )}
        {renderRowActionMenuItems?.({
          row,
          table,
        })}
      </Menu.Dropdown>
    </Menu>
  );
};
