"use client";"use client";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  const handleMultiply = () => setCount((prev) => prev * 2);
  const handleAdd = () => setCount((prev) => prev + 2);
  const handleSubtract = () => setCount((prev) => prev - 2);
  const handleReset = () => setCount(1);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full relative">
        <div
          onMouseEnter={handleMultiply}
          className="bg-green-400 flex justify-center items-center text-3xl font-bold cursor-pointer relative"
        >
          <div className="absolute top-4 left-4 border rounded-full w-20 h-20 flex justify-center items-center bg-white text-5xl text-black font-bold">
            {count}
          </div>
          x 2
        </div>
        <div
          onMouseEnter={handleAdd}
          className="bg-yellow-400 flex justify-center items-center text-3xl font-bold cursor-pointer"
        >
          + 2
        </div>
        <div
          onMouseEnter={handleReset}
          className="bg-blue-400 flex justify-center items-center text-3xl font-bold cursor-pointer"
        >
          Reset
        </div>
        <div
          onMouseEnter={handleSubtract}
          className="bg-red-400 flex justify-center items-center text-3xl font-bold cursor-pointer"
        >
          - 2
        </div>
      </div>
    </div>
  );
}
