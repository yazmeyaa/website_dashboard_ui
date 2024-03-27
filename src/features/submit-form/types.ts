import { HTMLInputTypeAttribute } from "react";

export type SubmitFormField = {
  name: string;
  displayName?: string;
  required: boolean;
  type?: HTMLInputTypeAttribute;
};

export interface SubmitFormProps {
  fields: SubmitFormField[];
  onSubmit: (result: Record<string, string>) => void;
  submitButtonText?: string;
  disabled?: boolean
}
