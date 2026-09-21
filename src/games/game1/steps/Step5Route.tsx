import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Game1State } from '../Game1';

interface RouteOption { id: string; label: string; }

const ACTIONS_BY_OBJECTIVE: Record<string, {
  a70: RouteOption[];
  a20: RouteOption[];
  a10: RouteOption[];
}> = {
  'nova-atividade': {
    a70: [
      { id: '70a', label: 'Realizar a atividade com acompanhamento e assumir gradualmente mais autonomia.' },
      { id: '70b', label: 'Executar o padrão do posto repetindo até dominar o processo.' },
      { id: '70c', label: 'Participar de job rotation para aprender na prática.' },
    ],
    a20: [
      { id: '20a', label: 'Trocar com pessoa experiente e pedir feedback à liderança.' },
      { id: '20b', label: 'Observar colega referência durante a execução da atividade.' },
      { id: '20c', label: 'Pedir orientação ao instrutor ou à liderança imediata.' },
    ],
    a10: [
      { id: '10a', label: 'Consultar padrão, guia, curso ou conteúdo técnico disponível.' },
      { id: '10b', label: 'Acessar trilha no LMS Scania relacionada ao processo.' },
      { id: '10c', label: 'Ler manual ou procedimento operacional da atividade.' },
    ],
  },
  'comunicacao': {
    a70: [
      { id: '70a', label: 'Conduzir um alinhamento curto ou apresentar uma atualização ao time.' },
      { id: '70b', label: 'Liderar o relato do turno ou a parada de linha.' },
      { id: '70c', label: 'Apresentar resultado ou proposta em reunião.' },
    ],
    a20: [
      { id: '20a', label: 'Pedir feedback sobre clareza e escuta após conversas importantes.' },
      { id: '20b', label: 'Contar com apoio de colega para praticar a comunicação.' },
      { id: '20c', label: 'Conversar com liderança sobre pontos de melhoria.' },
    ],
    a10: [
      { id: '10a', label: 'Fazer treinamento ou ler conteúdo sobre comunicação assertiva.' },
      { id: '10b', label: 'Assistir vídeo ou trilha sobre comunicação corporativa no LMS.' },
      { id: '10c', label: 'Ler material sobre feedback e comunicação não-violenta.' },
    ],
  },
  default: {
    a70: [
      { id: '70a', label: 'Participar da análise de uma situação real e propor uma ação de melhoria.' },
      { id: '70b', label: 'Realizar atividade prática com autonomia crescente.' },
      { id: '70c', label: 'Executar projeto ou iniciativa no dia a dia que amplie o repertório.' },
    ],
    a20: [
      { id: '20a', label: 'Observar colega experiente e pedir feedback sobre a atuação.' },
      { id: '20b', label: 'Contar com mentoria ou 1:1 com a liderança.' },
      { id: '20c', label: 'Realizar troca de boas práticas com o time.' },
    ],
    a10: [
      { id: '10a', label: 'Estudar método, ferramenta ou conteúdo formal relacionado ao objetivo.' },
      { id: '10b', label: 'Acessar trilha no LMS Scania ou Universidade Scania.' },
      { id: '10c', label: 'Ler material técnico, procedimento ou guia corporativo.' },
    ],
  },
};

interface Props {
  data: Partial<Game1State>;
  update: (d: Partial<Game1State>) => void;
  next: () => void;
  back: () => void;
  isCollective: boolean;
}

export default function Step5Route({ data, update, next, back, isCollective }: Props) {
  const objectiveKey = data.objective ?? 'default';
  const options = ACTIONS_BY_OBJECTIVE[objectiveKey] ?? ACTIONS_BY_OBJECTIVE['default'];

  const [sel70, setSel70] = useState(data.action70 ?? '');
  const [sel20, setSel20] = useState(data.action20 ?? '');
  const [sel10, setSel10] = useState(data.action10 ?? '');

  const allSelected = sel70 && sel20 && sel10;

  function handleNext() {
    update({ action70: sel70, action20: sel20, action10: sel10 });
    next();
  }

  const groups = [
    { pct: '70%', key: '70', label: 'Ação na prática', color: 'scania-yellow', opts: options.a70, val: sel70, set: setSel70 },
    { pct: '20%', key: '20', label: 'Ação com pessoas', color: 'scania-orange', opts: options.a20, val: sel20, set: setSel20 },
    { pct: '10%', key: '10', label: 'Ação formal', color: 'scania-blue-light', opts: options.a10, val: sel10, set: setSel10 },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-yellow/20 text-scania-yellow border border-scania-yellow/30 mb-4">
          Passo 5 de 8
        </div>
        <h2 className="section-title mb-3">Monte sua rota de desenvolvimento</h2>
        <p className="text-white/60 font-scania leading-relaxed">
          {isCollective
            ? 'O grupo escolhe as ações mais adequadas para cada dimensão do PDI do personagem.'
            : 'Escolha uma ação para cada dimensão do seu PDI. Combine prática, pessoas e conteúdo.'}
        </p>
      </div>

      {/* Objective reminder */}
      {data.objectiveStatement && (
        <div className="card-glass border-scania-yellow/20 border rounded-xl p-4 mb-5">
          <p className="text-white/40 text-xs font-scania mb-1">Seu objetivo</p>
          <p className="text-white font-scania text-sm leading-relaxed">{data.objectiveStatement}</p>
        </div>
      )}

      <div className="space-y-5 mb-6">
        {groups.map(g => (
          <div key={g.key} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className={`tag-badge bg-${g.color}/20 text-${g.color} border border-${g.color}/30`}>
                {g.pct}
              </span>
              <span className="text-white/60 font-scania text-sm">{g.label}</span>
            </div>
            <div className="space-y-2">
              {g.opts.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => g.set(opt.label)}
                  className={`w-full p-3 rounded-lg border text-left text-sm font-scania transition-all
                    ${g.val === opt.label
                      ? `border-${g.color} bg-${g.color}/15 text-white`
                      : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white'
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={back} className="btn-ghost border border-white/20">
          <ChevronLeft size={18} /> Voltar
        </button>
        <button onClick={handleNext} disabled={!allSelected} className="btn-primary flex-1">
          Definir apoio <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
