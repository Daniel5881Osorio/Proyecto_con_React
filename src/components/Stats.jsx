import { Zap, Users, Trophy, Star } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { label: "Atletas", value: "+500", icon: Users },
    { label: "Rendimiento", value: "99%", icon: Zap },
    { label: "Premios", value: "12", icon: Trophy },
    { label: "Calificación", value: "4.9", icon: Star },
  ];

  return (
    <section id="stats" className="py-20 bg-orange-500">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-black">
            <stat.icon size={28} className="mb-4 opacity-80" />
            <span className="text-5xl font-black italic leading-none">{stat.value}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2 opacity-70">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};