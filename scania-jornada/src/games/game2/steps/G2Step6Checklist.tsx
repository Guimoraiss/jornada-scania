import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckSquare, Square } from 'lucide-react';

const CHECKLIST_INDIVIDUAL = [
  'Refleti sobre minha atuação com base em exemplos reais.',
  'Identifiquei comportamentos que demonstro de forma consistente.',
  'Reconheci onde tenho oportunidade de evoluir.',
  'Preparei pelo menos um exemplo concreto para registrar no MySuccess.',
  'Tenho alguma dúvida ou pedido de apoio para a conversa com a liderança.',
];

const CHECKLIST_COLLECTIVE = [
  'O grupo compreendeu a escala de 1 a 5 e o significado da nota 3.',
  'Os cenários ajudaram a visualizar os valores na prática.',
  'A diferença entre os comportamentos de cada nota ficou clara.',
  'Cada participante sabe como acessar a autoavaliação no MySuccess.',
];

interface Props {
  next: () => void;
  back: () => void;
  isCollective: boolean;
}

export default function G2Step6Checklist({ next, back, isCollective }: Props) {
  const items = isCollective ? CHECKLIST_COLLECTIVE : CHECKLIST_INDIVIDUAL;
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  function toggle(i: number) {
    setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  }

  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-orange/20 text-scania-orange border border-scania-orange/30 mb-4">
          Passo 6 de 7
        </div>
        <h2 className="section-title mb-3">Antes da conversa com a liderança</h2>
        <p className="text-white/60 font-scania leading-relaxed">
          {isCollective
            ? 'Verifique com o grupo se os objetivos de aprendizagem foram atingidos.'
            : 'Revise seus exemplos e prepare dúvidas ou pedidos de apoio.'}
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className={`w-full p-4 rounded-xl border-2 text-left flex items-start gap-3 transition-all
              ${checked[i]
                ? 'border-green-500/50 bg-green-500/10 text-white'
                : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30'
              }`}
          >
            {checked[i]
              ? <CheckSquare size={20} className="text-green-400 shrink-0 mt-0.5" />
              : <Square size={20} className="text-white/30 shrink-0 mt-0.5" />
            }
            <span className="font-scania text-sm leading-relaxed">{item}</span>
          </button>
        ))}
      </div>

      {checkedCount > 0 && (
        <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-3 mb-5 text-center">
          <p className="text-green-400 font-bold font-scania text-sm">
            {checkedCount} de {items.length} itens marcados
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={back} className="btn-ghost border border-white/20"><ChevronLeft size={18} /> Voltar</button>
        <button onClick={next} className="btn-primary flex-1">
          Concluir reflexão <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
