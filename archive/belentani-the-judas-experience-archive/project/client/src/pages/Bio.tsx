import Layout from '@/components/Layout';
import { Shield, User, Sparkles } from 'lucide-react';

export default function Bio() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Encabezado Bio */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/40 bg-red-950/50 text-red-400 text-xs font-bold tracking-widest uppercase">
            <User className="w-3.5 h-3.5 text-red-500" />
            <span>Biografía Oficial • El Artefacto</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            Belentani — <span className="text-red-500">El Guerrero Mesiánico</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Cantante, arquetipo y guerrero brasileño de 30 años y 1.94m de estatura. Una síntesis única entre presencia imponente, voz celestial y serenidad inquebrantable.
          </p>
        </div>

        {/* Imagen principal de perfil */}
        <div className="rounded-3xl overflow-hidden border border-red-950/60 aspect-[16/9] relative shadow-2xl">
          <img 
            src="/manus-storage/1777088651610-02-01-01_72697177.jpeg" 
            alt="Belentani Profile" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Bloques de Contenido Biográfico */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0a0a0a] border border-red-950/50 rounded-2xl p-8 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-400">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">El Silencio Consciente</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              En un mundo saturado de ruido y validación superficial, Belentani opera desde el silencio consciente. Su postura no busca la confrontación directa; desarma el conflicto mediante una presencia inquebrantable que proyecta autoridad natural.
            </p>
          </div>

          <div className="bg-[#0a0a0a] border border-red-950/50 rounded-2xl p-8 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">La Era de Judas</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Su obra gira en torno a la pregunta fundacional de la Era de Judas: <em>¿Vale la pena la traición si el trauma es el desencadenante de la mutación cognitiva Omega?</em> Su música es tanto un refugio como una declaración de soberanía mental.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
