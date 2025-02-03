import React, { useEffect, useRef } from "react";

type TStatus = "pending" | "progress" | "success";

export type Appointment = {
  time: string; // Example: "07:05 AM"
  name: string;
  date: string;
  status: TStatus;
};

const generateTimeSlots = (): string[] => {
  const times: string[] = [];
  for (let hour = 0; hour < 24; hour++) {
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const ampm = hour < 12 ? "AM" : "PM";
    times.push(`${formattedHour.toString().padStart(2, "0")}:00 ${ampm}`);
  }
  return times;
};

const getStatusStyles = (status: TStatus) => {
  switch (status) {
    case "pending":
      return "bg-orange-100 text-Orange-main border-Orange-main";
    case "progress":
      return "bg-[#97c8dc] text-Purple-main border-Purple-main";
    case "success":
      return "bg-green-100 text-green-800 border-green-300";
    default:
      return "";
  }
};

const parseHour = (time: string): number => {
  const [hour, minute] = time.split(":").map(Number);
  return hour; // Extract hour only
};

const TimeList = ({ appointments }: { appointments: Appointment[] }) => {
  const timeSlots = generateTimeSlots();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const firstAppointmentRef = useRef<HTMLDivElement | null>(null);

  // Find first appointment slot
  const firstAppointmentTime = timeSlots.find((slot) =>
    appointments.some((appt) => {
      const apptHour = parseHour(appt.time);
      const slotHour = parseHour(slot);
      return apptHour === slotHour;
    })
  );

  // Scroll to the first appointment slot when appointments update
  useEffect(() => {
    if (firstAppointmentRef.current && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: firstAppointmentRef.current.offsetTop - 200, // Adjust for spacing
        behavior: "smooth",
      });
    }
  }, [appointments]);

  return (
    <div
      ref={scrollContainerRef}
      className="w-full max-w-[500px] [-ms-overflow-style:none] [scrollbar-width:none] max-h-[80vh] overflow-y-scroll overflow-x-hidden border border-[#F0F0F0] rounded-lg shadow-custom p-2"
    >
      {timeSlots.map((slotTime) => {
        const slotHour = parseHour(slotTime);

        // Find all appointments that fall within this hourly range
        const matchedAppointments = appointments.filter((appt) => {
          const apptHour = parseHour(appt.time);
          return apptHour === slotHour; // Match any appointment in the same hour
        });

        return (
          <div
            key={slotTime}
            ref={slotTime === firstAppointmentTime ? firstAppointmentRef : null}
            className="flex items-center py-4 border-b border-gray-300 h-[100px]"
          >
            <span className="mr-4 text-gray-500">{slotTime}</span>

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
                      <p className="text-sm">{appt.date}</p>
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
