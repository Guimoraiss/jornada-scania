import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Game2State } from '../Game2';

interface Props {
  data: Partial<Game2State>;
  update: (d: Partial<Game2State>) => void;
  next: () => void;
  back: () => void;
  isCollective: boolean;
}

export default function G2Step5Evidence({ data, update, next, back, isCollective }: Props) {
  const [situation, setSituation] = useState('');
  const [action, setAction] = useState('');
  const [result, setResult] = useState('');

  const evidence = situation && action && result
    ? `Na situação ${situation}, eu fiz ${action}. Isso contribuiu para ${result}.`
    : '';

  function handleNext() {
    update({ evidence: isCollective ? '' : evidence });
    next();
  }

  if (isCollective) {
    return (
      <div className="animate-fade-in">
        <div className="mb-6">
          <div className="tag-badge bg-scania-orange/20 text-scania-orange border border-scania-orange/30 mb-4">
            Passo 5 de 7
          </div>
          <h2 className="section-title mb-3">Minhas evidências</h2>
          <p className="text-white/60 font-scania leading-relaxed">
            No modo coletivo, esta etapa é uma orientação para cada participante realizar de forma individual na sua autoavaliação no MySuccess.
          </p>
        </div>

        <div className="card-glass rounded-xl p-5 border border-white/10 mb-6">
          <p className="text-white/40 text-xs font-scania font-bold uppercase tracking-wider mb-3">Como registrar evidências</p>
          <div className="space-y-3">
            {[
              { tag: 'Situação', desc: 'Descreva brevemente o contexto onde o comportamento aconteceu.', example: '"Durante a análise de uma peça fora do padrão..."' },
              { tag: 'Ação', desc: 'O que você fez de concreto nessa situação?', example: '"Eu comuniquei a liderança imediatamente e propus uma contenção..."' },
              { tag: 'Resultado', desc: 'Qual foi o impacto ou contribuição gerada?', example: '"Isso evitou que o desvio chegasse ao cliente final..."' },
            ].map(item => (
              <div key={item.tag} className="border-l-2 border-scania-orange/40 pl-3">
                <span className="tag-badge bg-scania-orange/15 text-scania-orange border border-scania-orange/20 mb-1 text-xs">
                  {item.tag}
                </span>
                <p className="text-white/70 font-scania text-sm mt-1">{item.desc}</p>
                <p className="text-white/40 font-scania text-xs italic mt-1">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={back} className="btn-ghost border border-white/20"><ChevronLeft size={18} /> Voltar</button>
          <button onClick={handleNext} className="btn-primary flex-1">
            Próximo <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-orange/20 text-scania-orange border border-scania-orange/30 mb-4">
          Passo 5 de 7
        </div>
        <h2 className="section-title mb-3">Minhas evidências</h2>
        <p className="text-white/60 font-scania leading-relaxed">
          Use exemplos reais e específicos. Evite frases genéricas — descreva a situação, sua ação e a contribuição gerada.
        </p>
      </div>

      <div className="space-y-4 mb-5">
        <div>
          <label className="block text-white/60 font-scania text-sm mb-2">
            <span className="text-scania-orange font-bold">Situação:</span> Na situação...
          </label>
          <textarea
            value={situation}
            onChange={e => setSituation(e.target.value)}
            placeholder="Ex: durante a inspeção de uma peça antes de enviar para a próxima linha..."
            className="input-field min-h-[70px] resize-none"
            maxLength={150}
          />
        </div>
        <div>
          <label className="block text-white/60 font-scania text-sm mb-2">
            <span className="text-scania-orange font-bold">Ação:</span> eu fiz...
          </label>
          <textarea
            value={action}
            onChange={e => setAction(e.target.value)}
            placeholder="Ex: identifiquei o desvio, parei a entrega e comuniquei imediatamente a liderança..."
            className="input-field min-h-[70px] resize-none"
            maxLength={150}
          />
        </div>
        <div>
          <label className="block text-white/60 font-scania text-sm mb-2">
            <span className="text-scania-orange font-bold">Resultado:</span> isso contribuiu para...
          </label>
          <textarea
            value={result}
            onChange={e => setResult(e.target.value)}
            placeholder="Ex: evitar que o produto chegasse ao cliente final com defeito, protegendo a qualidade..."
            className="input-field min-h-[70px] resize-none"
            maxLength={150}
          />
        </div>
      </div>

      {/* Preview */}
      {evidence && (
        <div className="rounded-xl border border-scania-orange/30 bg-scania-orange/10 p-4 mb-5 animate-fade-in">
          <p className="text-white/40 text-xs font-scania font-bold uppercase tracking-wider mb-2">Sua evidência</p>
          <p className="text-white font-scania text-sm leading-relaxed italic">"{evidence}"</p>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={back} className="btn-ghost border border-white/20"><ChevronLeft size={18} /> Voltar</button>
        <button onClick={handleNext} disabled={!evidence} className="btn-primary flex-1">
          Antes da conversa <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
