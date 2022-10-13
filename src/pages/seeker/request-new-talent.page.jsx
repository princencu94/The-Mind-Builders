import HeaderBanner from "../../components/header-banners/header-banners.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Footer from "../../components/footer/footer.component";
import RequestNewTalentForm from "../../components/request-new-talent/request-new-talent.component";

const RequestNewTalentPage = () => {
    return (
        <div>
            <HeaderBanner heading="Request New Talent"/>
            <RequestNewTalentForm/>
            <Footer/>
        </div>
    )
}

export default RequestNewTalentPage;