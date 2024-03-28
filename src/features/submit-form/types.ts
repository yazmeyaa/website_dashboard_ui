import { HTMLInputTypeAttribute } from "react";

export type SubmitFormField = {
  name: string;
  displayName?: string;
  required: boolean;
  type?: HTMLInputTypeAttribute;
  defaultValue?: string | number
};

export interface SubmitFormProps {
  fields: SubmitFormField[];
  onSubmit: (result: Record<string, string | number>) => void;
  submitButtonText?: string;
  disabled?: boolean
}
