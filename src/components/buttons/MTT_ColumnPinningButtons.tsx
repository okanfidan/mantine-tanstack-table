import clsx from "clsx";

import classes from "./MTT_ColumnPinningButtons.module.css";

import { ActionIcon, Flex, Tooltip } from "@mantine/core";

import {
  type MTT_Column,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";

interface Props<TData extends MTT_RowData> {
  column: MTT_Column<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_ColumnPinningButtons = <TData extends MTT_RowData>({
  column,
  table,
}: Props<TData>) => {
  const {
    options: {
      icons: { IconPinned, IconPinnedOff },
      localization,
    },
  } = table;
  return (
    <Flex className={clsx("mtt-column-pinning-buttons", classes.root)}>
      {column.getIsPinned() ? (
        <Tooltip label={localization.unpin} withinPortal>
          <ActionIcon
            color="gray"
            onClick={() => column.pin(false)}
            size="md"
            variant="subtle"
          >
            <IconPinnedOff />
          </ActionIcon>
        </Tooltip>
      ) : (
        <>
          <Tooltip label={localization.pinToLeft} withinPortal>
            <ActionIcon
              color="gray"
              onClick={() => column.pin("left")}
              size="md"
              variant="subtle"
            >
              <IconPinned className={classes.left} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={localization.pinToRight} withinPortal>
            <ActionIcon
              color="gray"
              onClick={() => column.pin("right")}
              size="md"
              variant="subtle"
            >
              <IconPinned className={classes.right} />
            </ActionIcon>
          </Tooltip>
        </>
      )}
    </Flex>
  );
};
