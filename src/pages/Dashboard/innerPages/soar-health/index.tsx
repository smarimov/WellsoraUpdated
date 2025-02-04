import { Button } from "@/components/Button";
import Collapse from "@/components/Collapse";
import { Input } from "@/components/Form";
import { Icon } from "@/components/Icon";
import NavbarWrapper from "@/components/navbar";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { set } from "react-hook-form";

const SORA_SEARCH_URL = 'https://proxy-api-service-dot-wellsora-app.uc.r.appspot.com/api/proxy/sora-search'; // Replace with your API URL
const AUTH_TOKEN = Cookies.get("wellsora_token");; // Replace with your actual token

const options = [
  {
    title: "Emergency Cost Coverage",
    description: ` If you're facing an emergency medical situation and are
                concerned about the costs, here are some steps you can take to
                explore options for coverage and assistance: 1. **Health
                Insurance:** Check with your health insurance provider to
                understand what your plan covers in emergency situations. Most
                insurance plans include emergency room visits`,
  },
  {
    title: "What factors typically influence the cost of a hospital stay?",
    description: ` If you're facing an emergency medical situation and are
                concerned about the costs, here are some steps you can take to
                explore options for coverage and assistance: 1. **Health
                Insurance:** Check with your health insurance provider to
                understand what your plan covers in emergency situations. Most
                insurance plans include emergency room visits`,
  },
  {
    title: "Prescription Drug Costs",
    description: ` If you're facing an emergency medical situation and are
                concerned about the costs, here are some steps you can take to
                explore options for coverage and assistance: 1. **Health
                Insurance:** Check with your health insurance provider to
                understand what your plan covers in emergency situations. Most
                insurance plans include emergency room visits`,
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
            'Content-Type': 'application/json',
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        }
      );
  
      console.log('Response:', response.data);
      setMessage(response.data.choices[0].message.content);
    } catch (error: any) {
      switch (error.response.status) {
        case 401:
          alert("Unauthorized. Please login and try again.");
          break;
        default:
          console.error('Error:', error.response ? error.response.data : error.message);
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
        title="Sora Health +"
        subTitle="Your trusted partner in providing the non-clinical support you need"
      />
      <div className="p-5 max-w-[1500px]">
        <div className="px-[30px] mb-7">
          <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] gap-3 mb-3">
            <Input
              placeholder="e.g. what symptoms siganl hypertension? "
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Button variant="contained" color="primary" onClick={handleSoraSearch}>
              SEARCH
            </Button>
          </div>

          {/* <div className="grid grid-cols-1 gap-3 mb-4 sm:grid-cols-2 lg:grid-cols-4">
            <Input
              leftSection={<Icon icon="Search1" color="inherit" />}
              placeholder="First text "
              className="w-full"
            />
            <Input
              leftSection={<Icon icon="Search1" color="inherit" />}
              placeholder="First text "
              className="w-full"
            />

            <Input
              leftSection={<Icon icon="Search1" color="inherit" />}
              placeholder="First text "
              className="w-full"
            />
            <Input
              leftSection={<Icon icon="Search1" color="inherit" />}
              placeholder="First text "
              className="w-full"
            />
          </div> */}
          <div className="px-[30px] py-5 bg-[#EFF8FC]">
            <div className="text-lg italic font-normal text-[#9E9E9E]"> {message} </div>
          </div>
        </div>

        <Collapse accordianData={options} />
      </div>
    </>
  );
};
export default SoarHeath;
