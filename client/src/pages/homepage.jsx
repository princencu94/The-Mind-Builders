import ServicesSection from "../components/services-section/services-section.component";

import Clients from "../components/clients/clients.component";
import Testimonials from "../components/testimonials/testimonials.component";
import Footer from "../components/footer/footer.component";
import HeroSection from "../components/hero-section/hero-section.component";
import ListingBk from '../assets/listing-bk.png';

const Homepage = () => {
    return (
        <div>
            <HeroSection/>
            <ServicesSection/>
            <Clients/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default Homepage;