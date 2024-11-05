export type Project = {
  id: number | string;
  name: string;
  description: string;
  href?: string;
  img: string;
  githubUrl?: string;
};

export type GetProjectsListResponse = Project[];
export type GetProjectResponse = Project;
export type CreateProjectResponse = null;
export type CreateProjectRequestParams = Omit<Project, "id">;
export type UpdateProjectRequestParams = Omit<Project, "id">;

export type AuthCredentails = {
  username: string;
  password: string;
};
