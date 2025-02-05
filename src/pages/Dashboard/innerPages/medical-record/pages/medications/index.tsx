import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { useEffect, useMemo, useState } from "react";
import { apiClient } from "@/FhirEpic/apiClient";
import {
  MedicationRequestBundle,
  MedicationRequestEntry,
} from "@/types/medication";
import { Loading } from "@/components/Loading";

type TMedication = {
  category: string;
  description: string;
  date: string;
  // specialty: string;
  // department: string;
};
const Medications = () => {
  // const { recordConnection } = usePlan();
  const [medicationList, setMedicationList] =
    useState<MedicationRequestBundle | null>(null);
  const [currentMedication, setCurrentMedication] =
    useState<TMedication | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInformation, setIsInformation] = useState(false);
  const closeAndResetInformationModal = () => {
    setIsInformation(false);
    setCurrentMedication(null);
  };
  const fetchMedicationsData = async () => {
    try {
      const patientId: string | null = sessionStorage.getItem("patientId");
      if (!patientId) {
        return;
      }
      setIsLoading(true);
      const response = await apiClient.get(
        `/MedicationRequest?patient=${patientId}&status=active`
      );
      setMedicationList(response.data as MedicationRequestBundle);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching patient data:", error);
    }
  };
  const medicationFormatedList = useMemo((): TMedication[] => {
    if (!medicationList || !medicationList.entry) return [];
    return medicationList.entry
      .filter(
        (med): med is MedicationRequestEntry =>
          med.resource.resourceType === "MedicationRequest"
      )
      .map((med) => ({
        category: med.resource.resourceType,
        description:
          (med.resource.resourceType === "MedicationRequest" &&
            med.resource.medicationReference.display) ||
          "NA",
        date:
          med.resource.resourceType === "MedicationRequest" &&
          med.resource?.authoredOn
            ? new Date(med.resource.authoredOn).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
            : "NA",
      }));
  }, [medicationList?.entry]);
  const handleMedicationModel = (val: TMedication) => {
    setCurrentMedication(val);
    setIsInformation(true);
  };
  useEffect(() => {
    fetchMedicationsData();
  }, []);
  return (
    <>
      <div>
        <p className="text-2xl font-bold text-[#0F1527]">Current Medications</p>

        <span className="text-base font-normal text-[#AEAEAE] ">
          Your prescribed medications and dosages
        </span>

        <div className="flex flex-col gap-5 mt-6 max-h-[590px] overflow-auto">
          {isLoading && (
            <Loading
              text="Loading..."
              className="flex flex-col items-center w-full "
            />
          )}
          {medicationList != null &&
            medicationFormatedList.map((item, index) => (
              <div
                key={index}
                className="p-5 border border-[#F0F0F0] shadow-custom rounded-lg flex items-center gap-2 justify-between"
              >
                <div>
                  <p className="text-[#0F1527] text-lg font-bold">
                    {item.description}
                  </p>
                  {/* <span className="text-base font-normal text-[#AEAEAE]">
                  {item.subTitle}
                </span> */}
                </div>
                <span className="ml-auto mr-4 text-lg font-medium">
                  {item.date}
                </span>
                <Button
                  variant="outline"
                  onClick={() => handleMedicationModel(item)}
                >
                  Information
                </Button>
              </div>
            ))}
        </div>
      </div>
      {currentMedication && (
        <Modal
          show={isInformation}
          onClose={closeAndResetInformationModal}
          titlebarClass="hidden"
          contentClass="max-w-[400px] w-full  flex"
        >
          <MedicationModel
            onClose={closeAndResetInformationModal}
            onSelect={() => {}}
            current={currentMedication}
          />
        </Modal>
      )}
    </>
  );
};
export default Medications;

interface ModelMedicationProps {
  onSelect: VoidFunction;
  onClose: VoidFunction;
  current: TMedication;
}
const MedicationModel = ({
  onSelect,
  onClose,
  current,
}: ModelMedicationProps) => {
  return (
    <div className="p-5 min-h-[300px] flex flex-col gap-3 justify-center">
      <div className="">
        <div className="w-10 mx-auto h-9">
          <img src="../assets/Logo.png" alt="" />
        </div>
      </div>

      <p className="mb-1 text-base font-bold ">{current.description}</p>

      {/* <div className="flex ">
        <span className="text-sm text-[#AEAEAE] font-bold mr-1">Doctor:</span>
        <span className="text-sm text-[#AEAEAE] font-semibold">
          {current.specialty}
        </span>
      </div> */}

      {/* <div className="flex ">
        <span className="text-sm text-[#AEAEAE] font-bold mr-1">Clinic:</span>
        <span className="text-sm text-[#AEAEAE] font-semibold">
          {current.department}
        </span>
      </div> */}
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
