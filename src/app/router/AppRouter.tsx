import { Route, Routes } from "react-router-dom";
import { SuspenseLayout } from "../../shared/ui/layouts/suspense-layouts";
import { NotFoundPage } from "../../pages/not-found";
import { ProtectedRoute } from "../../shared/config/routes/protected-routes";
import { ComponentType, FC, PropsWithChildren, ReactNode } from "react";
import { routes } from "./consts";

export const RenderLayout: FC<{
  children: ReactNode;
  layout: ComponentType<PropsWithChildren> | undefined;
}> = ({ children, layout: Layout }) => {
  if (typeof Layout === "undefined") return children;

  return <Layout>{children}</Layout>;
};

const routesContent = routes.map(
  ({
    protected: protectedRoute,
    path,
    component: Component,
    layout: Layout,
  }) => {
    if (protectedRoute)
      return (
        <Route
          key={path}
          element={
            <ProtectedRoute>
              <RenderLayout layout={Layout}>
                <Component />
              </RenderLayout>
            </ProtectedRoute>
          }
          path={path}
        />
      );
    else return <Route key={path} path={path} element={<Component />} />;
  }
);

export const AppRouter = () => {
  return (
    <SuspenseLayout>
      <Routes>
        {routesContent}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SuspenseLayout>
  );
};
