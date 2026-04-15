"use client";
import { useMe } from "@/hooks/useAuth";
import React, { createContext } from "react";
import { User } from "@/types/User/User";

interface MeContextType {
  me: User | undefined;
  isLoading: boolean;
}

const MeContext = createContext<MeContextType | undefined>(undefined);

const MeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: me, isLoading } = useMe();
  const value = { me, isLoading };
  return <MeContext.Provider value={value}>{children}</MeContext.Provider>;
};

export { MeContext };
export default MeContextProvider;
