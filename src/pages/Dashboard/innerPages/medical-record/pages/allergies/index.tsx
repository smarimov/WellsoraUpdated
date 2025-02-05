import { Loading } from "@/components/Loading";
import { usePlan } from "@/context/PlanContext";
import { apiClient } from "@/FhirEpic/apiClient";
import { AllergyIntoleranceResponse } from "@/types/alergy";
import { useEffect, useMemo, useState } from "react";

const Allergies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allergies, setAllergies] = useState<AllergyIntoleranceResponse | null>(
    null
  );
  const fetchAllergiesData = async () => {
    try {
      const patientId: string | null = sessionStorage.getItem("patientId");
      if (!patientId) {
        return;
      }
      setIsLoading(true);
      const response = await apiClient.get(
        `/AllergyIntolerance?patient=${patientId}`
      );
      setAllergies(response.data as AllergyIntoleranceResponse);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching patient data:", error);
    }
  };
  const allergyFormattedList = useMemo(() => {
    if (!allergies || !allergies.entry) return [];

    return allergies.entry
      .filter((al) => al.resource.resourceType === "AllergyIntolerance")
      .map((al) => ({
        title:
          (al.resource.resourceType === "AllergyIntolerance" &&
            al.resource.code?.coding?.[0]?.display) ||
          "NA", // Proper optional chaining
        text:
          (al.resource.resourceType === "AllergyIntolerance" &&
            al.resource.code?.text) ||
          "NA",
      }));
  }, [allergies?.entry]);

  useEffect(() => {
    fetchAllergiesData();
  }, []);
  return (
    <div>
      <p className="text-2xl font-bold text-[#0F1527]">Allergies</p>

      <span className="text-base font-normal text-[#AEAEAE] ">
        Known allergies and reactions
      </span>

      <div className="flex flex-col gap-5 mt-6 max-h-[590px] overflow-auto">
        {isLoading && (
          <Loading
            text="Loading..."
            className="flex flex-col items-center w-full "
          />
        )}
        {allergies &&
          allergyFormattedList.map((item) => (
            <div
              key={item.text}
              className="p-5 border border-[#F0F0F0] shadow-custom rounded-lg flex items-center gap-2 "
            >
              <div>
                <p className="text-[#0F1527] text-lg font-bold">
                  {item.title} - {item.text}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Allergies;
