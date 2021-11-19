import Navbar from "../components/navbar/navbar.component";
import ServicesSection from "../components/services-section/services-section.component";
import JobLists from "../components/job-lists/job-lists.component";
import Clients from "../components/clients/clients.component";
import Testimonials from "../components/testimonials/testimonials.component";
import Footer from "../components/footer/footer.component";
import ListingBk from '../assets/listing-bk.png';

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <ServicesSection/>
                <div className="relative pb-32 bg-gray-800">
                    <div className="absolute inset-0">
                        <img
                            className="w-full h-full object-cover"
                            src={ListingBk}
                            alt=""
                        />
                        <div className="absolute inset-0 " aria-hidden="true" />
                        </div>
                        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Available Jobs</h1>
                        <div className="mt-20">
                            <JobLists/>
                        </div> 
                    </div>
                </div>
            <Clients/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default Homepage;