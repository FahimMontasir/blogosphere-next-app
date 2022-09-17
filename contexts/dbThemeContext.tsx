import React, { createContext, useContext, useState } from "react";
import type { DBThemeContextProps } from "./types";

const DBThemeContext = createContext({} as DBThemeContextProps);

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

interface DBThemeProviderProps {
  children: React.ReactNode;
}
export const DBThemeProvider = ({ children }: DBThemeProviderProps) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e: React.FocusEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked: string) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <DBThemeContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </DBThemeContext.Provider>
  );
};

export const useDBThemeContext = () => useContext(DBThemeContext);
