export default function CategorySection() {
    return (
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-4 text-black">Kategori</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-200 rounded-lg text-center relative">
            <img
              src="/assets/kategori1.png"
              alt="Gambar Kategori"
              className="w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              Semua
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg text-center relative">
            <img
              src="/assets/kategori2.png"
              alt="Gambar Kategori"
              className="w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              pizza
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg text-center relative">
            <img
              src="/assets/kategori3.png"
              alt="Gambar Kategori"
              className="w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              burger
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg text-center relative">
            <img
              src="/assets/kategori4.png"
              alt="Gambar Kategori"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              jus
            </div>
          </div>
        </div>
      </section>
    );
  }