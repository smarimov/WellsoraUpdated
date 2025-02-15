import { Plan } from "./api";

export const getUniquePatientCount = (appointments: Plan[]): number => {
  const uniquePatients = new Set(
    appointments.map((appt) => `${appt.firstName} ${appt.lastName}`)
  );
  return uniquePatients.size;
};

export const getCompletedPlan = (appointments: Plan[]): number => {
  const now = new Date();
  now.setUTCHours(0, 0, 0, 0); // Normalize to UTC start of today

  // Calculate start and end of the current week (Monday - Sunday)
  const dayOfWeek = now.getUTCDay(); // 0 (Sun) to 6 (Sat)
  const thisMonday = new Date(now);
  thisMonday.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1)); // Move back to Monday
  thisMonday.setUTCHours(0, 0, 0, 0);

  const thisSunday = new Date(thisMonday);
  thisSunday.setDate(thisMonday.getDate() + 6); // Move to Sunday
  thisSunday.setUTCHours(23, 59, 59, 999);

  return appointments.filter(({ date, time, status }) => {
    if (status.toLowerCase() !== "resolved") return false;

    const appointmentDate = new Date(`${date}T${time}`);
    return appointmentDate >= thisMonday && appointmentDate <= thisSunday;
  }).length;
};

export const getUpcomingAppointments = (appointments: Plan[]): number => {
  const now = new Date();
  now.setUTCHours(0, 0, 0, 0); // Normalize to UTC start of today

  // Calculate the start of the upcoming week (next Monday)
  const dayOfWeek = now.getUTCDay(); // 0 (Sun) to 6 (Sat)
  const daysUntilNextMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek; // Move to next Monday
  const nextMonday = new Date(now);
  nextMonday.setDate(now.getDate() + daysUntilNextMonday);
  nextMonday.setUTCHours(0, 0, 0, 0); // Start of next Monday

  // Calculate the end of next week (Sunday)
  const nextSunday = new Date(nextMonday);
  nextSunday.setDate(nextMonday.getDate() + 6);
  nextSunday.setUTCHours(23, 59, 59, 999); // End of next Sunday

  return appointments.filter(({ date, time }) => {
    const appointmentDate = new Date(`${date}T${time}`); // Merge date and time
    return appointmentDate >= nextMonday && appointmentDate <= nextSunday;
  }).length;
};
