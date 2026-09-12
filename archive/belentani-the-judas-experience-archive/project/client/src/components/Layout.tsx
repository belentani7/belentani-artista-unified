import { Link, useLocation } from 'wouter';
import { Disc, User, BookOpen, Film, Image as ImageIcon, Mail, Home as HomeIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Inicio', icon: HomeIcon },
    { path: '/music', label: 'Música', icon: Disc },
    { path: '/bio', label: 'Biografía', icon: User },
    { path: '/judas', label: 'Universo Judas', icon: BookOpen },
    { path: '/gallery', label: 'Galería', icon: ImageIcon },
    { path: '/storyboard', label: 'Storyboard', icon: Film },
    { path: '/contact', label: 'Contacto', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-[#f0f0f0] font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between">
      {/* Header Fijo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-red-950/60 py-3 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center font-black text-white text-sm shadow-lg shadow-red-600/40">
            B
          </div>
          <div>
            <span className="font-extrabold tracking-wider text-sm text-white block">BELENTANI</span>
            <span className="text-[9px] tracking-widest text-red-500 uppercase block">THE JUDAS EXPERIENCE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-black/40 p-1 rounded-2xl border border-red-950/50 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <span className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 transition-all cursor-pointer ${
                  isActive ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}>
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-red-950/30 border border-red-900/40 text-red-400"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-8 lg:hidden pt-20">
          <div className="space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <span 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full p-4 rounded-2xl text-base font-bold flex items-center gap-4 transition-all cursor-pointer ${
                      isActive ? 'bg-red-600 text-white shadow-xl shadow-red-600/40' : 'bg-[#0e0e0e] text-gray-300 border border-red-950/50'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-red-400" />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-red-950/40 bg-[#050505] text-center text-xs text-gray-500 font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 BELENTANI. THE JUDAS EXPERIENCE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 text-gray-400">
            <Link href="/music"><span className="hover:text-red-400 cursor-pointer">Música</span></Link>
            <Link href="/bio"><span className="hover:text-red-400 cursor-pointer">Biografía</span></Link>
            <Link href="/contact"><span className="hover:text-red-400 cursor-pointer">Contacto</span></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
