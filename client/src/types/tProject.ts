import { tTechnology } from "./tTechnology";

type tScreenshot = {
  id: number;
  url: string;
};

export type tProject = {
  id: number;
  name: string;
  description: string;
  creationDate: string | Date;
  url: string;
  screenshots: tScreenshot[];
};

export type tDetailedProject = tProject & {
  technologies: tTechnology[];
};
