import { FC } from "react";
import { Modal, ModalContent, ModalHeader } from "@nextui-org/react";
import { Project } from "../../../../shared/api/types";
import { SubmitForm, SubmitFormField } from "../../../submit-form";
import { backendApi } from "../../../../shared/api";

export type EditProjectModalProps = {
  project: Project | null;
  onModalClose?: () => void;
};

export const EditProjectModal: FC<EditProjectModalProps> = ({
  project,
  onModalClose,
}) => {
  console.log(project);
  if (!project) return null;

  const fields: SubmitFormField[] = Object.entries(project).map(
    ([key, value]) => {
      return {
        name: key,
        required: false,
        displayName: key.charAt(0).toUpperCase() + key.slice(1),
        defaultValue: value,
      };
    }
  );

  async function handleSubmitForm(obj: Record<string, string | number>) {
    const project = obj as Project;
    await backendApi.updateProject(project.id, project);
    onModalClose?.();
  }

  return (
    <Modal isOpen={Boolean(project)}>
      <ModalContent>
        {(onClose) => (
          <div className="my-4">
            <ModalHeader className="flex flex-col gap-1">
              Редактировать проект
            </ModalHeader>
            <SubmitForm
              onSubmit={async (event) => {
                await handleSubmitForm(event);
                onClose();
              }}
              fields={fields}
            />
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};
