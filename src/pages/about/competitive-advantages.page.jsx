import Navbar from "../../components/navbar/navbar.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import Footer from "../../components/footer/footer.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import { ExternalLinkIcon } from '@heroicons/react/solid';
import { CheckIcon } from '@heroicons/react/outline';

const ProcessSection = () => {
    return (
        <div className="relative bg-gray-800">
            <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
                alt=""
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Our process is what makes Intercom the best staffing company</h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
                <p className="mt-3 text-lg text-gray-300">
                    We don’t mind giving away our secret sauce. More than what we do, it’s the manner in which we do it that makes Intercom special.
                </p>
                <div className="mt-8">
                    <div className="inline-flex rounded-md shadow">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                    >
                        Contact Us
                        <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const features = [
    {
        name: 'In-depth needs analysis with client ',
        description: 
        `Understand corporate culture and environmental factors.
        On-site client visit(s).
        Clearly define staff necessities and job requirements`
      ,
      },
    
    {
      name: 'Interviews',
      description: `Provide employee background materials and salary requirements.
      With Intercom stamp of approval `
    },
    {
      name: 'Skill Testing',
      description: 'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
    },
    {
      name: 'Checking References',
      description: 'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
    },
    {
        name: 'Recruitment ',
        description:
        `Source candidates from the national Intercom database.
        Targeted recruitment marketing plan...`
      ,
      },
  ]


  const features2 = [
    {
        id: 1,
        description: 
        `Update clients daily, weekly or any customized time-frame that suits staffing situational analysis. `
      ,
      },
    
    {
      id: 2,
      description: `During recruitment stage, Intercom offers a variety of free training resources for supporting the knowledge base and skills that are in high demand.`
    },
    {
      id: 3,
      description: 'After start date, offer ongoing support to offer client feedback channel to employee, again to maximize communication, along with adoption of corporate culture. ',
    },
    {
      id: 4,
      description: 'Intercom is available to clients and employees seeking to alter agreements, when necessary, in order to adapt to changing business needs. ',
    },
    {
        id: 5,
        description:
        `Provide employee feedback status reports to ensure maximal communication.`
      ,
      },
  ]
const Features = () => {
    return (
        <div>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-base font-semibold uppercase tracking-wider text-black-300">INTERCOM HIGH-QUALITY STAFFING</h2>
                    <p className="mt-2 text-black text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Recruitment Process
                    </p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative">
                        <dt>
                            <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                            <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                        </dt>
                        <dd className="mt-2 ml-9 text-base text-gray-500">
                            {feature.description}
                        </dd>
                        </div>
                    ))}
                    </dl>
                </div>
            </div>      
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-base font-semibold uppercase tracking-wider text-black-300">INTERCOM HIGH-QUALITY STAFFING</h2>
                    <p className="mt-2 text-black text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Client Service Commitment 
                    </p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {features2.map((feature) => (
                        <div key={feature.id} className="relative">
                        <dt>
                            <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                            <p className="ml-9 text-base leading-6 font-medium text-gray-500">{feature.description}</p>
                        </dt>

                        </div>
                    ))}
                    </dl>
                </div>
            </div>
    
    </div>
    )
}

const CompetitiveAdvantages = () => {
    return (
        <div>
            <HeaderBanner heading="Competitive Advantages" />

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
                                Simply stated, there are two reasons that Intercom is considered the very best scaling staffing company by our clients and employees: Backend Support & Engagement.
                            </p>
                        </div>
                        <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                        <p>
                            Quality permeates every aspect of our business. It starts with our experience and familiarity with the industries we serve. Few staffing agencies have our depth of knowledge regarding flexible staffing solutions that satisfy the front-end web development, sales, marketing, HR, customer service, admin and digital sectors.
                        </p>
                        <p>
                            The quality we’ve gained by way of experience is an important differentiator, but it’s our commitment level that’s cited most often by satisfied clients and employees. You may find any number of staffing agencies that tout their commitment to client satisfactions, but at Intercom, we credit our stellar reputation with our commitment to satisfying employees. After all, it’s human relationships that drive business success.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <ProcessSection/>
                <Features/>
                <CallToAction/>
                <Footer/>

        </div>
    )
}

export default CompetitiveAdvantages;