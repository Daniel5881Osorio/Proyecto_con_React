export const Hero = () => (
  <section id="inicio" className="h-screen relative flex items-center px-8 md:px-20 overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070')] bg-cover bg-center opacity-30 grayscale"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
    
    <div className="relative z-10 max-w-4xl">
      <span className="text-orange-500 font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">Ahuachapán, El Salvador</span>
      <h2 className="text-6xl md:text-[9rem] font-black italic leading-[0.85] tracking-tighter uppercase">
        Rompe tus <br /> <span className="text-orange-500">Límites.</span>
      </h2>
      <p className="mt-8 text-zinc-400 max-w-md text-sm leading-relaxed">
        Equipamiento técnico diseñado para deportistas de alto rendimiento. Calidad probada en el campo.
      </p>
    </div>
  </section>
);