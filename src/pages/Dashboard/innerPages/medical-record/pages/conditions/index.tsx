import { usePlan } from "@/context/PlanContext";

const OPTIONS = [
  {
    id: "01",
    title: "Hypertension",
  },
  {
    id: "02",
    title: "Type 2 Diabetes",
  },
];
const Conditions = () => {
  const { recordConnection } = usePlan();
  return (
    <div>
      <p className="text-2xl font-bold text-[#0F1527]">Conditions</p>

      <span className="text-base font-normal text-[#AEAEAE] ">
        Your recent and past medical conditions
      </span>

      <div className="flex flex-col gap-5 mt-6 max-h-[590px] overflow-auto">
        {recordConnection &&
          OPTIONS.map((item) => (
            <div className="p-5 border border-[#F0F0F0] shadow-custom rounded-lg flex items-center gap-2 ">
              <div>
                <p className="text-[#0F1527] text-lg font-bold">{item.title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Conditions;
