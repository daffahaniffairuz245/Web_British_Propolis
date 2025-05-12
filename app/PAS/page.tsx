/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Navbar from '@/components/Header';
import PromoSection from '@/components/promo';
import React, { useState } from 'react';
import  Category  from '@/components/KategoriCard';
import PopularItems from '@/components/Popular';
import OrderSummary from '@/components/order';


const Home = () => {
  const [orderItems, setOrderItems] = useState<any[]>([]);

  const handleAddItem = (item: any) => {
    setOrderItems((prev) => [...prev, item]);
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-row h-full w-full">
        {/* Kolom Kiri: Konten Utama */}
        <div className="flex flex-col w-3/4 bg-[#FCFCFC] p-4 overflow-y-auto gap-4">
          <Navbar />
          <PromoSection /> {/* Seksi Promo */}
          <Category /> {/* Kategori */}
          <PopularItems onAddItem={handleAddItem} /> {/* Daftar Item Populer */}
        </div>

        {/* Kolom Kanan: Ringkasan Pesanan */}
        <div className="w-1/4 bg-gray-100 sticky top-0 h-full">
          <OrderSummary items={orderItems} />
        </div>
      </div>
    </div>
  );
};

export default Home;
