import React, { createContext, useState } from "react";

type HomeContextType = {
  index: number;
  increment: (i: number) => void;
};

export const HomeContext = createContext<HomeContextType>(
  {} as HomeContextType
);

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);

  const increment = (i: number) => {
    setIndex(i);
  };

  return (
    <HomeContext.Provider value={{ index, increment }}>
      {children}
    </HomeContext.Provider>
  );
}
