import { FC } from "react";
import { Project } from "../../../shared/api/types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { columns } from "../data";
import { openSidebar } from "../../../features/projects/manage-sidebar/model/model";
import { TruncateText } from "../../../shared/ui/truncate-text/truncate-text";

export type ProjectsTableProps = {
  projects: Project[];
};

export const ProjectsTable: FC<ProjectsTableProps> = ({ projects }) => {
  console.log({ projects });
  return (
    <div className="my-4">
      <h1 className="text-lg">Список проектов</h1>
      <Table
        aria-label="projects table"
        selectionMode="single"
        onRowAction={(key) => {
          const selectedProject = projects.find((project) => {
            return String(project.id) === key;
          });
          if (selectedProject) openSidebar(selectedProject);
        }}
      >
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
        <TableBody
          emptyContent={"Проекты не найдены :("}
          items={projects ?? []}
        >
          {(item) => (
            <TableRow key={item.id} className="cursor-pointer">
              {(columnKey) => (
                <TableCell>
                  <TruncateText>
                    {item[columnKey as keyof typeof item] === "" ||
                    item[columnKey as keyof typeof item] === undefined
                      ? "<EMPTY STRING>"
                      : item[columnKey as keyof typeof item]}
                  </TruncateText>
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
