import { useEffect, useState } from "react";
import { useFetchData } from "./useFetchData";
import { tDetailedTechnology, tTechnology } from "../types/tTechnology";
import { tDetailedProject } from "../types/tProject";

export const useTechnology = () => {
  const { findAllTechnologies, findTechnologyById } = useFetchData();

  const [techList, setTechList] = useState(Array<tDetailedTechnology>);
  const [projectList, setProjectList] = useState(Array<tDetailedProject>);
  const [selectTech, setSelectTech] = useState(false);

  const fetchTechnologies: () => void = async () => {
    setTechList(await findAllTechnologies());
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const toggleTech: (id: number) => void = async (id) => {
    setSelectTech(!selectTech);

    const projects = techList
      .filter((tech) => tech.id === id)
      .map((tech) => tech.projects);

    console.log(projects);
  };

  return {
    techList,
    projectList,
    selectTech,
    toggleTech,
  };
};
