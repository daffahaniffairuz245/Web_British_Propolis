"use client";
import Grid from '@/components/Grid';
import { ColorProvider } from './../context/ColorContext';


const Home = () => {

  return (
    <ColorProvider>
      <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-4">Belajarku</h1>
        <p className="text-lg mb-4">Belajar useContext</p>
        <Grid />
      </div>
      </div>
    </ColorProvider>
  );
};

export default Home;
