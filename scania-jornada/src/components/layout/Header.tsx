import { ArrowLeft, HelpCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { AppScreen } from '../../types';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  backTo?: AppScreen;
  showHelp?: boolean;
  compact?: boolean;
}

export default function Header({
  title,
  showBack = false,
  backTo = 'map',
  showHelp = true,
  compact = false,
}: HeaderProps) {
  const { navigate } = useApp();

  return (
    <header className={`w-full flex items-center justify-between px-4 md:px-6 ${compact ? 'py-3' : 'py-4'} bg-scania-blue/80 backdrop-blur border-b border-white/10 sticky top-0 z-40`}>
      <div className="flex items-center gap-3 min-w-0">
        {showBack && (
          <button
            onClick={() => navigate(backTo)}
            className="btn-ghost p-2 -ml-2 shrink-0"
            aria-label="Voltar"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        {/* Scania logo mark */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded bg-scania-yellow flex items-center justify-center">
            <span className="text-scania-blue font-bold text-sm font-scania-headline">S</span>
          </div>
          {!compact && (
            <span className="hidden sm:block text-white/60 text-xs font-scania uppercase tracking-widest">
              Scania Latin America
            </span>
          )}
        </div>
        {title && (
          <div className="hidden md:flex items-center gap-2 min-w-0">
            <span className="text-white/30">|</span>
            <span className="text-white font-scania font-bold text-sm truncate">{title}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {title && (
          <span className="md:hidden text-white font-scania font-bold text-sm truncate max-w-[160px]">{title}</span>
        )}
        {showHelp && (
          <button
            onClick={() => alert('Em caso de dúvidas, entre em contato com:\nLetícia Pina (LPIA4V)\nAmanda Gonçalves (AGOJA9)\n\nTime LHRD — Scania Latin America')}
            className="btn-ghost p-2"
            aria-label="Ajuda"
          >
            <HelpCircle size={18} />
          </button>
        )}
      </div>
    </header>
  );
}
