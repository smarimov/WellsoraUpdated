import React, { createContext, useContext, ReactNode, useState } from "react";

interface PlanContextProps {
  recordConnection: boolean;
  handleRecordConnection: (val: boolean) => void;
}

const PlanContext = createContext<PlanContextProps | undefined>(undefined);

interface PlanProviderProps {
  children: ReactNode;
}

export const PlanProvider: React.FC<PlanProviderProps> = ({ children }) => {
  const [isRecord, setIsRecord] = useState(false);

  const handleRecordConnection = (val: boolean) => {
    setIsRecord(val);
  };
  const contextValue: PlanContextProps = {
    recordConnection: isRecord,
    handleRecordConnection,
  };

  return (
    <PlanContext.Provider value={contextValue}>{children}</PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
