import Layout from '@/components/Layout';
import { Play, Pause, Sparkles, ArrowRight, Disc, User, BookOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useState } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Layout>
      <div className="space-y-20">
        {/* Hero Principal */}
        <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center py-16 rounded-3xl overflow-hidden border border-red-950/60 bg-[#080808] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img 
              src="/manus-storage/1776846168278-01_36de4e97.jpeg" 
              alt="Belentani - The Judas Experience" 
              className="w-full h-full object-cover object-center opacity-40 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-600/40 bg-red-950/40 text-red-400 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>Cantante • Arquetipo • Guerrero (1.94m / 30 anos)</span>
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 uppercase leading-tight drop-shadow-2xl">
              The Judas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-red-600">
                Experience
              </span>
            </h1>

            <blockquote className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed italic border-l-2 border-red-600 pl-4 text-left">
              "¿Vale la pena la traición si el trauma es el desencadenante de la mutación cognitiva Omega?"
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/music">
                <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-red-600/40 flex items-center justify-center gap-2">
                  <Disc className="w-4 h-4" /> Explorar Música (36M+ Streams)
                </Button>
              </Link>
              <Link href="/judas">
                <Button variant="outline" className="w-full sm:w-auto border-red-900/40 text-red-300 hover:bg-red-950/30 font-bold px-8 py-4 rounded-xl">
                  Universo Narrativo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Accesos Rápidos Multipágina */}
        <section className="grid md:grid-cols-3 gap-6">
          <Link href="/bio">
            <div className="bg-[#0a0a0a] border border-red-950/60 rounded-2xl p-8 hover:border-red-600/50 transition-all cursor-pointer group space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-400">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">Biografía Oficial</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Conoce el arquetipo de Belentani, el silencio consciente y su presencia inquebrantable de 1.94m.</p>
              <span className="text-xs text-red-400 font-bold flex items-center gap-1">Leer más <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
            </div>
          </Link>

          <Link href="/judas">
            <div className="bg-[#0a0a0a] border border-red-950/60 rounded-2xl p-8 hover:border-red-600/50 transition-all cursor-pointer group space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">Universo Judas</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Explora los 5 Elementos integrados y la mutación cognitiva Omega que define esta era musical.</p>
              <span className="text-xs text-red-400 font-bold flex items-center gap-1">Entrar al Lore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
            </div>
          </Link>

          <Link href="/contact">
            <div className="bg-[#0a0a0a] border border-red-950/60 rounded-2xl p-8 hover:border-red-600/50 transition-all cursor-pointer group space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">Booking & Contacto</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Ponte en contacto directo con Duck Prod para licencias, colaboraciones y gestión artística.</p>
              <span className="text-xs text-red-400 font-bold flex items-center gap-1">Enviar mensaje <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
            </div>
          </Link>
        </section>

        {/* Cierre / Outro */}
        <section className="py-16 text-center border-t border-red-950/60">
          <blockquote className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4">
            "Vale la pena la traición si el trauma es el desencadenante de la mutación cognitiva Omega."
          </blockquote>
          <p className="text-xs text-red-500 font-mono tracking-widest uppercase">
            BELENTANI — THE JUDAS EXPERIENCE
          </p>
        </section>
      </div>
    </Layout>
  );
}
