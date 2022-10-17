import HeaderBanner from "../../components/header-banners/header-banners.component";
import Footer from "../../components/footer/footer.component";
import RequestNewTalentForm from "../../components/request-new-talent/request-new-talent.component";
import Slide from 'react-reveal/Slide';

const RequestNewTalentPage = () => {
    return (
        <div>
            <HeaderBanner heading="Request New Talent"/>
            <Slide bottom>
                <RequestNewTalentForm/>
                <Footer/>
            </Slide>
        </div>
    )
}

export default RequestNewTalentPage;