import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { usePlan } from "@/context/PlanContext";
import { useState } from "react";

const OPTIONS = [
  {
    id: "01",
    title: "Dr. Smith",
    subTitle: "Physician",
  },
  {
    id: "02",
    title: "Annual Check up",
    subTitle: "Dr. Smith",
  },
  {
    id: "03",
    title: "Annual Check up",
    subTitle: "Dr. Smith",
  },
];
type TCare = {
  id: string;
  title: string;
  subTitle: string;
};
const CareTeam = () => {
  const { recordConnection } = usePlan();
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<TCare | null>(null);
  const handleModel = () => {
    setIsOpen(false);
    setCurrent(null);
  };
  return (
    <>
      <div>
        <p className="text-2xl font-bold text-[#0F1527]">Care Team</p>

        <span className="text-base font-normal text-[#AEAEAE] ">
          Your healthcare provider
        </span>

        <div className="flex flex-col gap-5 mt-6 max-h-[590px] overflow-auto">
          {recordConnection &&
            OPTIONS.map((item) => (
              <div className="p-5 border border-[#F0F0F0] shadow-custom rounded-lg flex items-center gap-2 ">
                <div>
                  <p className="text-[#0F1527] text-xl font-bold">
                    {item.title}
                  </p>
                  <span className="text-base font-normal text-[#1B779B]">
                    {item.subTitle}
                  </span>
                </div>
                <span className="ml-auto mr-4 text-lg font-medium">
                  Saturday, June 03, 2023
                </span>
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrent(item);
                    setIsOpen(true);
                  }}
                >
                  Information
                </Button>
              </div>
            ))}
        </div>
      </div>

      {current && (
        <Modal
          show={isOpen}
          onClose={handleModel}
          titlebarClass="hidden"
          contentClass="max-w-[400px] w-full  flex"
        >
          <CareTeamModel
            onClose={handleModel}
            onSelect={() => {}}
            current={current}
          />
        </Modal>
      )}
    </>
  );
};
export default CareTeam;

interface ModelMedicationProps {
  onSelect: VoidFunction;
  onClose: VoidFunction;
  current: TCare;
}
const CareTeamModel = ({
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

      {/* <p className="mb-1 text-base font-bold ">{current.title}</p> */}
      <div className="flex ">
        <span className="text-sm text-[#AEAEAE] font-bold mr-1">Doctor:</span>
        <span className="text-sm text-[#AEAEAE] font-semibold">
          {current.title}
        </span>
      </div>
      <div className="flex ">
        <span className="text-sm text-[#AEAEAE] font-bold mr-1">Clinic:</span>
        <span className="text-sm text-[#AEAEAE] font-semibold">
          {current.subTitle}
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
