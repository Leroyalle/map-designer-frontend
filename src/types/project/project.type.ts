import { User } from '../user';

export type ProjectResponse<T = void> = {
  message: string;
} & T;

export type Project = {
  id: string;
  name: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProjectWithUser = Project & {
  user: User;
};
