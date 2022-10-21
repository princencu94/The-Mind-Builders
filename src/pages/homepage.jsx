import ServicesSection from "../components/services-section/services-section.component";

import Clients from "../components/clients/clients.component";
import VirtualAssistant from "../components/virtual-assistant/virtual-assistant";
import Footer from "../components/footer/footer.component";
import HeroSection from "../components/hero-section/hero-section.component";
import Articles from "../components/articles/articles.component";


const Homepage = () => {
    

    return (
        <div>
            <HeroSection/>
            <ServicesSection/>
            <VirtualAssistant/>
            <Clients/>
            <Footer/>
            
        </div>
    )
}

export default Homepage;