import { ChevronRight, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import TruckSVG from '../components/ui/TruckSVG';

export default function WelcomePage() {
  const { navigate } = useApp();

  return (
    <div className="min-h-dvh bg-factory-gradient bg-grid-pattern bg-grid flex flex-col overflow-hidden relative">
      {/* Factory grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-scania-bg-dark/60 pointer-events-none" />

      {/* Decorative factory elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-scania-blue via-scania-yellow to-scania-red opacity-80" />

      {/* Background factory silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-5 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 200" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
          <path d="M0,200 L0,120 L60,120 L60,80 L80,80 L80,120 L160,120 L160,60 L200,60 L200,20 L220,20 L220,60 L260,60 L260,120 L360,120 L360,90 L400,90 L400,120 L480,120 L480,70 L520,70 L520,40 L540,40 L540,70 L580,70 L580,120 L640,120 L640,80 L680,80 L680,120 L760,120 L760,100 L800,100 L800,60 L820,60 L820,30 L840,30 L840,60 L880,60 L880,100 L920,100 L920,120 L1000,120 L1000,80 L1040,80 L1040,120 L1120,120 L1120,70 L1160,70 L1160,40 L1180,40 L1180,70 L1220,70 L1220,120 L1300,120 L1300,90 L1340,90 L1340,120 L1440,120 L1440,200 Z"/>
        </svg>
      </div>

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-scania-yellow flex items-center justify-center shadow-lg">
            <span className="text-scania-blue font-bold text-base font-scania-headline">S</span>
          </div>
          <span className="text-white/60 text-xs font-scania uppercase tracking-widest hidden sm:block">
            Scania Latin America
          </span>
        </div>
        <div className="flex items-center gap-2 text-white/40 text-xs font-scania">
          <MapPin size={12} />
          <span>São Bernardo do Campo</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Tag */}
        <div className="tag-badge bg-scania-yellow/20 text-scania-yellow border border-scania-yellow/30 mb-8 animate-fade-in">
          Ciclo B · Performance &amp; Desenvolvimento
        </div>

        {/* Truck visual */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <TruckSVG size={200} animated />
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-scania-headline font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Jornada de<br />
            <span className="text-scania-yellow">Desenvolvimento</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-scania leading-relaxed max-w-xl mx-auto">
            Seu desenvolvimento também faz parte da construção do futuro da Scania.
            Escolha seu destino e avance na sua Jornada.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 animate-slide-up" style={{ animationDelay: '0.35s' }}>
          <button
            onClick={() => navigate('mode-select')}
            className="btn-primary text-lg px-10 py-4 rounded-xl shadow-xl shadow-scania-yellow/20 animate-glow"
          >
            Iniciar Jornada
            <ChevronRight size={22} />
          </button>
          <p className="text-white/30 text-sm font-scania">
            Duração: 8 a 10 minutos por jogo
          </p>
        </div>
      </div>

      {/* Bottom info strip */}
      <div className="relative z-10 px-4 md:px-8 py-3 border-t border-white/10 flex items-center justify-center gap-6 text-white/30 text-xs font-scania">
        <span>Jornada de Desenvolvimento · Ciclo B</span>
        <span>·</span>
        <span>RH | LHRD</span>
      </div>
    </div>
  );
}
