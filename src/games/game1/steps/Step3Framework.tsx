import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Props {
  next: () => void;
  back: () => void;
}

const pillars = [
  {
    pct: '70%',
    title: 'Aprender fazendo',
    subtitle: 'Experiência',
    color: 'bg-scania-yellow',
    textColor: 'text-scania-yellow',
    borderColor: 'border-scania-yellow',
    bgColor: 'bg-scania-yellow/10',
    description: 'A maior parte do aprendizado acontece na prática — em atividades reais, desafios do dia a dia e situações que exigem ação.',
    examples: ['Praticar nova atividade na linha', 'Conduzir um alinhamento', 'Participar de análise de problema', 'Assumir gradualmente mais autonomia'],
  },
  {
    pct: '20%',
    title: 'Aprender com pessoas',
    subtitle: 'Exposição',
    color: 'bg-scania-orange',
    textColor: 'text-scania-orange',
    borderColor: 'border-scania-orange',
    bgColor: 'bg-scania-orange/10',
    description: 'Aprendemos muito observando e conversando com colegas experientes, pedindo feedback e trocando perspectivas.',
    examples: ['Pedir feedback à liderança', 'Observar colega experiente', 'Participar de mentoria', 'Trocar boas práticas com o time'],
  },
  {
    pct: '10%',
    title: 'Aprender com conteúdos',
    subtitle: 'Educação formal',
    color: 'bg-scania-blue-light',
    textColor: 'text-scania-blue-light',
    borderColor: 'border-scania-blue-light',
    bgColor: 'bg-scania-blue-light/10',
    description: 'Cursos, treinamentos, vídeos e leituras complementam a aprendizagem com base estruturada e referências formais.',
    examples: ['Curso no LMS Scania', 'Treinamento técnico', 'Leitura de manual ou procedimento', 'Trilha na Universidade Scania'],
  },
];

export default function Step3Framework({ next, back }: Props) {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-yellow/20 text-scania-yellow border border-scania-yellow/30 mb-4">
          Passo 3 de 8
        </div>
        <h2 className="section-title mb-3">A metodologia 70/20/10</h2>
        <p className="text-white/60 font-scania leading-relaxed">
          Um PDI consistente combina prática, aprendizagem com pessoas e conteúdos formais. Os percentuais são referência — não obrigação matemática.
        </p>
      </div>

      {/* Visual bar */}
      <div className="flex rounded-xl overflow-hidden mb-6 h-4 shadow-lg">
        <div className="bg-scania-yellow" style={{ width: '70%' }} />
        <div className="bg-scania-orange" style={{ width: '20%' }} />
        <div className="bg-scania-blue-light" style={{ width: '10%' }} />
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        {pillars.map(p => (
          <div key={p.pct} className={`rounded-xl border ${p.borderColor}/30 ${p.bgColor} p-4`}>
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl ${p.color} bg-opacity-20 flex items-center justify-center shrink-0 border ${p.borderColor}/50`}>
                <span className={`font-scania-headline font-bold text-xl ${p.textColor}`}>{p.pct}</span>
              </div>
              <div className="min-w-0">
                <p className={`font-bold font-scania text-base ${p.textColor} mb-0.5`}>{p.title}</p>
                <p className="text-white/40 font-scania text-xs mb-2">{p.subtitle}</p>
                <p className="text-white/70 font-scania text-sm leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.examples.map(ex => (
                    <span key={ex} className={`text-xs px-2 py-1 rounded-full border ${p.borderColor}/20 text-white/50 font-scania`}>
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={back} className="btn-ghost border border-white/20">
          <ChevronLeft size={18} /> Voltar
        </button>
        <button onClick={next} className="btn-primary flex-1">
          Entendido! Vamos ao desafio <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
