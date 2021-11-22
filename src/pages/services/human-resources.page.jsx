import Navbar from "../../components/navbar/navbar.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Footer from "../../components/footer/footer.component";

const TwoColumns = () => {
    return (
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-max lg:max-w-7xl mx-auto">
                <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div className="text-base max-w-prose lg:max-w-none">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                            Highly competent HR generalists, HR assistants and recruiters.
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
                        <p>
                            When you need someone to fill an HR generalist position, Intercom understands that you need a candidate who contributes to the corporate culture that makes your company a special place to work. The HR generalist must have good interpersonal skills, so that he or she is considered an employee resource, capable of communicating policies and procedures, and addressing employee concerns or complaints, such as harassment or discrimination.                         </p>
                        <p>
                            The HR generalist may be tasked with reviewing federal and state regulations, and make changes to company policies and procedures to ensure compliance. This role may also include participating in recruiting functions and administration of employee benefit programs. Employee orientations and staff trainings are other responsibilities that may fall within the role of a human resource generalist.
                        </p>
                        <p>
                            An HR assistant may be required to help with any number of HR tasks, from recruiting and benefits administration to policy updates and communications. Managing job postings, coordinating candidate interviews and employee orientation tasks may become the shared responsibilities of an HR assistant.
                        </p>
                        
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                        <p>
                            Likewise, an appropriate candidate for an HR assistant role should be the type of individual who is a team player, with the skill set required for organizing a variety of company events, from job fairs to holiday parties and beyond. Intercom understands that the role of an HR assistant may report to any number of HR staff members, and be ready to contribute where needed.
                        </p>
                        <p>
                            Excellent staffing solutions for recruiters begin with our ability to provide the right candidate, typically an experienced and tenacious employee. Recruiters must understand your corporate culture, department needs, and work processes in order to locate candidates that are a good fit for your hiring managers or directors. At Intercom, we understand that new business opportunities often go hand in hand with recruitment capabilities to staff the right employees in a timely fashion. 
                        </p>
                        <p>
                            Obviously the best recruiters are adept at using appropriate job boards and digital media, such as LinkedIn, Indeed, CareerBuilder, Monster, and others. Beyond where to search, recruiter staff provided by Intercom are adept at drafting job posts that resonate and analyzing resumes in order to increase hiring campaign efficiencies.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const HumanResourcesPage = () => {
    return (
        <div>
            <HeaderBanner heading="Human Resources"/>

            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                    <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                    <p className="text-2xl text-black-900">
                        Many companies appropriately consider the HR department to be the heart, soul or nerve center of their business.
                    </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative z-10">
                        <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                        <p>
                            Regardless of the metaphor you use to describe human resources, it’s undeniable that professionalism and experience are sorely needed in such a workplace hub. Intercom understands that you need quality HR role players, many of whom wear a variety of hats, whether your company has tens, hundreds or thousands of employees.
                        </p>
                        <p>
                            If you need a temporary HR assistant, an experienced full-time recruiter, a savvy benefits administrator, a detail-oriented payroll specialist, a proven HR director or anything in between, Intercom is ready to assist. Our HR employee candidates possess a wide variety of talents, including knowledge about ACA compliance, 401k census discrimination testing, FLSA non-exempt vs. exempt coverage, paid sick leave compliance, payroll compliance, employee handbooks, workers compensation audits, and familiarity with technology such as ADP Enterprise and ADP Workforce Now.
                        </p>
                        <h3>HR Coordinators, managers and directors lead by example.</h3>
                        <p>
                            At the highest levels of your human resources department, depending on corporate structure, you may be looking for an experienced top notch HR director or HR manager to oversee and implement employment policies and procedures. Often times the HR director or manager will report directly to a C-level executives and be an active participant within the highest levels of management.
                        </p>
                        <p>
                            Intercom is the HR staffing firm your company can trust to source quality candidats to fill HR director and HR manager positions. At the highest level of Human Resources, directors and managers are prepared to handle the following responsibilities:
                        </p>
                        <ul role="list">
                            <li>Create job descriptions and organizational job charts.</li>
                            <li>Establish and communicate policies regarding employee attendance, holidays, vacation and leave, including FLMA and personal issues.</li>
                            <li>Manage employee benefit plans, including interfacing with brokers, benefit providers and employee communications.</li>
                            <li>Create processes and procedures for hiring, onboarding, orientation, training and termination.</li>
                        </ul>
                        </div>
                        <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                        <div className="rounded-md shadow">
                            <a
                            href="#"
                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Contact Us
                            </a>
                        </div>
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
                                src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                                alt="Whitney leaning against a railing on a downtown street"
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

export default HumanResourcesPage;