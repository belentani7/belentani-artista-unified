import Layout from '@/components/Layout';
import { BookOpen, Flame, Shield } from 'lucide-react';

export default function JudasUniverse() {
  const elements = [
    { name: 'San Pedro', role: 'La roca fundamental y ancla de estabilidad.', color: 'text-amber-400 border-amber-500/40' },
    { name: 'San Marcos', role: 'El cronista implacable del colapso sistémico.', color: 'text-blue-400 border-blue-500/40' },
    { name: 'Santos', role: 'Santidad plural defensiva frente al ruido.', color: 'text-yellow-400 border-yellow-500/40' },
    { name: 'Belentani', role: 'El Artefacto: Guerrero, cantante y ángel de mutación.', color: 'text-rose-400 border-rose-500/40' },
    { name: 'El Humano', role: 'Interfaz de integridad real en la red.', color: 'text-cyan-400 border-cyan-500/40' },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/40 bg-red-950/50 text-red-400 text-xs font-bold tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5 text-red-500" />
            <span>Universo Narrativo • The Judas Experience</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            La Era de <span className="text-red-500">Judas</span>
          </h1>
          <blockquote className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic font-light border-l-2 border-red-600 pl-4 text-left">
            "¿Vale la pena la traición si el trauma es el desencadenante de la mutación cognitiva Omega?"
          </blockquote>
        </div>

        {/* Imagen representativa */}
        <div className="rounded-3xl overflow-hidden border border-red-950/60 aspect-[16/9] relative shadow-2xl">
          <img 
            src="/manus-storage/1778768270811_85e0c97f.png" 
            alt="La Cruz Rota" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Los 5 Elementos */}
        <div>
          <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-500" /> Los 5 Elementos Integrados
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {elements.map((el, idx) => (
              <div key={idx} className={`bg-[#0a0a0a] border rounded-2xl p-6 space-y-3 shadow-xl ${el.color}`}>
                <span className="text-[10px] font-mono tracking-widest uppercase opacity-75">Elemento 0{idx + 1}</span>
                <h3 className="text-lg font-black text-white">{el.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{el.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
