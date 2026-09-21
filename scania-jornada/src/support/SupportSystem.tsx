import { ExternalLink, Monitor, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';

const STEPS = [
  { n: 1, title: 'Acesse o MySuccess', desc: 'Entre no portal SuccessFactors com seu login corporativo. Use o link oficial da Scania.' },
  { n: 2, title: 'Vá em Performance', desc: 'No menu principal, clique em "Performance" ou "Meu Desempenho" para acessar o módulo.' },
  { n: 3, title: 'Selecione o Ciclo B', desc: 'Localize o formulário do Ciclo B ativo no seu perfil de performance.' },
  { n: 4, title: 'Preencha a autoavaliação', desc: 'Para cada valor do Scania Way, selecione a nota (1 a 5) e registre um exemplo concreto.' },
  { n: 5, title: 'Use exemplos reais', desc: 'Descreva situações, ações e resultados específicos. Evite frases genéricas como "sempre faço meu melhor".' },
  { n: 6, title: 'Salve e envie', desc: 'Confirme o preenchimento dentro do prazo definido. Seu gestor receberá notificação.' },
];

export default function SupportSystem() {
  const { navigate } = useApp();

  return (
    <div className="min-h-dvh bg-factory-gradient flex flex-col">
      <Header title="Como acessar a autoavaliação" showBack backTo="map" compact />

      <div className="flex-1 px-4 md:px-8 py-6 max-w-2xl mx-auto w-full">
        <div className="mb-6 animate-fade-in">
          <div className="tag-badge bg-scania-blue-light/20 text-scania-blue-light border border-scania-blue-light/30 mb-4">
            Conteúdo de apoio
          </div>
          <h2 className="section-title mb-3 flex items-center gap-2">
            <Monitor size={24} className="text-scania-blue-light" />
            Acesse sua autoavaliação
          </h2>
          <p className="text-white/60 font-scania leading-relaxed">
            Siga o passo a passo abaixo para registrar sua autoavaliação no MySuccess dentro do prazo do Ciclo B.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3 mb-7 animate-slide-up">
          {STEPS.map(step => (
            <div key={step.n} className="card-glass rounded-xl p-4 border border-white/10 flex gap-4 items-start">
              <div className="w-9 h-9 rounded-xl bg-scania-blue-mid flex items-center justify-center shrink-0 font-bold font-scania text-scania-blue-light">
                {step.n}
              </div>
              <div>
                <p className="font-bold font-scania text-white mb-1">{step.title}</p>
                <p className="text-white/60 font-scania text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Important notice */}
        <div className="rounded-xl border border-scania-yellow/30 bg-scania-yellow/10 p-4 mb-6">
          <p className="text-scania-yellow font-bold font-scania text-sm mb-2">⚠️ Importante</p>
          <p className="text-white/70 font-scania text-sm leading-relaxed">
            Use exemplos reais e específicos. Descreva a situação, sua ação e a contribuição gerada. A nota 3 representa um colaborador nota 10 — não é mediana.
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-3">
          <a
            href="https://performancemanager5.successfactors.eu/sf/home?bplte_company=volkswagenP20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
          >
            <ExternalLink size={18} /> Acessar MySuccess
          </a>
          <button onClick={() => navigate('map')} className="btn-ghost w-full border border-white/20">
            Voltar ao mapa
          </button>
        </div>
      </div>
    </div>
  );
}
