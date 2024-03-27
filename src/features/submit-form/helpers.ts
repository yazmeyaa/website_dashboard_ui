import { SubmitFormField } from "./types";

export function createFormField(
  name: string,
  required = false
): SubmitFormField {
  return {
    name,
    required,
  };
}
