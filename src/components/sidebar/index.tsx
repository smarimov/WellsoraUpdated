import { NavLink } from "react-router-dom";
import { Icon } from "../Icon";
import clsx from "clsx";
import "./style.sass";

const Sidebar = () => {
  return (
    <div className=" flex flex-col h-full flex-1 justify-start  bg-Purple-main p-6 sidebar w-[300px] fixed ">
      {/* <div className="w-[229px] h-[60px] mx-auto mb-[56px]">
        <img src="../assets/wellsora.png" style={{ objectFit: "cover" }} />
      </div> */}
      <div className="mb-10 text-6xl font-extrabold text-center text-white">
        Wellsora
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx("sidebar__links", { active_link: isActive })
            }
            end
          >
            <Icon icon="dashboard" color="inherit" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sora-health"
            className={({ isActive }) =>
              clsx("sidebar__links", { active_link: isActive })
            }
            end
          >
            <Icon icon="sora" color="inherit" />
            Sora Health
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/medical-record/past-visit"
            className={({ isActive }) =>
              clsx("sidebar__links", { active_link: isActive })
            }
            end
          >
            <Icon icon="record" color="inherit" />
            Connecting records
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/benefits"
            className={({ isActive }) =>
              clsx("sidebar__links", { active_link: isActive })
            }
            end
          >
            <Icon icon="benefit" color="inherit" />
            Benefits
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/care-giver"
            className={({ isActive }) =>
              clsx("sidebar__links", { active_link: isActive })
            }
            end
          >
            <Icon icon="caregiver" color="inherit" />
            Find a caregiver
          </NavLink>
        </li>
      </ul>

      <ul className="mt-auto">
        <li>
          <NavLink to="settings" className={clsx("sidebar__links")} end>
            <Icon icon="navSetting" color="inherit" />
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/privacy" className={clsx("sidebar__links")} end>
            <Icon icon="navPrivacy" color="inherit" />
            Privacy Policy
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth/login" className={clsx("sidebar__links")} end>
            <Icon icon="navLogout" color="inherit" />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
