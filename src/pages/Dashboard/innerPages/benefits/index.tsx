import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import { Icon } from "@/components/Icon";
import { Modal } from "@/components/Modal";
import NavbarWrapper from "@/components/navbar";
import { useEffect, useMemo, useState } from "react";
import { ConnectionModel, InsuranceModel } from "./Modals";
import Collapse, { TAccordian } from "@/components/Collapse";
import { benefitFromAPi } from "@/raw";
import Cookies from "js-cookie";
import axios from "axios";
import { Loading } from "@/components/Loading";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState<ModelType>(
    ModelType.CONNECTION
  );
  const [isBenefitModal, setIsBenefitModal] = useState(false);
  const [currentBenefit, setCurrentBenefit] = useState<Benefit | null>(null);
  const [benefits, setBenefits] = useState<Record<string, Benefit[]>>({});

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
  // const benefits = formatBenefitsGroup(benefitFromAPi as Benefit[]);

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
  const fetchBenefitsData = async () => {
    try {
      // const token = Cookies.get("wellsora_token");
      if (!AUTH_TOKEN) {
        console.error("No auth token found in cookies");
        return;
      }
      setIsLoading(true);
      const response = await axios.get(
        "https://benefits-service-dot-wellsora-app.uc.r.appspot.com/api/benefits?limit=100",
        {
          headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
        }
      );
      const buffer = formatBenefitsGroup(response.data.benefits as Benefit[]);
      setBenefits(buffer);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // console.error("Error fetching data:", error.message);
    }
  };
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
      number: benefits[key].length,
    }));
  }, [benefits]);
  console.log("aaccc ", accordionData);
  useEffect(() => {
    fetchBenefitsData();
  }, []);

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
      <div className="p-6 h-full mx-auto max-w-[1500px]">
        <div className="flex p-3  h-[90px] items-center gap-3 mb-7 border border-gray-200  rounded-lg">
          <Input
            placeholder="Search procedures, treatments or services...."
            className="w-full "
            wrapperClass="border-none"
            rightSection={
              <Icon
                onClick={handleBenefitSearch}
                icon="Search1"
                color="#9E9E9E"
                style={{ cursor: "pointer" }}
              />
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleBenefitSearch();
              }
            }}
          />
        </div>

        <div className="px-[30px] py-5 bg-[#EFF6FE] my-7">
          <div className="text-lg font-normal text-[#4C5260]"> {message} </div>
        </div>
        {isLoading && (
          <Loading
            text="Wait Loading Data ..."
            className="flex flex-col items-center w-full "
          />
        )}

        <Collapse accordianData={accordionData} isRandom />
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
          contentClass="max-w-[590px] w-full flex"
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
        <div
          key={item._id}
          className="flex items-center justify-between gap-3 pr-4"
        >
          <span className="text-black">{item.benefitName}</span>
          <Button
            variant="outline"
            className="bg-transparent border-none hover:bg-transparent hover:text-Purple-main"
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
      <div className="flex gap-2 py-3 border-b">
        <div className="w-10" style={{ color: "rgb(27, 119, 155)" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div>
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
      </div>

      <div className="flex gap-2 py-3 border-b ">
        <div className="w-6" style={{ color: "rgb(27, 119, 155)" }}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            color="rgb(27, 119, 155)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"></path>
          </svg>
        </div>

        <div>
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
      </div>
      <div className="flex gap-2 py-3 border-b">
        <div className="w-6" style={{ color: "rgb(27, 119, 155)" }}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            color="rgb(27, 119, 155)"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Clock_2">
              <g>
                <path d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"></path>
                <path d="M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div>
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
