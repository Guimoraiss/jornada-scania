import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Game2State } from '../Game2';

const VALUES = [
  { id: 'cliente',      label: 'Cliente em Primeiro Lugar', emoji: '🎯' },
  { id: 'desperdicio',  label: 'Eliminação de Desperdícios', emoji: '♻️' },
  { id: 'respeito',     label: 'Respeito',                  emoji: '🤝' },
  { id: 'responsabilidade', label: 'Responsabilidade',      emoji: '⚙️' },
  { id: 'equipe',       label: 'Espírito de Equipe',         emoji: '👥' },
  { id: 'she',          label: 'Saúde, Segurança e Meio Ambiente', emoji: '🦺' },
];

interface Props {
  data: Partial<Game2State>;
  update: (d: Partial<Game2State>) => void;
  next: () => void;
  back: () => void;
  isCollective: boolean;
}

export default function G2Step4Reflection({ data, update, next, back, isCollective }: Props) {
  const [strong, setStrong] = useState<string[]>(data.strongPoints ?? []);
  const [dev, setDev] = useState(data.developmentPoint ?? '');

  function toggleStrong(id: string) {
    setStrong(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 2 ? [...prev, id] : prev
    );
  }

  function handleNext() {
    update({ strongPoints: strong, developmentPoint: dev });
    next();
  }

  const canProceed = strong.length > 0 && (isCollective || dev.length > 0);

  if (isCollective) {
    return (
      <div className="animate-fade-in">
        <div className="mb-6">
          <div className="tag-badge bg-scania-orange/20 text-scania-orange border border-scania-orange/30 mb-4">
            Passo 4 de 7
          </div>
          <h2 className="section-title mb-3">Reflexão do grupo</h2>
          <p className="text-white/60 font-scania leading-relaxed">
            Com base nos cenários, o grupo identifica: em quais valores o personagem demonstrou mais força?
          </p>
        </div>

        <p className="text-white/60 font-scania text-sm mb-3">Selecione até 2 pontos fortes:</p>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {VALUES.map(v => (
            <button
              key={v.id}
              onClick={() => toggleStrong(v.id)}
              className={`p-3 rounded-xl border-2 text-left transition-all
                ${strong.includes(v.id)
                  ? 'border-scania-orange bg-scania-orange/20 text-white'
                  : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white'
                }`}
            >
              <span className="text-xl mb-1 block">{v.emoji}</span>
              <span className="font-scania text-xs leading-tight">{v.label}</span>
            </button>
          ))}
        </div>

        <div className="card-glass rounded-xl p-4 border border-scania-yellow/20 mb-6">
          <p className="text-scania-yellow font-bold font-scania text-sm mb-1">⭐ Lembrete para a liderança</p>
          <p className="text-white/70 font-scania text-sm">Reforce como cada colaborador pode usar a escala ao fazer sua própria autoavaliação. Nota 3 = Colaborador nota 10.</p>
        </div>

        <div className="flex gap-3">
          <button onClick={back} className="btn-ghost border border-white/20"><ChevronLeft size={18} /> Voltar</button>
          <button onClick={handleNext} disabled={strong.length === 0} className="btn-primary flex-1">
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
          Passo 4 de 7
        </div>
        <h2 className="section-title mb-3">Minha reflexão</h2>
        <p className="text-white/60 font-scania leading-relaxed">
          Suas respostas são individuais e não serão compartilhadas sem sua decisão. Reflita com honestidade.
        </p>
      </div>

      <p className="text-white font-bold font-scania mb-3">Quais são meus pontos fortes? <span className="text-white/40 font-normal">(máx. 2)</span></p>
      <div className="grid grid-cols-2 gap-2 mb-6">
        {VALUES.map(v => (
          <button
            key={v.id}
            onClick={() => toggleStrong(v.id)}
            className={`p-3 rounded-xl border-2 text-left transition-all
              ${strong.includes(v.id)
                ? 'border-scania-yellow bg-scania-yellow/15 text-white'
                : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white'
              }`}
          >
            <span className="text-xl mb-1 block">{v.emoji}</span>
            <span className="font-scania text-xs leading-tight">{v.label}</span>
          </button>
        ))}
      </div>

      <div className="mb-6">
        <p className="text-white font-bold font-scania mb-2">Qual comportamento quero desenvolver?</p>
        <div className="grid grid-cols-1 gap-2">
          {VALUES.map(v => (
            <button
              key={v.id}
              onClick={() => setDev(v.label)}
              className={`p-3 rounded-lg border text-left text-sm font-scania transition-all flex items-center gap-2
                ${dev === v.label
                  ? 'border-scania-orange bg-scania-orange/15 text-white'
                  : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white'
                }`}
            >
              <span>{v.emoji}</span> {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={back} className="btn-ghost border border-white/20"><ChevronLeft size={18} /> Voltar</button>
        <button onClick={handleNext} disabled={!canProceed} className="btn-primary flex-1">
          Registrar evidências <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
