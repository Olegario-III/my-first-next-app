import type { Technology } from "./technology";
import type { ProjectStatus } from "./status";

export interface Project {
    title: string;
    description: string;
    technology: Technology;
    year?: number;
    status: ProjectStatus;
  }