import PesananCard from "./pesanan";

const PesananSaya: React.FC = () => {
  const pesanan = [
    { image: '/images/4cheese.jpg', name: '4 Cheese Pizza', quantity: 3, price: 520000 },
    { image: '/images/jus.jpg', name: 'Jus Mangga', quantity: 4, price: 60000 },
    { image: '/images/salad.jpg', name: 'Salad Sayur', quantity: 2, price: 30000 },
  ];

  return (
    <aside className="w-1/4 h-3/4 bg-white p-6 shadow-lg rounded-xl">
      <h2 className="font-bold text-lg mb-6">Pesanan Saya</h2>
      
      <div className="mb-6">
        <h3 className="text-gray-700">Mr. Rizqi</h3>
        <p className="text-xl font-bold text-purple-600">Rp. 1.000.000,-</p>
        <p className="text-sm text-gray-500">3758 ******** 8913</p>
      </div>

      {pesanan.map((item, index) => (
        <PesananCard key={index} {...item} />
      ))}

      <div className="mt-6">
        <p className="text-sm text-gray-500">Jl. Bangke no 13...</p>
        <p className="font-semibold text-green-600">Gratis</p>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-lg font-bold">Total:</p>
        <p className="text-xl font-bold text-orange-500">Rp 690.000</p>
      </div>

      <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg font-bold hover:bg-yellow-600">
        Pesan
      </button>
    </aside>
  );
};

export default PesananSaya;
