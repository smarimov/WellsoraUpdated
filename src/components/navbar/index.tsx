import { ReactNode } from "react";
import { useMenu } from "../Menu/useMenu";
import { Icon } from "../Icon";
import Menu from "../Menu";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/utils";

interface NavbarWrapperProps {
  title: string;
  subTitle?: string;
  action?: ReactNode | ((props: { onClick: () => void }) => ReactNode);
  setting?: boolean;
  isDashboard?: boolean;
}
const NavbarWrapper = ({
  title,
  subTitle,
  action,
  setting = false,
  isDashboard = false,
}: NavbarWrapperProps) => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const isTablet = useMediaQuery("(max-width: 1270px)");
  const isSmallTablet = useMediaQuery("(max-width: 1040px)");
  const { menuProps, targetProps, setOpen } = useMenu({
    placement: "bottom-end",
  });

  const navigate = useNavigate();
  return (
    <div
      className={cn(
        "px-[30px] top-0 z-[500] left-[270px] right-0 flex items-center  bg-white gap-4  h-[130px] shadow-custom box-border border-b border-b-[#F0F0F0] fixed ",
        isMobile && "left-[80px]"
      )}
    >
      <div className="flex flex-col mr-auto">
        <div className="flex items-center gap-3">
          <p
            className={cn(
              "text-[30px] lg:text-[38px] font-medium text-[#0F1527] inline-flex items-center ",
              isDashboard &&
                "after:content-[''] after:inline-block after:w-10 after:h-10 after:bg-no-repeat after:bg-contain after:ml-2 after:bg-[url('/assets/hello.svg')]"
            )}
          >
            {title}
          </p>
        </div>
        {subTitle && (
          <span className="text-[#AEAEAE] text-base font-normal">
            {subTitle}
          </span>
        )}
      </div>

      {!isTablet ? (
        <>
          {typeof action === "function"
            ? action({ onClick: () => setOpen(false) }) // If function, pass `onClick`
            : action}
        </>
      ) : null}

      <div className="flex items-center gap-4 cur">
        {!isSmallTablet && (
          <Button
            className="rounded-[50%] w-[50px] h-[50px]"
            variant="outline"
            icon={<Icon icon="Notification" color="1B779B" size={24} />}
          ></Button>
        )}
        {!setting && (
          <>
            {!isSmallTablet && <ProfileComponent />}
            <div
              className="cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
              {...targetProps}
            >
              <Icon
                icon={isSmallTablet ? "listView" : "ThreeDot"}
                color="#878787"
                size={30}
              />
            </div>
          </>
        )}
      </div>
      <Menu {...menuProps} className="!top-3">
        <Menu.Item
          icon="Setting_outline"
          label="Profile Settings"
          onClick={() => navigate("/settings")}
        />
        {isSmallTablet && <ProfileComponent isMenu />}
        {isTablet && (
          <div className="flex items-center justify-center p-2">
            {" "}
            {typeof action === "function"
              ? action({ onClick: () => setOpen(false) }) // If function, pass `onClick`
              : action}{" "}
          </div>
        )}
      </Menu>
    </div>
  );
};
export default NavbarWrapper;

const ProfileComponent = ({ isMenu = false }: { isMenu?: Boolean }) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <div
        className={cn(
          "w-12 h-12 overflow-hidden rounded-[50%]",
          isMenu && "w-8 h-8"
        )}
      >
        <img src="/assets/profile.jpeg" />
      </div>
      <div className="flex flex-col ">
        <span className="text-xs font-semibold text-Navy-main">
          Bernie Sanders
        </span>
        <span className=" text-[11px] font-normal text-Gray-main">
          @BernieSanders
        </span>
      </div>
    </div>
  );
};
