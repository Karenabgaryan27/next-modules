'use client'

import React, { useState, createContext, useContext } from "react";


type StateType =  {
  [key: string]: any; 
}

type ContextType  = {
  state: StateType;
  setState: (newState: StateType) => void;
}

export const Context = createContext<ContextType | null>(null);

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [state, setState] = useState<StateType>({});

  return (
    <Context.Provider
      value={{
        state,
        ...state,
        setState,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => useContext(Context);
