import { ChevronRight } from 'lucide-react';
import type { Game1State } from '../Game1';

const OBJECTIVES_INDIVIDUAL = [
  { id: 'nova-atividade',    label: 'Aprender nova atividade ou processo', emoji: '🔧' },
  { id: 'comunicacao',       label: 'Melhorar a comunicação',              emoji: '💬' },
  { id: 'resolucao',         label: 'Resolver problemas com mais autonomia', emoji: '⚙️' },
  { id: 'trabalho-equipe',   label: 'Fortalecer o trabalho em equipe',     emoji: '🤝' },
  { id: 'visao-carreira',    label: 'Ampliar a visão de carreira',         emoji: '🎯' },
  { id: 'conhecimento-tecnico', label: 'Aprofundar conhecimento técnico',  emoji: '📐' },
  { id: 'lideranca',         label: 'Desenvolver liderança',               emoji: '⭐' },
  { id: 'outro',             label: 'Outro objetivo',                      emoji: '✏️' },
];

const OBJECTIVES_COLLECTIVE = [
  { id: 'nova-atividade',    label: 'Carlos quer aprender uma nova atividade na linha', emoji: '🔧' },
  { id: 'comunicacao',       label: 'Ana precisa melhorar a comunicação com o time',   emoji: '💬' },
  { id: 'resolucao',         label: 'Pedro quer resolver problemas com mais autonomia', emoji: '⚙️' },
  { id: 'trabalho-equipe',   label: 'Maria quer fortalecer o trabalho em equipe',       emoji: '🤝' },
  { id: 'visao-carreira',    label: 'João quer ampliar sua visão de carreira',          emoji: '🎯' },
  { id: 'conhecimento-tecnico', label: 'Laura quer aprofundar seu conhecimento técnico', emoji: '📐' },
];

interface Props {
  data: Partial<Game1State>;
  update: (d: Partial<Game1State>) => void;
  next: () => void;
  isCollective: boolean;
}

export default function Step1Objective({ data, update, next, isCollective }: Props) {
  const options = isCollective ? OBJECTIVES_COLLECTIVE : OBJECTIVES_INDIVIDUAL;

  function select(id: string) {
    const label = options.find(o => o.id === id)?.label ?? id;
    update({ objective: id, objectiveStatement: label });
    next();
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-yellow/20 text-scania-yellow border border-scania-yellow/30 mb-4">
          Passo 1 de 8
        </div>
        <h2 className="section-title mb-3">
          {isCollective ? 'Qual é o objetivo do personagem?' : 'O que você quer aprender ou melhorar?'}
        </h2>
        <p className="text-white/60 font-scania leading-relaxed">
          {isCollective
            ? 'O grupo escolhe o objetivo de desenvolvimento do personagem fictício.'
            : 'Todo caminhão começa com um projeto. Seu desenvolvimento também começa com uma escolha.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map(opt => (
          <button
            key={opt.id}
            onClick={() => select(opt.id)}
            className={`
              group p-4 rounded-xl border-2 text-left transition-all duration-200
              hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-scania-yellow/50
              ${data.objective === opt.id
                ? 'border-scania-yellow bg-scania-yellow/15 text-white'
                : 'border-white/10 bg-white/5 text-white/80 hover:border-scania-yellow/50 hover:bg-scania-yellow/10 hover:text-white'
              }
            `}
          >
            <span className="text-2xl mb-2 block">{opt.emoji}</span>
            <span className="font-scania text-sm leading-snug">{opt.label}</span>
            <ChevronRight size={16} className="mt-2 opacity-40 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      {isCollective && (
        <p className="mt-4 text-white/40 text-xs font-scania text-center">
          O grupo vota na opção mais representativa para o personagem.
        </p>
      )}
    </div>
  );
}
