import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, XCircle } from 'lucide-react';

interface ChallengeItem {
  id: string;
  label: string;
  correct: '70' | '20' | '10';
  feedback: string;
}

const CHALLENGES: ChallengeItem[] = [
  {
    id: 'a',
    label: 'Praticar uma nova atividade acompanhando o padrão do posto ou do processo.',
    correct: '70',
    feedback: 'Aprendizagem na prática, em uma situação real de trabalho.',
  },
  {
    id: 'b',
    label: 'Pedir feedback após executar uma atividade ou apresentar uma entrega.',
    correct: '20',
    feedback: 'Aprendizagem com outras pessoas, por meio de troca direta.',
  },
  {
    id: 'c',
    label: 'Participar de treinamento, curso, leitura ou conteúdo estruturado.',
    correct: '10',
    feedback: 'Aprendizagem formal, por meio de conteúdo estruturado.',
  },
];

type Answer = '70' | '20' | '10' | null;

interface Props {
  next: () => void;
  back: () => void;
  isCollective: boolean;
}

export default function Step4Challenge({ next, back, isCollective }: Props) {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [checked, setChecked] = useState(false);

  const allAnswered = CHALLENGES.every(c => answers[c.id] != null);
  const correctCount = checked ? CHALLENGES.filter(c => answers[c.id] === c.correct).length : 0;
  const allCorrect = correctCount === CHALLENGES.length;

  function selectAnswer(challengeId: string, value: Answer) {
    if (checked) return;
    setAnswers(prev => ({ ...prev, [challengeId]: value }));
  }

  function check() {
    setChecked(true);
  }

  const btnColors: Record<string, string> = {
    '70': 'bg-scania-yellow/20 border-scania-yellow/50 text-scania-yellow hover:bg-scania-yellow/30',
    '20': 'bg-scania-orange/20 border-scania-orange/50 text-scania-orange hover:bg-scania-orange/30',
    '10': 'bg-scania-blue-light/20 border-scania-blue-light/50 text-scania-blue-light hover:bg-scania-blue-light/30',
  };

  const selectedColor: Record<string, string> = {
    '70': 'bg-scania-yellow border-scania-yellow text-scania-blue',
    '20': 'bg-scania-orange border-scania-orange text-white',
    '10': 'bg-scania-blue-light border-scania-blue-light text-white',
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-yellow/20 text-scania-yellow border border-scania-yellow/30 mb-4">
          Passo 4 de 8 · Desafio rápido
        </div>
        <h2 className="section-title mb-3">Classifique as ações</h2>
        <p className="text-white/60 font-scania leading-relaxed">
          {isCollective
            ? 'O grupo decide: cada situação abaixo é 70%, 20% ou 10%?'
            : 'Cada situação abaixo é 70%, 20% ou 10%? Escolha a categoria correta.'}
        </p>
      </div>

      {/* Legend */}
      <div className="flex gap-2 flex-wrap mb-5">
        {(['70', '20', '10'] as const).map(v => (
          <span key={v} className={`tag-badge border ${btnColors[v]}`}>
            {v}%
            {v === '70' ? ' · Prática' : v === '20' ? ' · Pessoas' : ' · Formal'}
          </span>
        ))}
      </div>

      {/* Challenges */}
      <div className="space-y-5 mb-6">
        {CHALLENGES.map((ch, idx) => {
          const ans = answers[ch.id];
          const isCorrect = checked && ans === ch.correct;
          const isWrong = checked && ans !== ch.correct;

          return (
            <div
              key={ch.id}
              className={`rounded-xl border p-4 transition-all ${
                isCorrect ? 'border-green-500/50 bg-green-500/10' :
                isWrong   ? 'border-red-500/50 bg-red-500/10' :
                'border-white/10 bg-white/5'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="w-6 h-6 rounded-full bg-white/10 text-white/50 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-white font-scania text-sm leading-relaxed">{ch.label}</p>
                {checked && (
                  isCorrect
                    ? <CheckCircle size={18} className="text-green-400 shrink-0" />
                    : <XCircle size={18} className="text-red-400 shrink-0" />
                )}
              </div>

              {/* Answer buttons */}
              <div className="flex gap-2 ml-9">
                {(['70', '20', '10'] as const).map(v => (
                  <button
                    key={v}
                    onClick={() => selectAnswer(ch.id, v)}
                    disabled={checked}
                    className={`px-4 py-2 rounded-lg border font-bold font-scania text-sm transition-all
                      ${ans === v ? selectedColor[v] : `${btnColors[v]} opacity-70`}
                      disabled:cursor-default`}
                  >
                    {v}%
                  </button>
                ))}
              </div>

              {/* Feedback */}
              {checked && (
                <div className={`mt-3 ml-9 p-3 rounded-lg text-xs font-scania ${isCorrect ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'}`}>
                  {isWrong && <p className="font-bold mb-1">A resposta correta é {ch.correct}%.</p>}
                  <p>{ch.feedback}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Score */}
      {checked && (
        <div className={`rounded-xl p-4 mb-5 text-center border ${allCorrect ? 'border-green-500/30 bg-green-500/10' : 'border-scania-yellow/30 bg-scania-yellow/10'}`}>
          <p className="font-scania-headline font-bold text-xl text-white mb-1">
            {correctCount} de {CHALLENGES.length} corretas
          </p>
          <p className="text-white/60 font-scania text-sm">
            {allCorrect
              ? '🎉 Perfeito! Você entende bem a metodologia 70/20/10.'
              : 'Continue para aplicar essa lógica no seu PDI.'}
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={back} className="btn-ghost border border-white/20">
          <ChevronLeft size={18} /> Voltar
        </button>
        {!checked ? (
          <button
            onClick={check}
            disabled={!allAnswered}
            className="btn-primary flex-1"
          >
            Verificar respostas
          </button>
        ) : (
          <button onClick={next} className="btn-primary flex-1">
            Montar minha rota <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
