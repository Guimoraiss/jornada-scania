import { Copy, CheckCircle, ArrowLeft, Map } from 'lucide-react';
import { useState } from 'react';
import type { Game1State } from '../Game1';
import TruckSVG from '../../../components/ui/TruckSVG';

interface Props {
  data: Partial<Game1State>;
  isCollective: boolean;
  finish: () => void;
  back: () => void;
}

export default function Step8Result({ data, isCollective, finish, back }: Props) {
  const [copied, setCopied] = useState(false);

  function buildSummaryText() {
    return [
      `JORNADA DE DESENVOLVIMENTO — Ciclo B`,
      ``,
      `Meu objetivo: ${data.objectiveStatement ?? '-'}`,
      ``,
      `Vou aprender na prática por meio de: ${data.action70 ?? '-'}`,
      `Vou contar com o apoio de: ${data.support ?? '-'}`,
      `Vou complementar meu aprendizado com: ${data.action10 ?? '-'}`,
      data.firstStep ? `Meu primeiro passo será: ${data.firstStep}` : '',
      data.deadline ? `Prazo: ${data.deadline}` : '',
      ``,
      `Próximo passo: registrar no MySuccess e conversar com a liderança.`,
    ].filter(l => l !== undefined).join('\n');
  }

  function copyToClipboard() {
    navigator.clipboard?.writeText(buildSummaryText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  if (isCollective) {
    return (
      <div className="animate-fade-in text-center">
        <div className="flex justify-center mb-6">
          <TruckSVG size={160} animated />
        </div>

        <div className="tag-badge bg-green-500/20 text-green-400 border border-green-500/30 mx-auto mb-5">
          🏁 Jornada Concluída
        </div>

        <h2 className="section-title mb-5 text-center">
          Projeto liberado!
        </h2>

        <div className="card-glass rounded-2xl p-6 border border-scania-yellow/20 mb-6 text-left">
          <div className="text-4xl mb-4 text-center">🚛</div>
          <p className="text-white/80 font-scania text-base leading-relaxed text-center italic">
            "Assim como nossos caminhões são construídos de forma modular, o desenvolvimento também acontece etapa por etapa.
            Agora que definimos uma rota, é hora de transformar aprendizado em prática."
          </p>
        </div>

        <div className="card-glass rounded-xl p-4 mb-6 border border-white/10">
          <p className="text-white/60 font-scania text-sm mb-3 font-bold">Próximos passos para cada participante:</p>
          <div className="space-y-2">
            {[
              'Realizar a autoavaliação no MySuccess',
              'Conversar com a liderança sobre o desenvolvimento',
              'Criar ou atualizar o PDI no sistema',
              'Acompanhar o progresso ao longo do ano',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2 text-sm font-scania text-white/70">
                <span className="text-scania-yellow font-bold shrink-0">{i + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        <button onClick={finish} className="btn-primary w-full">
          <Map size={18} /> Voltar ao mapa
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="flex justify-center mb-5">
        <TruckSVG size={120} animated />
      </div>

      <div className="tag-badge bg-green-500/20 text-green-400 border border-green-500/30 mx-auto mb-4 w-fit">
        🏁 Projeto liberado!
      </div>

      <h2 className="section-title mb-2 text-center">Sua rota de desenvolvimento</h2>
      <p className="text-white/60 font-scania text-sm text-center mb-6">
        Leve este rascunho para conversar com sua liderança e registrar no MySuccess.
      </p>

      {/* Summary card */}
      <div className="rounded-2xl border border-scania-yellow/30 bg-scania-yellow/5 p-5 mb-5 space-y-4">
        {[
          { label: 'Meu objetivo', value: data.objectiveStatement, color: 'text-scania-yellow' },
          { label: 'Vou aprender na prática', value: data.action70, color: 'text-scania-yellow' },
          { label: 'Com o apoio de', value: data.support, color: 'text-scania-orange' },
          { label: 'Complemento com conteúdo', value: data.action10, color: 'text-scania-blue-light' },
          data.firstStep ? { label: 'Meu primeiro passo', value: data.firstStep, color: 'text-green-400' } : null,
          data.deadline ? { label: 'Prazo', value: data.deadline, color: 'text-white/60' } : null,
        ].filter(Boolean).map((row, i) => (
          <div key={i}>
            <p className={`text-xs font-bold font-scania uppercase tracking-wider mb-1 ${row!.color}`}>
              {row!.label}
            </p>
            <p className="text-white font-scania text-sm leading-relaxed">{row!.value}</p>
          </div>
        ))}
      </div>

      {/* Next steps */}
      <div className="card-glass rounded-xl p-4 mb-6 border border-white/10">
        <p className="text-white/50 font-scania text-xs font-bold uppercase tracking-wider mb-3">Próximos passos</p>
        <div className="space-y-2">
          {['Registrar no MySuccess', 'Conversar com a liderança no Ciclo B', 'Acompanhar o progresso ao longo do ano'].map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-scania text-white/70">
              <span className="text-scania-yellow">→</span> {s}
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <button onClick={copyToClipboard} className="btn-secondary w-full">
          {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
          {copied ? 'Copiado!' : 'Copiar resumo'}
        </button>
        <button onClick={finish} className="btn-primary w-full">
          <Map size={18} /> Voltar ao mapa
        </button>
        <button onClick={back} className="btn-ghost text-white/40">
          <ArrowLeft size={16} /> Revisar plano
        </button>
      </div>
    </div>
  );
}
