import { useUnit } from "effector-react";
import { $sidebarStore, deleteProjectFx, editField } from "../../model/model";
import { Button, Input } from "@nextui-org/react";
import { Project } from "../../../../../shared/api/types";

export const SidebarContent = () => {
  const store = useUnit($sidebarStore);
  const readonlyFields: string[] = ["id"];
  if (!store.$currentProject) return <h1>No project to edit recieved</h1>;
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(store.$currentProject).map(([key, value]) => {
        return (
          <Input
            label={key}
            key={`field_${key}`}
            defaultValue={value ? String(value) : undefined}
            onChange={(event) => {
              const payload = {
                key: key as keyof Project,
                value: event.target.value,
              };
              editField(payload);
            }}
            className={`${
              readonlyFields.includes(key) ? "cursor-not-allowed" : ""
            }`}
            readOnly={readonlyFields.includes(key)}
            disabled={readonlyFields.includes(key)}
          />
        );
      })}
      <Button
        color="danger"
        onClick={() => {
          if (store.$currentProject) deleteProjectFx(store.$currentProject);
        }}
      >
        Удалить проект
      </Button>
    </div>
  );
};
