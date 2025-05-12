"use client";

import { useContext, useState } from "react";
import Button from "./Button";
import { AppContext } from "@/app/context/AppContext";

const App = () => {
  const initialColors = [
    "#00FF00", "#FF00FF", "#FF0000", "#5A471E",
    "#4B234E", "#FFC107", "#004D3B", "#FFAA72",
    "#4B234E", "#FFC107", "#004D3B", "#FFAA72",
  ].fill("#FF0000");

  const [colors, setColors] = useState(initialColors);

  const appContext = useContext(AppContext)

  const {toggleTheme} = appContext;

  // Fungsi untuk menghasilkan warna acak
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Fungsi untuk mengubah semua warna
  const handleRandomizeAll = () => {
    setColors(colors.map(() => randomColor()));
  };

  // Fungsi untuk mengubah warna kotak merah

  const handleChangeRedColors = () => {
    setColors(colors.map(() => "#FF0000"));
  };

  return (
    <div className="items-center  w-full h-screen  ">
      <div className="grid grid-cols-4  ">
        {colors.map((color, index) => (
          <div
            key={index}
            className="h-40 w-40  transition-colors border border-white"
            style={{ backgroundColor: color }}
            onMouseEnter={() => {
              handleRandomizeAll();
            }}
            onMouseLeave={() => {
              handleChangeRedColors();}}
          ></div>
        ))}
      </div>
      <Button className="" title="ubah Tema" colorSchema="blue" variant="outline" isLoading={false} onClick={toggleTheme}/>
    </div>
  );
};

export default App;
