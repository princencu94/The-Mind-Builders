import HeaderBanner from "../../components/header-banners/header-banners.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Footer from "../../components/footer/footer.component";
import { Link } from 'react-router-dom';
const StaffTypesPage = () => {
    return (
        <div>
            <HeaderBanner heading="Types of Staffing"/>

            <div className="py-16 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                    <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                    <p className="text-2xl text-black-900">
                        Intercom is much more than a temporary staffing agency because the needs of our clients stretch far beyond the "temporary"!
                    </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative z-10">
                        <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                            <h3>Temporary Staffing</h3>
                            <p>
                                Intercom has a network of growth professionals and also sources and recruits the employees necessary for short and long-term project assignments with its clients. We maintain compliance as the W-2 legal employer of record and simply charge a flat hourly rate. We’re also a multi-state licensed employer. Temporary and long-term placement staffing is a useful tool to supplement your organization by supplying qualified professionals who can help your company grow and maintain growth, right now.
                            </p>
                            <h3>Direct Hire Staffing</h3>
                            <p>
                                As a part of its temporary staffing solution, Intercom supplies employees for short and long term project assignments with the option for the client to hire the employee on a full-time basis. This is a cost effective way to transition the employee from our payroll to your company’s payroll. Why not “try before you buy?”
                            </p>
                            <h3>Digital Marketing EXPERT Solutions</h3>
                            <p>
                                Many companies need a Chief Marketing Officer in their organization but don’t have one, because their marketing needs do not necessitate a full-time expert. What Intercom can do for you is provide you with two options around this concern: 
                            </p>
                            <ol role="list">
                                <li>We can provide you with a Fractional CMO. A Fractional CMO is a senior level marketing leader who is brought in to establish or lead your company’s marketing function on a part-time or consultative basis. The Fractional part means you are getting a serious expert who is fully committed to your team, but at a fraction of the executive-level cost.</li>
                                <li>You can outsource specific marketing needs to our internal digital marketing team, supporting: Search Engine Optimization, Pay-per-Click, Email Marketing, Social Media Marketing, Content Marketing, Mobile Marketing, and Marketing Analytics. The scope of your reach can go way beyond your walls. Let us help you get there!</li>
                            </ol>
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
            <CallToAction/>
            <Footer/>
        </div>
    )
}

export default StaffTypesPage;