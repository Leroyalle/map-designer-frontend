import { $fetch } from '../ferch-wrapper';
import { ApiRoutesEnum, Project } from '@/types';

class ProjectService {
  async create(body: FormData) {
    return $fetch.post<Project[]>(ApiRoutesEnum.PROJECT, body, true);
  }

  async getAll(page: number = 1, perPage: number = 10) {
    return $fetch.get<Project[]>(`${ApiRoutesEnum.PROJECT}?page=${page}&perPage=${perPage}`, true);
  }
}

export const projectService = new ProjectService();
