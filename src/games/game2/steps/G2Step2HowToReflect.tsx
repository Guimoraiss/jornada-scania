import { ChevronRight, ChevronLeft } from 'lucide-react';

const TIPS = [
  { icon: '🔄', title: 'Frequência', desc: 'Com que frequência você demonstra esse comportamento? Uma vez ou de forma consistente?' },
  { icon: '📊', title: 'Consistência', desc: 'Você mantém esse comportamento mesmo em situações de pressão ou dificuldade?' },
  { icon: '💥', title: 'Impacto', desc: 'Sua atitude gerou alguma melhoria, economia, segurança ou contribuição para o time?' },
  { icon: '📋', title: 'Exemplos reais', desc: 'Você consegue lembrar de uma situação concreta em que demonstrou esse comportamento?' },
];

interface Props { next: () => void; back: () => void; }

export default function G2Step2HowToReflect({ next, back }: Props) {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-orange/20 text-scania-orange border border-scania-orange/30 mb-4">
          Passo 2 de 7
        </div>
        <h2 className="section-title mb-3">Como refletir bem</h2>
        <p className="text-white/60 font-scania leading-relaxed">
          Use esses quatro critérios ao avaliar cada comportamento. Eles ajudam a ir além da impressão geral.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {TIPS.map(tip => (
          <div key={tip.title} className="card-glass rounded-xl p-4 border border-white/10">
            <span className="text-2xl mb-2 block">{tip.icon}</span>
            <p className="font-bold font-scania text-white mb-1">{tip.title}</p>
            <p className="text-white/60 font-scania text-sm leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>

      {/* Cliente interno reminder */}
      <div className="rounded-xl border border-scania-blue-light/30 bg-scania-blue-light/10 p-4 mb-6">
        <p className="text-scania-blue-light font-bold font-scania text-sm mb-1">💡 Cliente em Primeiro Lugar</p>
        <p className="text-white/70 font-scania text-sm leading-relaxed">
          No contexto do jogo, cliente também pode ser interno. A próxima linha, o próximo turno, outra área ou qualquer pessoa que dependa da sua entrega é seu cliente.
        </p>
      </div>

      <div className="flex gap-3">
        <button onClick={back} className="btn-ghost border border-white/20">
          <ChevronLeft size={18} /> Voltar
        </button>
        <button onClick={next} className="btn-primary flex-1">
          Ver os cenários <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
