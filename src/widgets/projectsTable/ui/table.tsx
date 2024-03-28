import { FC, Key, MouseEvent, useCallback } from "react";
import { Project } from "../../../shared/api/types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { columns } from "../data";
import { EditIcon } from "../../../shared/ui/icons/edit";
import { DeleteIcon } from "../../../shared/ui/icons/delete";

export type ProjectsTableProps = {
  projects: Project[] | null;
  onProjectEdit?: (project: Project) => void;
  onProjectDelete?: (project: Project) => void;
};

export const ProjectsTable: FC<ProjectsTableProps> = ({
  projects,
  onProjectEdit,
  onProjectDelete,
}) => {
  const handleEditProject = useCallback(
    (event: MouseEvent<SVGElement>, project: Project) => {
      event.preventDefault();
      onProjectEdit?.(project);
    },
    [onProjectEdit]
  );

  const handleDeleteProject = useCallback(
    async (project: Project) => {
      onProjectDelete?.(project);
    },
    [onProjectDelete]
  );

  const renderCell = useCallback(
    (project: Project, columnKey: Key) => {
      switch (columnKey) {
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip aria-label="edit project" content="Edit project">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon
                    onClick={(event) => handleEditProject(event, project)}
                  />
                </span>
              </Tooltip>
              <Tooltip
                aria-label="delete project"
                color="danger"
                content="Delete project"
              >
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon onClick={() => handleDeleteProject(project)} />
                </span>
              </Tooltip>
            </div>
          );
        default: {
          return <div>{project[columnKey as keyof Project]}</div>;
        }
      }
    },
    [handleEditProject, handleDeleteProject]
  );

  if (projects === null)
    return (
      <div>
        <h1>{"Проекты не найдены :("}</h1>
      </div>
    );

  return (
    <div className="my-4">
      <h1 className="text-lg">Список проектов</h1>
      <Table aria-label="projects table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={projects}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
