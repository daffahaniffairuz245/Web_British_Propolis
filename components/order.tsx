/* eslint-disable @typescript-eslint/no-explicit-any */
const OrderSummary = ({ items }: { items: any[] }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full h-full">
      {/* Header Pesanan */}
      <div className="flex flex-row gap-7 justify-end p-6">
        <img src="/assets/kotak.png" alt="" className="w-7 h-7" />
        <img src="/assets/hati.png" alt="" className="w-7 h-7" />
        <img src="/assets/tiga.png" alt="" className="w-7 h-7" />
        <img src="/assets/orang.png" alt="" className="w-7 h-7" />
      </div>
      <h2 className="text-black text-2xl font-bold mb-4">Pesanan Saya</h2>

      {/* Informasi Pelanggan */}
      <div className="bg-[#6455C2] p-4 rounded-lg mb-6">
        <p className="font-medium text-lg mb-6">Mr. Rizqi</p>
        <p className="text-sm text-white mb-6">3758********8913</p>
        <p className="text-xl font-bold text-white mt-2">
          Rp {total.toLocaleString()}
        </p>
      </div>

      {/* Daftar Pesanan */}
      <div className="space-y-4 mb-6 mr">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div className="flex flex-row ">
                <p className="font-medium mr-6">
                  {item.quantity} × {item.name}
                </p>

                <p className="text-gray-500">Rp {item.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alamat */}
      <div className="flex items-center space-x-4 p-4 rounded-lg mb-6">
        <div className="bg-orange-500 text-white p-2 rounded-lg">
          <p>🚗</p>
          <i className="fa fa-map-marker-alt"></i>
        </div>
        <p className="text-gray-600 text-sm">jl. Bangke no 13 … Gratis</p>
      </div>

      {/* Total dan Tombol */}
      <div className="flex justify-between items-center">
        <p className="text-black text-xl font-bold">
          Total: Rp {total.toLocaleString()}
        </p>
      </div>
      <button className="w-full bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
        Pesan
      </button>
    </div>
  );
};

export default OrderSummary;
