import { FC } from "react";
import { Modal, ModalContent, ModalHeader } from "@nextui-org/react";
import { backendApi } from "../../shared/api";
import { Project } from "../../shared/api/types";
import { SubmitForm, SubmitFormField } from "../submit-form";

export type EditProjectModalProps = {
  onModalClose?: () => void;
  isModalOpen: boolean;
};

export const AddProjectModal: FC<EditProjectModalProps> = ({
  onModalClose,
  isModalOpen,
}) => {
  const fields: SubmitFormField[] = [
    "name",
    "description",
    "href",
    "img",
    "githubUrl",
  ].map((item) => {
    return {
      name: item,
      required: false,
      displayName: item.charAt(0).toUpperCase() + item.slice(1),
    };
  });

  async function handleSubmitForm(obj: Record<string, string | number>) {
    const project = obj as Project;
    await backendApi.createProject(project);
    onModalClose?.();
  }

  return (
    <Modal isOpen={isModalOpen}>
      <ModalContent>
        {(onClose) => (
          <div className="my-4">
            <ModalHeader className="flex flex-col gap-1">
              Создать новый проект
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
