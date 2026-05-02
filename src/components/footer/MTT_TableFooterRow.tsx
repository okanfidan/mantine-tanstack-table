import clsx from "clsx";

import classes from "./MTT_TableFooterRow.module.css";

import { Box, TableTr, type TableTrProps } from "@mantine/core";

import { MTT_TableFooterCell } from "./MTT_TableFooterCell";

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
  footerGroup: MTT_HeaderGroup<TData>;
  table: MTT_TableInstance<TData>;
}

export const MTT_TableFooterRow = <TData extends MTT_RowData>({
  columnVirtualizer,
  footerGroup,
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: { layoutMode, mantineTableFooterRowProps },
  } = table;

  const { virtualColumns, virtualPaddingLeft, virtualPaddingRight } =
    columnVirtualizer ?? {};

  // if no content in row, skip row
  if (
    !footerGroup.headers?.some(
      (header) =>
        (typeof header.column.columnDef.footer === "string" &&
          !!header.column.columnDef.footer) ||
        header.column.columnDef.Footer,
    )
  ) {
    return null;
  }

  const tableRowProps = {
    ...parseFromValuesOrFunc(mantineTableFooterRowProps, {
      footerGroup,
      table,
    }),
    ...rest,
  };

  return (
    <TableTr
      className={clsx(
        classes.root,
        layoutMode?.startsWith("grid") && classes["layout-mode-grid"],
      )}
      {...tableRowProps}
    >
      {virtualPaddingLeft ? (
        <Box component="th" display="flex" w={virtualPaddingLeft} />
      ) : null}
      {(virtualColumns ?? footerGroup.headers).map(
        (footerOrVirtualFooter, renderedColumnIndex) => {
          let footer = footerOrVirtualFooter as MTT_Header<TData>;
          if (columnVirtualizer) {
            renderedColumnIndex = (footerOrVirtualFooter as MTT_VirtualItem)
              .index;
            footer = footerGroup.headers[renderedColumnIndex];
          }

          return (
            <MTT_TableFooterCell
              footer={footer}
              key={footer.id}
              renderedColumnIndex={renderedColumnIndex}
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
