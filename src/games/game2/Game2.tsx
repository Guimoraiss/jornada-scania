import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Header from '../../components/layout/Header';
import ProgressBar from '../../components/ui/ProgressBar';
import G2Step1Intro from './steps/G2Step1Intro';
import G2Step2HowToReflect from './steps/G2Step2HowToReflect';
import G2Step3Scenarios from './steps/G2Step3Scenarios';
import G2Step4Reflection from './steps/G2Step4Reflection';
import G2Step5Evidence from './steps/G2Step5Evidence';
import G2Step6Checklist from './steps/G2Step6Checklist';
import G2Step7Result from './steps/G2Step7Result';

export interface Game2State {
  scenarioAnswers: Record<string, number>;
  strongPoints: string[];
  developmentPoint: string;
  evidence: string;
}

const TOTAL_STEPS = 7;

export default function Game2() {
  const { state: appState, navigate, setGameStatus } = useApp();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Partial<Game2State>>({ scenarioAnswers: {} });
  const isCollective = appState.mode === 'collective';

  function next() {
    setGameStatus('game2', 'in-progress');
    setStep(s => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function back() {
    if (step > 1) setStep(s => s - 1);
    else navigate('map');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function updateData(updates: Partial<Game2State>) {
    setData(prev => ({ ...prev, ...updates }));
  }
  function finish() {
    setGameStatus('game2', 'completed');
    navigate('map');
  }

  const stepTitles = [
    'Abertura',
    'Como refletir',
    'Cenários rápidos',
    'Minha reflexão',
    'Minhas evidências',
    'Antes da conversa',
    'Reflexão concluída!',
  ];

  return (
    <div className="min-h-dvh bg-factory-gradient flex flex-col">
      <Header title="Jogo 2 · Scania Way em Ação" showBack backTo="map" compact />

      <div className="px-4 md:px-8 py-4 border-b border-white/10 bg-scania-blue/50 backdrop-blur sticky top-[57px] z-30">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-scania-orange font-bold font-scania text-xs uppercase tracking-wider">
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

      <div className="flex-1 px-4 md:px-8 py-6 max-w-2xl mx-auto w-full">
        {step === 1 && <G2Step1Intro next={next} />}
        {step === 2 && <G2Step2HowToReflect next={next} back={back} />}
        {step === 3 && <G2Step3Scenarios data={data} update={updateData} next={next} back={back} isCollective={isCollective} />}
        {step === 4 && <G2Step4Reflection data={data} update={updateData} next={next} back={back} isCollective={isCollective} />}
        {step === 5 && <G2Step5Evidence data={data} update={updateData} next={next} back={back} isCollective={isCollective} />}
        {step === 6 && <G2Step6Checklist next={next} back={back} isCollective={isCollective} />}
        {step === 7 && <G2Step7Result data={data} isCollective={isCollective} finish={finish} back={back} />}
      </div>
    </div>
  );
}
