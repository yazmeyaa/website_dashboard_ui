import { FC } from "react";
import { Project } from "../../shared/api/types";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { PrintProject } from "../print-project";
import { Button } from "@nextui-org/react";

export type DeleteProjectModalProps = {
  project: Project | null;
  onProjectDelete: (project: Project | null) => void;
};

export const DeleteProjectModal: FC<DeleteProjectModalProps> = ({
  project,
  onProjectDelete,
}) => {
  function handleDeleteProject() {
    if (!project) return;
    onProjectDelete(project);
  }

  function onOpenChange() {
    onProjectDelete(null);
  }
  return (
    <Modal size="xl" isOpen={Boolean(project)} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <h1 className="text-lg">Удалить проект</h1>
            </ModalHeader>
            <ModalBody>
              {project && <PrintProject project={project} />}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={handleDeleteProject}>
                Удалить
              </Button>
              <Button
                color="primary"
                onClick={() => {
                  onClose();
                }}
              >
                Отмена
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
