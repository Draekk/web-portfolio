import { useState } from "react";

export const useTechnology = () => {
  const [selectTech, setSelectTech] = useState(false);

  const toggleTech = (id: number) => {
    setSelectTech(!selectTech);
  };

  return {
    selectTech,
    toggleTech,
  };
};
