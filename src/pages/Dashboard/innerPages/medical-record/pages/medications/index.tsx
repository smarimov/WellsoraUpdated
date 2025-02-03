import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { useMemo, useState } from "react";
import { usePlan } from "@/context/PlanContext";

const recordData = {
  entry: [
    {
      resource: {
        resourceType: "MedicationRequest",
        medicationReference: {
          display: "drospirenone-ethinyl estradio 3-0.02 MG per tablet",
        },
        authoredOn: "2023-06-06T12:00:00Z",
      },
    },
    {
      resource: {
        resourceType: "MedicationRequest",
        medicationReference: {
          display: "Atorvastatin 20 MG Oral Tablet",
        },
        authoredOn: "2023-05-15T09:30:00Z",
      },
    },
    {
      resource: {
        resourceType: "MedicationRequest",
        medicationReference: {
          display: "Lisinopril 10 MG Oral Tablet",
        },
        authoredOn: "2023-04-20T14:15:00Z",
      },
    },
    {
      resource: {
        resourceType: "MedicationRequest",
        medicationReference: {
          display: "Metformin 500 MG Oral Tablet",
        },
        authoredOn: "2023-07-10T08:45:00Z",
      },
    },
    {
      resource: {
        resourceType: "MedicationRequest",
        medicationReference: {
          display: "Amoxicillin 500 MG Capsule",
        },
        authoredOn: "2023-08-22T16:20:00Z",
      },
    },
    {
      resource: {
        resourceType: "MedicationRequest",
        medicationReference: {
          display: "Ibuprofen 200 MG Tablet",
        },
        authoredOn: "2023-09-05T11:10:00Z",
      },
    },
  ],
};
type TMedication = {
  category: string;
  description: string;
  date: string;
  // specialty: string;
  // department: string;
};
const Medications = () => {
  const { recordConnection } = usePlan();
  const [currentMedication, setCurrentMedication] =
    useState<TMedication | null>(null);
  const [isInformation, setIsInformation] = useState(false);
  const closeAndResetInformationModal = () => {
    setIsInformation(false);
    setCurrentMedication(null);
  };

  const medicationDataList = useMemo((): TMedication[] => {
    return recordData.entry
      .filter((med) => med.resource.resourceType === "MedicationRequest")
      .map((med) => ({
        category: med.resource.resourceType,
        description: med.resource.medicationReference?.display || "NA",
        date: med.resource?.authoredOn
          ? new Date(med.resource.authoredOn).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })
          : "NA",
      }));
  }, [recordData.entry]);
  const handleMedicationModel = (val: TMedication) => {
    setCurrentMedication(val);
    setIsInformation(true);
  };
  return (
    <>
      <div>
        <p className="text-2xl font-bold text-[#0F1527]">Current Medications</p>

        <span className="text-base font-normal text-[#AEAEAE] ">
          Your prescribed medications and dosages
        </span>

        <div className="flex flex-col gap-5 mt-6 max-h-[590px] overflow-auto">
          {recordConnection &&
            medicationDataList.map((item, index) => (
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
