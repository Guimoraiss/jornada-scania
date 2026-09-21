import { AppProvider, useApp } from './context/AppContext';
import WelcomePage from './pages/WelcomePage';
import ModeSelectPage from './pages/ModeSelectPage';
import MapPage from './pages/MapPage';
import Game1 from './games/game1/Game1';
import Game2 from './games/game2/Game2';
import SupportSystem from './support/SupportSystem';
import Support7020 from './support/Support7020';
import SupportCareer from './support/SupportCareer';
import SupportResources from './support/SupportResources';

function Router() {
  const { state } = useApp();

  switch (state.screen) {
    case 'welcome':        return <WelcomePage />;
    case 'mode-select':    return <ModeSelectPage />;
    case 'map':            return <MapPage />;
    case 'game1':          return <Game1 />;
    case 'game2':          return <Game2 />;
    case 'support-system': return <SupportSystem />;
    case 'support-7020':   return <Support7020 />;
    case 'support-career': return <SupportCareer />;
    case 'support-resources': return <SupportResources />;
    default:               return <WelcomePage />;
  }
}

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}
