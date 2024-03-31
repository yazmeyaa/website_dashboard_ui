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
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.axiosInstance = this.createInstance();
  }

  private createInstance(): AxiosInstance {
    const instance = axios.create({
      headers: {
        Authorization: `Bearer ${this.token}` ?? undefined,
        "Content-Type": "application/json",
      },
      baseURL: this.baseUrl,
    });

    return instance;
  }

  public setToken(token: string | null): void {
    this.token = token;
    this.axiosInstance = this.createInstance();
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
    console.log(this.axiosInstance.defaults.headers);
    await this.axiosInstance.patch(`/projects/${id}`, project);

    return null;
  }

  public async login(credentails: AuthCredentails): Promise<string | null> {
    const result = await this.axiosInstance("/auth/login", {
      method: "POST",
      data: credentails,
    });
    console.log(result.headers);
    const token = result.headers["x-token"] ?? null;
    return token;
  }
}

// export const backendApi = new BackendApi("http://localhost:3000/api");
export const backendApi = new BackendApi("https://api.yazmeyaa.itracers.xyz");
