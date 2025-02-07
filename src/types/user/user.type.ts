import { Project } from '../project';

export type User = {
  id: string;
  name: string;
  surname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserWithProjects = User & {
  projects: Project[];
};
