import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { useMemo, useState } from "react";
import { apiClient } from "@/FhirEpic/apiClient";
import { recordData } from "@/raw";
import { usePlan } from "@/context/PlanContext";

const example = {
  date: "Jun 06, 2023",
  specialty: "Physician Surgery, MD", // Renamed from "display"
  department: "EMH Main Operating Room", // Renamed from "location"
  category: "Encounter", // Renamed from "resourseType"
  description: "Surgery Admit", // Renamed from "text"
  role: "Practitioner", // Renamed from "type"
};

type TPastVisit = {
  date: string;
  specialty: string;
  department: string;
  category: string;
  description: string;
  role: string;
};
type TCurrentVisit = {
  description: string;
  specialty: string;
  department: string;
  date: string;
};
const PastVisit = () => {
  const { recordConnection } = usePlan();
  const [isVisit, setIsVisit] = useState(false);
  const [currentVisit, setCurrentVisit] = useState<TCurrentVisit | null>(null);
  const closeAndResetVisit = () => {
    setIsVisit(false);
    setCurrentVisit(null);
  };
  const fetchEncounterData = async () => {
    try {
      const patientId = sessionStorage.getItem("patientId");
      const response = await apiClient.get(
        `/Encounter?patient=erXuFYUfucBZaryVksYEcMg3`
      );
      console.log("result in visit ", response.data);
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };

  const pastVisitData = useMemo((): TPastVisit[] => {
    return recordData.entry
      .filter((visit) => visit.resource.resourceType === "Encounter")
      .map((visit) => ({
        date: visit.resource.period?.start
          ? new Date(
              visit.resource.period.start.split("T")[0]
            ).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })
          : "NA",
        specialty: visit.resource.participant?.[0]?.individual?.display || "NA",
        department: visit.resource.location?.[0]?.location?.display || "NA",
        category: visit.resource.resourceType,
        description: visit.resource.type?.[0]?.text || "NA",
        role: visit.resource.participant?.[0]?.individual?.type || "NA",
      }));
  }, [recordData.entry]);

  const handleVisitModal = (current: TCurrentVisit) => {
    setCurrentVisit(current);
    setIsVisit(true);
  };
  // useEffect(() => {
  //   fetchEncounterData();
  // }, []);
  return (
    <>
      <div>
        <p className="text-2xl font-bold text-[#0F1527]">Past visits</p>

        <span className="text-base font-normal text-[#AEAEAE] ">
          Your recent medical appointments
        </span>

        <div className="flex flex-col gap-5 mt-6 max-h-[590px] overflow-auto">
          {recordConnection &&
            pastVisitData.map((visit, index) => (
              <div
                key={index}
                className="p-5 border border-[#F0F0F0] shadow-custom rounded-lg flex items-center gap-2 "
              >
                <div>
                  <p className="text-[#0F1527] text-xl font-bold">
                    {visit.description}
                  </p>
                  <span className="text-base font-normal text-[#AEAEAE] block">
                    {visit.role} - {visit.specialty}
                  </span>

                  <span className="text-base font-normal text-[#AEAEAE] block">
                    {visit.department}
                  </span>
                </div>
                <span className="ml-auto mr-4 text-lg font-medium">
                  {visit.date}
                </span>
                <Button
                  variant="outline"
                  onClick={() => handleVisitModal(visit)}
                >
                  Visit Results
                </Button>
              </div>
            ))}
        </div>
      </div>
      {currentVisit != null && (
        <Modal
          show={isVisit}
          onClose={closeAndResetVisit}
          titlebarClass="hidden"
          contentClass="max-w-[400px] w-full  flex"
        >
          <VisitModel
            onClose={closeAndResetVisit}
            onSelect={() => {}}
            current={currentVisit}
          />
        </Modal>
      )}
    </>
  );
};
export default PastVisit;
interface ModelVisitProps {
  onSelect: VoidFunction;
  onClose: VoidFunction;
  current: TCurrentVisit;
}
const VisitModel = ({ onSelect, onClose, current }: ModelVisitProps) => {
  return (
    <div className="p-5 min-h-[300px] flex flex-col gap-3 justify-center">
      <div className="">
        <div className="w-10 mx-auto h-9">
          <img src="../assets/Logo.png" alt="" />
        </div>
      </div>

      <p className="mb-1 text-base font-bold ">{current.description}</p>

      <div className="flex ">
        <span className="text-sm text-[#AEAEAE] font-bold mr-1">Doctor:</span>
        <span className="text-sm text-[#AEAEAE] font-semibold">
          {current.specialty}
        </span>
      </div>

      <div className="flex ">
        <span className="text-sm text-[#AEAEAE] font-bold mr-1">Clinic:</span>
        <span className="text-sm text-[#AEAEAE] font-semibold">
          {current.department}
        </span>
      </div>
      <div className="flex ">
        <span className="text-sm text-[#AEAEAE] font-bold mr-1">Date:</span>
        <span className="text-sm text-[#AEAEAE] font-semibold">
          {current.date}
        </span>
      </div>
      <Button
        className="w-40 mx-auto mt-3 "
        size="sm"
        variant="outline"
        onClick={onClose}
      >
        Close
      </Button>
    </div>
  );
};
