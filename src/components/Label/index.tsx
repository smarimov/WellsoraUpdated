import clsx from "clsx";
import { capitalizeFirstLetter } from "@/utils";
import "./style.sass";
import { ReactNode } from "react";

interface Props {
  color?:
    | "success"
    | "warning"
    | "error"
    | "info"
    | "secondary"
    | "primary"
    | "muted";
  label: string;
  outlined?: boolean;
  icon?: ReactNode;
  size?: "sm" | "md";
  className?: string;
}
const Label = ({
  color = "info",
  size = "sm",
  label,
  outlined = false,
  icon,
  className,
}: Props) => {
  return (
    <div
      className={clsx(
        "label flex items-center justify-center gap-1  ",
        `label--${color}`,
        { "label--outlined": outlined },
        size === "sm" ? "h-[26px] px-2 py-1" : "h-[34px] px-4 py-[6px]",
        className
      )}
    >
      {icon != null && <span className="flex items-center">{icon}</span>}
      <span className="text-xs text-green-900">
        {capitalizeFirstLetter(label)}
      </span>
    </div>
  );
};
export default Label;
