import Navbar from "../../components/navbar/navbar.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import Footer from "../../components/footer/footer.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";

const Compliance = () => {
    return (
        <div>
            <HeaderBanner heading="Compliance is Our Focus" />

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
                        <p className="text-2xl text-gray-500">
                            Our client’s staffing needs may vary, but one commonality that’s present in each Intercom solution is a focus on compliance.
                        </p>
                        </div>
                        <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                        <p>
                            With regard to state and federal laws, industry regulations, audits and best practices, compliance may mean different things to different companies. But whether we’re staffing a physician’s office, where a primary area of compliance is patient privacy and HIPAA, or a human resources office where ACA compliance is top of mind, Intercom is in step with the needs of your company.
                        </p>
                        <p>
                            We also consider the importance of compliance wit regard to the corporate culture and management goals that govern your business, your department, or a singular staffing position. Intercom maintains an open line of communication with every client that extends beyond filling an empty seat. Our clients choose us because they know that we work until they are completely satisfied, and have helped them meet their compliance requirements.
                        </p>
                        <p>
                            Accounting and finance companies know when they work with Intercom that our staffing solutions include compliance with GAAP standards and applicable state and federal laws that govern the industry. These clients are also confident that the accounting temps, bookkeepers or other staffing solutions required will be filled by qualified people who are QuickBooks Certified or trained in whatever applications, systems and processes that run their agency, office or department.
                        </p>
    
                        <p>
                            Our HR clients know that in addition to ACA compliance, the staffing candidates they’ll meet are familiar with payroll compliance, workers compensation audits, and 401k census discrimination testing. It’s also understood that HR staff will be knowledgeable about the systems that keep human resources organized and compliant, such as ADP Enterprise and ADP Workforce Now.
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

export default Compliance;