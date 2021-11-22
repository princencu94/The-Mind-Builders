import Team from "../../components/team/team.component";
import Navbar from "../../components/navbar/navbar.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import Footer from "../../components/footer/footer.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
const TeamPage = () => {
    return (
        <div>
            <HeaderBanner heading="Team"/>
            <Team/>
            <CallToAction/>
            <Footer/>
        </div>
    )
}

export default TeamPage;