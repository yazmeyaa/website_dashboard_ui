import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { Project } from "../../../../shared/api/types";
import { backendApi } from "../../../../shared/api";
import { createProjectFx, fetchProjectsFx } from "../../model/model";

export const $isSidebarOpen = createStore(false);
export const $currentProject = createStore<Project | null>(null);
export const $editedProject = createStore<Project | null>(null);
export const $sidebarStore = combine({
  $isSidebarOpen,
  $currentProject,
  $editedProject,
});

export const openSidebar = createEvent<Project>("open_sidebar");
export const closeSidebar = createEvent("close_sidebar");
interface EditFieldProps {
  key: keyof Project;
  value: string;
}
export const editField = createEvent<EditFieldProps>("edit_field");
export const $projects_was_edited = createEvent("projects_was_edited");

export const saveProjectFx = createEffect(async (project: Project) => {
  await backendApi.updateProject(project.id, project);
  return null;
});

export const deleteProjectFx = createEffect(async (project: Project) => {
  await backendApi.deleteProject(project.id);
  return null;
});

$editedProject.on(editField, (store, payload) => {
  if (store === null) return store;
  store[payload.key] = payload.value;
  return store;
});

$editedProject.on(openSidebar, (store, project) => {
  store = project;
  return store;
});

$projects_was_edited.watch(() => {
  console.log("Edited");
});

sample({
  clock: [saveProjectFx.done, deleteProjectFx.done, createProjectFx.done],
  target: $projects_was_edited,
});

sample({
  clock: $projects_was_edited,
  target: closeSidebar,
});
sample({
  clock: $projects_was_edited,
  target: fetchProjectsFx,
});

$isSidebarOpen.on(openSidebar, () => {
  return true;
});
$isSidebarOpen.on(closeSidebar, () => {
  return false;
});

$currentProject.on(openSidebar, (state, project) => {
  state = project;
  return state;
});

$currentProject.on(closeSidebar, () => {
  return null;
});
