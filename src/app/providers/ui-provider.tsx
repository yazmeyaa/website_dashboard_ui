import { NextUIProvider } from "@nextui-org/react";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  return <NextUIProvider navigate={navigate}>{children}</NextUIProvider>;
};
