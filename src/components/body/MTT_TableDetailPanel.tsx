import clsx from "clsx";

import classes from "./MTT_TableDetailPanel.module.css";

import { type RefObject } from "react";

import { Collapse, TableTd, type TableTdProps, TableTr } from "@mantine/core";

import {
  type MTT_Row,
  type MTT_RowData,
  type MTT_RowVirtualizer,
  type MTT_TableInstance,
  type MTT_VirtualItem,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_EditCellTextInput } from "../inputs/MTT_EditCellTextInput";

interface Props<TData extends MTT_RowData> extends TableTdProps {
  parentRowRef: RefObject<HTMLTableRowElement | null>;
  renderedRowIndex?: number;
  row: MTT_Row<TData>;
  rowVirtualizer?: MTT_RowVirtualizer;
  striped?: false | string;
  table: MTT_TableInstance<TData>;
  virtualRow?: MTT_VirtualItem;
}

export const MTT_TableDetailPanel = <TData extends MTT_RowData>({
  parentRowRef,
  renderedRowIndex = 0,
  row,
  rowVirtualizer,
  striped,
  table,
  virtualRow,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    getVisibleLeafColumns,
    options: {
      layoutMode,
      mantineDetailPanelProps,
      mantineTableBodyRowProps,
      renderDetailPanel,
    },
  } = table;
  const { isLoading } = getState();

  const tableRowProps = parseFromValuesOrFunc(mantineTableBodyRowProps, {
    isDetailPanel: true,
    row,
    table,
  });

  const tableCellProps = {
    ...parseFromValuesOrFunc(mantineDetailPanelProps, {
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

  const DetailPanel =
    !isLoading &&
    row.getIsExpanded() &&
    renderDetailPanel?.({ internalEditComponents, row, table });

  return (
    <TableTr
      data-index={
        renderDetailPanel ? renderedRowIndex * 2 + 1 : renderedRowIndex
      }
      data-striped={striped}
      ref={(node: HTMLTableRowElement) => {
        if (node) {
          rowVirtualizer?.measureElement?.(node);
        }
      }}
      {...tableRowProps}
      __vars={{
        "--mtt-parent-row-height": virtualRow
          ? `${parentRowRef.current?.getBoundingClientRect()?.height}px`
          : undefined,
        "--mtt-virtual-row-start": virtualRow
          ? `${virtualRow.start}px`
          : undefined,
        ...tableRowProps?.__vars,
      }}
      className={clsx(
        "mantine-Table-tr-detail-panel",
        classes.root,
        layoutMode?.startsWith("grid") && classes["root-grid"],
        virtualRow && classes["root-virtual-row"],
        tableRowProps?.className,
      )}
    >
      <TableTd
        colSpan={getVisibleLeafColumns().length}
        component="td"
        {...tableCellProps}
        __vars={{
          "--mtt-inner-width": `${table.getTotalSize()}px`,
        }}
        className={clsx(
          "mantine-Table-td-detail-panel",
          classes.inner,
          layoutMode?.startsWith("grid") && classes["inner-grid"],
          row.getIsExpanded() && classes["inner-expanded"],
          virtualRow && classes["inner-virtual"],
        )}
        p={row.getIsExpanded() && DetailPanel ? "md" : 0}
      >
        {rowVirtualizer ? (
          row.getIsExpanded() && DetailPanel
        ) : (
          <Collapse expanded={row.getIsExpanded()}>{DetailPanel}</Collapse>
        )}
      </TableTd>
    </TableTr>
  );
};
