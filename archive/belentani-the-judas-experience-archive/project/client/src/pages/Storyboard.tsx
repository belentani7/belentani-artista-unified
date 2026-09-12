import Layout from '@/components/Layout';
import { Film, Clock, ArrowRight } from 'lucide-react';

export default function Storyboard() {
  const scenes = [
    { time: '00:00', title: 'El Despertar del Artefacto', desc: 'Contrapicado inicial con luz roja neón y chaqueta St. Peters real.', status: 'aprobado' },
    { time: '01:15', title: 'La Deuda en la Piedra', desc: 'Secuencia de agua, cruz rota y reflejo especular en el pantano.', status: 'aprobado' },
    { time: '02:30', title: 'La Tormenta y la Cruz', desc: 'El choque contra el virus narcisista y las frecuencias doradas.', status: 'aprobado' },
    { time: '03:45', title: 'Mutación Omega', desc: 'Efectos de partículas de luz, silencio consciente y victoria absoluta.', status: 'generando' },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/40 bg-red-950/50 text-red-400 text-xs font-bold tracking-widest uppercase">
            <Film className="w-3.5 h-3.5 text-red-500" />
            <span>Producción Audiovisual • Storyboard</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            Timeline <span className="text-red-500">Cinematográfico</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Planos, notas de dirección y estado de producción para el videoclip oficial de The Judas Experience.
          </p>
        </div>

        <div className="space-y-6">
          {scenes.map((s, idx) => (
            <div key={idx} className="bg-[#0a0a0a] border border-red-950/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-red-500 font-bold bg-red-950/40 px-3 py-1 rounded-lg border border-red-900/40">{s.time}</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    s.status === 'aprobado' ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40' : 'bg-amber-950/40 text-amber-400 border-amber-800/40'
                  }`}>
                    {s.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="text-xs text-gray-400 max-w-xl">{s.desc}</p>
              </div>
              <div className="text-red-400 font-mono text-xs flex items-center gap-1">
                Escena 0{idx + 1} <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
