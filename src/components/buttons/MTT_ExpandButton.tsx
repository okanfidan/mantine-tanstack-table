import clsx from "clsx";

import classes from "./MTT_ExpandButton.module.css";

import { type MouseEvent } from "react";

import {
  ActionIcon,
  type ActionIconProps,
  Tooltip,
  useDirection,
} from "@mantine/core";

import {
  type MTT_Row,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_EditCellTextInput } from "../inputs/MTT_EditCellTextInput";

interface Props<TData extends MTT_RowData> extends ActionIconProps {
  row: MTT_Row<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_ExpandButton = <TData extends MTT_RowData>({
  row,
  table,
  ...rest
}: Props<TData>) => {
  const direction = useDirection();
  const {
    options: {
      icons: { IconChevronDown },
      localization,
      mantineExpandButtonProps,
      positionExpandColumn,
      renderDetailPanel,
    },
  } = table;

  const actionIconProps = {
    ...parseFromValuesOrFunc(mantineExpandButtonProps, {
      row,
      table,
    }),
    ...rest,
  };

  const internalEditComponents = row
    .getAllCells()
    .filter((cell) => cell.column.columnDef.columnDefType === "data")
    .map((cell) => (
      <MTT_EditCellTextInput cell={cell} key={cell.id} table={table} />
    ));

  const canExpand = row.getCanExpand();
  const isExpanded = row.getIsExpanded();

  const DetailPanel = !!renderDetailPanel?.({
    internalEditComponents,
    row,
    table,
  });

  const handleToggleExpand = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    row.toggleExpanded();
    actionIconProps?.onClick?.(event);
  };

  const rtl = direction.dir === "rtl" || positionExpandColumn === "last";

  return (
    <Tooltip
      disabled={!canExpand && !DetailPanel}
      label={
        actionIconProps?.title ??
        (isExpanded ? localization.collapse : localization.expand)
      }
      openDelay={1000}
      withinPortal
    >
      <ActionIcon
        aria-label={localization.expand}
        color="gray"
        disabled={!canExpand && !DetailPanel}
        variant="subtle"
        {...actionIconProps}
        __vars={{
          "--mtt-row-depth": `${row.depth}`,
        }}
        className={clsx(
          "mtt-expand-button",
          classes.root,
          classes[`root-${rtl ? "rtl" : "ltr"}`],
          actionIconProps?.className,
        )}
        onClick={handleToggleExpand}
        title={undefined}
      >
        {actionIconProps?.children ?? (
          <IconChevronDown
            className={clsx(
              "mtt-expand-button-chevron",
              classes.chevron,
              !canExpand && !renderDetailPanel
                ? classes.right
                : isExpanded
                  ? classes.up
                  : undefined,
            )}
          />
        )}
      </ActionIcon>
    </Tooltip>
  );
};
