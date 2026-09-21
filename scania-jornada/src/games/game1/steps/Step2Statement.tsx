import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Game1State } from '../Game1';

const PARA_OPTIONS: Record<string, string[]> = {
  'nova-atividade':    ['ganhar mais autonomia na função', 'apoiar o time em situações de demanda', 'ampliar minha atuação na linha'],
  'comunicacao':       ['me expressar melhor com o time', 'conduzir alinhamentos com mais clareza', 'dar e receber feedback com mais facilidade'],
  'resolucao':         ['propor soluções sem precisar acionar outras áreas', 'reduzir paradas e retrabalhos', 'contribuir para melhorias no processo'],
  'trabalho-equipe':   ['colaborar melhor em entregas conjuntas', 'apoiar colegas e ser referência de cooperação', 'melhorar o resultado do turno'],
  'visao-carreira':    ['entender onde posso chegar na Scania', 'preparar minha próxima conversa com a liderança', 'ampliar meu repertório e experiências'],
  'conhecimento-tecnico': ['dominar melhor o processo ou equipamento', 'resolver questões técnicas com mais segurança', 'apoiar colegas com mais embasamento'],
  'lideranca':         ['influenciar positivamente o time', 'tomar decisões com mais segurança', 'preparar minha atuação como referência'],
  'outro':             ['alcançar meu objetivo pessoal de desenvolvimento', 'melhorar minha entrega no dia a dia', 'avançar na minha carreira na Scania'],
};

interface Props {
  data: Partial<Game1State>;
  update: (d: Partial<Game1State>) => void;
  next: () => void;
  back: () => void;
  isCollective: boolean;
}

export default function Step2Statement({ data, update, next, back, isCollective }: Props) {
  const [paraChoice, setParaChoice] = useState(data.objectiveStatement?.split(' para ')[1] ?? '');
  const [customPara, setCustomPara] = useState('');

  const objectiveKey = data.objective ?? 'outro';
  const paraOptions = PARA_OPTIONS[objectiveKey] ?? PARA_OPTIONS['outro'];
  const queroLabel = data.objectiveStatement?.split(' para ')[0]?.replace('Quero desenvolver ', '') ?? data.objective ?? '...';

  function handleConfirm() {
    const finalPara = paraChoice === '__custom__' ? customPara : paraChoice;
    if (!finalPara) return;
    update({ objectiveStatement: `Quero desenvolver ${queroLabel} para ${finalPara}.` });
    next();
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <div className="tag-badge bg-scania-yellow/20 text-scania-yellow border border-scania-yellow/30 mb-4">
          Passo 2 de 8
        </div>
        <h2 className="section-title mb-3">Defina seu objetivo com clareza</h2>
        <p className="text-white/60 font-scania leading-relaxed">
          Complete a frase abaixo. Um objetivo claro facilita a conversa com a liderança.
        </p>
      </div>

      {/* Sentence builder */}
      <div className="card-glass rounded-2xl p-5 mb-6 border-scania-yellow/20 border">
        <p className="text-white/40 font-scania text-xs uppercase tracking-wider mb-3">Meu objetivo</p>
        <p className="font-scania-headline font-bold text-lg text-white leading-relaxed">
          Quero desenvolver{' '}
          <span className="text-scania-yellow">{queroLabel}</span>
          {' '}para{' '}
          <span className={paraChoice && paraChoice !== '__custom__' ? 'text-scania-yellow' : 'text-white/30'}>
            {paraChoice === '__custom__' ? (customPara || '___') : (paraChoice || '___')}
          </span>
          .
        </p>
      </div>

      <p className="text-white/60 font-scania text-sm mb-3">
        {isCollective ? 'O grupo escolhe a finalidade:' : 'Para quê você quer desenvolver isso?'}
      </p>

      <div className="grid grid-cols-1 gap-2 mb-4">
        {paraOptions.map(opt => (
          <button
            key={opt}
            onClick={() => { setParaChoice(opt); setCustomPara(''); }}
            className={`p-3 rounded-xl border text-left text-sm font-scania transition-all
              ${paraChoice === opt
                ? 'border-scania-yellow bg-scania-yellow/15 text-white'
                : 'border-white/10 bg-white/5 text-white/70 hover:border-scania-yellow/40 hover:text-white'
              }`}
          >
            {opt}
          </button>
        ))}
        <button
          onClick={() => setParaChoice('__custom__')}
          className={`p-3 rounded-xl border text-left text-sm font-scania transition-all
            ${paraChoice === '__custom__'
              ? 'border-scania-yellow bg-scania-yellow/15 text-white'
              : 'border-white/10 bg-white/5 text-white/50 hover:border-scania-yellow/40 hover:text-white'
            }`}
        >
          ✏️ Escrever minha própria resposta...
        </button>
      </div>

      {paraChoice === '__custom__' && (
        <input
          type="text"
          value={customPara}
          onChange={e => setCustomPara(e.target.value)}
          placeholder="Descreva o motivo em poucas palavras..."
          className="input-field mb-4"
          maxLength={80}
          autoFocus
        />
      )}

      <div className="flex gap-3 mt-6">
        <button onClick={back} className="btn-ghost border border-white/20">
          <ChevronLeft size={18} /> Voltar
        </button>
        <button
          onClick={handleConfirm}
          disabled={!paraChoice || (paraChoice === '__custom__' && !customPara.trim())}
          className="btn-primary flex-1"
        >
          Confirmar objetivo <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
