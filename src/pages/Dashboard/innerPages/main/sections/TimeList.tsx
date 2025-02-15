import { cn, formatAmericanDate } from "@/utils";
import React, { useEffect, useRef } from "react";
import dayjs from "dayjs";
import { TStatus } from "../api";

export type Appointment = {
  time: string; // Now in "HH:mm" format (24-hour)
  name: string;
  date: string;
  status: TStatus;
};

/** ✅ Converts "HH:mm" (24-hour) to "h:mm A" (12-hour AM/PM) */
const convertTo12HourFormat = (time24: string): string => {
  return dayjs(`2000-01-01T${time24}`).format("h:mm A");
};

/** ✅ Generate time slots in 24-hour format (HH:mm) */
const generateTimeSlots = (): string[] => {
  return Array.from(
    { length: 24 },
    (_, hour) => `${hour.toString().padStart(2, "0")}:00`
  );
};

const getStatusStyles = (status: TStatus) => {
  switch (status) {
    case "New":
      return "bg-red-100 text-red-500 border-red-500";
    case "In Progress":
      return "bg-orange-100 text-orange-500 border-orange-500";
    case "Resolved":
      return "bg-green-100 text-green-600 border-green-600";
    default:
      return "";
  }
};

const TimeList = ({
  appointments,
  isModalView = false,
}: {
  appointments: Appointment[];
  isModalView?: boolean;
}) => {
  const timeSlots = generateTimeSlots();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const firstAppointmentRef = useRef<HTMLDivElement | null>(null);

  /** ✅ Extract hour from time */
  const extractHour = (time: string): number =>
    parseInt(time.split(":")[0], 10);

  // Find the first appointment slot for auto-scroll
  const firstAppointmentTime = timeSlots.find((slot) =>
    appointments.some((appt) => extractHour(appt.time) === extractHour(slot))
  );

  useEffect(() => {
    if (firstAppointmentRef.current && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: firstAppointmentRef.current.offsetTop - 200,
        behavior: "smooth",
      });
    }
  }, [appointments]);

  return (
    <div
      ref={scrollContainerRef}
      className={cn(
        "fixed right-0 bg-white h-full overflow-y-auto border-l border-gray-300 p-2",
        isModalView && "static max-h-[700px] h-full"
      )}
      style={{
        width: !isModalView ? "min(370px, 100vw - 70%)" : "100%",
        left: "calc(100% - min(370px, 100vw - 70%))",
      }}
    >
      {timeSlots.map((slotTime) => {
        // Find appointments that match this hour
        const matchedAppointments = appointments.filter(
          (appt) => extractHour(appt.time) === extractHour(slotTime)
        );

        return (
          <div
            key={slotTime}
            ref={slotTime === firstAppointmentTime ? firstAppointmentRef : null}
            className="flex items-center py-4 border-b border-gray-300 h-[100px]"
          >
            <span className="mr-4 text-gray-500">
              {convertTo12HourFormat(slotTime)}
            </span>

            <div className="relative">
              {matchedAppointments.length > 0 &&
                matchedAppointments.map((appt, index) => (
                  <div
                    key={index}
                    className={`absolute top-[-38px] px-3 py-2 rounded-md w-[200px] transition-all duration-300 border ${getStatusStyles(
                      appt.status
                    )}`}
                    style={{ left: `${index * 80}px` }}
                  >
                    <div>
                      <strong>{appt.name}</strong>
                      <p className="text-sm">{formatAmericanDate(appt.date)}</p>
                      <p className="text-xs italic font-semibold capitalize">
                        {appt.status}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimeList;
