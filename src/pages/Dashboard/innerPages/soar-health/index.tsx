import { Button } from "@/components/Button";
import Collapse from "@/components/Collapse";
import { Input } from "@/components/Form";
import { Icon } from "@/components/Icon";
import NavbarWrapper from "@/components/navbar";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { set } from "react-hook-form";

const SORA_SEARCH_URL =
  "https://proxy-api-service-dot-wellsora-app.uc.r.appspot.com/api/proxy/sora-search"; // Replace with your API URL
const AUTH_TOKEN = Cookies.get("wellsora_token"); // Replace with your actual token

const options = [
  {
    title: "What is emergency cost coverage in the U.S., and how does it work?",
    description:
      "Emergency cost coverage is how insurance pays for emergencies. The Affordable Care Act (ACA) requires most plans to cover emergencies without approval, at the same cost in or out of network. You may still owe deductibles, copays (copayments), or other costs. Check your plan.",
  },
  {
    title: "What factors typically influence the cost of a hospital stay?",
    description:
      "The cost of a hospital stay depends on the type of care needed, like surgery or urgent care (UCU), length of stay, hospital location, and insurance. Extra costs include tests, medications, specialist visits, and follow-up care. Understanding these factors helps plan hospital expenses.",
  },
  {
    title:
      "What factors influence prescription drug costs and how can you manage them?",
    description:
      "Prescription drug costs depend on factors like the type of medication (generic or brand-name), insurance coverage, pharmacy location, and available discounts. Without insurance, prices can be high, but discount cards, manufacturer coupons, and assistance programs can help lower costs. Always compare options carefully",
  },
  {
    title:
      "Why are regular appointments important for managing high blood pressure?",
    description:
      "High blood pressure appointments are vital to monitor your condition, adjust medications, and prevent complications like heart disease or stroke. Doctors measure your blood pressure, review your lifestyle, and may order tests. Regular visits help manage risks and support long-term health effectively.",
  },
  {
    title: "What influences the cost of mental health services?",
    description:
      "Mental health service costs depend on factors like therapy type (individual, group, or specialized), provider expertise, session length, and insurance coverage. Without insurance, costs vary widely, but sliding-scale fees, community programs, or telehealth options may help make care more affordable.",
  },
];

const SoarHeath = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState(
    "Sora Health+ is your caregiving companion. We provide resources,\
    tips, and personalized guidance to help you care for loved ones\
    with confidence. Think of us as a supportive friend, simplifying\
    caregiving. For medical concerns or emergencies, please call your\
    doctor immediately."
  );

  const soraSearch = async () => {
    try {
      const response = await axios.post(
        SORA_SEARCH_URL,
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

  function handleSoraSearch() {
    console.log("Search Query:", searchQuery);
    if (searchQuery === "") {
      setMessage(message);
    } else {
      console.log("Search Query:", searchQuery);
      setMessage("Loading...");
      soraSearch();
    }
  }

  return (
    <>
      <NavbarWrapper
        title="Sora health +"
        subTitle="Your trusted partner in providing the non-clinical support you need"
      />
      <div className="p-5 max-w-[1500px] mx-auto">
        <div className=" mb-7">
          <div className="flex p-3 shadow-custom h-[60px] items-center gap-3 mb-3 border border-[#F0F0F0] rounded-lg">
            <Input
              placeholder="e.g. what symptoms siganl hypertension? "
              className="w-full "
              wrapperClass="border-none"
              rightSection={<Icon icon="Search1" color="#9E9E9E" />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleSoraSearch}
            >
              SEARCH
            </Button>
          </div>

          <div className="px-[30px] py-5 bg-[#EFF8FC]">
            <div className="text-lg italic font-normal text-[#9E9E9E]">
              {" "}
              {message}{" "}
            </div>
          </div>
        </div>

        <Collapse accordianData={options} />
      </div>
    </>
  );
};
export default SoarHeath;
