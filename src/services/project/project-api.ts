import { $fetch } from '../api';
import { ApiRoutesEnum, Project, ProjectResponse, ProjectWithItems, PublishProject } from '@/types';

class ProjectService {
  // TODO: add generic
  async create(body: FormData) {
    return $fetch.post<Project[]>(ApiRoutesEnum.PROJECT, body, true);
  }

  async getAll(page: number = 1, perPage: number = 10) {
    return $fetch.get<Project[]>(`${ApiRoutesEnum.PROJECT}?page=${page}&perPage=${perPage}`, true);
  }

  async getOne(id: string, headers?: Record<string, string>) {
    return $fetch.get<ProjectResponse<ProjectWithItems>>(
      `${ApiRoutesEnum.PROJECT}/${id}`,
      true,
      headers,
    );
  }

  async publish(data: PublishProject) {
    return $fetch.post<ProjectResponse<ProjectWithItems>>(
      `${ApiRoutesEnum.PROJECT}/${data.id}${ApiRoutesEnum.PROJECT_PUBLISH}`,
      data,
      true,
    );
  }
}

export const projectService = new ProjectService();
