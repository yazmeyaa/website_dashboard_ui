import { FC } from "react";
import { PageWrapperProps } from "./types";

export const PageWrapper: FC<PageWrapperProps> = ({
  children,
  className: _className,
}) => {
  const className = `${
    _className !== undefined ? _className : ""
  } min-h-screen`;
  return <main className={className}>{children}</main>;
};
