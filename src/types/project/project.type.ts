import { User } from '../user';

export type ProjectResponse<T = void> = {
  message: string;
  data: T;
  isOwner: boolean;
};

export type ProjectWithUser = Project & {
  user: User;
};

export type ProjectWithItems = Project & {
  items: ProjectItem[];
};

export type Project = {
  id: string;
  name: string;
  imageUrl: string;
  canvasWidth: number;
  canvasHeight: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ProjectItem = {
  id: string;

  canvasId: string;
  name: string;
  desc: string;
  shortDesc: string;
  time: string;
  floor: number;
  link: string;

  width: number;
  height: number;

  radius: number | null;
  backgroundColor: string;
  strokeWidth: number;
  fill: string;
  type: string;
  left: number;
  top: number;
  angle: number;
  scaleX: number;
  scaleY: number;

  projectId: string;
  project: Project;

  createdAt: Date;
  updatedAt: Date;
};

export type PublishProject = {
  id: string;
  canvasWidth: number;
  canvasHeight: number;
  items: CanvasProjectItem[];
};

export type CanvasProjectItem = {
  canvasId: string;
  name: string;
  desc: string;
  shortDesc: string;
  time: string;
  floor: number;
  link: string;

  width: number;
  height: number;
  radius: number | null;
  fill?: string;
  strokeWidth: number;
  type: string;
  left: number;
  top: number;
  angle: number;
  scaleX: number;
  scaleY: number;
};
