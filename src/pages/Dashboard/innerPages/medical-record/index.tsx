import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import { Icon } from "@/components/Icon";
import { Modal } from "@/components/Modal";
import NavbarWrapper from "@/components/navbar";
import TabWithPath from "@/components/TabWithPath";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  ConnectionModel,
  ProceedModel,
  ProviderModel,
} from "./Components/Models";
import { redirectToLogin } from "@/FhirEpic/oauthHelpers";
import { usePlan } from "@/context/PlanContext";
import { Loading } from "@/components/Loading";
const TAB_LIST = [
  {
    label: "Past visits",
    value: "past-visit",
    icon: "loc",
    path: "past-visit",
  },
  {
    label: "Medications",
    value: "medications",
    icon: "tablet",
    path: "medications",
  },
  { label: "Allergies", value: "allergies", icon: "alergy", path: "allergies" },
  { label: "Care team", value: "care-team", icon: "doctor", path: "care-team" },
  {
    label: "Conditions",
    value: "conditions",
    icon: "heart",
    path: "conditions",
  },
];
enum ModelType {
  CONNECTION = "connection",
  PROVIDER = "provider",
  PROCEED = "proceed",
}
const MedicalRecord = () => {
  const { handleRecordConnection } = usePlan();
  const [isFetchingLoading, setIsFetchingLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState<ModelType>(
    ModelType.CONNECTION
  );

  const closeAndResetModel = () => {
    setIsOpen(false);

    setCurrentModel(ModelType.CONNECTION);
  };

  const handleProceededFinal = () => {
    closeAndResetModel();
    setIsFetchingLoading(true);
    setTimeout(() => {
      handleRecordConnection(true);
      setIsFetchingLoading(false);
    }, 1000);
    // redirectToLogin();
  };
  const modelComponents = {
    [ModelType.CONNECTION]: (
      <ConnectionModel
        onSelect={() => setCurrentModel(ModelType.PROVIDER)}
        onClose={closeAndResetModel}
      />
    ),
    [ModelType.PROVIDER]: (
      <ProviderModel
        onSelect={() => setCurrentModel(ModelType.PROCEED)}
        onClose={closeAndResetModel}
      />
    ),
    [ModelType.PROCEED]: (
      <ProceedModel
        onSelect={handleProceededFinal}
        onClose={closeAndResetModel}
      />
    ),
  };
  return (
    <>
      <NavbarWrapper
        title="Medical records"
        subTitle="All your health records, one secure connection"
        action={
          <Button
            variant="contained"
            color="primary"
            size="md"
            className=" max-w-[215px] w-full"
            onClick={() => setIsOpen(true)}
          >
            Connect records
          </Button>
        }
      />
      <div className="p-5 max-w-[1500px]  mx-auto">
        <div className="overflow-hidden bg-white rounded-2xl shadow-custom border border-[#F0F0F0] h-full">
          <TabWithPath tabs={TAB_LIST} />
          <div className="min-h-[500px] p-5">
            {isFetchingLoading ? (
              <Loading
                text="Wait Loading Data ..."
                className="flex flex-col items-center w-full "
              />
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
      <Modal
        show={isOpen}
        onClose={closeAndResetModel}
        titlebarClass="hidden"
        contentClass="max-w-[500px] w-full  flex"
      >
        <div className="p-10 min-h-[570px] flex flex-col gap-8 justify-center">
          {modelComponents[currentModel]}
        </div>
      </Modal>
    </>
  );
};

export default MedicalRecord;
