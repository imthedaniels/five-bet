import { createContext, useState } from "react";

export const DashboardContext = createContext([]);

export const DashboardProvider = ({ children }) => {
  const [tab, setTab] = useState("RecentActivity");

  const chooseTab = (tab) => {
    setTab(tab);
  };

  return (
    <DashboardContext.Provider value={{ tab, chooseTab }}>
      {children}
    </DashboardContext.Provider>
  );
};
