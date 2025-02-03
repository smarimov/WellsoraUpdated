import { CompoundedComponent } from "@/types";
import { FloatingPortal } from "@floating-ui/react";
import clsx from "clsx";
import { forwardRef, HTMLAttributes, ReactNode } from "react";
import "./style.sass";
import { Icon, TIconName } from "../Icon";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode[] | ReactNode;
  open: boolean;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, open, ...props }, ref) => {
    if (!open) return null;
    return (
      <FloatingPortal>
        <div
          {...props}
          ref={ref}
          className={clsx("custom-menu", props.className)}
        >
          {children}
        </div>
      </FloatingPortal>
    );
  }
) as CompoundedComponent<MenuProps, HTMLDivElement, { Item: typeof MenuItem }>;

interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: TIconName;
  label: string;
  render?: (icon: TIconName, label: string) => ReactNode;
}
const MenuItem = ({ icon, label, render, ...props }: MenuItemProps) => {
  return (
    <div {...props} className={clsx("custom-menu-item", props.className)}>
      {render != null ? (
        render(icon, label)
      ) : (
        <>
          <div className="custom-menu-item__icon">
            <Icon size={22} icon={icon} />
          </div>
          <span className="custom-menu-item__label">{label}</span>
        </>
      )}
    </div>
  );
};

Menu.Item = MenuItem;
export default Menu;
