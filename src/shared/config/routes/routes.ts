import { ComponentType, PropsWithChildren } from "react";

export enum RouteName {
    LOGIN_PAGE = "/login",
    HOME_PAGE = "/",
  }
  
  export interface RouteDescription {
    path: RouteName;
    component: ComponentType;
    layout?: ComponentType<PropsWithChildren>;
    protected?: boolean
  }