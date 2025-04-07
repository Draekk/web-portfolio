import { useEffect, useState } from "react";
import { useFetchData } from "./useFetchData";
import { tDetailedTechnology } from "../types/tTechnology";

export const useTechnology = () => {
  const { findAllTechnologies } = useFetchData();

  const newTech: tDetailedTechnology = {
    id: 0,
    name: "",
    logoUrl: "",
    projects: [],
  };

  const [techList, setTechList] = useState(Array<tDetailedTechnology>);
  const [tech, setTech] = useState(newTech);
  const [selectTech, setSelectTech] = useState(false);

  const fetchTechnologies: () => void = async () => {
    const tempTechList = await findAllTechnologies();
    tempTechList !== null ? setTechList(tempTechList) : null;
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const toggleTech: (id: number) => void = async (id) => {
    setSelectTech(!selectTech);

    const tempTech: tDetailedTechnology | undefined = techList.find(
      (tech) => tech.id === id
    );

    if (tempTech !== undefined) {
      setTech(tempTech);
      console.log(tech.projects);
    }
  };

  return {
    techList,
    tech,
    selectTech,
    toggleTech,
  };
};
