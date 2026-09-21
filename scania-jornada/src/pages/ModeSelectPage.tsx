import { User, Users, Clock, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';

export default function ModeSelectPage() {
  const { navigate, setMode, dispatch } = useApp();

  function handleSelect(mode: 'individual' | 'collective') {
    setMode(mode);
    dispatch({ type: 'SET_MODE', payload: mode });
    navigate('map');
  }

  return (
    <div className="min-h-dvh bg-factory-gradient flex flex-col">
      <Header showBack backTo="welcome" />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 rounded-full bg-scania-yellow text-scania-blue text-xs font-bold flex items-center justify-center">1</div>
          <div className="w-16 h-px bg-white/20" />
          <div className="w-6 h-6 rounded-full bg-white/20 text-white/50 text-xs font-bold flex items-center justify-center">2</div>
          <div className="w-16 h-px bg-white/20" />
          <div className="w-6 h-6 rounded-full bg-white/20 text-white/50 text-xs font-bold flex items-center justify-center">3</div>
        </div>

        <h2 className="section-title text-center mb-2">Como você vai participar?</h2>
        <p className="text-white/60 text-center font-scania mb-10 max-w-md">
          A escolha altera as interações e o resultado final, mas mantém o mesmo objetivo de aprendizagem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-2xl">
          {/* Individual */}
          <button
            onClick={() => handleSelect('individual')}
            className="group card-glass p-6 md:p-8 text-left rounded-2xl border-2 border-transparent
                       hover:border-scania-yellow/60 hover:bg-scania-yellow/5
                       transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:border-scania-yellow"
          >
            <div className="w-14 h-14 rounded-xl bg-scania-blue-mid flex items-center justify-center mb-5
                            group-hover:bg-scania-yellow/20 transition-colors">
              <User size={28} className="text-scania-yellow" />
            </div>
            <h3 className="font-scania-headline font-bold text-xl text-white mb-2">Individual</h3>
            <p className="text-white/60 font-scania text-sm leading-relaxed mb-4">
              Perguntas pessoais, escolhas individuais e registro curto.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-white/50 text-xs font-scania">
                <span className="text-scania-yellow mt-0.5">✓</span>
                <span>Resultado pessoal para apoiar o PDI</span>
              </div>
              <div className="flex items-start gap-2 text-white/50 text-xs font-scania">
                <span className="text-scania-yellow mt-0.5">✓</span>
                <span>Nome opcional — suas respostas são suas</span>
              </div>
              <div className="flex items-start gap-2 text-white/50 text-xs font-scania">
                <span className="text-scania-yellow mt-0.5">✓</span>
                <span>Resumo para conversa com a liderança</span>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-5 text-scania-yellow text-sm font-bold font-scania group-hover:gap-2 transition-all">
              Selecionar <ChevronRight size={16} />
            </div>
          </button>

          {/* Collective */}
          <button
            onClick={() => handleSelect('collective')}
            className="group card-glass p-6 md:p-8 text-left rounded-2xl border-2 border-transparent
                       hover:border-scania-blue-light/60 hover:bg-scania-blue-light/5
                       transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:border-scania-blue-light"
          >
            <div className="w-14 h-14 rounded-xl bg-scania-blue-mid flex items-center justify-center mb-5
                            group-hover:bg-scania-blue-light/20 transition-colors">
              <Users size={28} className="text-scania-blue-light" />
            </div>
            <h3 className="font-scania-headline font-bold text-xl text-white mb-2">Coletivo</h3>
            <p className="text-white/60 font-scania text-sm leading-relaxed mb-4">
              Liderança conduz o grupo com personagens fictícios e votações rápidas.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-white/50 text-xs font-scania">
                <span className="text-scania-blue-light mt-0.5">✓</span>
                <span>Sem registro de nomes dos participantes</span>
              </div>
              <div className="flex items-start gap-2 text-white/50 text-xs font-scania">
                <span className="text-scania-blue-light mt-0.5">✓</span>
                <span>Ideal para briefings e paradas de linha</span>
              </div>
              <div className="flex items-start gap-2 text-white/50 text-xs font-scania">
                <span className="text-scania-blue-light mt-0.5">✓</span>
                <span>Cabe em até 10 minutos com a equipe</span>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-5 text-scania-blue-light text-sm font-bold font-scania group-hover:gap-2 transition-all">
              Selecionar <ChevronRight size={16} />
            </div>
          </button>
        </div>

        {/* Time notice */}
        <div className="mt-8 flex items-center gap-2 text-white/40 text-xs font-scania">
          <Clock size={14} />
          <span>Cada jogo dura de 8 a 10 minutos</span>
        </div>
      </div>
    </div>
  );
}
