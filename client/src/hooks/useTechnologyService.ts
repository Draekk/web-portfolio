import { useState } from "react";
import { tTechnologyWithProjects, useData } from "./useData";

export function useTechnologyService() {
  const { getTechnologiesWithProjects } = useData();

  // Constants
  const newTech: tTechnologyWithProjects = {
    id: 0,
    name: "",
    logoUrl: "",
    projects: [],
  };

  // States
  const [techList] = useState(getTechnologiesWithProjects());
  const [selectTech, setSelectTech] = useState({ enabled: false, id: 0 });
  const [tech, setTech] = useState(newTech);

  const toggleTech: (id: number) => void = async (id) => {
    setSelectTech((prevState) => {
      return prevState.id === id
        ? { enabled: false, id: 0 }
        : { enabled: true, id: id };
    });

    const tempTech = techList.find((tech) => tech.id === id);

    if (tempTech !== undefined) {
      setTech(tempTech);
    }
  };

  return { techList, toggleTech, selectTech, tech };
}
