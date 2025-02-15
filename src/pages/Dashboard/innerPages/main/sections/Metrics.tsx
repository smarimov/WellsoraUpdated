import { Plan } from "../api";
import {
  getCompletedPlan,
  getUniquePatientCount,
  getUpcomingAppointments,
} from "../appointmentUtils";

const Metrics = ({ plans }: { plans?: Plan[] }) => {
  return (
    <div className="flex justify-between gap-4 py-5 my-1">
      <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg   w-full  h-[100px]">
        <p className="mb-2 text-lg font-bold text-center text-[#B4BAC5]">
          Total appointments
        </p>
        <span className="block text-3xl font-bold text-center ">
          {plans?.length || 0}
        </span>
      </div>
      <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg  w-full h-[100px]">
        <p className="mb-2 text-lg font-bold text-[#B4BAC5] text-center">
          Upcoming week
        </p>
        <span className="block text-3xl font-bold text-center ">
          {plans?.length ? getUpcomingAppointments(plans) : 0}
        </span>
      </div>
      <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg  w-full h-[100px]">
        <p className="mb-2 text-lg font-bold text-[#B4BAC5] text-center">
          Caring for
        </p>
        <span className="block text-3xl font-bold text-center">
          {plans?.length ? getUniquePatientCount(plans) : 0}
        </span>
      </div>
      <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg  w-full h-[100px]">
        <p className="mb-2 text-lg font-bold text-[#B4BAC5] text-center">
          Completed this week
        </p>
        <span className="block text-3xl font-bold text-center">
          {plans?.length ? getCompletedPlan(plans) : 0}
        </span>
      </div>
    </div>
  );
};

export default Metrics;
