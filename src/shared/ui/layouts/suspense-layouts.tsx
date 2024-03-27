import { Spinner } from "@nextui-org/react";
import { FunctionComponent, PropsWithChildren, Suspense } from "react";

export const SuspenseLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <Suspense fallback={<Spinner size="lg" />}>{children}</Suspense>;
};
