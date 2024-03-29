import { useUnit } from "effector-react";
import { $sidebarStore, closeSidebar, saveProjectFx } from "../../model/model";
import { Button } from "@nextui-org/react";

export const SidebarFooter = () => {
  const store = useUnit($sidebarStore);

  if (!store.$currentProject)
    return <Button onClick={() => closeSidebar()}>Закрыть</Button>;

  return (
    <>
      <Button
        color="default"
        className="grow"
        onClick={() => {
          closeSidebar();
        }}
      >
        Закрыть
      </Button>
      <Button
        onClick={() => {
          if (!store.$editedProject) return;
          saveProjectFx(store.$editedProject);
        }}
        color="primary"
        className="grow"
      >
        Сохранить
      </Button>
    </>
  );
};
