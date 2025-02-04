import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import { Icon } from "@/components/Icon";
import { Modal } from "@/components/Modal";
import NavbarWrapper from "@/components/navbar";
import { useMemo, useState } from "react";
import { ConnectionModel, InsuranceModel } from "./Modals";
import Collapse, { TAccordian } from "@/components/Collapse";
import { benefitFromAPi } from "@/raw";
import Cookies from "js-cookie";
import axios from "axios";

const BENEFIT_SEARCH_URL =
  "https://proxy-api-service-dot-wellsora-app.uc.r.appspot.com/api/proxy/sora-search"; // Replace with your API URL
const AUTH_TOKEN = Cookies.get("wellsora_token"); // Replace with your actual token

interface Benefit {
  benefitCost: {
    bold: string;
    description: Array<{
      _id: string;
      value: string | string[];
      heading?: string;
    }>;
  };
  _id: string;
  benefitCategory: string;
  benefitEligibility: Array<{
    _id: string;
    value: string | string[];
    heading?: string;
  }>;
  benefitFrequency: Array<{ _id: string; value: string | string[] }>;
  benefitName: string;
  benefitProvider: string;
}

const formatBenefitsGroup = (benefits: Benefit[]) => {
  return benefits.reduce(
    (groups: Record<string, Benefit[]>, benefit: Benefit) => {
      const category = benefit.benefitCategory || "Other";

      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(benefit);
      return groups;
    },
    {}
  );
};

enum ModelType {
  CONNECTION = "connection",
  INSURANCE = "insurance",
}
const Benefits = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState<ModelType>(
    ModelType.CONNECTION
  );
  const [isBenefitModal, setIsBenefitModal] = useState(false);
  const [currentBenefit, setCurrentBenefit] = useState<Benefit | null>(null);

  const [message, setMessage] = useState(
    "Instantly access your plan details with our AI-powered search. Get\
            quick, accurate answers about your coverage, and benefits—no more\
            navigating complex insurance documents."
  );
  const [searchQuery, setSearchQuery] = useState("");

  const benefitsSearch = async () => {
    try {
      const response = await axios.post(
        BENEFIT_SEARCH_URL,
        {
          searchQuery: searchQuery,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        }
      );

      console.log("Response:", response.data);
      setMessage(response.data.choices[0].message.content);
    } catch (error: any) {
      switch (error.response.status) {
        case 401:
          alert("Unauthorized. Please login and try again.");
          break;
        default:
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
          break;
      }
      setMessage("Something went wrong. Please try again later.");
    }
  };

  const handleBenefitSearch = () => {
    console.log("Search Query:", searchQuery);
    if (searchQuery === "") {
      setMessage(message);
    } else {
      console.log("Search Query:", searchQuery);
      setMessage("Loading...");
      benefitsSearch();
    }
  };

  const closeAndResetModel = () => {
    setIsOpen(false);
    setCurrentModel(ModelType.CONNECTION);
  };
  const closeAndResetBenefitModal = () => {
    setIsBenefitModal(false);
    setCurrentBenefit(null);
  };
  const benefits = formatBenefitsGroup(benefitFromAPi as Benefit[]);

  const accordionData = useMemo((): TAccordian[] => {
    return Object.keys(benefits).map((key) => ({
      title: key,
      description: (
        <BenefitInnerList
          list={benefits[key]}
          onSelect={(val) => {
            setCurrentBenefit(val);
            setIsBenefitModal(true);
          }}
        />
      ),
    }));
  }, [benefits]);
  const modelComponents = {
    [ModelType.CONNECTION]: (
      <ConnectionModel
        onSelect={() => setCurrentModel(ModelType.INSURANCE)}
        onClose={closeAndResetModel}
      />
    ),
    [ModelType.INSURANCE]: (
      <InsuranceModel
        onSelect={closeAndResetModel}
        onClose={closeAndResetModel}
      />
    ),
  };
  return (
    <>
      <NavbarWrapper
        title="Benefits"
        subTitle="Explore your benefits: cost, coverage & savings"
        action={
          <Button
            variant="contained"
            color="primary"
            size="md"
            className=" max-w-[215px] w-full"
            onClick={() => setIsOpen(true)}
          >
            Connect Insurance
          </Button>
        }
      />
      <div className="p-5 h-full mx-auto max-w-[1500px]">
        <div className="flex p-3 shadow-custom h-[60px] items-center gap-3 mb-3 border border-[#F0F0F0] rounded-lg">
          <Input
            placeholder="Search procedures, treatments or services...."
            className="w-full "
            wrapperClass="border-none"
<<<<<<< HEAD
            // rightSection={<Icon icon="Search1" color="#9E9E9E" />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            className=" text-nowrap h-[56px]"
            onClick={handleBenefitSearch}
          >
            Search Benefits
          </Button>
=======
            rightSection={<Icon icon="Search1" color="#9E9E9E" />}
          />
>>>>>>> bba2a25 (fix benifit)
        </div>

        <div className="px-[30px] py-5 bg-[#EFF8FC] my-4">
          <div className="text-lg italic font-normal text-[#9E9E9E]">
            {" "}
            {message}{" "}
          </div>
        </div>
        <Collapse accordianData={accordionData} />
      </div>

      <Modal
        show={isOpen}
        onClose={closeAndResetModel}
        titlebarClass="hidden"
        contentClass="max-w-[500px] w-full flex"
      >
        <div className="p-10 min-h-[570px] flex flex-col gap-8 justify-center">
          {modelComponents[currentModel]}
        </div>
      </Modal>
      {currentBenefit != null && (
        <Modal
          show={isBenefitModal}
          onClose={closeAndResetBenefitModal}
          titlebarClass="hidden"
          contentClass="max-w-[550px] w-full flex"
        >
          <BenefitDetailModel
            current={currentBenefit}
            onClose={closeAndResetBenefitModal}
          />
        </Modal>
      )}
    </>
  );
};

export default Benefits;

interface IBenefitChildProps {
  list: Benefit[];
  onSelect: (value: Benefit) => void;
}
const BenefitInnerList = ({ list, onSelect }: IBenefitChildProps) => {
  return (
    <div className="flex py-2 flex-col gap-4 max-h-[300px] overflow-auto">
      {list.map((item) => (
        <div key={item._id} className="flex items-center justify-between gap-3">
          <span>{item.benefitName}</span>
          <Button
            variant="outline"
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              onSelect(item);
            }}
          >
            View Details
          </Button>
        </div>
      ))}
    </div>
  );
};

interface ModelBenefitProps {
  onClose: VoidFunction;
  current: Benefit;
}
const BenefitDetailModel = ({ onClose, current }: ModelBenefitProps) => {
  return (
    <div className="p-5 min-h-[300px] flex flex-col gap-3 justify-center">
      <p className="mb-1 text-3xl font-bold ">{current.benefitName}</p>
      <div className="flex p-1 px-2 bg-gray-300 rounded w-fit">
        <p className="mb-1 text-base font-medium ">{current.benefitCategory}</p>
      </div>
      <div className="py-2 border-b">
        <span className="block mr-1 text-xl font-bold">Cost</span>
        <span className="text-lg font-semibold text-Purple-main">
          {current.benefitCost.bold}
        </span>
        <div>
          {current.benefitCost.description.length > 0 &&
            current.benefitCost.description.map((desc) => (
              <div key={desc._id} className="mb-1 text-base">
                {desc.value}
              </div>
            ))}
        </div>
      </div>
      <div className="py-2 border-b">
        <span className="block mr-1 text-xl font-bold">
          Eligibility requirements
        </span>
        <div>
          {current.benefitEligibility.length > 0 &&
            current.benefitEligibility.map((desc) => (
              <div className="mb-1 text-base" key={desc._id}>
                {desc.value}
              </div>
            ))}
        </div>
      </div>
      <div className="py-2 border-b">
        <span className="block mr-1 text-xl font-bold">Frequency</span>

        <div>
          {current.benefitFrequency.length > 0 &&
            current.benefitFrequency.map((desc) => (
              <div className="mb-1 text-base" key={desc._id}>
                {desc.value}
              </div>
            ))}
        </div>
      </div>

      <p className="text-center text-[#AEAEAE]">
        Question about coverage? Contact Member Services
      </p>
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
