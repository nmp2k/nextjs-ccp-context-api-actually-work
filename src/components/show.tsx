"use client";
import { createContext, ReactNode, useContext } from "react";
const context = createContext<any>({});
export function Show({ children }: { children: ReactNode }) {
  return (
    <context.Provider value={{ name: "lisa", age: 20 }}>
      {children}
    </context.Provider>
  );
}

export const getVal = () => {
  return useContext(context);
};
