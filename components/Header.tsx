export default function Navbar() {
    return (
      <nav className=" rounded-md flex items-center justify-between">
        <div className="flex flex-row gap-4">
        <img src="/assets/logo2.png" alt="" className="w-7 h-7 "/>
        <h1 className="text-xl font-bold text-purple-600 "><span className="text-xl font-bold text-orange-500">My</span>Kantin</h1>
        </div>
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Cari Makan Bang?"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
        </div>
      </nav>
    );
  }