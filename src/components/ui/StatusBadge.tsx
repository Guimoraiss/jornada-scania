import type { GameStatus } from '../../types';

interface StatusBadgeProps {
  status: GameStatus;
  className?: string;
}

const statusConfig = {
  'not-started': { label: 'Não iniciado', color: 'bg-white/10 text-white/50', dot: 'bg-white/30' },
  'in-progress':  { label: 'Em andamento', color: 'bg-scania-yellow/20 text-scania-yellow', dot: 'bg-scania-yellow animate-pulse' },
  'completed':    { label: 'Concluído', color: 'bg-scania-green/30 text-scania-green-light', dot: 'bg-scania-green-light' },
};

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-scania ${config.color} ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}
