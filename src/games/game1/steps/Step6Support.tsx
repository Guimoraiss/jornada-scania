import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Game1State } from '../Game1';

const SUPPORT_OPTIONS = [
  { id: 'lideranca',  label: 'Liderança',               emoji: '👤', desc: 'Orientação, feedback e acompanhamento do PDI.' },
  { id: 'colega',     label: 'Colega experiente',        emoji: '🤝', desc: 'Troca de boas práticas e apoio no dia a dia.' },
  { id: 'mentor',     label: 'Mentor',                   emoji: '⭐', desc: 'Referência para orientação de carreira e desenvolvimento.' },
  { id: 'instrutor',  label: 'Instrutor',                emoji: '📋', desc: 'Apoio técnico e validação de aprendizagem.' },
  { id: 'rhbp',       label: 'HRBP / Pessoas & Cultura', emoji: '🏢', desc: 'Orientação sobre processos e recursos de RH.' },
  { id: 'area',       label: 'Área parceira',            emoji: '🔗', desc: 'Colaboração interdepartamental para crescimento.' },
];

interface Props {
  data: Partial<Game1State>;
  update: (d: Partial<Game1State>) => void;
  next: () => void;
  back: () => void;
  isCollective: boolean;
}

export default function Step6Support({ data, update, next, back, isCollective }: Props) {
  const [selected, setSelected] = useState(data.support ?? '');

  function toggle(id: string) {
    const label = SUPPORT_OPTIONS.find(o => o.id === id)?.label ?? id;
    setSelected(prev => prev === label ? '' : label);
  }

  function handleNext() {
    update({ support: selected });
    next();
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-yellow/20 text-scania-yellow border border-scania-yellow/30 mb-4">
          Passo 6 de 8
        </div>
        <h2 className="section-title mb-3">Quem pode apoiar?</h2>
        <p className="text-white/60 font-scania leading-relaxed">
          {isCollective
            ? 'Quais apoios fariam mais sentido para o personagem nesse momento de desenvolvimento?'
            : 'Identifique quem poderá apoiar sua jornada. Você não precisa desenvolver sozinho.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {SUPPORT_OPTIONS.map(opt => {
          const isSelected = selected === opt.label;
          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              className={`p-4 rounded-xl border-2 text-left transition-all duration-200
                ${isSelected
                  ? 'border-scania-yellow bg-scania-yellow/15'
                  : 'border-white/10 bg-white/5 hover:border-white/30'
                }`}
            >
              <span className="text-2xl mb-2 block">{opt.emoji}</span>
              <p className={`font-bold font-scania text-sm mb-1 ${isSelected ? 'text-scania-yellow' : 'text-white'}`}>
                {opt.label}
              </p>
              <p className="text-white/50 font-scania text-xs leading-snug">{opt.desc}</p>
            </button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button onClick={back} className="btn-ghost border border-white/20">
          <ChevronLeft size={18} /> Voltar
        </button>
        <button onClick={handleNext} disabled={!selected} className="btn-primary flex-1">
          Próximo passo <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
