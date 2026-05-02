import clsx from "clsx";

import classes from "./MTT_TableFooter.module.css";

import { TableTfoot, type TableTfootProps } from "@mantine/core";

import { MTT_TableFooterRow } from "./MTT_TableFooterRow";

import {
  type MTT_ColumnVirtualizer,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";

interface Props<TData extends MTT_RowData> extends TableTfootProps {
  columnVirtualizer?: MTT_ColumnVirtualizer;
  table: MTT_TableInstance<TData>;
}

export const MTT_TableFooter = <TData extends MTT_RowData>({
  columnVirtualizer,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getFooterGroups,
    getState,
    options: { enableStickyFooter, layoutMode, mantineTableFooterProps },
    refs: { tableFooterRef },
  } = table;
  const { isFullScreen } = getState();

  const tableFooterProps = {
    ...parseFromValuesOrFunc(mantineTableFooterProps, {
      table,
    }),
    ...rest,
  };

  const stickFooter =
    (isFullScreen || enableStickyFooter) && enableStickyFooter !== false;

  return (
    <TableTfoot
      {...tableFooterProps}
      className={clsx(
        classes.root,
        tableFooterProps?.className,
        stickFooter && classes.sticky,
        layoutMode?.startsWith("grid") && classes.grid,
      )}
      ref={(ref: HTMLTableSectionElement) => {
        tableFooterRef.current = ref;
        if (tableFooterProps?.ref) {
          // @ts-ignore
          tableFooterProps.ref.current = ref;
        }
      }}
    >
      {getFooterGroups().map((footerGroup) => (
        <MTT_TableFooterRow
          columnVirtualizer={columnVirtualizer}
          footerGroup={footerGroup as any}
          key={footerGroup.id}
          table={table}
        />
      ))}
    </TableTfoot>
  );
};
