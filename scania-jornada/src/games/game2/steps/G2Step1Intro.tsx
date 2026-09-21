import { ChevronRight } from 'lucide-react';

const SCALE = [
  { note: 1, label: 'O comportamento esperado não é demonstrado.',                    msg: 'Reconhecer o impacto e buscar orientação.',       color: 'border-red-500/40 bg-red-500/10 text-red-400' },
  { note: 2, label: 'O comportamento é demonstrado parcialmente ou de forma inconsistente.', msg: 'Há avanço, mas é necessário desenvolver consistência.', color: 'border-orange-500/40 bg-orange-500/10 text-orange-400' },
  { note: 3, label: 'Atende plenamente ao comportamento esperado, de forma consistente.',    msg: 'Colaborador nota 10: faz tudo o que é esperado.',  color: 'border-scania-yellow/40 bg-scania-yellow/10 text-scania-yellow', highlight: true },
  { note: 4, label: 'Supera o esperado com iniciativa, prevenção ou contribuição adicional.',msg: 'Vai além do esperado em situações relevantes.',   color: 'border-green-400/40 bg-green-400/10 text-green-400' },
  { note: 5, label: 'Excede o esperado com impacto relevante, sustentável e compartilhado.',msg: 'Torna-se referência e amplia o resultado para outras pessoas.', color: 'border-blue-400/40 bg-blue-400/10 text-blue-400' },
];

interface Props { next: () => void; }

export default function G2Step1Intro({ next }: Props) {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-orange/20 text-scania-orange border border-scania-orange/30 mb-4">
          Passo 1 de 7
        </div>
        <h2 className="section-title mb-3">Autoavaliação: Scania Way em Ação</h2>
      </div>

      {/* Key message */}
      <div className="rounded-2xl border border-scania-orange/30 bg-scania-orange/10 p-5 mb-6">
        <p className="text-white font-scania leading-relaxed">
          Autoavaliação não é escolher a maior nota. É refletir sobre como você atua, reconhecer seus pontos fortes e identificar onde pode evoluir — usando situações reais do dia a dia.
        </p>
      </div>

      {/* Scale preview */}
      <p className="text-white/60 font-scania text-sm font-bold uppercase tracking-wider mb-3">Escala de comportamento</p>
      <div className="space-y-2 mb-6">
        {SCALE.map(s => (
          <div key={s.note} className={`rounded-xl border p-3 flex items-start gap-3 ${s.color} ${s.highlight ? 'ring-1 ring-scania-yellow/50' : ''}`}>
            <span className="font-scania-headline font-bold text-xl shrink-0 w-7 text-center">{s.note}</span>
            <div>
              <p className="font-scania text-sm font-bold mb-0.5">{s.label}</p>
              <p className="font-scania text-xs opacity-80">{s.msg}</p>
            </div>
            {s.highlight && (
              <span className="ml-auto shrink-0 tag-badge bg-scania-yellow text-scania-blue text-xs">
                Nota 10 ✓
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-scania-yellow/30 bg-scania-yellow/10 p-4 mb-6">
        <p className="text-scania-yellow font-bold font-scania text-sm mb-1">⭐ Nota 3 = Colaborador nota 10</p>
        <p className="text-white/70 font-scania text-sm">Demonstrar de forma consistente tudo o que é esperado para sua atuação já representa excelência. Não é uma nota mediana.</p>
      </div>

      <button onClick={next} className="btn-primary w-full">
        Entendido, vamos começar <ChevronRight size={18} />
      </button>
    </div>
  );
}
