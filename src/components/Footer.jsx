export const Footer = () => (
  <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-5 h-5 bg-orange-500 rounded-sm rotate-45"></div>
          <h2 className="text-xl font-black italic tracking-tighter text-white">OSORIO.DEV</h2>
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed">
          Impulsando el talento deportivo en Ahuachapán con equipamiento de alta tecnología.
        </p>
      </div>

      <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
        <h3 className="text-white mb-2 text-xs">Navegación</h3>
        <a href="#inicio" className="hover:text-orange-500 transition">Inicio</a>
        <a href="#productos" className="hover:text-orange-500 transition">Tienda</a>
      </div>

      <div>
        <h3 className="text-white mb-6 text-xs font-bold uppercase tracking-widest">Contacto</h3>
        <p className="text-zinc-400 text-sm italic">ahuachapan.sports@email.com</p>
      </div>
    </div>

    <div className="text-center pt-10 border-t border-white/5">
      <p className="text-zinc-600 text-[9px] font-bold tracking-[0.4em] uppercase">
        © 2026 JOSÉ DANIEL OSORIO ELÍAS | INGENIERÍA EN DESARROLLO DE SOFTWARE
      </p>
    </div>
  </footer>
);