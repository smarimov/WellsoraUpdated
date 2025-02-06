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
  return appointments.filter((e) => e.status === "resolved").length;
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
  const { plans, deletePlan, addPlan, updatePlan } = usePlan();
  const [selectedDay, setSelected] = useState(formatCurrentDate());
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const [currentPlan, setCurrentPlan] = useState<TPlan | null>(null);
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
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
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
    if (currentPlan != null) {
      updatePlan({ ...data, id: currentPlan.id });
    } else {
      addPlan(data);
    }
    setIsOpen(false);
  };
  return (
    <>
      <NavbarWrapper
        title="Welcome, Bernie"
        subTitle="Here's what's happening with your appointments today"
        action={
          <Button
            variant="contained"
            color="primary"
            size="md"
            className=" max-w-[215px] w-full"
            onClick={() => setIsOpen(true)}
          >
            Create new plan
          </Button>
        }
        isDashboard
      />
      <div className="flex min-w-[1300px] overflow-x-auto h-full gap-10">
        <div className="flex-1 min-w-0 p-4 py-5">
          <DateList
            onDateSelect={(val) => setSelected(formatAmericanDate(val))}
          />

          <div className="flex flex-wrap justify-between gap-1 py-5 my-1">
            <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg  max-w-[211px] w-full  h-[100px]">
              <p className="mb-2 text-lg font-bold text-[#B4BAC5]">
                Total appointments
              </p>
              <span className="text-3xl font-bold ">{plans.length}</span>
            </div>
            <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg max-w-[211px] w-full h-[100px]">
              <p className="mb-2 text-lg font-bold text-[#B4BAC5]">
                Upcoming week
              </p>
              <span className="text-3xl font-bold ">
                {getUpcomingAppointments(plans)}
              </span>
            </div>
            <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg max-w-[211px] w-full h-[100px]">
              <p className="mb-2 text-lg font-bold text-[#B4BAC5]">
                Active caregivers
              </p>
              <span className="text-3xl font-bold ">
                {getUniquePatientCount(plans)}
              </span>
            </div>
            <div className="p-2 bg-white shadow-custom border border-[#F0F0F0] rounded-lg max-w-[210px] w-full h-[100px]">
              <p className="mb-2 text-lg font-bold text-[#B4BAC5]">
                Completed this week
              </p>
              <span className="text-3xl font-bold ">
                {getCompletedPlan(plans)}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 py-5 my-1 mb-2">
            <p className="text-xl font-bold text-[#0F1527]">All appointments</p>
            <Input
              leftSection={<Icon icon="Search1" color="inherit" />}
              placeholder="Search"
              className="max-w-[400px] w-full"
              onChange={(val) => debouncedSetSearchTerm(val.target.value)}
            />
          </div>

          <Table
            data={filteredData}
            header={DASHBOARD_LIST()}
            onEditAction={(_, row) => {
              setCurrentPlan(row);
              setIsOpen(true);
            }}
            onDeleteAction={(_, row) => deletePlan(row.id)}
          />
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
          currentPlan={currentPlan}
        />
      </Modal>
    </>
  );
};
export default Main;
