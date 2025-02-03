import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function capitalizeFirstLetter(string: string) {
  if (!string) return ""; // Handle empty or undefined strings
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class TypeCheck {
  static isString(value: unknown): value is string {
    return typeof value === "string";
  }
  static isNumber(value: unknown): value is number {
    return typeof value === "number";
  }
  static isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
  }
  static isObject(value: unknown): value is object {
    return typeof value === "object" && value !== null;
  }
  static isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }
  static isFunction(value: unknown): value is void {
    return typeof value === "function";
  }
  static isNull(value: unknown): value is null {
    return value === null;
  }
  static isUndefined(value: unknown): value is undefined {
    return value === undefined;
  }
  static isSymbol(value: unknown): value is symbol {
    return typeof value === "symbol";
  }
}
export const toCamelCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
};

/**
 * Formats an ISO date string to "Month Day, Year" (e.g., "February 25, 2024").
 * @param isoDate - The ISO date string to format.
 * @returns {string} - Formatted date in "MMMM D, YYYY" format.
 */
export const formatAmericanDate = (isoDate: string): string => {
  return dayjs(isoDate).format("MMMM D, YYYY");
};

/**
 * Extracts time from an ISO date and formats it as "hh:mm A" (e.g., "10:00 AM").
 * @param isoDate - The ISO 8601 date string (e.g., "2025-02-15T10:00:00.000Z").
 * @returns {string} - Formatted time in "hh:mm A" format.
 */
export const formatTimeAmerican = (isoDate: string): string => {
  return dayjs(isoDate).format("hh:mm A");
};

export const formatCurrentDate = () => {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
