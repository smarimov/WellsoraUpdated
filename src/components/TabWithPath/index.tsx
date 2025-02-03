import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Icon, TIconName } from "../Icon";
import "./style.sass";
export interface Tab {
  label: string;
  value: string;
  icon?: string;
  path: string;
}

interface TabsProps {
  tabs: Tab[];
}

const TabWithPath: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <div className="tab_with_path">
      {tabs.map((tab) => (
        <NavLink
          key={tab.value}
          to={tab.path}
          className={({ isActive }) =>
            clsx("tab-link ", { "tab-link--active": isActive })
          }
          end
        >
          {tab.icon != null && (
            <Icon icon={tab.icon as TIconName} color="inherit" />
          )}
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};

export default TabWithPath;
