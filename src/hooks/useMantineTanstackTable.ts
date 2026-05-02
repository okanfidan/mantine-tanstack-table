import {
  type MTT_RowData,
  type MTT_TableInstance,
  type MTT_TableOptions,
} from "../types";
import { useMTT_TableInstance } from "./useMTT_TableInstance";
import { useMTT_TableOptions } from "./useMTT_TableOptions";

export const useMantineTanstackTable = <TData extends MTT_RowData>(
  tableOptions: MTT_TableOptions<TData>,
): MTT_TableInstance<TData> =>
  useMTT_TableInstance(useMTT_TableOptions(tableOptions));
