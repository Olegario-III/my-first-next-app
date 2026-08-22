import type { Technology } from "./technology";

export interface Project {
    title: string;
    description: string;
    technology: Technology;
    year?: number;
  }