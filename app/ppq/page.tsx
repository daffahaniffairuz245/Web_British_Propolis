import React from "react";

function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">
            British Propolis
          </h1>
          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <li>
              <a href="#manfaat" className="hover:text-green-600">
                Manfaat
              </a>
            </li>
            <li>
              <a href="#testimoni" className="hover:text-green-600">
                Testimoni
              </a>
            </li>
            <li>
              <a href="#pesan" className="hover:text-green-600">
                Pesan
              </a>
            </li>
          </ul>
          <a
            href="#pesan"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
          >
            Pesan Sekarang
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Kiri: Teks */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-sm text-green-700 font-semibold mb-2">
              #Top Herbal Premium
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Jaga <span className="text-green-600">Imunitas</span>
              <br /> Dengan Propolis Alami
            </h1>
            <p className="text-gray-700 mb-6">
              British Propolis adalah suplemen herbal premium dengan kandungan
              propolis murni yang terbukti membantu meningkatkan daya tahan
              tubuh, energi, dan kesehatan secara menyeluruh.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
              Pesan Sekarang →
            </button>

            {/* Testimoni Rating */}
            <div className="flex items-center mt-6">
              <img
                src="/assets/iconbp3.png"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="user"
              />
              <img
                src="/assets/iconbp3.png"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="user"
              />
              <img
                src="/assets/iconbp3.png"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="user"
              />
              <div className="ml-4 text-sm text-gray-600">
                <span className="font-semibold">⭐ 4.8</span> (10.230 Terjual)
              </div>
            </div>
          </div>

          {/* Kanan: Gambar Produk */}
          <div className="md:w-1/2 relative text-center">
            <img
              src="/assets/bp8.jpg" // Ganti dengan gambar produk kamu
              alt="British Propolis"
              className="w-64 mx-auto z-10 relative"
            />
            {/* <div className="absolute top-8 left-0 bg-white p-3 rounded shadow text-sm">
              ✅ Produk Terlaris Tahun Ini
            </div> */}
            {/* <div className="absolute bottom-8 right-0 bg-white p-3 rounded shadow text-sm">
              🔥 Dicari Setiap Saat
            </div> */}
          </div>
        </div>
      </section>

      <section id="manfaat" className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm text-gray-400 font-semibold mb-3">MANFAAT</h2>
          <h3 className="text-3xl font-bold mb-10 text-gray-800">
            Manfaat Konsumsi{" "}
            <span className="text-green-600">British Propolis</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Manfaat Card */}
            {[
              {
                title: "Meningkatkan Imunitas",
                desc: "Membantu tubuh melawan infeksi dan memperkuat sistem kekebalan secara alami.",
              },
              {
                title: "Mempercepat Pemulihan",
                desc: "Membantu proses penyembuhan luka, flu, batuk, dan pasca sakit.",
              },
              {
                title: "Meningkatkan Energi",
                desc: "Menambah vitalitas dan energi, cocok untuk yang mudah lelah atau aktif bekerja.",
              },
              {
                title: "Antioksidan Alami",
                desc: "Mengandung bioflavonoid tinggi untuk menangkal radikal bebas.",
              },
              {
                title: "Mengurangi Peradangan",
                desc: "Membantu mengatasi radang tenggorokan, maag, dan inflamasi ringan.",
              },
              {
                title: "Aman untuk Anak & Dewasa",
                desc: "Cocok untuk semua usia, termasuk anak-anak dan lansia, tanpa efek samping.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src="/assets/iconbp4.png"// Ganti sesuai ikon daun kamu
                    alt="icon"
                    className="w-6 h-6"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="bg-green-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-10">
            Testimoni Pelanggan
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <p className="italic">
                "Setelah konsumsi Herbaship selama 2 minggu, kolesterol saya
                turun drastis!"
              </p>
              <span className="block mt-2 font-bold">- Budi, 45 tahun</span>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="italic">
                "Saya merasa lebih bertenaga dan tekanan darah juga stabil."
              </p>
              <span className="block mt-2 font-bold">- Siti, 50 tahun</span>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="italic">
                "Produk herbal terbaik yang pernah saya coba."
              </p>
              <span className="block mt-2 font-bold">- Andi, 38 tahun</span>
            </div>
          </div>
        </div>
      </section>

    {/* CTA Section */}
<section id="pesan" className="py-16 bg-white text-center px-4">
  <div className="max-w-xl mx-auto">
    <h3 className="text-3xl font-bold text-green-800 mb-4">
      Pesan Sekarang Juga!
    </h3>
    <p className="text-gray-700 mb-6">
      Stok terbatas! Dapatkan harga promo hari ini juga.
    </p>
    <a
      href="https://wa.me/62895352108999?text=Halo%20saya%20tertarik%20dengan%20produk%20British%20Propolis.%20Bisa%20dibantu%20kak?
"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white px-6 py-3 rounded text-lg hover:bg-green-700 transition"
    >
      Hubungi via WhatsApp
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>&copy; 2025 Herbaship. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
