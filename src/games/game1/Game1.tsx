import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Header from '../../components/layout/Header';
import ProgressBar from '../../components/ui/ProgressBar';
import Step1Objective from './steps/Step1Objective';
import Step2Statement from './steps/Step2Statement';
import Step3Framework from './steps/Step3Framework';
import Step4Challenge from './steps/Step4Challenge';
import Step5Route from './steps/Step5Route';
import Step6Support from './steps/Step6Support';
import Step7Reality from './steps/Step7Reality';
import Step8Result from './steps/Step8Result';

export interface Game1State {
  objective: string;
  objectiveStatement: string;
  action70: string;
  action20: string;
  action10: string;
  support: string;
  firstStep: string;
  deadline: string;
}

const TOTAL_STEPS = 8;

export default function Game1() {
  const { state: appState, navigate, setGameStatus } = useApp();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Partial<Game1State>>({});
  const isCollective = appState.mode === 'collective';

  function next() {
    if (step < TOTAL_STEPS) {
      setGameStatus('game1', 'in-progress');
      setStep(s => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function back() {
    if (step > 1) setStep(s => s - 1);
    else navigate('map');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateData(updates: Partial<Game1State>) {
    setData(prev => ({ ...prev, ...updates }));
  }

  function finish() {
    setGameStatus('game1', 'completed');
    navigate('map');
  }

  const stepTitles = [
    'Escolha seu destino',
    'Defina seu objetivo',
    'Conheça o 70/20/10',
    'Desafio rápido',
    'Monte sua rota',
    'Quem pode apoiar?',
    'Cheque de realidade',
    'Projeto liberado!',
  ];

  return (
    <div className="min-h-dvh bg-factory-gradient flex flex-col">
      <Header
        title="Jogo 1 · Monte sua Rota"
        showBack
        backTo="map"
        compact
      />

      {/* Progress */}
      <div className="px-4 md:px-8 py-4 border-b border-white/10 bg-scania-blue/50 backdrop-blur sticky top-[57px] z-30">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-scania-yellow font-bold font-scania text-xs uppercase tracking-wider">
              {stepTitles[step - 1]}
            </span>
            {isCollective && (
              <span className="tag-badge bg-scania-blue-mid text-scania-blue-light border border-scania-blue-light/30 text-xs">
                Modo coletivo
              </span>
            )}
          </div>
          <ProgressBar current={step} total={TOTAL_STEPS} />
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 px-4 md:px-8 py-6 max-w-2xl mx-auto w-full">
        {step === 1 && <Step1Objective data={data} update={updateData} next={next} isCollective={isCollective} />}
        {step === 2 && <Step2Statement data={data} update={updateData} next={next} back={back} isCollective={isCollective} />}
        {step === 3 && <Step3Framework next={next} back={back} />}
        {step === 4 && <Step4Challenge next={next} back={back} isCollective={isCollective} />}
        {step === 5 && <Step5Route data={data} update={updateData} next={next} back={back} isCollective={isCollective} />}
        {step === 6 && <Step6Support data={data} update={updateData} next={next} back={back} isCollective={isCollective} />}
        {step === 7 && <Step7Reality data={data} update={updateData} next={next} back={back} isCollective={isCollective} />}
        {step === 8 && <Step8Result data={data} isCollective={isCollective} finish={finish} back={back} />}
      </div>
    </div>
  );
}
