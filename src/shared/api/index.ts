import axios, { AxiosInstance } from "axios";
import {
  AuthCredentails,
  CreateProjectRequestParams,
  CreateProjectResponse,
  GetProjectResponse,
  GetProjectsListResponse,
  Project,
  UpdateProjectRequestParams,
} from "./types";
import { getTokenFromLocalStorage } from "../../entities/session/helpers";

export class BackendApi {
  private axiosInstance: AxiosInstance;
  private token: string | null = getTokenFromLocalStorage();

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create();
    this.axiosInstance.defaults.baseURL = baseUrl;
    this.axiosInstance.defaults.headers.common["Content-Type"] =
      "application/json";
  }

  public setToken(token: string | null): void {
    this.token = token;
    if (token) {
      this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    }
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

  public async login(credentails: AuthCredentails): Promise<string | null> {
    const result = await this.axiosInstance.post("/auth/login", credentails);
    console.log(result.headers);
    const token = result.headers["x-token"] ?? null;
    return token;
  }
}

export const backendApi = new BackendApi("http://151.115.33.89:17645/api");
