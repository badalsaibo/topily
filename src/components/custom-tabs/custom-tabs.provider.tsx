import React, { createContext, useContext, useMemo, useState } from 'react';

type CustomTabsProviderValues = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

type CustomTabsProviderProps = {
  children: React.ReactNode;
};

const CustomTabsContext = createContext<CustomTabsProviderValues>({
  activeTab: 'all',
  setActiveTab: () => {},
});

const CustomTabsProvider = ({ children }: CustomTabsProviderProps) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const state = useMemo(
    () => ({
      activeTab,
      setActiveTab,
    }),
    [activeTab]
  );
  return (
    <CustomTabsContext.Provider value={state}>
      {children}
    </CustomTabsContext.Provider>
  );
};

export const useCustomTabs = () => useContext(CustomTabsContext);

export default CustomTabsProvider;
