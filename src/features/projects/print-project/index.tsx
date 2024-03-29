import { FC } from "react";
import { Project } from "../../../shared/api/types";

export type PrintProjectProps = {
  project: Project;
};

export const PrintProject: FC<PrintProjectProps> = ({ project }) => {
  const fields = Object.entries(project).map(([key, value]) => {
    return {
      field: key,
      value: value,
    };
  });
  return (
    <div>
      <div>
        {fields.map((field) => (
          <PrintField
            key={`field_${field.field}__value_${field.value}`}
            field={field.field}
            value={
              typeof field.value === "number"
                ? String(field.value)
                : field.value
            }
          />
        ))}
      </div>
    </div>
  );
};

const PrintField: FC<{ field: string; value: string }> = ({ field, value }) => {
  return (
    <div>
      <strong>{field}: </strong>
      <span>{value} </span>
    </div>
  );
};
