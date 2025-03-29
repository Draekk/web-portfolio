import { tTechnology } from "./tTechnology";

export type tProject = {
  id: number;
  name: string;
  description: string;
  creationDate: string | Date;
  url: string;
};

export type tDetailedProject = tProject & {
  technologies: tTechnology[];
};
