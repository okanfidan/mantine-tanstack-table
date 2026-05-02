import { ActionIcon, type ActionIconProps, Menu, Tooltip } from "@mantine/core";

import {
  type HTMLPropsRef,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { MTT_ShowHideColumnsMenu } from "../menus/MTT_ShowHideColumnsMenu";

interface Props<TData extends MTT_RowData>
  extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
  table: MTT_TableInstance<TData>;
}

export const MTT_ShowHideColumnsButton = <TData extends MTT_RowData>({
  table,
  title,
  ...rest
}: Props<TData>) => {
  const {
    icons: { IconColumns },
    localization: { showHideColumns },
  } = table.options;

  return (
    <Menu closeOnItemClick={false} withinPortal>
      <Tooltip label={title ?? showHideColumns} withinPortal>
        <Menu.Target>
          <ActionIcon
            aria-label={title ?? showHideColumns}
            color="gray"
            size="lg"
            variant="subtle"
            {...rest}
          >
            <IconColumns />
          </ActionIcon>
        </Menu.Target>
      </Tooltip>
      <MTT_ShowHideColumnsMenu table={table} />
    </Menu>
  );
};
