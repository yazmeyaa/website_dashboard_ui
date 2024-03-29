import { FC, PropsWithChildren } from "react";

export const TruncateText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="tracking-normal overflow-hidden whitespace-nowrap text-ellipsis max-w-80">
      {children}
    </p>
  );
};
