import { ActionIcon, type ActionIconProps, Tooltip } from "@mantine/core";

import {
  type HTMLPropsRef,
  type MTT_DensityState,
  type MTT_RowData,
  type MTT_TableInstance,
} from "../../types";

interface Props<TData extends MTT_RowData>
  extends ActionIconProps, HTMLPropsRef<HTMLButtonElement> {
  table: MTT_TableInstance<TData>;
}

type TogglableDensityState = Exclude<MTT_DensityState, "lg" | "sm">;

const next: Record<TogglableDensityState, TogglableDensityState> = {
  md: "xs",
  xl: "md",
  xs: "xl",
};

export const MTT_ToggleDensePaddingButton = <TData extends MTT_RowData>({
  table: {
    getState,
    options: {
      icons: {
        IconBaselineDensityLarge,
        IconBaselineDensityMedium,
        IconBaselineDensitySmall,
      },
      localization: { toggleDensity },
    },
    setDensity,
  },
  title,
  ...rest
}: Props<TData>) => {
  const { density } = getState();

  return (
    <Tooltip label={title ?? toggleDensity} withinPortal>
      <ActionIcon
        aria-label={title ?? toggleDensity}
        color="gray"
        onClick={() =>
          setDensity((current) => next[current as TogglableDensityState])
        }
        size="lg"
        variant="subtle"
        {...rest}
      >
        {density === "xs" ? (
          <IconBaselineDensitySmall />
        ) : density === "md" ? (
          <IconBaselineDensityMedium />
        ) : (
          <IconBaselineDensityLarge />
        )}
      </ActionIcon>
    </Tooltip>
  );
};
