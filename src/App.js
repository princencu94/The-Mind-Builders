import './App.css';
// Pages
import Homepage from './pages/homepage';
import MissionPage from './pages/about/mission.page';
import Compliance from './pages/about/compliance.page';
import Faqs from './pages/about/faqs.page';
import CompetitiveAdvantages from './pages/about/competitive-advantages.page';
import TeamPage from './pages/about/team.page';
import ContactUsPage from './pages/about/contactus.page';
import AdministrativeSupportPage from './pages/services/administrative-support.page';
import DigitalMarketingPage from './pages/services/digital-marketing.page';
import HumanResourcesPage from './pages/services/human-resources.page';
import Behavioralhealthcare from './pages/services/behavioral-healthcare.page';
import SalesRockstarsPage from './pages/services/sales-rockstars';
import InformationTechnologyPage from './pages/services/information-technology.page';
import PayrollPage from './pages/growth/payroll.page';
import ContractorPage from './pages/growth/contractor.page';
import StaffTypesPage from './pages/seeker/staff.page';
import JobSearchPage from './pages/seeker/job-search.page';
import EmployeeRecognitionProgramPage from './pages/seeker/employee-recognition.page';
import SubmitResumePage from './pages/seeker/submit-resume.page';
import RequestNewTalentPage from './pages/seeker/request-new-talent.page';
import OurCapabilitiesPage from './pages/about/ourcapabilities.page';
import ArticlesPage from './pages/articles.page';

//Careers
import DigitalMarketer from './pages/careers/digital.marketer.page';
import EmailMarketer from './pages/careers/email.marketer.page';
import OutsideSales from './pages/careers/outside.sales.page';
import VirtualAssistantPage from './pages/services/virtual-assistant.page';
import Closer from './pages/careers/closer.page';
import AppointmentSetter from './pages/careers/appointment.setter.page';

// Articles
import EnforcingTruthsArticle from './pages/articles/enforcing-truths.article';


import Navbar from './components/navbar/navbar.component';

import {
  Routes,
  Route, 
} from "react-router-dom";
import LeadGenerator from './pages/careers/lead.generator.page';



function App() {
  return (
    <div className="App">
      
      <Routes>
        
        <Route path="/" element={<Navbar />}>
        <Route  index element={<Homepage/>} />
        <Route  path="/our-mission"  element={<MissionPage/>} />
        <Route  path="/compliance-is-our-focus"  element={<Compliance/>} />
        <Route  path="/faqs"  element={<Faqs/>} />
        <Route  path="/competitive-advantages"  element={<CompetitiveAdvantages/>} />
        <Route  path="/our-team"  element={<TeamPage/>} />
        <Route  path="/contact-us"  element={<ContactUsPage/>} />
        <Route  path="/administrative-support"  element={<AdministrativeSupportPage/>} />
        <Route  path="/digital-marketing"  element={<DigitalMarketingPage/>} />
        <Route  path="/human-resources"  element={<HumanResourcesPage/>} />
        <Route  path="/behavioral-healthcare"  element={<Behavioralhealthcare/>} />
        <Route  path="/sales-rockstars"  element={<SalesRockstarsPage/>} />
        <Route  path="/information-technology"  element={<InformationTechnologyPage/>} />
        <Route  path="/third-party-payroll-solutions"  element={<PayrollPage/>} />
        <Route  path="/1099-independent-contractor-compliance"  element={<ContractorPage/>} />
        <Route  path="/types-of-staffing"  element={<StaffTypesPage/>} />
        <Route  path="/careers"  element={<JobSearchPage/>} />
        <Route  path="/articles"  element={<ArticlesPage/>} />
        <Route  path="/employee-recognization-program"  element={<EmployeeRecognitionProgramPage/>} />
        <Route  path="/request-new-talent"  element={<RequestNewTalentPage/>} />
        <Route  path="/submit-your-resume"  element={<SubmitResumePage/>} />
        <Route  path="/our-capabilities"  element={<OurCapabilitiesPage/>} />
        <Route  path="/careers/virtual-assistant"  element={<VirtualAssistantPage/>} />
        <Route  path="/careers/digital-marketing"  element={<DigitalMarketer/>} />
        <Route  path="/careers/email-marketing"  element={<EmailMarketer/>} />
        <Route  path="/careers/outside-sales"  element={<OutsideSales/>} />
        <Route  path="/careers/closer"  element={<Closer/>} />
        <Route  path="/careers/lead-generator"  element={<LeadGenerator/>} />
        <Route  path="/careers/appointment-setter"  element={<AppointmentSetter/>} />

        <Route  path="/articles/enforcing-truths-you-want-interviewers-see"  element={<EnforcingTruthsArticle/>} />
        </Route>
      </Routes>
  
    </div>
  );
}



export default App;
