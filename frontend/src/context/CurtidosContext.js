import { createContext, useState } from "react";

export const CurtidosContext = createContext();

export function CurtidosProvider({ children }) {
  const [curtidos, setCurtidos] = useState([]);

  const toggleCurtidos = (lugar) => {
    const existe = curtidos.find((item) => item.id === lugar.id);

    if (existe) {
      setCurtidos(curtidos.filter((item) => item.id !== lugar.id));
    } else {
      setCurtidos([...curtidos, lugar]);
    }
  };

  return (
    <CurtidosContext.Provider value={{ curtidos, toggleCurtidos }}>
      {children}
    </CurtidosContext.Provider>
  );
}