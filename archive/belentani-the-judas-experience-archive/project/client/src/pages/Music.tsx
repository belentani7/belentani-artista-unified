import Layout from '@/components/Layout';
import { Play, Disc, Radio, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Music() {
  const tracks = [
    { title: 'JUDAS — Single Oficial', streams: '14.2M Streams', year: '2026', type: 'Flagship Release', desc: 'La obra maestra que redefine la Era de Judas y la mutación cognitiva Omega.' },
    { title: 'O Silêncio Consciente', streams: '8.9M Streams', year: '2026', type: 'Visual Single', desc: 'El muro inquebrantable contra la manipulación y el ruido sistémico.' },
    { title: 'A Era da Pedra e do Neom', streams: '19.5M Streams', year: '2025', type: 'EP Conceptual', desc: 'Sintetizadores pesados y frecuencias ancestrales combinadas.' },
    { title: 'St. Peters Anthem', streams: '11.1M Streams', year: '2025', type: 'Single', desc: 'El himno en honor a la chaqueta de cuero real y la resistencia.' },
  ];

  return (
    <Layout>
      <div className="space-y-12">
        {/* Banner de Música */}
        <div className="relative rounded-3xl overflow-hidden border border-red-950/60 bg-[#0c0c0c] p-8 md:p-12 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img 
              src="/manus-storage/1778768270811_85e0c97f.png" 
              alt="Judas Cover" 
              className="w-full h-full object-cover opacity-30 filter blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/40 bg-red-950/50 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
              <Disc className="w-3.5 h-3.5 text-red-500" />
              <span>Discografía Oficial • Duck Prod.</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              La Música es <span className="text-red-500">Poder</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              Cada nota es un acto de defensa. Cada silencio es una estrategia. El sonido de Belentani canaliza más de 36 millones de streams globales bajo la dirección de Duck Prod.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-red-600/30 flex items-center gap-2">
                <Play className="w-4 h-4 fill-white" /> Escuchar en Spotify
              </Button>
              <Button variant="outline" className="border-red-900/40 text-red-300 hover:bg-red-950/30 font-bold px-6 py-3 rounded-xl flex items-center gap-2">
                <Radio className="w-4 h-4" /> Apple Music
              </Button>
            </div>
          </div>
        </div>

        {/* Lista de Tracks */}
        <div>
          <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Catálogo de Lanzamientos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((track, idx) => (
              <div key={idx} className="bg-[#0a0a0a] border border-red-950/50 rounded-2xl p-6 hover:border-red-600/50 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-red-950/60 text-red-400 text-[10px] font-bold uppercase tracking-wider border border-red-800/40">
                      {track.type}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{track.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{track.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{track.desc}</p>
                </div>
                <div className="pt-4 border-t border-red-950/40 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono">{track.streams}</span>
                  <span className="text-red-400 font-bold flex items-center gap-1 hover:underline cursor-pointer">
                    Stream Oficial <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
