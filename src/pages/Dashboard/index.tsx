import Sidebar from "@/components/sidebar";
import { PlanProvider } from "@/context/PlanContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/utils";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  return (
    <PlanProvider>
      <Sidebar />
      <div
        className={cn(
          "ml-[270px]  pt-[130px] relative ",
          isMobile && "ml-[80px]"
        )}
      >
        <Outlet />
      </div>
    </PlanProvider>
  );
};
export default Dashboard;
