import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { IOption } from "@/types";
import { Autocomplete } from "@/components/Autocomplete";
import { useState } from "react";

interface ModelProps {
  onSelect: VoidFunction;
  onClose: VoidFunction;
}

export const ConnectionModel = ({ onSelect, onClose }: ModelProps) => (
  <>
    <div>
      <div className="w-10 mx-auto h-9">
        <img src="../assets/Logo.png" alt="Logo" />
      </div>
      <p className="text-[32px] font-bold mb-1 text-center">
        Connect Your Records
      </p>
      <span className="text-lg font-medium text-[#2E02494D] text-center block">
        Access your medical information in one place
      </span>
    </div>
    <div className="flex flex-col gap-5 mt-5">
      <Button color="primary" onClick={onSelect}>
        Connect Records
      </Button>
      <Button variant="outline" onClick={onClose}>
        Cancel
      </Button>
    </div>
    <div className="flex justify-center gap-10 mt-auto">
      <div className="flex items-center gap-5">
        <Icon icon="Secure" color="inherit" />
        <span className="text-[#2E02494D] text-lg font-medium">
          HIPAA Secure
        </span>
      </div>
      <div className="flex items-center gap-5">
        <Icon icon="Encrypted" color="inherit" />
        <span className="text-[#2E02494D] text-lg font-medium">Encrypted</span>
      </div>
    </div>
  </>
);

export const ProviderModel = ({ onSelect, onClose }: ModelProps) => {
  const [selected, setSelected] = useState<IOption<string> | null>(null);

  return (
    <>
      <Button
        variant="outline"
        className="absolute w-10 right-5 top-5"
        onClick={onClose}
        icon={<Icon icon="Cancel01" color="inherit" size={24} />}
      />
      <div>
        <div className="w-10 mx-auto h-9">
          <img src="../assets/insurance-logo.png" alt="Insurance Logo" />
        </div>
        <p className="text-[30px] font-bold mb-1 text-center">
          Select Your Health Provider
        </p>
        <span className="text-lg font-medium text-[#2E02494D]">
          Choose your hospital or healthcare system to connect your records
        </span>
      </div>
      <div className="flex-1 w-full">
        <Autocomplete
          placeholder="Search Hospitals"
          value={selected}
          options={[
            { label: "Mayo Clinic", value: "1" },
            { label: "Cleveland Clinic", value: "2" },
            { label: "Johns Hopkins Hospital", value: "3" },
          ]}
          onSelect={(val) => {
            setSelected(val as IOption);
            onSelect();
          }}
        />
      </div>
    </>
  );
};

export const ProceedModel = ({ onSelect, onClose }: ModelProps) => (
  <>
    <Button
      variant="outline"
      className="absolute w-10 right-5 top-5"
      onClick={onClose}
      icon={<Icon icon="Cancel01" color="inherit" size={24} />}
    />
    <div>
      <div className="w-10 mx-auto h-9">
        <img src="../assets/insurance-logo.png" alt="Insurance Logo" />
      </div>
      <p className="text-[30px] font-bold mb-1 text-center">
        Connect to Your Health Portal
      </p>
      <span className="text-lg font-medium text-[#2E02494D]">
        You are about to securely access your health records through your
        provider’s patient portal.
      </span>
    </div>
    <div className="flex flex-col flex-1 gap-3">
      <div>
        <p className="mb-1 text-lg font-bold">Select Your Health Provider</p>
        <span className="text-lg font-medium text-[#2E02494D]">
          Choose your hospital or healthcare system to connect your records
        </span>
      </div>
      <div>
        <p className="mb-1 text-lg font-bold">Data Privacy</p>
        <span className="text-lg font-medium text-[#2E02494D]">
          You control what information is shared and for how long.
        </span>
      </div>
    </div>
    <Button className="w-full" onClick={onSelect}>
      Proceed
    </Button>
  </>
);
