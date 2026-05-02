import clsx from "clsx";

import classes from "./MTT_ToolbarDropZone.module.css";

import { type DragEvent, useEffect } from "react";

import { Flex, type FlexProps, Text, Transition } from "@mantine/core";

import { type MTT_RowData, type MTT_TableInstance } from "../../types";

interface Props<TData extends MTT_RowData> extends FlexProps {
  table: MTT_TableInstance<TData>;
}

export const MTT_ToolbarDropZone = <TData extends MTT_RowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { enableGrouping, localization },
    setHoveredColumn,
    setShowToolbarDropZone,
  } = table;

  const { draggingColumn, grouping, hoveredColumn, showToolbarDropZone } =
    getState();

  const handleDragEnter = (_event: DragEvent<HTMLDivElement>) => {
    setHoveredColumn({ id: "drop-zone" });
  };

  useEffect(() => {
    if (table.options.state?.showToolbarDropZone !== undefined) {
      setShowToolbarDropZone(
        !!enableGrouping &&
          !!draggingColumn &&
          draggingColumn.columnDef.enableGrouping !== false &&
          !grouping.includes(draggingColumn.id),
      );
    }
  }, [enableGrouping, draggingColumn, grouping]);

  return (
    <Transition mounted={showToolbarDropZone} transition="fade">
      {() => (
        <Flex
          className={clsx(
            "mtt-toolbar-dropzone",
            classes.root,
            hoveredColumn?.id === "drop-zone" && classes.hovered,
          )}
          onDragEnter={handleDragEnter}
          {...rest}
        >
          <Text>
            {localization.dropToGroupBy.replace(
              "{column}",
              draggingColumn?.columnDef?.header ?? "",
            )}
          </Text>
        </Flex>
      )}
    </Transition>
  );
};
