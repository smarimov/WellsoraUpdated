import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import { Icon } from "@/components/Icon";
import NavbarWrapper from "@/components/navbar";
import { Table } from "@/components/Table";
import { DASHBOARD_LIST } from "./tableConfig";
import { useMemo, useState } from "react";
import { Modal } from "@/components/Modal";
import NewPlanForm from "./sections/NewPlanForm";
import TimeList, { Appointment } from "./sections/TimeList";
import DateList from "./sections/DateList";
import { debounce, formatCurrentDate } from "@/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Plan, TCreatePlan } from "./api";
import { useCarePlanMutations } from "./useCarePlanMutations";
import { useCarePlans } from "./useCarePlans";
import Metrics from "./sections/Metrics";
import { Loading } from "@/components/Loading";

const Main = () => {
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const { data: plans, isLoading, isFetching } = useCarePlans();
  const [deletedId, setDeletedId] = useState<string | null>(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const {
    createMutation,
    updateMutation,
    deleteMutation,
    isDeleting,
    isCreating,
    isUpdating,
  } = useCarePlanMutations();

  const handleDelete = () => {
    if (deletedId != null) {
      deleteMutation.mutate(deletedId);
      setDeleteModal(false);
    }
  };
  const [isScheduledModel, setIsScheduledModel] = useState(false);
  const [selectedDay, setSelected] = useState(formatCurrentDate());
  const [isOpen, setIsOpen] = useState(false);
  const [currentSearchText, setCurrentSearchText] = useState("");
  const [selectedCarePlan, setSelectedCarePlan] = useState<Plan | null>(null);
  const debouncedSetSearchTerm = useMemo(
    () => debounce(setCurrentSearchText, 300),
    []
  );
  const filteredCarePlans = useMemo((): Plan[] => {
    if (!plans) return [];
    return plans
      .filter(
        (item) =>
          item.appointmentName
            .toLowerCase()
            .includes(currentSearchText.toLowerCase()) ||
          item.firstName
            .toLowerCase()
            .includes(currentSearchText.toLowerCase()) ||
          item.lastName
            .toLowerCase()
            .includes(currentSearchText.toLowerCase()) ||
          item.location.toLowerCase().includes(currentSearchText.toLowerCase())
      )
      .sort((a, b) => {
        const dateTimeA = new Date(`${a.date}T${a.time}`);
        const dateTimeB = new Date(`${b.date}T${b.time}`);
        return dateTimeA.getTime() - dateTimeB.getTime();
      });
  }, [plans, currentSearchText]);

  const appointmentByDay = useMemo((): Appointment[] => {
    if (!plans) return [];
    return plans
      .filter((plan) => plan.date === selectedDay)
      .map((plan) => ({
        time: plan.time,
        name: `${plan.firstName} ${plan.lastName}`,
        date: plan.date,
        status: plan.status,
      }));
  }, [plans, selectedDay]);
  const createAppointment = (data: TCreatePlan) => {
    if (selectedCarePlan != null && selectedCarePlan._id) {
      updateMutation.mutate({ id: selectedCarePlan._id, updatedData: data });
      setSelectedCarePlan(null);
    } else {
      createMutation.mutate(data);
    }
    setIsOpen(false);
  };

  return (
    <>
      <NavbarWrapper
        title=""
        subTitle="Here's what's happening with your appointments today"
        action={({ onClick }) => (
          <Button
            variant="contained"
            color="primary"
            size="md"
            className="max-w-[215px] w-full"
            onClick={() => {
              onClick();
              setSelectedCarePlan(null);
              setIsOpen(true);
            }}
          >
            Create new plan
          </Button>
        )}
        isDashboard
      />
      <div className="flex min-w-[1300px] overflow-x-auto h-full gap-5  ">
        <div className="flex-1 min-w-0 p-4 py-5 ">
          <DateList
            onDateSelect={(val) => {
              setSelected(val);
              if (isTablet) {
                setIsScheduledModel(true);
              }
            }}
          />
          <Metrics plans={plans} />
          <div className="flex items-center justify-between gap-3 py-5 my-1 mb-2">
            <p className="text-xl font-bold text-[#0F1527]">All appointments</p>
            {isTablet && (
              <Button
                className="ml-4 mr-auto"
                size="sm"
                onClick={() => setIsScheduledModel(true)}
              >
                Open scheduled detail
              </Button>
            )}
            <Input
              leftSection={<Icon icon="Search1" color="inherit" />}
              placeholder="Search"
              className="max-w-[400px] w-full"
              onChange={(val) => debouncedSetSearchTerm(val.target.value)}
            />
          </div>

          <div className="relative flex justify-center w-full">
            {(isLoading ||
              isDeleting ||
              isFetching ||
              isCreating ||
              isUpdating) && (
              <Loading
                text="Loading care plans... Please wait."
                className="absolute top-36"
              />
            )}
          </div>
          <div
            style={{
              filter:
                isLoading ||
                isDeleting ||
                isFetching ||
                isCreating ||
                isUpdating
                  ? "blur(5px)"
                  : "none",
              pointerEvents:
                isLoading ||
                isDeleting ||
                isFetching ||
                isCreating ||
                isUpdating
                  ? "none"
                  : "unset",
            }}
          >
            <Table
              data={filteredCarePlans}
              header={DASHBOARD_LIST()}
              onEditAction={(_, row) => {
                setSelectedCarePlan(row);
                setIsOpen(true);
              }}
              onDeleteAction={(_, row) => {
                setDeletedId(row._id);
                setDeleteModal(true);
              }}
            />
          </div>
        </div>

        {!isTablet ? (
          <div
            style={{
              width: "min(370px, 100vw - 70%)",
            }}
          >
            <TimeList appointments={appointmentByDay} />
          </div>
        ) : null}
      </div>
      <Modal
        contentClass="max-w-[600px] w-full"
        show={isOpen}
        onClose={() => setIsOpen(false)}
        titlebarClass="hidden"
      >
        <NewPlanForm
          onClose={() => setIsOpen(false)}
          sendingData={createAppointment}
          currentPlan={selectedCarePlan}
        />
      </Modal>
      <Modal
        contentClass="max-w-[500px] w-full"
        show={isScheduledModel && isScheduledModel}
        onClose={() => setIsScheduledModel(false)}
      >
        <div>
          <TimeList appointments={appointmentByDay} isModalView />
        </div>
      </Modal>
      <Modal
        contentClass="max-w-[500px] w-full"
        show={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="Confirm Delete"
        titlebarClass="hidden"
      >
        <div className="p-6 text-center bg-white rounded-lg shadow-lg">
          <p className="mb-3 text-xl">Confirm delete</p>
          <p className="mb-4">
            Are you sure you want to delete this appointment?
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="contained" color="primary" onClick={handleDelete}>
              Confirm
            </Button>
            <Button variant="outline" onClick={() => setDeleteModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Main;
