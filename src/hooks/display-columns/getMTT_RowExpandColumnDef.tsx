import { type ReactNode } from "react";

import { Flex, Tooltip } from "@mantine/core";

import { MTT_ExpandAllButton } from "../../components/buttons/MTT_ExpandAllButton";
import { MTT_ExpandButton } from "../../components/buttons/MTT_ExpandButton";
import {
  type MTT_ColumnDef,
  type MTT_RowData,
  type MTT_StatefulTableOptions,
} from "../../types";
import { defaultDisplayColumnProps } from "../../utils/displayColumn.utils";

export const getMTT_RowExpandColumnDef = <TData extends MTT_RowData>(
  tableOptions: MTT_StatefulTableOptions<TData>,
): MTT_ColumnDef<TData> | null => {
  const {
    defaultColumn,
    enableExpandAll,
    groupedColumnMode,
    positionExpandColumn,
    renderDetailPanel,
    state: { grouping },
  } = tableOptions;

  const alignProps =
    positionExpandColumn === "last"
      ? ({
          align: "right",
        } as const)
      : undefined;

  return {
    Cell: ({ cell, column, row, table }) => {
      const expandButtonProps = { row, table };
      const subRowsLength = row.subRows?.length;
      if (tableOptions.groupedColumnMode === "remove" && row.groupingColumnId) {
        return (
          <Flex align="center" gap="0.25rem">
            <MTT_ExpandButton {...expandButtonProps} />
            <Tooltip
              label={table.getColumn(row.groupingColumnId).columnDef.header}
              openDelay={1000}
              position="right"
            >
              <span>{row.groupingValue as ReactNode}</span>
            </Tooltip>
            {!!subRowsLength && <span>({subRowsLength})</span>}
          </Flex>
        );
      } else {
        return (
          <>
            <MTT_ExpandButton {...expandButtonProps} />
            {column.columnDef.GroupedCell?.({ cell, column, row, table })}
          </>
        );
      }
    },
    Header: enableExpandAll
      ? ({ table }) => {
          return (
            <Flex align="center">
              <MTT_ExpandAllButton table={table} />
              {groupedColumnMode === "remove" &&
                grouping
                  ?.map(
                    (groupedColumnId) =>
                      table.getColumn(groupedColumnId).columnDef.header,
                  )
                  ?.join(", ")}
            </Flex>
          );
        }
      : undefined,
    mantineTableBodyCellProps: alignProps,
    mantineTableHeadCellProps: alignProps,
    ...defaultDisplayColumnProps({
      header: "expand",
      id: "mtt-row-expand",
      size:
        groupedColumnMode === "remove"
          ? (defaultColumn?.size ?? 180)
          : renderDetailPanel
            ? enableExpandAll
              ? 60
              : 70
            : 100,
      tableOptions,
    }),
  };
};
