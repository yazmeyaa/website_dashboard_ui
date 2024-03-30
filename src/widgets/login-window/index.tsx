import { SubmitForm, SubmitFormField } from "../../features/submit-form";
import { backendApi } from "../../shared/api";
import { AuthCredentails } from "../../shared/api/types";

export const LoginWindow = () => {
  const fields: SubmitFormField[] = [
    { name: "username", required: true, displayName: "Username" },
    {
      name: "password",
      required: true,
      displayName: "Password",
      type: "password",
    },
  ];

  function handleSubmitForm(obj: Record<string, string | number>) {
    backendApi.login(obj as AuthCredentails).then(console.log);
  }
  return (
    <div>
      <form>
        <SubmitForm onSubmit={handleSubmitForm} fields={fields} />
      </form>
    </div>
  );
};
