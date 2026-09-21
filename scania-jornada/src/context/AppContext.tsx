import { createContext, useContext, useReducer, ReactNode } from 'react';
import type { AppState, AppAction, AppScreen, ParticipationMode, GameStatus } from '../types';

const initialState: AppState = {
  screen: 'welcome',
  mode: null,
  participantName: '',
  areaName: '',
  progress: {
    game1: 'not-started',
    game2: 'not-started',
  },
  pdiData: {},
  autoavaliacaoData: {},
  truckPosition: 'start',
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, screen: action.payload };
    case 'SET_MODE':
      return { ...state, mode: action.payload };
    case 'SET_PARTICIPANT_NAME':
      return { ...state, participantName: action.payload };
    case 'SET_AREA_NAME':
      return { ...state, areaName: action.payload };
    case 'SET_GAME_STATUS':
      return {
        ...state,
        progress: { ...state.progress, [action.payload.game]: action.payload.status },
      };
    case 'SET_PDI_DATA':
      return { ...state, pdiData: { ...state.pdiData, ...action.payload } };
    case 'SET_AUTOAVALIACAO_DATA':
      return { ...state, autoavaliacaoData: { ...state.autoavaliacaoData, ...action.payload } };
    case 'SET_TRUCK_POSITION':
      return { ...state, truckPosition: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  navigate: (screen: AppScreen) => void;
  setMode: (mode: ParticipationMode) => void;
  setGameStatus: (game: 'game1' | 'game2', status: GameStatus) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const navigate = (screen: AppScreen) => {
    dispatch({ type: 'SET_SCREEN', payload: screen });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setMode = (mode: ParticipationMode) => {
    dispatch({ type: 'SET_MODE', payload: mode });
  };

  const setGameStatus = (game: 'game1' | 'game2', status: GameStatus) => {
    dispatch({ type: 'SET_GAME_STATUS', payload: { game, status } });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, navigate, setMode, setGameStatus }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
