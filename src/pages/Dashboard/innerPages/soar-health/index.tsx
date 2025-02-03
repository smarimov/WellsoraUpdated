import { Button } from "@/components/Button";
import Collapse from "@/components/Collapse";
import { Input } from "@/components/Form";
import { Icon } from "@/components/Icon";
import NavbarWrapper from "@/components/navbar";

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
            />

            <Button variant="contained" color="primary">
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
            <div className="text-lg italic font-normal text-[#9E9E9E]">
              Lorem ipsum dolor sit amet consectetur. Sem ac at velit lacinia
              pellentesque vestibulum sed. Nulla aliquam dolor quam adipiscing
              ultrices. Egestas blandit vitae massa rhoncus imperdiet vulputate
              ornare nunc. Enim libero metus cursus volutpat risus.Lorem ipsum
              dolor sit amet consectetur. Sem ac at velit lacinia pellentesque
              vestibulum sed.{" "}
            </div>
          </div>
        </div>

        <Collapse accordianData={options} />
      </div>
    </>
  );
};
export default SoarHeath;
