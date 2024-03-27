import { useUnit } from "effector-react";
import { FC, ReactNode } from "react";
import { $token } from "../../../entities/session/model";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const user = useUnit($token);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
