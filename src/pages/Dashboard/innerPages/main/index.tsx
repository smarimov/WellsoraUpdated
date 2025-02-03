import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import { Icon } from "@/components/Icon";
import NavbarWrapper from "@/components/navbar";
import { Table } from "@/components/Table";
import { DASHBOARD_LIST } from "./tableConfig";
import { useMemo, useState } from "react";
import { Modal } from "@/components/Modal";
import NewPlanForm from "./sections/NewPlanForm";
import { TPlan, usePlan } from "@/context/PlanContext";
import TimeList, { Appointment } from "./sections/TimeList";
import DateList from "./sections/DateList";

import {
  debounce,
  formatAmericanDate,
  formatCurrentDate,
  formatTimeAmerican,
} from "@/utils";

const getUniquePatientCount = (appointments: TPlan[]): number => {
  const uniquePatients = new Set(
    appointments.map((appt) => `${appt.firstName} ${appt.lastName}`)
  );
  return uniquePatients.size;
};
const getCompletedPlan = (appointments: TPlan[]): number => {
  return appointments.filter((e) => e.status === "success").length;
};
const getUpcomingAppointments = (appointments: TPlan[]): number => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Normalize today to 00:00:00

  const nextWeek = new Date();
  nextWeek.setDate(now.getDate() + 7);
  nextWeek.setHours(23, 59, 59, 999); // Ensure full 7-day range

  return appointments.filter((appt) => {
    const appointmentDate = new Date(appt.dateTime);
    return appointmentDate > now && appointmentDate <= nextWeek;
  }).length;
};

const Main = () => {
  const { plans, deletePlan, addPlan } = usePlan();
  const [selectedDay, setSelected] = useState(formatCurrentDate());
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const debouncedSetSearchTerm = useMemo(() => debounce(setCurrent, 300), []);
  const filteredData = useMemo((): TPlan[] => {
    return plans
      .filter(
        (item) =>
          item.appointmentName.toLowerCase().includes(current.toLowerCase()) ||
          item.firstName.toLowerCase().includes(current.toLowerCase()) ||
          item.lastName.toLowerCase().includes(current.toLowerCase()) ||
          item.location.toLowerCase().includes(current.toLowerCase())
      )
      .sort(
        (a, b) =>
          new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
      );
  }, [plans, current]);

  const appointmentByDay = useMemo((): Appointment[] => {
    return plans
      .filter((plan) => formatAmericanDate(plan.dateTime) === selectedDay)
      .map((plan) => ({
        time: formatTimeAmerican(plan.dateTime),
        name: `${plan.firstName} ${plan.lastName}`,
        date: formatAmericanDate(plan.dateTime),
        status: plan.status,
      }));
  }, [plans, selectedDay]);

  const createAppointment = (data: Omit<TPlan, "id">) => {
    addPlan(data);
    setIsOpen(false);
  };
  return (
    <>
      <NavbarWrapper
        title="Welcome back, Bernie"
        subTitle="Thursday, Jan 4, 2022"
        action={
          <Button
            variant="contained"
            color="primary"
            className="ml-auto text-nowrap h-[38px]"
            onClick={() => setIsOpen(true)}
          >
            Create New Appointment
          </Button>
        }
        isDashboard
      />
      <div className="flex gap-3 p-4 min-w-[1200px] ">
        <div className="w-full max-w-[1500px]">
          <div className="flex flex-wrap gap-3 mb-5">
            <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg flex-grow basis-full sm:basis-[46%] md:basis-[30%] lg:basis-[22%] h-[100px]">
              <p className="mb-2 text-lg font-bold">Total Appointments</p>
              <span className="text-lg font-bold text-Purple-main">24</span>
            </div>
            <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg flex-grow basis-full sm:basis-[46%] md:basis-[30%] lg:basis-[22%] h-[100px]">
              <p className="mb-2 text-lg font-bold">Upcoming Week</p>
              <span className="text-lg font-bold text-Purple-main">
                {getUpcomingAppointments(plans)}
              </span>
            </div>
            <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg flex-grow basis-full sm:basis-[46%] md:basis-[30%] lg:basis-[22%] h-[100px]">
              <p className="mb-2 text-lg font-bold">Active Caregivers</p>
              <span className="text-lg font-bold text-Purple-main">
                {getUniquePatientCount(plans)}
              </span>
            </div>
            <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg flex-grow basis-full sm:basis-[46%] md:basis-[30%] lg:basis-[22%] h-[100px]">
              <p className="mb-2 text-lg font-bold">Completed This Week</p>
              <span className="text-lg font-bold text-Purple-main">
                {getCompletedPlan(plans)}
              </span>
            </div>
          </div>
          <div>
            <DateList
              onDateSelect={(val) => setSelected(formatAmericanDate(val))}
            />
          </div>
          <div className="flex justify-between gap-3 py-3 mb-2">
            <p className="text-xl font-bold text-[#0F1527]">All Appointment</p>
            <Input
              leftSection={<Icon icon="Search1" color="inherit" />}
              placeholder="Search"
              className="max-w-[400px] w-full"
              onChange={(val) => debouncedSetSearchTerm(val.target.value)}
            />
          </div>

          <div className="">
            <Table
              data={filteredData}
              header={DASHBOARD_LIST()}
              onEditAction={() => console.log("editing")}
              onDeleteAction={(_, row) => deletePlan(row.id)}
            />
          </div>
        </div>
        <TimeList appointments={appointmentByDay} />
      </div>
      <Modal
        contentClass="min-w-[610px]"
        show={isOpen}
        onClose={() => setIsOpen(false)}
        titlebarClass="hidden"
      >
        <NewPlanForm
          onClose={() => setIsOpen(false)}
          sendingData={createAppointment}
        />
      </Modal>
    </>
  );
};
export default Main;
