import { ButtonColor, ButtonVariant } from "@/types";
import { cn } from "@/utils";
import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
// import { Icon } from "../Icon"
import "./style.sass";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  variant?: ButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  size?: "sm" | "md";
  wrap?: "wrap" | "nowrap";
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      loading,
      size = "md",
      color = "primary",
      variant = "contained",
      wrap = "wrap",
      fullWidth,
      icon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "px-[16px] py-[8px] rounded-[8px] flex items-center justify-center font-medium gap-[8px] cursor-pointer",
          fullWidth && "w-[100%]",
          `button-variant__${variant}-${color}`,
          size === "md" ? "h-11" : "h-[36px] px-[14px] ",
          wrap === "wrap" ? "text-wrap" : "text-nowrap",
          props.disabled && "bg-gray-400",
          props.className
        )}
        disabled={props.disabled ?? loading}
        type={props.type ?? "button"}
      >
        {/* {loading && <Icon icon="Loader" color="white" size={24} className={clsx("absolute hidden", loading && "!block animate-spin")} />} */}
        <div
          className={clsx(
            "flex items-center justify-center gap-[2px]",
            loading && "opacity-0"
          )}
        >
          {icon != null && <span className="flex items-center">{icon}</span>}
          {props.children}
          {rightIcon != null && (
            <span className="flex items-center">{rightIcon}</span>
          )}
        </div>
      </button>
    );
  }
);
