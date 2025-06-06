import { tDetailedProject } from "./tProject";

export type tTechnology = {
  id: number;
  name: string;
  logoUrl: string;
};

export type tDetailedTechnology = tTechnology & {
  projects: tDetailedProject[];
};

export type tSelectedTech = {
  enabled: boolean;
  id: number;
};
