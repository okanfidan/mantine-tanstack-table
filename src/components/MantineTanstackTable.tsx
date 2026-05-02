import { useMantineTanstackTable } from "../hooks/useMantineTanstackTable";
import {
  type MTT_RowData,
  type MTT_TableInstance,
  type MTT_TableOptions,
  type Xor,
} from "../types";
import { MTT_TablePaper } from "./table/MTT_TablePaper";

type TableInstanceProp<TData extends MTT_RowData> = {
  table: MTT_TableInstance<TData>;
};

type Props<TData extends MTT_RowData> = Xor<
  TableInstanceProp<TData>,
  MTT_TableOptions<TData>
>;

const isTableInstanceProp = <TData extends MTT_RowData>(
  props: Props<TData>,
): props is TableInstanceProp<TData> =>
  (props as TableInstanceProp<TData>).table !== undefined;

export const MantineTanstackTable = <TData extends MTT_RowData>(
  props: Props<TData>,
) => {
  let table: MTT_TableInstance<TData>;

  if (isTableInstanceProp(props)) {
    table = props.table;
  } else {
    table = useMantineTanstackTable(props);
  }

  return <MTT_TablePaper table={table} />;
};
