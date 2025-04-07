import { tResponse } from "../types/tResponse";
import { tDetailedTechnology } from "../types/tTechnology";

function useFetchData() {
  const SERVER_URL: string = "http://localhost:8080/api";
  const TECHNOLOGY: string = "/technology";

  const findAllTechnologies: () => Promise<
    tDetailedTechnology[] | null
  > = async () => {
    const res: Response = await fetch(
      SERVER_URL.concat(TECHNOLOGY).concat("/find/all")
    );
    const data: tResponse = await res.json();

    return data.success ? data.data : null;
  };

  const findTechnologyById: (
    id: number
  ) => Promise<tDetailedTechnology | null> = async (id) => {
    const res: Response = await fetch(
      SERVER_URL.concat(TECHNOLOGY).concat("/find/id/") + id
    );
    const data: tResponse = await res.json();

    return data.success ? data.data : null;
  };

  return {
    findAllTechnologies,
    findTechnologyById,
  };
}

export { useFetchData };
