import React, { ReactNode, useRef, useState } from "react";
import { Icon } from "../Icon";
import { cn } from "@/utils";
import "./style.sass";
import clsx from "clsx";

export type TAccordian = {
  title: string;
  description: string | ReactNode;
  number?: number;
};

interface IAccordian {
  accordianData: TAccordian[];
  style?: React.CSSProperties;
  isSora?: boolean;
  isRandom?: boolean;
}
const Collapse: React.FC<IAccordian> = ({
  accordianData,
  style,
  isSora,
  isRandom,
}) => {
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
          isSora={isSora}
          number={String(index + 1).padStart(2, "0")}
          isRandom={isRandom}
          randomNumbe={item.number}
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
  isSora?: boolean;
  number?: string;
  isRandom?: boolean;
  randomNumbe?: number | null;
}
const AccordionItem: React.FC<IAccordianProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  isSora,
  number,
  isRandom,
  randomNumbe,
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
            "flex justify-between items-center gap-3 h-[60px] relative",
            isOpen && "active-collapse"
          )}
        >
          <div className="flex items-center justify-between gap-4 question-content">
            {" "}
            {isSora && (
              <span className="font-bold text-[#b5b5b5] text-4xl">
                {number}{" "}
              </span>
            )}{" "}
            {question}
            {isRandom && (
              <span className="absolute px-10 h-fit text-white bg-black border text-base border-black rounded-lg right-[60px]   ">
                {randomNumbe} benefits
              </span>
            )}{" "}
          </div>
          {isOpen ? (
            //
            isSora ? (
              <div className=" w-[30px] h-[30px] bg-Purple-main rounded-full flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3332 11H3.6665"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : (
              <Icon icon="ArrowUp" color="inherit" size={24} />
            )
          ) : isSora ? (
            <div className=" w-[30px] h-[30px] bg-Purple-main rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z"
                  fill="white"
                />
              </svg>
            </div>
          ) : (
            <Icon icon="ArrowDown" color="inherit" size={24} />
          )}
        </div>
        <div className="px-3  py-4 text-[#878787] text-xl font-normal box-border">
          {answer}
        </div>
      </div>
    </div>
  );
};
