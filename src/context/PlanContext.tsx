import React, { createContext, useContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const initial: TPlan[] = [
  {
    id: "1",
    appointmentName: "Dental Checkup",
    dateTime: "2025-02-03T10:00:00.000Z",
    firstName: "John",
    lastName: "Doe",
    location: "New York Dental Clinic",
    service: "Teeth Cleaning",
    status: "pending",
  },
  {
    id: "2",
    appointmentName: "Eye Examination",
    dateTime: "2025-02-20T02:00:00.000Z",
    firstName: "John",
    lastName: "Doe",
    location: "Vision Center LA",
    service: "Comprehensive Eye Exam",
    status: "progress",
  },
  {
    id: "3",
    appointmentName: "Physiotherapy Session",
    dateTime: "2025-04-10T09:00:00.000Z",
    firstName: "Michael",
    lastName: "Brown",
    location: "Wellness Therapy Center",
    service: "Post-Surgery Rehab",
    status: "success",
  },
  {
    id: "4",
    appointmentName: "General Consultation",
    dateTime: "2025-02-03T10:00:00.000Z",
    firstName: "Emily",
    lastName: "Johnson",
    location: "Downtown Medical Center",
    service: "Annual Checkup",
    status: "success",
  },
  {
    id: "5",
    appointmentName: "Cardiology Follow-up",
    dateTime: "2025-08-05T11:15:00.000Z",
    firstName: "David",
    lastName: "Williams",
    location: "Heart Care Hospital",
    service: "Blood Pressure Monitoring",
    status: "progress",
  },
  {
    id: "6",
    appointmentName: "Dermatology Consultation",
    dateTime: "2025-10-18T13:30:00.000Z",
    firstName: "Sophia",
    lastName: "Miller",
    location: "SkinCare Clinic",
    service: "Acne Treatment",
    status: "success",
  },
];

export type TStatus = "pending" | "progress" | "success";
export type TPlan = {
  appointmentName: string;
  dateTime: string;
  firstName: string;
  id: string;
  lastName: string;
  location: string;
  service: string;
  status: TStatus;
};

const x = {
  appointmentName: "Morgan Blair",
  date: "2025-02-02",
  firstName: "Taylor",
  id: "607e3adb-9247-41a0-b8ba-30386535179c",
  lastName: "Hill",
  location: "New York, NY, USA",
  service: "Transport",
  status: "New",
  time: "07:00",
};
// Define the shape of your context
interface PlanContextProps {
  plans: TPlan[];
  addPlan: (value: Omit<TPlan, "id">) => void;
  getPlanById: (id: string) => TPlan | undefined;
  updatePlan: (value: TPlan) => void;
  deletePlan: (id: string) => void;
  recordConnection: boolean;
  handleRecordConnection: (val: boolean) => void;
}

// Create the context
const PlanContext = createContext<PlanContextProps | undefined>(undefined);

// Create a provider component
interface PlanProviderProps {
  children: ReactNode;
}

export const PlanProvider: React.FC<PlanProviderProps> = ({ children }) => {
  const [plans, setPlans] = useState<TPlan[]>(initial);
  const [isRecord, setIsRecord] = useState(false);

  const addPlan = (product: Omit<TPlan, "id">) => {
    return setPlans((prev) => [...prev, { ...product, id: uuidv4() }]);
  };

  const getPlanById = (id: string) => {
    if (id) return plans.find((el) => el.id === id);
  };
  const updatePlan = (value: TPlan) => {
    setPlans((prev) =>
      prev.map((el) => {
        if (el.id === value.id) {
          return value;
        } else {
          return el;
        }
      })
    );
  };
  const deletePlan = (id: string) => {
    setPlans((prev) => prev.filter((el) => el.id != id));
  };
  const handleRecordConnection = (val: boolean) => {
    setIsRecord(val);
  };
  const contextValue: PlanContextProps = {
    plans,
    addPlan,
    getPlanById,
    updatePlan,
    deletePlan,
    recordConnection: isRecord,
    handleRecordConnection,
  };

  return (
    <PlanContext.Provider value={contextValue}>{children}</PlanContext.Provider>
  );
};

// Create a custom hook to use the theme context
// eslint-disable-next-line react-refresh/only-export-components
export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
