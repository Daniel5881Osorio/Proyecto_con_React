export const Navbar = () => (
  <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 px-8 py-5 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-orange-500 rounded-sm rotate-45"></div>
      <h1 className="text-xl font-black italic tracking-tighter">OSORIO.DEV</h1>
    </div>
    <div className="flex space-x-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
      <a href="#inicio" className="hover:text-orange-500 transition">Inicio</a>
      <a href="#productos" className="hover:text-orange-500 transition">Tienda</a>
    </div>
  </nav>
);