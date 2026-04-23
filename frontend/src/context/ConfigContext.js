import { createContext, useState } from "react";

export const ConfigContext = createContext();

export function ConfigProvider({ children }) {
  const [fontSize, setFontSize] = useState("medium");
  const [theme, setTheme] = useState("light");

  return (
    <ConfigContext.Provider
      value={{
        fontSize,
        setFontSize,
        theme,
        setTheme,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}