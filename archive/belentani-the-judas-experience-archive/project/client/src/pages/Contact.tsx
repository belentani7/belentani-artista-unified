import Layout from '@/components/Layout';
import { Mail, Shield, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Mensaje transmitido correctamente al núcleo de Duck Prod.');
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/40 bg-red-950/50 text-red-400 text-xs font-bold tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5 text-red-500" />
            <span>Booking & Management • Duck Prod.</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            Contacto <span className="text-red-500">Oficial</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Para licencias de beats, contrataciones, colaboraciones o prensa en la Era de Judas.
          </p>
        </div>

        <div className="bg-[#0a0a0a] border border-red-950/60 rounded-3xl p-8 md:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Mensaje Recibido</h3>
              <p className="text-gray-400 text-sm">El silencio consciente ha procesado tu solicitud. Nos pondremos en contacto pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Nombre / Entidad</label>
                <input required type="text" placeholder="Tu nombre o sello" className="w-full bg-[#121212] border border-red-950/60 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Correo Electrónico</label>
                <input required type="email" placeholder="tu@correo.com" className="w-full bg-[#121212] border border-red-950/60 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Motivo del Mensaje</label>
                <textarea required rows={4} placeholder="Describe tu propuesta o proyecto..." className="w-full bg-[#121212] border border-red-950/60 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors resize-none" />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 uppercase tracking-wider text-sm">
                <Send className="w-4 h-4" /> Enviar Mensaje
              </Button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
