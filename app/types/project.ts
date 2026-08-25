import type { Technology } from "./technology";

type BaseProject = {
  title: string;
  description: string;
  technology: Technology;
};

export type Project =
  | (BaseProject & {
      status: "completed";
      completedYear: number;
    })
  | (BaseProject & {
      status: "in-progress";
      progress: number;
    })
  | (BaseProject & {
      status: "planned";
      plannedYear: number;
    });