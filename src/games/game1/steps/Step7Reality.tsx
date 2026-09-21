import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Game1State } from '../Game1';

interface Props {
  data: Partial<Game1State>;
  update: (d: Partial<Game1State>) => void;
  next: () => void;
  back: () => void;
  isCollective: boolean;
}

export default function Step7Reality({ data, update, next, back, isCollective }: Props) {
  const [firstStep, setFirstStep] = useState(data.firstStep ?? '');
  const [deadline, setDeadline] = useState(data.deadline ?? '');
  const [canStart, setCanStart] = useState<'yes' | 'adjust' | null>(null);

  const isReady = canStart === 'yes' ? (firstStep.trim().length > 3) : canStart === 'adjust' ? true : false;

  function handleNext() {
    update({ firstStep: canStart === 'yes' ? firstStep : 'Ajustar o plano com apoio da liderança', deadline });
    next();
  }

  if (isCollective) {
    return (
      <div className="animate-fade-in">
        <div className="mb-6">
          <div className="tag-badge bg-scania-yellow/20 text-scania-yellow border border-scania-yellow/30 mb-4">
            Passo 7 de 8
          </div>
          <h2 className="section-title mb-3">Cheque de realidade</h2>
          <p className="text-white/60 font-scania leading-relaxed">
            O grupo reflete: o plano do personagem é viável? O primeiro passo está claro?
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {[
            { q: 'O objetivo escolhido é realista para a situação atual do personagem?', a: 'Sim, com apoio da liderança é possível.' },
            { q: 'As ações do PDI podem ser realizadas na rotina de trabalho?', a: 'A maioria sim, especialmente as ações 70%.' },
            { q: 'Fica claro qual seria o primeiro passo concreto?', a: 'Conversar com a liderança para alinhar expectativas e definir o primeiro passo.' },
          ].map((item, i) => (
            <div key={i} className="card-glass rounded-xl p-4 border border-white/10">
              <p className="text-white font-bold font-scania text-sm mb-2">💬 {item.q}</p>
              <p className="text-white/60 font-scania text-sm">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={back} className="btn-ghost border border-white/20">
            <ChevronLeft size={18} /> Voltar
          </button>
          <button onClick={next} className="btn-primary flex-1">
            Ver resultado <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-yellow/20 text-scania-yellow border border-scania-yellow/30 mb-4">
          Passo 7 de 8
        </div>
        <h2 className="section-title mb-3">Cheque de realidade</h2>
        <p className="text-white/60 font-scania leading-relaxed">
          Antes de finalizar, verifique se o seu plano é viável e defina o primeiro passo concreto.
        </p>
      </div>

      {/* Can start question */}
      <div className="card-glass rounded-xl p-5 mb-5 border border-white/10">
        <p className="text-white font-bold font-scania mb-4">Consigo começar esse plano nos próximos dias?</p>
        <div className="flex gap-3">
          <button
            onClick={() => setCanStart('yes')}
            className={`flex-1 py-3 rounded-xl border-2 font-bold font-scania text-sm transition-all
              ${canStart === 'yes' ? 'border-green-500 bg-green-500/20 text-green-400' : 'border-white/20 text-white/60 hover:border-white/40'}`}
          >
            ✅ Sim
          </button>
          <button
            onClick={() => setCanStart('adjust')}
            className={`flex-1 py-3 rounded-xl border-2 font-bold font-scania text-sm transition-all
              ${canStart === 'adjust' ? 'border-scania-yellow bg-scania-yellow/20 text-scania-yellow' : 'border-white/20 text-white/60 hover:border-white/40'}`}
          >
            🔄 Preciso ajustar
          </button>
        </div>
      </div>

      {canStart === 'yes' && (
        <div className="space-y-4 mb-5 animate-fade-in">
          <div>
            <label className="block text-white/60 font-scania text-sm mb-2">
              Qual será meu primeiro passo concreto?
            </label>
            <textarea
              value={firstStep}
              onChange={e => setFirstStep(e.target.value)}
              placeholder="Ex: Conversar com minha liderança sobre o objetivo e pedir feedback sobre minha atuação atual."
              className="input-field min-h-[80px] resize-none"
              maxLength={200}
            />
          </div>
          <div>
            <label className="block text-white/60 font-scania text-sm mb-2">
              Quando quero dar esse primeiro passo? (opcional)
            </label>
            <input
              type="text"
              value={deadline}
              onChange={e => setDeadline(e.target.value)}
              placeholder="Ex: até o final deste mês"
              className="input-field"
              maxLength={60}
            />
          </div>
        </div>
      )}

      {canStart === 'adjust' && (
        <div className="card-glass rounded-xl p-4 mb-5 border border-scania-yellow/20 animate-fade-in">
          <p className="text-scania-yellow font-bold font-scania text-sm mb-2">💡 Sugestão</p>
          <p className="text-white/70 font-scania text-sm leading-relaxed">
            Converse com sua liderança sobre o que pode ser ajustado. O PDI pode ser simplificado — comece com uma ação pequena e possível.
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={back} className="btn-ghost border border-white/20">
          <ChevronLeft size={18} /> Voltar
        </button>
        <button onClick={handleNext} disabled={!isReady} className="btn-primary flex-1">
          Ver meu resultado <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
