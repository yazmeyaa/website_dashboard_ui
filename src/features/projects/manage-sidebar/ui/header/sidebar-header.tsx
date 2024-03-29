import { useUnit } from "effector-react";
import { $sidebarStore } from "../../model/model";

export const SidebarHeader = () => {
  const store = useUnit($sidebarStore);
  if (!store.$currentProject) return <h1>No project selected!</h1>;

  return <span>Редактирование "{store.$currentProject.name}"</span>;
};
