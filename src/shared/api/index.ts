import axios, { AxiosInstance } from "axios";
import {
  CreateProjectRequestParams,
  CreateProjectResponse,
  GetProjectResponse,
  GetProjectsListResponse,
  Project,
  UpdateProjectRequestParams,
} from "./types";

export class BackendApi {
  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create();
    this.axiosInstance.defaults.baseURL = baseUrl;
    this.axiosInstance.defaults.headers.common["Content-Type"] =
      "application/json";
  }

  public async getProjectList(): Promise<Project[]> {
    const response = await this.axiosInstance.get<GetProjectsListResponse>(
      "/projects"
    );

    return response.data.data;
  }

  public async getProject(id: string | number): Promise<Project> {
    const response = await this.axiosInstance.get<GetProjectResponse>(
      `/projects/${id}`
    );

    return response.data.data;
  }

  public async createProject(
    project: CreateProjectRequestParams
  ): Promise<null> {
    await this.axiosInstance.post<CreateProjectResponse>("/projects", project);

    return null;
  }

  public async deleteProject(id: string | number): Promise<null> {
    await this.axiosInstance.delete(`/projects/${id}`);

    return null;
  }

  public async updateProject(
    id: string | number,
    project: UpdateProjectRequestParams
  ): Promise<null> {
    await this.axiosInstance.patch(`/projects/${id}`, project);

    return null;
  }
}
