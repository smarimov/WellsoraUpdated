import { TResponse } from "@/types";
import { UseQueryResult } from "@tanstack/react-query";
import { CSSProperties, ReactNode, useMemo } from "react";
import { TableActions } from "./components/Actions";
import clsx from "clsx";
import "./style.scss";
import { Loading } from "../Loading";

const searchInObject = <T extends object>(
  obj: T,
  search: string,
  fields?: (keyof T)[],
  depth: number = 0
): boolean => {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      if (depth > 2) continue;
      if (
        searchInObject(
          obj[key] as object,
          search,
          fields as keyof object,
          depth + 1
        )
      )
        return true;
    } else {
      if (typeof obj[key] === "string" && (fields?.includes(key) ?? true)) {
        if (obj[key].toLowerCase().includes(search.toLowerCase())) return true;
      }
      if (typeof obj[key] === "number")
        if (obj[key].toString().includes(search)) return true;
    }
  }
  return false;
};

export interface ITableHead<T extends object> {
  dataKey: string;
  label: ReactNode;
  className?: string;
  dataClassName?: string;
  style?: CSSProperties;
  checked?: boolean;
  original?: string;
  render?: (data: T) => ReactNode;
}

interface ITableProps<T extends object> {
  header: ITableHead<T>[];
  queryResult?: UseQueryResult<TResponse<{ data?: T[] }>>;
  loading?: boolean;
  data?: T[];
  searchText?: string;
  searchFields?: (keyof T)[];
  dataMap?: (data: T) => Record<string, unknown>;
  onDeleteAction?: (id: number, row: T) => void;
  onEditAction?: (id: number, row: T) => void;
  onViewAction?: (id: number, row: T) => void;
  filter?: (data: T) => boolean;
}

export const Table = <T extends object>(props: ITableProps<T>) => {
  const {
    searchText,
    queryResult,
    header,
    dataMap,
    searchFields,
    onDeleteAction,
    filter,
    onEditAction,
    onViewAction,
    data: rows,
  } = props;
  const isLoading = queryResult?.isLoading ?? false;

  const tableData = useMemo(() => {
    const data = queryResult?.data?.data ?? rows;
    const filterCallback = filter ?? (() => true);
    if (data == null) return [];
    const search = searchText?.trim() ?? "";
    return data.reduce<Record<string, unknown>[]>((acc, field) => {
      let condition = search === "" ? true : false;
      if (!condition) condition = searchInObject(field, search, searchFields);
      if (condition && filterCallback(field)) {
        acc.push(
          dataMap != null ? dataMap(field) : (field as Record<string, unknown>)
        );
      }
      return acc;
    }, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryResult, searchText, dataMap, rows, searchFields]);
  const loading = props.loading || isLoading;
  return (
    <table className="custom-table">
      <thead>
        <tr className="custom-table__head">
          {header.map(({ className, label, style, dataKey }, index) => (
            <th
              key={index}
              className={clsx(
                "custom-table__head-cell ",
                // dataKey.startsWith("action") && "!text-right",
                className
              )}
              style={style}
            >
              {/* {TypeCheck.isString(label) ? translate(label) : label} */}
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td
              colSpan={header.length}
              className="text-center custom-table__row-cell"
            >
              <div className="flex items-center justify-center min-h-36">
                {/* <Loading spinSize={30} text={translate("loading")} /> */}
                <Loading spinSize={30} text="Loading" />
              </div>
            </td>
          </tr>
        ) : (
          tableData.map((row, index) => (
            <tr className="custom-table__row" key={index}>
              {header.map(({ dataKey, dataClassName, render }, secondIndex) => (
                <td
                  key={secondIndex}
                  className={clsx(
                    dataKey.startsWith("action") && "flex justify-end",
                    "custom-table__row-cell",
                    dataClassName
                  )}
                >
                  {dataKey === "actions" &&
                  (onDeleteAction || onEditAction || onViewAction) ? (
                    <TableActions
                      onDelete={
                        onDeleteAction
                          ? () =>
                              onDeleteAction?.(
                                (row as { id: number }).id,
                                row as T
                              )
                          : void 0
                      }
                      onEdit={
                        onEditAction
                          ? () =>
                              onEditAction?.(
                                (row as { id: number }).id,
                                row as T
                              )
                          : void 0
                      }
                      onView={
                        onViewAction
                          ? () =>
                              onViewAction?.(
                                (row as { id: number }).id,
                                row as T
                              )
                          : void 0
                      }
                    />
                  ) : (
                    render?.(row as T) ?? (row[dataKey] as ReactNode)
                  )}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
