import { SubmitForm } from "../../features/submit-form/ui";
import { SubmitFormField } from "../../features/submit-form/types";
import { AuthCredentails } from "../../shared/api/types";
import { PageWrapper } from "../../shared/ui/page-wrapper";
import { useUnit } from "effector-react";
import { $session, loginFx } from "../../entities/session/model";
import { Navigate } from "react-router-dom";
import { RouteName } from "../../shared/config/routes/routes";
export const LoginPage = () => {
  const session = useUnit($session);
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
    loginFx(obj as AuthCredentails);
  }

  if (session.token !== null) {
    return <Navigate to={RouteName.HOME_PAGE} />;
  }

  return (
    <PageWrapper>
      {session.token}
      <SubmitForm
        onSubmit={handleSubmitForm}
        fields={fields}
        disabled={session.submitDisabled}
      />
    </PageWrapper>
  );
};
