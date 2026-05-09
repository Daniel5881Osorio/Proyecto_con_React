export const Products = () => {
  const items = [
    { name: "Grip Socks Pro", price: "12.00", img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600" },
    { name: "Muñequeras Elite", price: "8.00", img: "https://images.unsplash.com/photo-1517438476312-10d79c67750d?w=600" }
  ];

  return (
    <section id="productos" className="py-32 bg-zinc-950 px-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h3 className="text-5xl font-black italic">EQUIPAMIENTO.</h3>
          <div className="h-1 w-20 bg-orange-500 mt-2"></div>
        </div>
        <p className="text-zinc-500 text-sm max-w-xs italic">Lo mejor en accesorios deportivos para optimizar tu juego.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item, i) => (
          <div key={i} className="group bg-zinc-900 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-orange-500/50 transition-all duration-500">
            <div className="h-80 overflow-hidden">
              <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700" alt={item.name} />
            </div>
            <div className="p-10 flex justify-between items-center">
              <div>
                <h4 className="text-2xl font-bold italic">{item.name}</h4>
                <p className="text-orange-500 font-black text-xl mt-1">${item.price}</p>
              </div>
                <button className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-pink-500 transition-colors shadow-lg shadow-pink-900/20">
                 PEDIR PRODUCTO
                </button>
            </div>
          </div>
    </section>
  );
};