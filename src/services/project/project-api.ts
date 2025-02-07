import { $fetch } from '../ferch-wrapper';
import { ApiRoutesEnum, Project } from '@/types';

class ProjectService {
  async create(body: FormData) {
    return $fetch.post<Project[]>(ApiRoutesEnum.PROJECT, body, true);
  }

  async getAll() {
    return $fetch.get<Project[]>(ApiRoutesEnum.PROJECT, true);
  }
}

export const projectService = new ProjectService();
