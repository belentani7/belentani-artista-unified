import Layout from '@/components/Layout';
import { Image as ImageIcon, Shield } from 'lucide-react';

export default function Gallery() {
  const photos = [
    { url: '/manus-storage/1776846168278-01_36de4e97.jpeg', title: 'St. Peters Back', desc: 'La chaqueta de cuero real con la marca y la cruz.' },
    { url: '/manus-storage/1777088651610-02-01-01_72697177.jpeg', title: 'El Guerrero Mesiánico', desc: 'Presencia imponente, barba y serenidad.' },
    { url: '/manus-storage/1778768270811_85e0c97f.png', title: 'La Cruz Rota', desc: 'Tormenta, agua y refracción cuántica.' },
    { url: '/manus-storage/file_00000000a12c71f4b2b39337b8640436_edfbba65.png', title: 'Espejo Roto', desc: 'Múltiples versiones del Artefacto coexistiendo.' },
    { url: '/manus-storage/Copilot_20260513_223720-01_2e0086f3.jpeg', title: 'El Banquete de Judas', desc: 'La ilusión del falso salvamento.' },
    { url: '/manus-storage/copilot_image_1779136782188_c0155b96.jpeg', title: 'Mayonesa Judas', desc: 'Sátira y control del sistema.' },
  ];

  return (
    <Layout>
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/40 bg-red-950/50 text-red-400 text-xs font-bold tracking-widest uppercase">
            <ImageIcon className="w-3.5 h-3.5 text-red-500" />
            <span>Archivo Visual • Fotografías Reales</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            Galería de <span className="text-red-500">Imágenes</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Activos originales y fotografías reales de Belentani. Cero IA sintética en el protagonista.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((p, idx) => (
            <div key={idx} className="group bg-[#0a0a0a] border border-red-950/60 rounded-2xl overflow-hidden shadow-xl hover:border-red-600/50 transition-all flex flex-col justify-between">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src={p.url} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-5 bg-black">
                <h3 className="font-bold text-white text-base mb-1">{p.title}</h3>
                <p className="text-xs text-gray-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
