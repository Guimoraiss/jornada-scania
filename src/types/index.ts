export type AppScreen =
  | 'welcome'
  | 'mode-select'
  | 'map'
  | 'game1'
  | 'game2'
  | 'support-system'
  | 'support-7020'
  | 'support-career'
  | 'support-resources';

export type ParticipationMode = 'individual' | 'collective';

export type GameStatus = 'not-started' | 'in-progress' | 'completed';

export interface GameProgress {
  game1: GameStatus;
  game2: GameStatus;
}

export interface PDIData {
  objective: string;
  objectiveStatement: string;
  action70: string;
  action20: string;
  action10: string;
  support: string;
  firstStep: string;
  deadline: string;
}

export interface AutoavaliacaoData {
  strongPoints: string[];
  developmentPoint: string;
  evidence: string;
}

export interface AppState {
  screen: AppScreen;
  mode: ParticipationMode | null;
  participantName: string;
  areaName: string;
  progress: GameProgress;
  pdiData: Partial<PDIData>;
  autoavaliacaoData: Partial<AutoavaliacaoData>;
  truckPosition: string;
}

export type AppAction =
  | { type: 'SET_SCREEN'; payload: AppScreen }
  | { type: 'SET_MODE'; payload: ParticipationMode }
  | { type: 'SET_PARTICIPANT_NAME'; payload: string }
  | { type: 'SET_AREA_NAME'; payload: string }
  | { type: 'SET_GAME_STATUS'; payload: { game: 'game1' | 'game2'; status: GameStatus } }
  | { type: 'SET_PDI_DATA'; payload: Partial<PDIData> }
  | { type: 'SET_AUTOAVALIACAO_DATA'; payload: Partial<AutoavaliacaoData> }
  | { type: 'SET_TRUCK_POSITION'; payload: string }
  | { type: 'RESET' };
