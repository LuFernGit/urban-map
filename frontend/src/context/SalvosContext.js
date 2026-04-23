import { createContext, useState } from "react";

export const SalvosContext = createContext();

export function SalvosProvider({ children }) {
  const [salvos, setSalvos] = useState([]);

  const toggleSalvo = (lugar) => {
    const existe = salvos.find((item) => item.id === lugar.id);

    if (existe) {
      setSalvos(salvos.filter((item) => item.id !== lugar.id));
    } else {
      setSalvos([...salvos, lugar]);
    }
  };

  return (
    <SalvosContext.Provider value={{ salvos, toggleSalvo }}>
      {children}
    </SalvosContext.Provider>
  );
}