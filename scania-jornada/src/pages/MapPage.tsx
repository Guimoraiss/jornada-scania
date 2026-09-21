import { useState } from 'react';
import { Route, Star, Settings, BookOpen, Compass, Rocket, User, Users, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import type { AppScreen } from '../types';
import TruckSVG from '../components/ui/TruckSVG';
import StatusBadge from '../components/ui/StatusBadge';

interface MapPoint {
  id: AppScreen;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
  truckTarget: string;
  isGame: boolean;
  truckX: number;
  truckY: number;
}

const mapPoints: MapPoint[] = [
  {
    id: 'game1',
    label: 'Monte sua Rota',
    sublabel: 'Jogo 1 · PDI',
    icon: <Route size={24} />,
    color: 'bg-scania-yellow',
    borderColor: 'border-scania-yellow',
    textColor: 'text-scania-yellow',
    bgColor: 'bg-scania-yellow/15',
    truckTarget: 'game1',
    isGame: true,
    truckX: 20,
    truckY: 35,
  },
  {
    id: 'game2',
    label: 'Scania Way em Ação',
    sublabel: 'Jogo 2 · Autoavaliação',
    icon: <Star size={24} />,
    color: 'bg-scania-orange',
    borderColor: 'border-scania-orange',
    textColor: 'text-scania-orange',
    bgColor: 'bg-scania-orange/15',
    truckTarget: 'game2',
    isGame: true,
    truckX: 72,
    truckY: 35,
  },
  {
    id: 'support-system',
    label: 'Acessar no sistema',
    sublabel: 'Como fazer a autoavaliação',
    icon: <Settings size={18} />,
    color: 'bg-scania-blue-light',
    borderColor: 'border-scania-blue-light',
    textColor: 'text-scania-blue-light',
    bgColor: 'bg-scania-blue-light/10',
    truckTarget: 'system',
    isGame: false,
    truckX: 15,
    truckY: 75,
  },
  {
    id: 'support-7020',
    label: 'Saiba mais: 70/20/10',
    sublabel: 'Metodologia de aprendizagem',
    icon: <BookOpen size={18} />,
    color: 'bg-scania-green',
    borderColor: 'border-scania-green',
    textColor: 'text-scania-green-light',
    bgColor: 'bg-scania-green/10',
    truckTarget: '7020',
    isGame: false,
    truckX: 38,
    truckY: 75,
  },
  {
    id: 'support-career',
    label: 'Carreira',
    sublabel: 'Job Architecture e crescimento',
    icon: <Compass size={18} />,
    color: 'bg-scania-beige',
    borderColor: 'border-scania-beige',
    textColor: 'text-scania-beige',
    bgColor: 'bg-scania-beige/10',
    truckTarget: 'career',
    isGame: false,
    truckX: 62,
    truckY: 75,
  },
  {
    id: 'support-resources',
    label: 'Apoio Scania',
    sublabel: 'Recursos de desenvolvimento',
    icon: <Rocket size={18} />,
    color: 'bg-scania-red',
    borderColor: 'border-scania-red',
    textColor: 'text-scania-red',
    bgColor: 'bg-scania-red/10',
    truckTarget: 'resources',
    isGame: false,
    truckX: 85,
    truckY: 75,
  },
];

export default function MapPage() {
  const { state, navigate, dispatch } = useApp();
  const [truckPos, setTruckPos] = useState({ x: 50, y: 50 });
  const [moving, setMoving] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  function handleNodeClick(point: MapPoint) {
    if (moving) return;
    setMoving(true);
    setActiveNode(point.id);
    setTruckPos({ x: point.truckX, y: point.truckY });
    dispatch({ type: 'SET_TRUCK_POSITION', payload: point.truckTarget });

    setTimeout(() => {
      setMoving(false);
      navigate(point.id);
    }, 700);
  }

  const modeLabel = state.mode === 'individual' ? 'Individual' : 'Coletivo';
  const ModeIcon = state.mode === 'individual' ? User : Users;

  return (
    <div className="min-h-dvh bg-factory-gradient flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-6 py-4 bg-scania-blue/80 backdrop-blur border-b border-white/10 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-scania-yellow flex items-center justify-center">
            <span className="text-scania-blue font-bold text-sm font-scania-headline">S</span>
          </div>
          <div>
            <p className="text-white font-bold font-scania text-sm leading-tight">Jornada de Desenvolvimento</p>
            <p className="text-white/40 text-xs font-scania">Ciclo B</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
            <ModeIcon size={13} className="text-scania-yellow" />
            <span className="text-white text-xs font-scania font-bold">{modeLabel}</span>
          </div>
          <button
            onClick={() => alert('Em caso de dúvidas, entre em contato com:\nLetícia Pina (LPIA4V)\nAmanda Gonçalves (AGOJA9)\n\nTime LHRD — Scania Latin America')}
            className="btn-ghost p-2"
            aria-label="Ajuda"
          >
            <HelpCircle size={17} />
          </button>
        </div>
      </header>

      {/* Welcome text */}
      <div className="px-4 md:px-8 pt-5 pb-2 max-w-3xl">
        <p className="text-white/80 font-scania text-sm leading-relaxed">
          Bem-vindo à Jornada de Desenvolvimento. Escolha o próximo destino e avance no Ciclo B.
          Você pode começar pelo PDI, pela Autoavaliação ou acessar um conteúdo de apoio.
        </p>
      </div>

      {/* Factory Map */}
      <div className="relative mx-4 md:mx-8 mt-4 mb-6 rounded-2xl border border-white/10 overflow-hidden bg-scania-bg-dark/60">
        {/* Factory grid background */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />

        {/* Factory silhouette top */}
        <div className="absolute top-0 left-0 right-0 h-16 opacity-10 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 800 64" fill="white" preserveAspectRatio="xMidYMid meet">
            <path d="M0,64 L0,40 L30,40 L30,20 L50,20 L50,40 L100,40 L100,30 L120,30 L120,10 L130,10 L130,30 L160,30 L160,40 L220,40 L220,25 L250,25 L250,40 L310,40 L310,30 L340,30 L340,15 L350,15 L350,30 L380,30 L380,40 L440,40 L440,20 L460,20 L460,40 L520,40 L520,30 L550,30 L550,10 L560,10 L560,30 L590,30 L590,40 L650,40 L650,25 L680,25 L680,40 L740,40 L740,30 L760,30 L760,40 L800,40 L800,64 Z"/>
          </svg>
        </div>

        {/* Road / path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Horizontal road */}
          <path d="M5,50 Q30,30 50,50 Q70,70 95,50" stroke="rgba(255,192,0,0.2)" strokeWidth="4" fill="none" strokeDasharray="4 3" />
          {/* Road markings */}
          <path d="M5,50 Q30,30 50,50 Q70,70 95,50" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
          {/* Vertical connectors */}
          <line x1="20" y1="50" x2="20" y2="75" stroke="rgba(255,192,0,0.15)" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="40" y1="55" x2="40" y2="75" stroke="rgba(255,192,0,0.15)" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="62" y1="50" x2="62" y2="75" stroke="rgba(255,192,0,0.15)" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="84" y1="50" x2="84" y2="75" stroke="rgba(255,192,0,0.15)" strokeWidth="2" strokeDasharray="3 3" />
        </svg>

        {/* Truck (positioned via CSS) */}
        <div
          className="absolute transition-all duration-700 ease-in-out z-10 pointer-events-none"
          style={{
            left: `calc(${truckPos.x}% - 56px)`,
            top: `calc(${truckPos.y}% - 28px)`,
          }}
        >
          <TruckSVG size={112} animated={moving} color="#FFC000" />
        </div>

        {/* Map nodes */}
        <div className="relative grid grid-rows-2 gap-4 p-4 md:p-6 min-h-[420px] md:min-h-[360px]">
          {/* Row 1 — Games */}
          <div className="flex items-center justify-center gap-4 md:gap-8 pt-2">
            {mapPoints.filter(p => p.isGame).map(point => (
              <MapNodeCard
                key={point.id}
                point={point}
                status={point.id === 'game1' ? state.progress.game1 : point.id === 'game2' ? state.progress.game2 : 'not-started'}
                active={activeNode === point.id}
                onClick={() => handleNodeClick(point)}
                isGame
              />
            ))}
          </div>

          {/* Row 2 — Support */}
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap pb-2">
            {mapPoints.filter(p => !p.isGame).map(point => (
              <MapNodeCard
                key={point.id}
                point={point}
                active={activeNode === point.id}
                onClick={() => handleNodeClick(point)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress summary */}
      <div className="mx-4 md:mx-8 mb-6 grid grid-cols-2 gap-3">
        <div className="card-glass rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-scania-yellow/20 flex items-center justify-center shrink-0">
            <Route size={18} className="text-scania-yellow" />
          </div>
          <div className="min-w-0">
            <p className="text-white font-bold font-scania text-sm truncate">Jogo 1 · PDI</p>
            <StatusBadge status={state.progress.game1} />
          </div>
        </div>
        <div className="card-glass rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-scania-orange/20 flex items-center justify-center shrink-0">
            <Star size={18} className="text-scania-orange" />
          </div>
          <div className="min-w-0">
            <p className="text-white font-bold font-scania text-sm truncate">Jogo 2 · Autoavaliação</p>
            <StatusBadge status={state.progress.game2} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-3 border-t border-white/10 flex items-center justify-between text-white/30 text-xs font-scania">
        <span>Jornada de Desenvolvimento · Ciclo B</span>
        <button
          onClick={() => alert('Em caso de dúvidas:\nLetícia Pina (LPIA4V)\nAmanda Gonçalves (AGOJA9)')}
          className="hover:text-white/60 transition-colors"
        >
          Ajuda · LHRD
        </button>
      </footer>
    </div>
  );
}

/* ── Map node card ───────────────────────────────────────── */
interface MapNodeCardProps {
  point: MapPoint;
  status?: import('../types').GameStatus;
  active: boolean;
  onClick: () => void;
  isGame?: boolean;
}

function MapNodeCard({ point, status, active, onClick, isGame = false }: MapNodeCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative text-left rounded-2xl border-2 transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-scania-yellow/50
        ${isGame ? 'p-4 md:p-5 w-full max-w-[240px]' : 'p-3 md:p-4 w-full max-w-[180px]'}
        ${active
          ? `${point.borderColor} ${point.bgColor} scale-105`
          : `border-white/10 bg-white/5 hover:${point.borderColor} hover:${point.bgColor} hover:scale-105`
        }
      `}
      style={active ? {} : undefined}
    >
      {/* Icon */}
      <div className={`
        rounded-xl flex items-center justify-center mb-3 transition-colors
        ${isGame ? 'w-12 h-12' : 'w-10 h-10'}
        ${active ? point.bgColor : `bg-white/10 group-hover:${point.bgColor}`}
        ${point.textColor}
      `}>
        {point.icon}
      </div>

      {/* Labels */}
      <p className={`font-scania font-bold leading-tight mb-0.5 ${isGame ? 'text-sm md:text-base' : 'text-xs md:text-sm'} ${active ? point.textColor : 'text-white group-hover:' + point.textColor.replace('text-', 'text-')}`}>
        {point.label}
      </p>
      <p className="text-white/40 font-scania text-xs leading-tight">{point.sublabel}</p>

      {/* Status badge for games */}
      {isGame && status && (
        <div className="mt-3">
          <StatusBadge status={status} />
        </div>
      )}

      {/* Active pulse */}
      {active && (
        <span className={`absolute top-2 right-2 w-2 h-2 rounded-full ${point.color} animate-pulse`} />
      )}
    </button>
  );
}
