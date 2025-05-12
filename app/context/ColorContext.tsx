"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface ColorContextProps {
  colors: string[];
  setColor: (index: number, color: string) => void;
  resetColor: (index: number) => void;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [colors, setColors] = useState<string[]>(Array(12).fill("red"));

  const setColor = (index: number, color: string) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const resetColor = (index: number) => {
    const newColors = [...colors];
    newColors[index] = "red";
    setColors(newColors);
  };

  return (
    <ColorContext.Provider value={{ colors, setColor, resetColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
