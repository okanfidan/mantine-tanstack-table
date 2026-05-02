import clsx from "clsx";

import classes from "./MTT_ProgressBar.module.css";

import { Collapse, Progress, type ProgressProps } from "@mantine/core";

import { type MTT_RowData, type MTT_TableInstance } from "../../types";
import { parseFromValuesOrFunc } from "../../utils/utils";

interface Props<TData extends MTT_RowData> extends Partial<ProgressProps> {
  isTopToolbar: boolean;
  table: MTT_TableInstance<TData>;
}

export const MTT_ProgressBar = <TData extends MTT_RowData>({
  isTopToolbar,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { mantineProgressProps },
  } = table;
  const { isSaving, showProgressBars } = getState();

  const linearProgressProps = {
    ...parseFromValuesOrFunc(mantineProgressProps, {
      isTopToolbar,
      table,
    }),
    ...rest,
  };

  return (
    <Collapse
      className={clsx(
        classes.collapse,
        isTopToolbar && classes["collapse-top"],
      )}
      expanded={isSaving || showProgressBars}
    >
      <Progress
        animated
        aria-busy="true"
        aria-label="Loading"
        radius={0}
        value={100}
        {...linearProgressProps}
      />
    </Collapse>
  );
};
