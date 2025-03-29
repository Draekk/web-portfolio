import { tDetailedTechnology, tTechnology } from "../types/tTechnology";

function useFetchData() {
  const SERVER_URL: string = "http://localhost:8080/api";
  const TECHNOLOGY: string = "/technology";

  const findAllTechnologies = async (): Promise<tDetailedTechnology[]> => {
    const res = await fetch(SERVER_URL.concat(TECHNOLOGY).concat("/find/all"));
    const data = await res.json();

    return data.data;
  };

  const findTechnologyById = async (id: number) => {
    const res = await fetch(
      SERVER_URL.concat(TECHNOLOGY).concat("/find/id/") + id
    );
    const data = await res.json();

    return data.data;
  };

  return {
    findAllTechnologies,
    findTechnologyById,
  };
}

export { useFetchData };
