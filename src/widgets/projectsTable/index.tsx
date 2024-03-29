import { useEffect, useState } from "react";

import { useUnit } from "effector-react";
import {
  $projects,
  fetchProjectsFx,
} from "../../features/projects/model/model";
import { AddProjectModal } from "../../features/projects/add-project";
import { Button } from "@nextui-org/react";
import { ProjectsTable } from "./ui/table";

export const ManageProjectsTable = () => {
  null;
  const [addProjectModalOpen, setAddProjectModalOpen] = useState(false);
  const projects = useUnit($projects);
  useEffect(() => {
    fetchProjectsFx();
  }, []);

  return (
    <div className="px-6">
      <AddProjectModal
        isModalOpen={addProjectModalOpen}
        onModalClose={() => {
          setAddProjectModalOpen(false);
        }}
      />
      <div className="w-full flex flex-row-reverse pt-4">
        <Button
          className=""
          variant="bordered"
          color="primary"
          onClick={() => setAddProjectModalOpen(true)}
        >
          Добавить проект
        </Button>
      </div>
      <ProjectsTable projects={projects} />
    </div>
  );
};
