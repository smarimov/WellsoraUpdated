import React, { ReactNode, useRef, useState } from "react";
import { cn } from "@/utils";
import "./style.sass";
import clsx from "clsx";
import { Icon } from "@/components/Icon";
interface IList {
  id: string;
  label: string;
}
export type TAccordianBenefit = {
  title: string;
  list: IList[];
};

interface IAccordian {
  accordianData: TAccordianBenefit[];
  style?: React.CSSProperties;
}
const BenefitCollapse: React.FC<IAccordian> = ({ accordianData, style }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="collapse-container" style={{ ...style }}>
      {accordianData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.title}
          answer={item.list}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default BenefitCollapse;

interface IAccordianProps {
  question: string;
  answer: string | ReactNode;
  isOpen: boolean;
  onClick: () => void;
}
const AccordionItem: React.FC<IAccordianProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentHeight = useRef<HTMLDivElement>(null);
  return (
    <div className="accordion_wrapper">
      <div
        className={clsx(`question-container `, isOpen && "bg-[#EFF8FC] ")}
        onClick={onClick}
        style={
          isOpen
            ? { height: contentHeight?.current?.scrollHeight }
            : { height: 120 }
        }
        ref={contentHeight}
      >
        <div
          className={cn(
            "flex justify-between items-center gap-3 h-[60px]",
            isOpen && "active-collapse"
          )}
        >
          <div className="question-content">{question}</div>
          {isOpen ? (
            <Icon icon="ArrowUp" color="inherit" size={24} />
          ) : (
            <Icon icon="ArrowDown" color="inherit" size={24} />
          )}
        </div>
        <div className="pb-2 mt-7 text-[#878787] text-xl font-normal">
          {answer}
        </div>
      </div>
    </div>
  );
};
