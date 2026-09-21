import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';

const PILLARS = [
  {
    pct: '70%',
    title: 'Aprender fazendo',
    subtitle: 'Experiência',
    color: 'border-scania-yellow/40 bg-scania-yellow/10',
    textColor: 'text-scania-yellow',
    barColor: 'bg-scania-yellow',
    barW: '70%',
    desc: 'A maior parte do aprendizado acontece na prática, em atividades reais, desafios do dia a dia e situações que exigem ação e decisão.',
    examples: [
      { role: 'Produção', items: ['Nova atividade na linha com acompanhamento', 'Participar da análise de um desvio', 'Assumir mais autonomia gradualmente'] },
      { role: 'Técnico', items: ['Implementar melhoria de processo', 'Liderar projeto de redução de tempo', 'Executar job rotation técnico'] },
      { role: 'Estagiário', items: ['Liderar uma apresentação de resultado', 'Coordenar uma demanda multidisciplinar', 'Executar projeto de melhoria real'] },
    ],
  },
  {
    pct: '20%',
    title: 'Aprender com pessoas',
    subtitle: 'Exposição',
    color: 'border-scania-orange/40 bg-scania-orange/10',
    textColor: 'text-scania-orange',
    barColor: 'bg-scania-orange',
    barW: '20%',
    desc: 'Aprendemos muito observando e conversando com colegas experientes, pedindo feedback e trocando perspectivas diferentes.',
    examples: [
      { role: 'Produção', items: ['Pedir feedback à liderança', 'Acompanhar colega referência', 'Participar de troca de boas práticas'] },
      { role: 'Técnico', items: ['Mentoria com especialista técnico', '1:1 com gestor sobre desenvolvimento', 'Observar processo em outra área'] },
      { role: 'Estagiário', items: ['Conversar com HRBP sobre carreira', 'Acompanhar profissional sênior', 'Pedir feedback estruturado'] },
    ],
  },
  {
    pct: '10%',
    title: 'Aprender com conteúdos',
    subtitle: 'Educação formal',
    color: 'border-scania-blue-light/40 bg-scania-blue-light/10',
    textColor: 'text-scania-blue-light',
    barColor: 'bg-scania-blue-light',
    barW: '10%',
    desc: 'Cursos, treinamentos, vídeos e leituras complementam a aprendizagem com estrutura e referências formais validadas.',
    examples: [
      { role: 'Produção', items: ['Treinamento técnico no posto', 'Leitura de procedimento operacional', 'Curso de segurança obrigatório'] },
      { role: 'Técnico', items: ['Trilha no LMS Scania', 'Workshop técnico certificado', 'Curso de especialização'] },
      { role: 'Estagiário', items: ['Universidade Scania', 'Curso de idiomas', 'Trilha de desenvolvimento corporativo'] },
    ],
  },
];

export default function Support7020() {
  const { navigate } = useApp();

  return (
    <div className="min-h-dvh bg-factory-gradient flex flex-col">
      <Header title="Saiba mais: 70/20/10" showBack backTo="map" compact />

      <div className="flex-1 px-4 md:px-8 py-6 max-w-2xl mx-auto w-full">
        <div className="mb-6 animate-fade-in">
          <div className="tag-badge bg-scania-green/20 text-scania-green-light border border-scania-green/30 mb-4">
            Conteúdo de apoio
          </div>
          <h2 className="section-title mb-3">Metodologia 70/20/10</h2>
          <p className="text-white/60 font-scania leading-relaxed">
            Um PDI consistente combina prática, aprendizagem com pessoas e conteúdos formais. Os percentuais são referência — não obrigação matemática para cada PDI.
          </p>
        </div>

        {/* Visual bar */}
        <div className="rounded-2xl overflow-hidden mb-2 h-6 flex shadow-lg">
          <div className="bg-scania-yellow flex items-center justify-center text-scania-blue font-bold text-xs" style={{ width: '70%' }}>70%</div>
          <div className="bg-scania-orange flex items-center justify-center text-white font-bold text-xs" style={{ width: '20%' }}>20%</div>
          <div className="bg-scania-blue-light flex items-center justify-center text-white font-bold text-xs" style={{ width: '10%' }}>10%</div>
        </div>
        <div className="flex text-xs font-scania text-white/40 mb-6">
          <span style={{ width: '70%' }}>Prática</span>
          <span style={{ width: '20%' }}>Pessoas</span>
          <span style={{ width: '10%' }}>Formal</span>
        </div>

        {/* Pillars */}
        <div className="space-y-5 mb-6">
          {PILLARS.map(p => (
            <div key={p.pct} className={`rounded-2xl border p-5 ${p.color}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`font-scania-headline font-bold text-3xl ${p.textColor}`}>{p.pct}</span>
                <div>
                  <p className={`font-bold font-scania ${p.textColor}`}>{p.title}</p>
                  <p className="text-white/40 font-scania text-xs">{p.subtitle}</p>
                </div>
              </div>
              <p className="text-white/70 font-scania text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {p.examples.map(ex => (
                  <div key={ex.role} className="bg-white/5 rounded-xl p-3">
                    <p className={`font-bold font-scania text-xs mb-2 ${p.textColor}`}>{ex.role}</p>
                    <ul className="space-y-1">
                      {ex.items.map(item => (
                        <li key={item} className="text-white/60 font-scania text-xs leading-snug flex items-start gap-1">
                          <span className="mt-0.5 shrink-0">·</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4 mb-6">
          <p className="text-white/60 font-scania text-sm leading-relaxed">
            💡 <strong className="text-white">Dica:</strong> Quem trabalha na linha pode não conseguir sair para treinamentos formais. Priorize ações 70% e 20% que se encaixem na rotina — pequenas mudanças de hábito já são aprendizagem.
          </p>
        </div>

        <button onClick={() => navigate('map')} className="btn-primary w-full">
          Voltar ao mapa
        </button>
      </div>
    </div>
  );
}
