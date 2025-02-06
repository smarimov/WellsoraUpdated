import React, { createContext, useContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const initial: TPlan[] = [
  {
    id: "1",
    appointmentName: "Golden Throat Recovery at UPenn Hospital",
    dateTime: "2025-02-08T02:00:00.000Z",
    firstName: "Dwayne",
    lastName: "Johnson",
    location: "3400 Spruce St, Philadelphia, PA 19104, USA",
    service: "Support",
    status: "new",
  },
  {
    id: "2",
    appointmentName: "Spinal health & posture assessment at Harvard Medical Center",
    dateTime: "2025-02-06T12:54:00.000Z",
    firstName: "Taylor",
    lastName: "Swift",
    location: "3900 Woodland Ave, Philadelphia, PA 19104, USA",
    service: "Transport",
    status: "resolved",
  },
  {
    id: "3",
    appointmentName: "Playoff pain management at Cleveland Clinic",
    dateTime: "2025-02-06T12:55:00.000Z",
    firstName: "Jimmy",
    lastName: "Fallon",
    location: "455 Devon Park Dr, Wayne, PA 19087, USA",
    service: "Support",
    status: "progress",
  },
  {
    id: "4",
    appointmentName: "Screening for liver disease at UPenn Hospital before work",
    dateTime: "2025-02-06T12:56:00.000Z",
    firstName: "Oprah",
    lastName: "Winfrey",
    location: "381 W Dekalb Pike, King of Prussia, PA 19406, USA",
    service: "Post Visit",
    status: "progress",
  },
  {
    id: "5",
    appointmentName: "SpaceX sleep optimization at Stanford sleep clinic",
    dateTime: "2025-02-06T10:00:00.000Z",
    firstName: "Timothee",
    lastName: "Chalamet",
    location: "23 Carland Rd, Conshohocken, PA 19428, USA",
    service: "Transport",
    status: "resolved",
  },
  {
    id: "6",
    appointmentName: "Playoff pain management at Cleveland Clinic",
    dateTime: "2025-02-11T15:57:00.000Z",
    firstName: "Jeff",
    lastName: "Bezos",
    location: "9500 Euclid Ave, Cleveland, OH 44195, USA",
    service: "Transport",
    status: "new",
  },
];

export type TStatus = "new" | "progress" | "resolved";
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
