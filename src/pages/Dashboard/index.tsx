import Sidebar from "@/components/sidebar";
import { PlanProvider } from "@/context/PlanContext";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <PlanProvider>
      <div>
        <Sidebar />
        <div className="ml-[300px] pt-[130px] relative ">
          <Outlet />
        </div>
      </div>
    </PlanProvider>
  );
};
export default Dashboard;
