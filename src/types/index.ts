import { ReactNode } from "react";
import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";
import { IndexRouteObject } from "react-router-dom";

export type ButtonVariant = "outline" | "contained" | "link" | "text";

export type ButtonColor =
  | "error"
  | "warning"
  | "success"
  | "info"
  | "second"
  | "primary"
  | "inherit";

export type CompoundedComponent<
  P extends object,
  R extends object,
  T extends object
> = React.ForwardRefExoticComponent<P & React.RefAttributes<R>> & T;

export interface IFormControl<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
  required?: boolean;
}
export interface IOption<
  T extends string | number = string,
  M extends object = object
> {
  label: string;
  value: T;
  meta?: M;
}

export interface IParams {
  url: string;
  value: string;
  label: string;
  data: {
    value: string;
    label: string;
    meta?: Record<string, string[]>;
  }[];
}
export type Nullable<T> = T | null;
export interface CustomRoute
  extends Omit<IndexRouteObject, "children" | "index"> {
  handle?: {
    label?: string;
    icon?: string;
    ignoreChildrens?: boolean;
    taskTabsKey?: string;
    i18Key?: string;
    renderOnDev?: boolean;
    hide?: boolean;
    permKey?: string | string[];
    counter?: ReactNode;
  };
  Icon?: (props: Partial<object>) => React.ReactElement | null;
  children?: CustomRoute[];
  index?: boolean;
}
export interface IPagination {
  total: number;
  setTotal: (total: number) => void;
  onPerPageChange: (perPage: number) => void;
  setPerPage?: (perPage: number) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
  perPage: number;
  resetPagination: () => void;
}

export type TResponse<T extends object = object> = {
  success?: boolean;
  status: string;
  message?: string;
  total: number;
  current_page: number;
  last_page: number;
  per_page: number;
} & T;
