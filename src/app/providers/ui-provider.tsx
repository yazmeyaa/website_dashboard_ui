import { NextUIProvider } from "@nextui-org/react";
import { FC, ReactNode } from "react";

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
