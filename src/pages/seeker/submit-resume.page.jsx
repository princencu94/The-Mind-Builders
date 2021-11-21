import Navbar from "../../components/navbar/navbar.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Footer from "../../components/footer/footer.component";

const SubmitResumePage = () => {
    return (
        <div>
            <Navbar/>
            <HeaderBanner heading="Submit Your Resume"/>
            
            <Footer/>
        </div>
    )
}

export default SubmitResumePage;