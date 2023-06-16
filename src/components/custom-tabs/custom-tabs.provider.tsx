import React, { createContext, useMemo, useState } from 'react';

type CustomTabsProviderValues = {
  activeTabIndex: number;
  setActiveTabIndex?: React.Dispatch<React.SetStateAction<number>>;
};

type CustomTabsProviderProps = {
  children: React.ReactNode;
};

const CustomTabsContext = createContext<CustomTabsProviderValues>({
  activeTabIndex: 0,
});

const CustomTabsProvider = ({ children }: CustomTabsProviderProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const state = useMemo(
    () => ({
      activeTabIndex,
      setActiveTabIndex,
    }),
    [activeTabIndex]
  );
  return (
    <CustomTabsContext.Provider value={state}>
      {children}
    </CustomTabsContext.Provider>
  );
};

export default CustomTabsProvider;
