import Contact from "../../components/contact/contact.component";
import Navbar from "../../components/navbar/navbar.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import Footer from "../../components/footer/footer.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Slide from 'react-reveal/Slide';
const ContactUsPage = () => {
    return (
        <div>
            <HeaderBanner heading="Contact Us"/>
            <Slide bottom>
            <Contact/>
            <Footer/>
            </Slide>
        </div>
    )
}

export default ContactUsPage;