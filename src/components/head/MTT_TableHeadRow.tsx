import clsx from "clsx";

import classes from "./MTT_TableHeadRow.module.css";

import { Box, TableTr, type TableTrProps } from "@mantine/core";

import { MTT_TableHeadCell } from "./MTT_TableHeadCell";

import {
  type MTT_ColumnVirtualizer,
  type MTT_Header,
  type MTT_HeaderGroup,
  type MTT_RowData,
  type MTT_TableInstance,
  type MTT_VirtualItem,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";

interface Props<TData extends MTT_RowData> extends TableTrProps {
  columnVirtualizer?: MTT_ColumnVirtualizer;
  headerGroup: MTT_HeaderGroup<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_TableHeadRow = <TData extends MTT_RowData>({
  columnVirtualizer,
  headerGroup,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { enableStickyHeader, layoutMode, mantineTableHeadRowProps },
  } = table;
  const { isFullScreen } = getState();

  const { virtualColumns, virtualPaddingLeft, virtualPaddingRight } =
    columnVirtualizer ?? {};

  const tableRowProps = {
    ...parseFromValuesOrFunc(mantineTableHeadRowProps, {
      headerGroup,
      table,
    }),
    ...rest,
  };

  return (
    <TableTr
      {...tableRowProps}
      className={clsx(
        classes.root,
        (enableStickyHeader || isFullScreen) && classes.sticky,
        layoutMode?.startsWith("grid") && classes["layout-mode-grid"],
        tableRowProps?.className,
      )}
    >
      {virtualPaddingLeft ? (
        <Box component="th" display="flex" w={virtualPaddingLeft} />
      ) : null}
      {(virtualColumns ?? headerGroup.headers).map(
        (headerOrVirtualHeader, renderedHeaderIndex) => {
          let header = headerOrVirtualHeader as MTT_Header<TData>;
          if (columnVirtualizer) {
            renderedHeaderIndex = (headerOrVirtualHeader as MTT_VirtualItem)
              .index;
            header = headerGroup.headers[renderedHeaderIndex];
          }

          return (
            <MTT_TableHeadCell
              columnVirtualizer={columnVirtualizer}
              header={header}
              key={header.id}
              renderedHeaderIndex={renderedHeaderIndex}
              table={table}
            />
          );
        },
      )}
      {virtualPaddingRight ? (
        <Box component="th" display="flex" w={virtualPaddingRight} />
      ) : null}
    </TableTr>
  );
};
