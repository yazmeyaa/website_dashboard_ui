import { Button, Input } from "@nextui-org/react";
import { FC, FormEvent } from "react";
import { SubmitFormProps } from "../types";

/**
 * Only for textfields forms
 */
export const SubmitForm: FC<SubmitFormProps> = ({
  fields,
  onSubmit,
  submitButtonText,
  disabled,
}) => {
  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const obj: Record<string, string | number> = {};

    const formData = new FormData(event.currentTarget);
    fields.forEach((key) => {
      const value = formData.get(key.name) as string;
      obj[key.name] = isNaN(parseInt(value)) ? value : parseInt(value);
    });

    onSubmit(obj);
  }

  return (
    <div>
      <form
        className="mx-auto flex flex-col gap-4 min-w-28 max-w-xs"
        onSubmit={handleSubmitForm}
      >
        {fields.map((field, idx) => {
          return (
            <Input
              key={`${field.name}_${idx}${field.required ? "__required" : ""}`}
              label={field.displayName ?? field.name}
              required={field.required}
              name={field.name}
              type={field.type}
              defaultValue={
                field.defaultValue ? String(field.defaultValue) : undefined
              }
            />
          );
        })}

        <Button disabled={disabled} type="submit">
          {submitButtonText ?? "Отправить"}
        </Button>
      </form>
    </div>
  );
};
