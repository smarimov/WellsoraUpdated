import React, { ReactNode, useRef, useState } from "react";
import { Icon } from "../Icon";
import { cn } from "@/utils";
import "./style.sass";
import clsx from "clsx";

export type TAccordian = {
  title: string;
  description: string | ReactNode;
};

interface IAccordian {
  accordianData: TAccordian[];
  style?: React.CSSProperties;
}
const Collapse: React.FC<IAccordian> = ({ accordianData, style }) => {
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
          answer={item.description}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Collapse;

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
            : { height: 90 }
        }
        ref={contentHeight}
      >
        <div
          className={cn(
            "flex justify-between items-center gap-3 h-[60px]",
            isOpen && "active-collapse"
          )}
        >
          <div className="question-content"> {question}</div>
          {isOpen ? (
            <Icon icon="ArrowUp" color="inherit" size={24} />
          ) : (
            <div className=" w-[30px] h-[30px] bg-Purple-main rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="px-3  py-4 text-[#878787] text-xl font-normal box-border">
          {answer}
        </div>
      </div>
    </div>
  );
};
