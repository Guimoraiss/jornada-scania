import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Game2State } from '../Game2';

interface Scenario {
  id: string;
  value: string;
  situation: string;
  question: string;
  options: { note: number; behavior: string }[];
  feedback: string;
  bestNote: number;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'cliente',
    value: 'Cliente em Primeiro Lugar',
    situation: 'Durante a operação, é identificado um desvio que pode impactar a próxima linha ou etapa do processo.',
    question: 'O que você faz ao identificar o desvio?',
    bestNote: 3,
    options: [
      { note: 1, behavior: 'Percebe o desvio, mas deixa a entrega seguir sem informar.' },
      { note: 2, behavior: 'Identifica o desvio, mas demora para agir ou precisa ser lembrado.' },
      { note: 3, behavior: 'Segue o processo, contém o impacto quando aplicável e comunica a liderança ou a área responsável.' },
      { note: 4, behavior: 'Além de agir corretamente, contribui para entender a causa e prevenir nova ocorrência.' },
      { note: 5, behavior: 'Contribui para eliminar recorrências e compartilha uma solução de referência para outras etapas.' },
    ],
    feedback: 'Cliente em Primeiro Lugar inclui quem recebe o resultado do nosso trabalho. Na produção, o cliente pode ser a próxima linha, o próximo turno, outra área ou o cliente final.',
  },
  {
    id: 'desperdicio',
    value: 'Eliminação de Desperdícios',
    situation: 'Você percebe uma perda de material, tempo ou recurso que poderia ser evitada na sua área de trabalho.',
    question: 'Como você reage a uma perda evitável?',
    bestNote: 3,
    options: [
      { note: 1, behavior: 'Não comenta — acredita que não é sua responsabilidade resolver.' },
      { note: 2, behavior: 'Menciona para o colega, mas não chega à liderança nem propõe melhoria.' },
      { note: 3, behavior: 'Usa recursos com consciência e comunica a ocorrência, seguindo o processo.' },
      { note: 4, behavior: 'Propõe uma ação de melhoria sem comprometer qualidade ou segurança.' },
      { note: 5, behavior: 'Lidera a implementação de uma melhoria que reduz o desperdício de forma sustentável.' },
    ],
    feedback: 'Eliminar desperdícios é responsabilidade de todos. Cada recurso economizado fortalece a competitividade da Scania e do time.',
  },
  {
    id: 'espirrito',
    value: 'Espírito de Equipe',
    situation: 'Um colega do próximo turno chega e precisa de informações essenciais para continuar o processo sem interrupção.',
    question: 'Como você contribui?',
    bestNote: 3,
    options: [
      { note: 1, behavior: 'Não realiza a passagem de informações — acredita que o colega deve se virar.' },
      { note: 2, behavior: 'Passa algumas informações, mas de forma incompleta ou apressada.' },
      { note: 3, behavior: 'Compartilha informações relevantes, apoia e coopera de forma respeitosa.' },
      { note: 4, behavior: 'Vai além do básico e prepara o colega para possíveis situações não previstas.' },
      { note: 5, behavior: 'Cria um padrão ou prática de passagem de turno que beneficia toda a equipe.' },
    ],
    feedback: 'Espírito de equipe se constrói em cada troca, cada passagem de turno, cada momento em que você escolhe colaborar em vez de apenas cumprir o mínimo.',
  },
  {
    id: 'she',
    value: 'Saúde, Segurança e Meio Ambiente',
    situation: 'Você identifica uma condição de risco à saúde, segurança ou meio ambiente na sua área de trabalho.',
    question: 'O que você faz diante dessa condição?',
    bestNote: 3,
    options: [
      { note: 1, behavior: 'Ignora a situação — acredita que não é grave o suficiente para reportar.' },
      { note: 2, behavior: 'Percebe, mas adia a comunicação ou espera alguém agir primeiro.' },
      { note: 3, behavior: 'Segue os procedimentos, comunica e contribui com prevenção ou correção.' },
      { note: 4, behavior: 'Age imediatamente e aciona os responsáveis para garantir a correção.' },
      { note: 5, behavior: 'Além de corrigir, identifica a causa raiz e compartilha uma prática preventiva com o time.' },
    ],
    feedback: 'SHE é inegociável. Reportar riscos protege você, seus colegas e o ambiente. Toda atitude de prevenção fortalece a cultura de segurança da Scania.',
  },
];

interface Props {
  data: Partial<Game2State>;
  update: (d: Partial<Game2State>) => void;
  next: () => void;
  back: () => void;
  isCollective: boolean;
}

export default function G2Step3Scenarios({ data, update, next, back, isCollective }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>(data.scenarioAnswers ?? {});
  const [showFeedback, setShowFeedback] = useState(false);

  const scenario = SCENARIOS[currentIdx];
  const selectedNote = answers[scenario.id];
  const isLast = currentIdx === SCENARIOS.length - 1;
  const allAnswered = SCENARIOS.every(s => answers[s.id] != null);

  function selectNote(note: number) {
    if (showFeedback) return;
    setAnswers(prev => ({ ...prev, [scenario.id]: note }));
  }

  function checkAnswer() {
    setShowFeedback(true);
  }

  function advance() {
    setShowFeedback(false);
    if (!isLast) setCurrentIdx(i => i + 1);
    else {
      update({ scenarioAnswers: answers });
      next();
    }
  }

  const noteColors: Record<number, string> = {
    1: 'border-red-500 bg-red-500/20 text-red-300',
    2: 'border-orange-500 bg-orange-500/20 text-orange-300',
    3: 'border-scania-yellow bg-scania-yellow/20 text-scania-yellow',
    4: 'border-green-400 bg-green-400/20 text-green-300',
    5: 'border-blue-400 bg-blue-400/20 text-blue-300',
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-4">
        <div className="tag-badge bg-scania-orange/20 text-scania-orange border border-scania-orange/30 mb-4">
          Passo 3 de 7 · Cenário {currentIdx + 1} de {SCENARIOS.length}
        </div>
        <h2 className="section-title mb-1">Cenários do dia a dia</h2>
        <p className="text-white/60 font-scania text-sm">
          {isCollective ? 'O grupo vota na nota do personagem fictício.' : 'Escolha a atitude mais alinhada ao Scania Way.'}
        </p>
      </div>

      {/* Scenario nav dots */}
      <div className="flex gap-2 mb-5">
        {SCENARIOS.map((s, i) => (
          <div key={s.id} className={`flex-1 h-1 rounded-full transition-all ${
            i < currentIdx ? 'bg-scania-orange' : i === currentIdx ? 'bg-scania-orange' : 'bg-white/10'
          }`} />
        ))}
      </div>

      {/* Value badge */}
      <div className="tag-badge bg-scania-orange/20 text-scania-orange border border-scania-orange/30 mb-4">
        ⭐ {scenario.value}
      </div>

      {/* Situation */}
      <div className="card-glass rounded-xl p-4 mb-4 border border-white/10">
        <p className="text-white/40 text-xs font-scania font-bold uppercase tracking-wider mb-2">Situação</p>
        <p className="text-white font-scania text-sm leading-relaxed">{scenario.situation}</p>
        <p className="text-white/80 font-bold font-scania text-sm mt-3">{scenario.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-2 mb-5">
        {scenario.options.map(opt => (
          <button
            key={opt.note}
            onClick={() => selectNote(opt.note)}
            disabled={showFeedback}
            className={`w-full p-3 rounded-xl border-2 text-left transition-all duration-200 flex items-start gap-3
              ${selectedNote === opt.note
                ? noteColors[opt.note]
                : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white'
              }
              disabled:cursor-default`}
          >
            <span className={`w-7 h-7 rounded-full border-2 shrink-0 flex items-center justify-center font-bold text-sm ${
              selectedNote === opt.note ? 'border-current bg-current/20' : 'border-white/20'
            }`}>
              {opt.note}
            </span>
            <span className="font-scania text-sm leading-snug">{opt.behavior}</span>
          </button>
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className="rounded-xl border border-scania-orange/30 bg-scania-orange/10 p-4 mb-5 animate-fade-in">
          <p className="text-scania-orange font-bold font-scania text-sm mb-2">
            💡 Você escolheu nota {selectedNote}.
            {selectedNote === 3 ? ' Colaborador nota 10!' : selectedNote < 3 ? ' Há oportunidade de evolução.' : ' Vai além do esperado!'}
          </p>
          <p className="text-white/70 font-scania text-sm leading-relaxed">{scenario.feedback}</p>
        </div>
      )}

      <div className="flex gap-3">
        {currentIdx === 0 ? (
          <button onClick={back} className="btn-ghost border border-white/20">
            <ChevronLeft size={18} /> Voltar
          </button>
        ) : (
          <button onClick={() => { setShowFeedback(false); setCurrentIdx(i => i - 1); }} className="btn-ghost border border-white/20">
            <ChevronLeft size={18} /> Anterior
          </button>
        )}

        {!showFeedback ? (
          <button onClick={checkAnswer} disabled={selectedNote == null} className="btn-primary flex-1">
            Ver feedback
          </button>
        ) : (
          <button onClick={advance} className="btn-primary flex-1">
            {isLast ? 'Minha reflexão' : 'Próximo cenário'} <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
