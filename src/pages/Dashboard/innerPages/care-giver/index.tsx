import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Modal } from "@/components/Modal";
import NavbarWrapper from "@/components/navbar";
import ProgressBar from "@/components/ProgressBar";
import clsx from "clsx";
import { useState } from "react";
interface Option {
  id: string;
  label: string;
  description: string;
}

interface Step {
  id: string;
  title: string;
  subTitle: string;
  options: Option[];
}

const steps: Step[] = [
  {
    id: "Support Type",
    title: "What kind of support do you and your family member require?",
    subTitle: "Select all options applied",
    options: [
      {
        id: "s1",
        label: "Daily Chores",
        description: "Meal prep, cleaning, errands",
      },
      {
        id: "s2",
        label: "Personal Need",
        description: "Companionship & social activities",
      },
      {
        id: "s3",
        label: "Emotional Suppport",
        description: "Physical assistance & exercise",
      },
      {
        id: "s4",
        label: "Travel Assistance",
        description: "Medication & health monitoring",
      },
      // { id: "wad", label: "Movement Support" },
      // { id: "aga", label: "Advanced Care" },
      // { id: "gge", label: "Other " },
    ],
  },
  {
    id: "Timeframe",
    title: "When do you or your family member require support?",
    subTitle: "Choose the timeframe that best fits your situation",
    options: [
      { id: "t1", label: "Immediately", description: "Start within 24 hours" },
      {
        id: "t2",
        label: "Within next week",
        description: "Flexible start date",
      },
      { id: "t3", label: "Just Exploring", description: "Planning ahead" },
      {
        id: "t4",
        label: "In the next month or more",
        description: "Research phase",
      },
      // { id: "ds", label: "Other " },
    ],
  },
  {
    id: "Level of Assistance",
    title: "What level of assistance is required for you or your loved one?",
    subTitle: "Please select an option",
    options: [
      {
        id: "l1",
        label: "Long-Term Support",
        description: "Ongoing regular assistance",
      },
      {
        id: "l2",
        label: "Short-Term Help",
        description: "Temporary care needs",
      },
      {
        id: "l3",
        label: "Live-In Care",
        description: "24/7 dedicated support",
      },
    ],
  },
  {
    id: "Payment Method",
    title: "What is your preferred payment method?",
    subTitle: "Please select an option",
    options: [
      {
        id: "p1",
        label: "Insurance",
        description: "Coverage verification required",
      },
      { id: "p2", label: "Self Pay", description: "Direct payment options" },
      { id: "p3", label: "Medicaid", description: "Medicaid" },
      // { id: "ds", label: "Other Method " ,description: ''},
    ],
  },
];

const CareGiver = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string | null>
  >({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSelectOption = (option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [steps[currentStep].id]: option,
    }));
  };

  const isNextDisabled = !selectedOptions[steps[currentStep].id];
  const isLastStep = currentStep === steps.length - 1;
  return (
    <>
      <NavbarWrapper
        // title="Welcome back, Gandi"
        // subTitle="Thursday, Jan 4, 2022"
        title="Find the Perfect Caregiver"
        subTitle="Answer the following questions and get your perfect caregiver"
      />
      <div className="p-5 max-w-[1200px] mx-auto ">
        {/* {JSON.stringify(Object.keys(selectedOptions).length)} */}
        <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
        <StepCard
          step={steps[currentStep]}
          selectedOption={selectedOptions[steps[currentStep].id] || null}
          onSelectOption={handleSelectOption}
        />

        <div className="flex justify-end gap-2 mt-5">
          {currentStep !== 0 && (
            <Button
              onClick={handleBack}
              variant="outline"
              className="mr-auto min-w-[100px] "
              icon={<Icon icon="ArrowLeft01" color="inherit" />}
            >
              Back
            </Button>
          )}

          <Button
            onClick={() => {
              isLastStep ? setIsOpen(true) : handleNext();
            }}
            disabled={isNextDisabled}
            className="min-w-[130px]"
            rightIcon={<Icon icon="ArrowRight01" color="white" />}
          >
            {isLastStep ? "Find Caregivers" : "Continue"}
          </Button>
        </div>
      </div>
      <Modal
        contentClass="max-w-[500px] w-full  flex"
        show={isOpen}
        onClose={() => setIsOpen(false)}
        titlebarClass="hidden"
      >
        <div className="p-10 min-h-[300px] flex flex-col gap-3 justify-center bg-[#FAFAFA]">
          <div className="flex-1">
            <div className="w-10 mx-auto h-9">
              <img src="./assets/Logo.png" alt="" />
            </div>
            <p className="text-xl font-bold text-center ">
              Thank You for Your Request
            </p>
            <span className="text-lg font-medium text-[#2E02494D] block text-center">
              We've received your care preferences
            </span>
          </div>
          <div className="p-4 border rounded-lg border-[#F0F0F0] bg-white shadow-custom ">
            <p className="mb-1 text-base font-bold text-center">
              Your Care Request Summary
            </p>

            {Object.keys(selectedOptions).map((item) => (
              <div className="flex flex-col pb-1 mb-3 border-b last:border-b-0">
                <span className="text-sm text-[#AEAEAE] font-medium">
                  {item}
                </span>
                <span className="text-sm font-semibold">
                  {selectedOptions[item]}
                </span>
              </div>
            ))}
          </div>
          <div>
            <p className="mb-1 text-sm font-medium text-center">
              We'll contact you within 24 hours
            </p>
            <span className="text-sm text-center text-[#AEAEAE] font-medium block mb-2">
              Need immediate assistance? Call us at (555) 123-4567
            </span>
          </div>
          <Button
            className="w-40 mx-auto "
            size="sm"
            variant="outline"
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CareGiver;
const StepCard = ({
  step,
  selectedOption,
  onSelectOption,
}: {
  step: Step;
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
}) => {
  return (
    <div>
      <p className="text-[26px] font-bold text-[#0F1527] p-0 my-1 text-center">
        {step.title}
      </p>
      <span className="text-lg font-medium text-[#AEAEAE] text-center block mb-4">
        {step.subTitle}
      </span>
      <div className="flex flex-col gap-2 h-[600px]  overflow-auto">
        {step.options.map((option) => (
          <div
            key={option.id}
            className={clsx(
              "border flex items-center gap-3  rounded-lg  bg-white p-5 cursor-pointer hover:bg-[#EFF8FC] shadow-custom",
              selectedOption === option.label
                ? "border-Purple-main bg-[#EFF8FC]"
                : "border-[#F0F0F0]"
            )}
            onClick={() => onSelectOption(option.label)}
            aria-selected={selectedOption === option.label}
          >
            <div className="rounded-full w-12 h-12 bg-[#EFF8FC] flex justify-center items-center border border-Purple-main">
              <Icon icon="Surgical" size={24} color="#1B779B" />
            </div>

            <div>
              <p className="text-xl font-medium">{option.label}</p>
              <span className="italic text-[#AEAEAE] text-base font-normal">
                {option.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
