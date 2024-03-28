import { Route, Routes } from "react-router-dom";
import { SuspenseLayout } from "../../shared/ui/layouts/suspense-layouts";
import { LoginPage } from "../../pages/login";
import { NotFoundPage } from "../../pages/not-found";
import { RouteDescription, RouteName } from "../../shared/config/routes/routes";
import { ProtectedRoute } from "../../shared/config/routes/protected-routes";
import { HomePage } from "../../pages/home";

const routes: RouteDescription[] = [
  {
    path: RouteName.LOGIN_PAGE,
    component: LoginPage,
  },
  {
    path: RouteName.HOME_PAGE,
    component: HomePage,
    protected: true,
  },
];

const routesContent = routes.map(
  ({ protected: protectedRoute, path, component: Component }) => {
    if (protectedRoute)
      return (
        <Route
          key={path}
          element={
            <ProtectedRoute>
              <Component />
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
