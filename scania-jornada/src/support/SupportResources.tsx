import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';

const RESOURCES = [
  {
    emoji: '👤',
    title: 'Liderança',
    desc: 'Orientação, alinhamento de expectativas, feedback estruturado e acompanhamento do PDI ao longo do ano.',
    color: 'border-scania-yellow/30 bg-scania-yellow/10 text-scania-yellow',
    how: 'Agende um 1:1 ou converse na parada de linha.',
  },
  {
    emoji: '🏢',
    title: 'HRBP e Pessoas & Cultura',
    desc: 'Orientação sobre o processo do Ciclo B, direcionamento a canais e recursos disponíveis de RH.',
    color: 'border-scania-blue-light/30 bg-scania-blue-light/10 text-scania-blue-light',
    how: 'Entre em contato pelo canal oficial do time de Pessoas & Cultura.',
  },
  {
    emoji: '📚',
    title: 'LMS e Universidade Scania',
    desc: 'Cursos, trilhas de aprendizagem e conteúdos formais disponíveis para o público elegível.',
    color: 'border-scania-green/30 bg-scania-green/10 text-scania-green-light',
    how: 'Acesse pelo portal interno ou fale com a liderança sobre trilhas disponíveis.',
  },
  {
    emoji: '⭐',
    title: 'Mentoria e troca com colegas',
    desc: 'Programas de mentoria corporativos, aprendizagem com pessoas experientes e ampliação de repertório.',
    color: 'border-scania-orange/30 bg-scania-orange/10 text-scania-orange',
    how: 'Pergunte ao HRBP sobre programas de mentoria ativos.',
  },
  {
    emoji: '🌐',
    title: 'Idiomas',
    desc: 'Plataforma de desenvolvimento de idiomas disponível para colaboradores elegíveis.',
    color: 'border-scania-beige/30 bg-scania-beige/10 text-scania-beige',
    how: 'Acesse pelo canal informado pela área de Pessoas & Cultura.',
  },
  {
    emoji: '🔧',
    title: 'Projetos e experiências práticas',
    desc: 'Aplicação do aprendizado em desafios reais — quando houver oportunidade e alinhamento com a liderança.',
    color: 'border-scania-red/30 bg-scania-red/10 text-scania-red',
    how: 'Converse com a liderança sobre oportunidades de job rotation ou projetos multidisciplinares.',
  },
  {
    emoji: '📋',
    title: 'Materiais do Ciclo B',
    desc: 'Guias para PDI, autoavaliação, MySuccess e conversa de desenvolvimento.',
    color: 'border-white/20 bg-white/5 text-white/70',
    how: 'Disponíveis na intranet e com o time LHRD.',
  },
];

export default function SupportResources() {
  const { navigate } = useApp();

  return (
    <div className="min-h-dvh bg-factory-gradient flex flex-col">
      <Header title="Como a Scania apoia você" showBack backTo="map" compact />

      <div className="flex-1 px-4 md:px-8 py-6 max-w-2xl mx-auto w-full">
        <div className="mb-6 animate-fade-in">
          <div className="tag-badge bg-scania-red/20 text-scania-red border border-scania-red/30 mb-4">
            Conteúdo de apoio
          </div>
          <h2 className="section-title mb-3">Apoio ao desenvolvimento</h2>
          <p className="text-white/60 font-scania leading-relaxed">
            A Scania oferece recursos que podem apoiar o seu desenvolvimento. Conheça o que está disponível e como acessar.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {RESOURCES.map(r => (
            <div key={r.title} className={`rounded-xl border p-4 ${r.color}`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{r.emoji}</span>
                <div className="min-w-0">
                  <p className="font-bold font-scania text-white mb-1">{r.title}</p>
                  <p className="font-scania text-sm leading-relaxed text-white/70 mb-2">{r.desc}</p>
                  <div className="flex items-start gap-1.5 bg-white/5 rounded-lg p-2">
                    <span className="text-xs text-white/40 font-scania font-bold shrink-0">Como:</span>
                    <span className="text-xs text-white/60 font-scania leading-relaxed">{r.how}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LHRD contact */}
        <div className="rounded-xl border border-scania-yellow/30 bg-scania-yellow/10 p-4 mb-6">
          <p className="text-scania-yellow font-bold font-scania text-sm mb-1">📞 Dúvidas? Fale com o time LHRD</p>
          <p className="text-white/70 font-scania text-sm">
            Letícia Pina (LPIA4V) · Amanda Gonçalves (AGOJA9)
          </p>
        </div>

        <button onClick={() => navigate('map')} className="btn-primary w-full">
          Voltar ao mapa
        </button>
      </div>
    </div>
  );
}
