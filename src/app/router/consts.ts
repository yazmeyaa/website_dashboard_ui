import { HomePage } from "../../pages/home";
import { LoginPage } from "../../pages/login";
import { RouteDescription, RouteName } from "../../shared/config/routes/routes";
import { AuthLayout } from "../../shared/ui/layouts/auth-layout";

export const routes: RouteDescription[] = [
  {
    path: RouteName.LOGIN_PAGE,
    component: LoginPage,
  },
  {
    path: RouteName.HOME_PAGE,
    component: HomePage,
    protected: true,
    layout: AuthLayout,
  },
];
