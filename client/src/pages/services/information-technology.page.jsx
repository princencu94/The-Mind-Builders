import HeaderBanner from "../../components/header-banners/header-banners.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Footer from "../../components/footer/footer.component";
import { Link } from 'react-router-dom';
import itImage from '../../assets/it.jpg';

const TwoColumns = () => {
    return (
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-max lg:max-w-7xl mx-auto">
                <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div className="text-base max-w-prose lg:max-w-none">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                            Help desk staffing promotes business productivity. 
                        </p>  
                    </div>
                </div>
                <div className="relative">
                <svg
                    className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                >
                    <defs>
                    <pattern
                        id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                </svg>
                <svg
                    className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                >
                    <defs>
                    <pattern
                        id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                </svg>
                <div className="relative md:bg-white md:p-6">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                    <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                        <h3>Help Desk Analyst</h3>
                        <p>
                        Managing the needs of internal and remote users who access software that supports the company’s business needs, whether proprietary in nature or based within the Windows, Google or Apple cloud-based systems.
Supporting web and intranet applications rendering on a variety of platforms, including mobile. Organizing the use of a help ticket system to manage troubleshooting and escalation of user issues.
                        </p>
                        <p>
                        Supporting company-owned and user-owned hardware that may include cloud any variety of tables, mobile phones, laptops and desktop computers.
Supporting, managing and training help desk technicians as required. Support various company printers. Depending on level of position, will have a varying degree of responsibility to work with cyber security engineers and comply with processes that support system security architecture.
                        </p> 
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                        <h3>Help Desk Technician.</h3>
                        <p>
                        Skillset requirements include problem-solving, good communication skills, patience, teamwork and follow-up.
Strong tech skills that include familiarity with a variety of hardware, software, networking cloud-based applications and basic office-support applications, such as those belonging to the Microsoft Office suite.
Depending on size and structure of company, various levels of help desk technician positions will determine the required skill set, education and certifications for staff positions at each level.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


const InformationTechnologyPage = () => {
    return (
        <div>
            <HeaderBanner heading="Information Technology"/>

            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                    <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                    <p className="text-2xl text-black-900">
                        As the IT staffing needs of our clients continue to evolve, Intercom is committed to broadening the base of our rockstar tech talent pool.
                    </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative z-10">
                        <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                        <p>
                            For over a decade, through our partnership with a strong IT staffing firm, we’ve been staffing help desk analysts and help desk support staff, developers and system engineers. Partnering with some of the nation’s most trusted information technology staffing agencies, Intercom supports every facet of IT – from multi-platform support of operating systems and applications to cyber security initiatives that protect networks and data from dangerous breach and virus infiltration.
                        </p>
                        <h3>If you are a techie who’s looking to support the success of Intercom clients, let’s connect. </h3>
                        <p>
                        In the 21st century, if you’re breathing, you’re concerned about internet security.
Over the past few years, nothing has been a higher priority to Unforce than IT security staffing for our valued clients. From IT security architects and analysts to IT security engineers, we have staffing solutions to support the cyber security initiatives of your company. Cyber security is evolving quickly. The following roles and responsibilities are a partial representation of the many that exist currently:
                        </p>
                        <h3>Information Technology Security Professionals</h3>
                        <p>
                            Roles your organization may need include: Chief Security Officer, Security Analyst, Security Engineer and Cyber Security Architects. Secure systems, reducing risks of data and privacy breaches. Perform assessments and testing related to vulnerability and compliance.
                        </p>
                        <p>
                        Knowledge of basic IT security and cybersecurity technologies, including Windows clients and servers, various routers, firewalls, storage, PKI, SSO, IdAM and others.
                        Analyze system findings across networks and domains.
                        Knowledge of various cybersecurity tools and solutions.
                        </p>
                        <h3>Intercom techies are ready to help. </h3>
                        <p>
                            Intercom IT professionals hold a tremendous variety of educational achievements, qualifications and certifications. Some of the more popular certifications held include: CISSP, CISM, CCNA, ITIL, A+ Certified and MCSE.
                        </p>
                        </div>
                        
                    </div>
                    <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                        <svg
                        className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                        >
                        <defs>
                            <pattern
                            id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                            >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
                        </svg>
                        <blockquote className="relative bg-white rounded-lg shadow-lg">
                        <img
                                className="rounded-lg shadow-lg object-cover object-center"
                                src={itImage}
                                alt="Someone Typing on a computer"
                                width={1184}
                                height={500}
                            />
                        </blockquote>
                    </div>
                    </div>
                </div>
            </div>
            <TwoColumns/>
            <CallToAction/>
            <Footer/>
        </div>
    )
}

export default InformationTechnologyPage;