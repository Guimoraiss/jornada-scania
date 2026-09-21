import { Map, ExternalLink } from 'lucide-react';
import type { Game2State } from '../Game2';

interface Props {
  data: Partial<Game2State>;
  isCollective: boolean;
  finish: () => void;
  back: () => void;
}

const VALUE_LABELS: Record<string, string> = {
  cliente: 'Cliente em Primeiro Lugar',
  desperdicio: 'Eliminação de Desperdícios',
  respeito: 'Respeito',
  responsabilidade: 'Responsabilidade',
  equipe: 'Espírito de Equipe',
  she: 'Saúde, Segurança e Meio Ambiente',
};

export default function G2Step7Result({ data, isCollective, finish, back }: Props) {
  if (isCollective) {
    return (
      <div className="animate-fade-in text-center">
        <div className="text-5xl mb-5">⭐</div>

        <div className="tag-badge bg-green-500/20 text-green-400 border border-green-500/30 mx-auto mb-5">
          ✅ Reflexão concluída
        </div>

        <h2 className="section-title mb-5 text-center">Reflexão concluída!</h2>

        <div className="card-glass rounded-2xl p-6 border border-scania-orange/20 mb-6 text-left">
          <p className="text-white/80 font-scania text-base leading-relaxed text-center italic">
            "O Scania Way está presente em cada decisão, atitude e entrega realizada no dia a dia. Ao fazer sua autoavaliação, reflita sobre exemplos reais e sobre como você demonstra nossos valores na prática."
          </p>
        </div>

        <div className="card-glass rounded-xl p-4 mb-6 border border-white/10 text-left">
          <p className="text-white/60 font-scania text-sm mb-3 font-bold">Próximos passos para cada participante:</p>
          <div className="space-y-2">
            {[
              'Realizar a autoavaliação no MySuccess',
              'Usar exemplos concretos ao preencher',
              'Lembrar: nota 3 = colaborador nota 10',
              'Preparar a conversa com a liderança',
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-sm font-scania text-white/70">
                <span className="text-scania-orange font-bold shrink-0">{i + 1}.</span>
                <span>{s}</span>
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
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">⭐</div>
        <div className="tag-badge bg-green-500/20 text-green-400 border border-green-500/30 mx-auto mb-3">
          ✅ Reflexão concluída
        </div>
        <h2 className="section-title mb-2">Sua reflexão do Ciclo B</h2>
        <p className="text-white/60 font-scania text-sm">
          Agora registre sua autoavaliação no MySuccess antes da conversa final com a liderança.
        </p>
      </div>

      {/* Summary */}
      <div className="rounded-2xl border border-scania-orange/30 bg-scania-orange/5 p-5 mb-5 space-y-4">
        {data.strongPoints && data.strongPoints.length > 0 && (
          <div>
            <p className="text-xs font-bold font-scania uppercase tracking-wider text-scania-yellow mb-2">Meus pontos fortes</p>
            <div className="flex flex-wrap gap-2">
              {data.strongPoints.map(id => (
                <span key={id} className="tag-badge bg-scania-yellow/20 text-scania-yellow border border-scania-yellow/30">
                  {VALUE_LABELS[id] ?? id}
                </span>
              ))}
            </div>
          </div>
        )}

        {data.developmentPoint && (
          <div>
            <p className="text-xs font-bold font-scania uppercase tracking-wider text-scania-orange mb-2">Quero desenvolver</p>
            <p className="text-white font-scania text-sm">{VALUE_LABELS[data.developmentPoint] ?? data.developmentPoint}</p>
          </div>
        )}

        {data.evidence && (
          <div>
            <p className="text-xs font-bold font-scania uppercase tracking-wider text-scania-blue-light mb-2">Minha evidência</p>
            <p className="text-white/80 font-scania text-sm leading-relaxed italic">"{data.evidence}"</p>
          </div>
        )}
      </div>

      {/* MySuccess CTA */}
      <div className="rounded-xl border border-scania-orange/30 bg-scania-orange/10 p-4 mb-5">
        <p className="text-scania-orange font-bold font-scania text-sm mb-2">Próximo passo</p>
        <p className="text-white/70 font-scania text-sm mb-3">
          Registre sua autoavaliação no MySuccess usando os exemplos que você preparou.
        </p>
        <a
          href="https://performancemanager5.successfactors.eu/sf/home?bplte_company=volkswagenP20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full"
        >
          <ExternalLink size={16} /> Acessar MySuccess
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <button onClick={finish} className="btn-secondary w-full">
          <Map size={18} /> Voltar ao mapa
        </button>
      </div>
    </div>
  );
}
