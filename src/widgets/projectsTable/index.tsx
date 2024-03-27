import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { Key, useCallback, useEffect, useState } from "react";
import { columns } from "./data";
import { Project } from "../../shared/api/types";
import { EditIcon } from "../../shared/ui/icons/edit";
import { DeleteIcon } from "../../shared/ui/icons/delete";
import { BackendApi } from "../../shared/api";

export const ProjectsTable = () => {
  const [data, setData] = useState<Project[] | null>(null);

  useEffect(() => {
    const api = new BackendApi("http://151.115.33.89:17645/api");
    api.getProjectList().then((data) => setData(data));
  }, []);

  const renderCell = useCallback((project: Project, columnKey: Key) => {
    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip aria-label="edit project" content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip aria-label="delete project" color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default: {
        return <div>{project[columnKey as keyof Project]}</div>;
      }
    }
  }, []);

  if (data === null) return <h1>{"Проекты не найдены :("}</h1>;
  return (
    <div>
      <div>
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
          <TableBody items={data}>
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
    </div>
  );
};
