/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

const PopularItems = ({ onAddItem }: { onAddItem: (item: any) => void }) => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(0);

  const items = [
    { id: 1, name: '4 Cheese', price: 130000, img: '/assets/pizza.png', time: '25-30 min' },
    { id: 2, name: 'Philadelphia', price: 250000, img: '/assets/pizzadiet.png', time: '30-35 min' },
    { id: 3, name: 'Mozarella', price: 175000, img: '/assets/pizzakeren.png', time: '40-46 min' },
    { id: 4, name: 'Mozarella', price: 175000, img: '/assets/pizzakeren.png', time: '40-46 min' },
    { id: 5, name: 'Mozarella', price: 175000, img: '/assets/pizzakeren.png', time: '40-46 min' },
    { id: 6, name: 'Mozarella', price: 175000, img: '/assets/pizzakeren.png', time: '40-46 min' },
  ];

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setQuantity(0);
  };

  const handleAddToOrder = () => {
    if (quantity > 0 && selectedItem) {
      onAddItem({ ...selectedItem, quantity });
      setSelectedItem(null);
    }
  };

  return (
    <div className="p-4 ">
      <h2 className="text-black text-xl font-semibold mb-4">Populer</h2>
      <div className="flex  grid grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-full  p-4 rounded-lg cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded-md" />
            <h3 className="text-black text-lg font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-500">Rp {item.price.toLocaleString()}</p>
            <p className="text-sm text-gray-400">{item.time}</p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="  fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <img src={selectedItem.img} alt={selectedItem.name} className="w-full h-32 object-cover rounded-md" />
            <h3 className=" text-black text-lg font-semibold mt-2">{selectedItem.name}</h3>
            <p className="text-gray-500">Rp {selectedItem.price.toLocaleString()}</p>
            <div className=" w-[88px]  rounded-lg bg-[#F9F2E8] py-1 flex items-center space-x-4 mt-4">
              <button
                onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
                className="bg-white h-8 text-black px-2 py-1 rounded-lg"
              >
                -
              </button>
              <p className="text-black">{quantity}</p>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="bg-white h-8 text-black px-2 py-1 rounded-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToOrder}
              className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
            >
              Tambah Pesanan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularItems;
