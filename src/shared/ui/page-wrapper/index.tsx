import { FC, ReactNode } from "react";

export const PageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="min-h-screen">{children}</main>;
};
