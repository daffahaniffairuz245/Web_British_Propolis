"use client";
import { ColorProvider } from "../components/ColorContext";

const Home = () => {
  return (
    <ColorProvider>
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-4 text-black">Belajarku</h1>
        <p className="text-lg mb-4 text-black">Belajar NextJs</p>
        </div>
    </ColorProvider>
  );
};

export default Home;
