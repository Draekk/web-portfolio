import { useEffect, useState } from "react";
import { TTech } from "../types/tech";

function useFetchData() {
  const SERVER_URL: string = "http://localhost:8080/api";

  const [techs, setTechs] = useState(Array<TTech>);

  const fetchTechnologies = async () => {
    const res = await fetch(SERVER_URL.concat("/technology/find/all"));
    const data = await res.json();

    setTechs(data.data);
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return {
    techs,
  };
}

export { useFetchData };
