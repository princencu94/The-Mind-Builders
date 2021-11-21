import './App.css';
import Homepage from './pages/homepage';
import MissionPage from './pages/about/mission.page';
import Compliance from './pages/about/compliance.page';
import Faqs from './pages/about/faqs.page';
import CompetitiveAdvantages from './pages/about/competitive-advantages.page';
import TeamPage from './pages/about/team.page';
import ContactUsPage from './pages/about/contactus.page';
import AdministrativeSupportPage from './pages/services/administrative-support.page';
import FinanceAccountingPage from './pages/services/finance-accounting.page';
import HumanResourcesPage from './pages/services/human-resources.page';
function App() {
  return (
    <div className="App">
      <HumanResourcesPage/>
    </div>
  );
}

export default App;
