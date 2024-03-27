import { FC, ReactNode } from "react";
import { UIProvider } from "./ui-provider";
import { RouterProvider } from "./router-provider";

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <RouterProvider>
      <UIProvider>{children}</UIProvider>
    </RouterProvider>
  );
};
