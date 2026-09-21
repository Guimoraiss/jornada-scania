import { ExternalLink, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';

const CAREER_TIPS = [
  { emoji: '🗺️', title: 'Entenda sua função', desc: 'Conheça as competências esperadas para sua posição e o que é necessário para avançar.' },
  { emoji: '📈', title: 'Possibilidades de desenvolvimento', desc: 'A Scania oferece caminhos tanto na liderança quanto na especialização técnica.' },
  { emoji: '💬', title: 'Converse com sua liderança', desc: 'O Ciclo B é o momento ideal para falar sobre interesses, experiências e próximos passos.' },
  { emoji: '📝', title: 'Atualize seu perfil', desc: 'Registre experiências relevantes no MySuccess para ter visibilidade nas oportunidades internas.' },
  { emoji: '🎯', title: 'Use o PDI como ponte', desc: 'Transforme um objetivo de carreira em ações concretas com a metodologia 70/20/10.' },
  { emoji: '🔄', title: 'Mobilidade interna', desc: 'Acompanhe as vagas internas e explore possibilidades em outras áreas ou unidades.' },
];

export default function SupportCareer() {
  const { navigate } = useApp();

  return (
    <div className="min-h-dvh bg-factory-gradient flex flex-col">
      <Header title="Carreira" showBack backTo="map" compact />

      <div className="flex-1 px-4 md:px-8 py-6 max-w-2xl mx-auto w-full">
        <div className="mb-6 animate-fade-in">
          <div className="tag-badge bg-scania-beige/20 text-scania-beige border border-scania-beige/30 mb-4">
            Conteúdo de apoio
          </div>
          <h2 className="section-title mb-3 flex items-center gap-2">
            <Compass size={24} className="text-scania-beige" />
            Carreira na Scania
          </h2>
          <p className="text-white/60 font-scania leading-relaxed">
            Conecte seu desenvolvimento às possibilidades de crescimento dentro da Scania. Use o Ciclo B para planejar o seu próximo passo.
          </p>
        </div>

        {/* Job Architecture explanation */}
        <div className="rounded-2xl border border-scania-beige/30 bg-scania-beige/10 p-5 mb-6">
          <p className="text-scania-beige font-bold font-scania text-sm mb-2">📐 O que é Job Architecture?</p>
          <p className="text-white/70 font-scania text-sm leading-relaxed">
            É a estrutura que organiza todas as funções da Scania, definindo as competências, níveis e possibilidades de desenvolvimento para cada cargo. É sua bússola para o crescimento profissional.
          </p>
        </div>

        {/* Tips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {CAREER_TIPS.map(tip => (
            <div key={tip.title} className="card-glass rounded-xl p-4 border border-white/10">
              <span className="text-2xl mb-2 block">{tip.emoji}</span>
              <p className="font-bold font-scania text-white text-sm mb-1">{tip.title}</p>
              <p className="text-white/60 font-scania text-xs leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <a
            href="https://home.scania.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
          >
            <ExternalLink size={16} /> Acessar Job Architecture
          </a>
          <a
            href="https://home.scania.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full"
          >
            <ExternalLink size={16} /> Ver Vagas Internas
          </a>
          <button onClick={() => navigate('map')} className="btn-ghost w-full border border-white/20">
            Voltar ao mapa
          </button>
        </div>

        <p className="text-white/30 font-scania text-xs text-center mt-4">
          Links serão atualizados com os endereços oficiais após validação com o time LHRD.
        </p>
      </div>
    </div>
  );
}
