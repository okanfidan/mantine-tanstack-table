import clsx from "clsx";

import classes from "./MTT_TableContainer.module.css";

import { useEffect, useLayoutEffect, useState } from "react";

import { Box, type BoxProps, LoadingOverlay } from "@mantine/core";

import { MTT_Table } from "./MTT_Table";

import { type MTT_RowData, type MTT_TableInstance } from "../../types";
import { assignRef, parseFromValuesOrFunc } from "../../utils/utils";
import { MTT_EditRowModal } from "../modals/MTT_EditRowModal";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface Props<TData extends MTT_RowData> extends BoxProps {
  table: MTT_TableInstance<TData>;
}

export const MTT_TableContainer = <TData extends MTT_RowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      createDisplayMode,
      editDisplayMode,
      enableStickyHeader,
      mantineLoadingOverlayProps,
      mantineTableContainerProps,
    },
    refs: { bottomToolbarRef, tableContainerRef, topToolbarRef },
  } = table;
  const {
    creatingRow,
    editingRow,
    isFullScreen,
    isLoading,
    showLoadingOverlay,
  } = getState();

  const [totalToolbarHeight, setTotalToolbarHeight] = useState(0);

  const tableContainerProps = {
    ...parseFromValuesOrFunc(mantineTableContainerProps, { table }),
    ...rest,
  };
  const loadingOverlayProps = parseFromValuesOrFunc(
    mantineLoadingOverlayProps,
    { table },
  );

  useIsomorphicLayoutEffect(() => {
    const topToolbarHeight =
      typeof document !== "undefined"
        ? (topToolbarRef.current?.offsetHeight ?? 0)
        : 0;

    const bottomToolbarHeight =
      typeof document !== "undefined"
        ? (bottomToolbarRef?.current?.offsetHeight ?? 0)
        : 0;

    setTotalToolbarHeight(topToolbarHeight + bottomToolbarHeight);
  });

  const createModalOpen = createDisplayMode === "modal" && creatingRow;
  const editModalOpen = editDisplayMode === "modal" && editingRow;

  return (
    <Box
      {...tableContainerProps}
      __vars={{
        "--mtt-top-toolbar-height": `${totalToolbarHeight}`,
        ...tableContainerProps?.__vars,
      }}
      className={clsx(
        "mtt-table-container",
        classes.root,
        enableStickyHeader && classes["root-sticky"],
        isFullScreen && classes["root-fullscreen"],
        tableContainerProps?.className,
      )}
      ref={(node: HTMLDivElement) => {
        if (node) {
          tableContainerRef.current = node;
          assignRef(tableContainerProps?.ref, node);
        }
      }}
    >
      <LoadingOverlay
        visible={isLoading || showLoadingOverlay}
        zIndex={2}
        {...loadingOverlayProps}
      />
      <MTT_Table table={table} />
      {(createModalOpen || editModalOpen) && (
        <MTT_EditRowModal open table={table} />
      )}
    </Box>
  );
};
