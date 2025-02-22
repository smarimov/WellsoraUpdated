import { NavLink } from "react-router-dom";
import { Icon } from "../Icon";
import clsx from "clsx";
import "./style.sass";
import Cookies from "js-cookie";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/utils";

const handleLogout = () => {
  Cookies.remove("wellsora_token"); // Remove auth cookie
  window.location.href = "/auth/login"; // Redirect to login page
};

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <div
      className={cn(
        " flex flex-col h-full flex-1 justify-start bg-Purple-main p-6 sidebar w-[270px] fixed ",
        isMobile && "w-[80px] p-1 items-center justify-center "
      )}
    >
      {!isMobile && (
        <div className="mb-10 text-5xl font-extrabold text-center text-white">
          Wellsora
        </div>
      )}
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(
                "sidebar__links",
                { active_link: isActive },
                isMobile && "justify-center p-2 rounded mb-4"
              )
            }
            end
          >
            <Icon icon="dashboard" color="inherit" />
            {!isMobile && "Dashboard"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sora-health"
            className={({ isActive }) =>
              clsx(
                "sidebar__links",
                { active_link: isActive },
                isMobile && "justify-center p-2 rounded mb-4"
              )
            }
            end
          >
            <Icon icon="sora" color="inherit" />
            {!isMobile && "Sora Health"}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/medical-record/past-visit"
            className={({ isActive }) =>
              clsx(
                "sidebar__links",
                { active_link: isActive },
                isMobile && "justify-center p-2 rounded mb-4"
              )
            }
            end
          >
            <Icon icon="record" color="inherit" />
            {!isMobile && "Connecting records"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/benefits"
            className={({ isActive }) =>
              clsx(
                "sidebar__links",
                { active_link: isActive },
                isMobile && "justify-center p-2 rounded mb-4"
              )
            }
            end
          >
            <Icon icon="benefit" color="inherit" />
            {!isMobile && "Benefits"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/care-giver"
            className={({ isActive }) =>
              clsx(
                "sidebar__links",
                { active_link: isActive },
                isMobile && "justify-center p-2 rounded mb-4"
              )
            }
            end
          >
            <Icon icon="caregiver" color="inherit" />
            {!isMobile && "Find a caregiver"}
          </NavLink>
        </li>
      </ul>

      <ul className={cn("mt-auto", isMobile && "mt-0")}>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => clsx(
              "sidebar__links",
              { active_link: isActive },
              isMobile && "justify-center p-2 rounded mb-4"
            )}
            end
          >
            <Icon icon="navSetting" color="inherit" />
            {!isMobile && "Settings"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/privacy"
            className={({ isActive }) => clsx(
              "sidebar__links",
              { active_link: isActive },
              isMobile && "justify-center p-2 rounded mb-4"
            )}
            end
          >
            <Icon icon="navPrivacy" color="inherit" />
            {!isMobile && "Privacy Policy"}
          </NavLink>
        </li>
        <li onClick={handleLogout} style={{ cursor: "pointer" }}>
          <NavLink
            to="#"
            className={clsx(
              "sidebar__links",
              isMobile && "justify-center p-2 rounded mb-4"
            )}
            end
          >
            <Icon icon="navLogout" color="inherit" />
            {!isMobile && "Logout"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
