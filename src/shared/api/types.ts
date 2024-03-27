export type Project = {
  id: number | string;
  name: string;
  description: string;
  href?: string;
  img: string;
  githubUrl?: string;
};

export type BaseResponse<T> = {
  code: number;
  status: string;
  data: T;
};

export type GetProjectsListResponse = BaseResponse<Project[]>;
export type GetProjectResponse = BaseResponse<Project>;
export type CreateProjectResponse = BaseResponse<null>;
export type CreateProjectRequestParams = Omit<Project, "id">;
export type UpdateProjectRequestParams = Omit<Project, "id">;

export type AuthCredentails = {
  username: string;
  password: string;
};
