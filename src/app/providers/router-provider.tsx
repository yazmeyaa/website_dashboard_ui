import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <BrowserRouter basename="/admin">{children}</BrowserRouter>;
};
