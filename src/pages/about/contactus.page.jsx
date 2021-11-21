import Contact from "../../components/contact/contact.component";
import Navbar from "../../components/navbar/navbar.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import Footer from "../../components/footer/footer.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
const ContactUsPage = () => {
    return (
        <div>
            <Navbar/>
            <HeaderBanner heading="Contact Us"/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default ContactUsPage;