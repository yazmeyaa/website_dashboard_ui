import { useEffect, useState } from "react";
import { Project } from "../../shared/api/types";
import { backendApi } from "../../shared/api";
import { ProjectsTable } from "./ui/table";
import { EditProjectModal } from "../../features/edit-project/ui/edit-project";
import { Button, Spacer } from "@nextui-org/react";
import { AddProjectModal } from "../../features/add-project";
import { DeleteProjectModal } from "../../features/delete-project";

export const ManageProjectsTable = () => {
  const [data, setData] = useState<Project[] | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [deleteProjectModal, setDeleteProjectModal] = useState<Project | null>(
    null
  );
  const [addProjectModalOpen, setAddProjectModalOpen] = useState(false);

  async function fetchProjectsList() {
    const data = await backendApi.getProjectList();
    setData(data);
  }

  useEffect(() => {
    fetchProjectsList();
  }, []);

  function handleEditProject(project: Project) {
    setEditingProject(project);
    fetchProjectsList();
  }

  function handleDeteleProject(project: Project) {
    setDeleteProjectModal(project);
  }

  async function handleDeteleProjectFromModal(project: Project | null) {
    if (!project) {
      setDeleteProjectModal(null);
      return;
    }
    setDeleteProjectModal(null);
    await backendApi.deleteProject(project.id);
    fetchProjectsList();
  }

  return (
    <div className="px-6">
      <div>
        <DeleteProjectModal
          project={deleteProjectModal}
          onProjectDelete={handleDeteleProjectFromModal}
        />
        <EditProjectModal
          onModalClose={() => {
            setEditingProject(null);
            fetchProjectsList();
          }}
          project={editingProject}
        />
        <AddProjectModal
          isModalOpen={addProjectModalOpen}
          onModalClose={() => {
            setAddProjectModalOpen(false);
            fetchProjectsList();
          }}
        />
        <Spacer />
        <ProjectsTable
          onProjectEdit={handleEditProject}
          onProjectDelete={handleDeteleProject}
          projects={data}
        />
        <Spacer />
        <Button
          variant="bordered"
          color="primary"
          onClick={() => setAddProjectModalOpen(true)}
        >
          Добавить проект
        </Button>
      </div>
    </div>
  );
};
