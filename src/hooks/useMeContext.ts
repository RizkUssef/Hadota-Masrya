import React from "react";
import { MeContext } from "@/context/MeContext";

export const useMeContext = () => {
  const context = React.useContext(MeContext);
  if (!context) {
    throw new Error("useMeContext must be used within a MeContextProvider");
  }
  return context;
};