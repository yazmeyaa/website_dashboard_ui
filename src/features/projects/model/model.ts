import { createEffect, createStore } from "effector";
import { Project } from "../../../shared/api/types";
import { backendApi } from "../../../shared/api";

export const $projects = createStore<Project[]>([]);
export const fetchProjectsFx = createEffect(() => {
  return backendApi.getProjectList();
});
export const createProjectFx = createEffect((project: Project) => {
  return backendApi.createProject(project);
});

$projects.on(fetchProjectsFx.doneData, (_state, payload) => {
  return payload;
});
