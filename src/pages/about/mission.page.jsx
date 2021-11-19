import Navbar from "../../components/navbar/navbar.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import { CameraIcon } from '@heroicons/react/solid';
import Footer from "../../components/footer/footer.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";

const MissionPage = () => {
    return (
        <div>
            <Navbar/>
            <HeaderBanner heading="Mission Statement and Corporate Vision"/>

            <div className="bg-white overflow-hidden">
                <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:row-start-1 lg:col-start-2">
                        <svg
                        className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                        >
                        <defs>
                            <pattern
                            id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                            >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                        <figure>
                            <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                            <img
                                className="rounded-lg shadow-lg object-cover object-center"
                                src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                                alt="Whitney leaning against a railing on a downtown street"
                                width={1184}
                                height={1376}
                            />
                            </div>
                        </figure>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="text-base max-w-prose mx-auto lg:max-w-none">
                        <p className="text-lg text-gray-500">
                        At Intercom, our mission is to fuel the success of our clients and provide employees with rewarding opportunities for career growth.
                        </p>
                        </div>
                        <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                        <p>
                            Our aim is to be the highest quality company growth helper in the USA, particularly in digital marketing and outside sales. We endeavor to be a trusted partner and resource with a depth of knowledge, experience and capabilities.
                        </p>
                        <p>
                            In world filled with uncertainty, we strive to use data, experiences, forecasts, and gurus to ensure the successful implementation of any growth strategy we pursue. We strive to continually earn our reputation as a company known for high quality staffing and digital marketing results, earning our reputation as a flexible employment company known for our competence, integrity, innovation, and execution.
                        </p>
                        <p>
                            As our name suggests, the goal of Intercom is to unite the very best clients with strategically placed employees for successful and measurable growth.
                        </p>
    
                        <p>
                            We embrace the competitive nature of business and seek to provide a significant advantage to every company, and each individual, with whom we interface.
                        </p>
                        <p>
                            Our company culture is founded upon the immense respect we hold for you and your company culture.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <CallToAction/>
                <Footer/>
            </div>

          
    )
}

export default MissionPage;