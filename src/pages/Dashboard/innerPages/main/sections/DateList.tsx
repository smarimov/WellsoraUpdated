import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";

type DateItem = {
  day: number;
  dayOfWeek: string;
  original: string; // Stores full ISO date
};

const generateMonthDates = (): DateItem[] => {
  const today = dayjs();
  const daysInMonth = today.daysInMonth();
  const dates: DateItem[] = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const date = today.date(i);
    dates.push({
      day: i,
      dayOfWeek: date.format("ddd"), // Short weekday name (Mon, Tue, etc.)
      original: date.toISOString(), // Full date format
    });
  }

  return dates;
};

const DateList: React.FC<{ onDateSelect: (selectedDate: string) => void }> = ({
  onDateSelect,
}) => {
  const dates = generateMonthDates();
  const today = dayjs().date(); // Get current day (1 - 31)

  // Set today's date as default
  const [selectedDate, setSelectedDate] = useState<number>(today);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const selectedDateRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the selected date on mount
  useEffect(() => {
    if (selectedDateRef.current && scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth; // Get container width
      const elementOffset = selectedDateRef.current.offsetLeft;

      // Calculate a dynamic offset (center the selected date)
      const offset = elementOffset - containerWidth * 0.7; // Adjust percentage if needed

      scrollContainerRef.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle date selection
  const handleDateSelect = (day: number, isoDate: string) => {
    setSelectedDate(day);
    onDateSelect(isoDate); // Send selected date outside of component
  };

  return (
    <div
      ref={scrollContainerRef}
      className="w-full max-w-[750px] py-4 mx-auto overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-hidden scroll-smooth"
    >
      <div className="flex gap-4 px-4">
        {dates.map(({ day, dayOfWeek, original }) => (
          <div
            key={day}
            ref={selectedDate === day ? selectedDateRef : null}
            className={`flex font-bold border border-[#F0F0F0] shadow-custom flex-col items-center justify-center min-w-[60px] h-[60px] rounded-lg cursor-pointer transition-all 
              ${
                selectedDate === day
                  ? "bg-[#97c8dc] border-Purple-main font-bold shadow-none"
                  : "text-black"
              }`}
            onClick={() => handleDateSelect(day, original)}
          >
            <span className="text-xl">{day}</span>
            <span className="text-sm">{dayOfWeek}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateList;
