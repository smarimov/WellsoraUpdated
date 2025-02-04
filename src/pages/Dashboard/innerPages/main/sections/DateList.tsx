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
  const [selectedDate, setSelectedDate] = useState<number>(today);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const selectedDateRef = useRef<HTMLDivElement | null>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    if (selectedDateRef.current && scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth; // Get container width
      const elementOffset = selectedDateRef.current.offsetLeft;

      // Center the selected date in view
      const offset = elementOffset - containerWidth * 0.7;
      scrollContainerRef.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle mouse down event (start dragging)
  const handleMouseDown = (event: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    startX.current = event.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  // Handle mouse move event (scrolling)
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    event.preventDefault();
    const x = event.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Adjust scrolling speed
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Handle mouse up event (stop dragging)
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Handle date selection
  const handleDateSelect = (day: number, isoDate: string) => {
    setSelectedDate(day);
    onDateSelect(isoDate);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="py-5 flex gap-4 overflow-x-auto  [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-hidden scroll-smooth"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      // style={{ border: "1px solid pink" }}
    >
      {dates.map(({ day, dayOfWeek, original }) => (
        <div
          key={day}
          ref={selectedDate === day ? selectedDateRef : null}
          className={`flex font-bold border border-[#F0F0F0] shadow-custom flex-col items-center justify-center min-w-[70px] h-[70px] rounded-lg cursor-pointer transition-all 
              ${
                selectedDate === day
                  ? "bg-Purple-main  font-bold shadow-none text-white"
                  : "text-black"
              }`}
          onClick={() => handleDateSelect(day, original)}
        >
          <span className="text-2xl select-none">{day}</span>
          <span className="text-xl select-none">{dayOfWeek}</span>
        </div>
      ))}
    </div>
  );
};

export default DateList;
