/* This example requires Tailwind CSS v2.0+ */
import {
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    RocketLaunchIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  
  import { Link } from 'react-router-dom';
  import Fade from 'react-reveal/Fade';

  import ContactSvg from '../../assets/contact.svg';

const features = [
    { 
        name: 'Administrative Support', 
        icon: CloudArrowUpIcon, 
        description: "In today's competitive environment, virtually every business stands to gain from recognizable market identity.",
        href:"administrative-support"
      },
    { 
        name: 'Digital Makerting', 
        icon: LockClosedIcon,
        description: "In the business industry, most target audiences needed a way or a guide to look for the right business for them. ",
        href:"digital-marketing"
    },
    { 
        name: 'Human Resources', 
        icon: RocketLaunchIcon,
        description:"Intercom Rockstars understand the product and use their people and lead-generation skills to solidify and close deals.",
        href:"human-resources"
    },
    { 
        name: 'Behavioral Healthcare', 
        icon: ShieldCheckIcon,
        description: "Intercom is a leader in the sourcing and staffing of top-tier advertising professionals and experts, contributing to comprehensive...",
        href:"behavioral-healthcare",
    },
    { 
        name: 'Sales Rockstars',
         icon: CogIcon,
         description:"Most businesses experience growth-related events that impact productivity and sales. You need experts who can tell you how to pivot to create your next win.",
         href:"sales-rockstars"
    },
    { 
        name: 'IT & Implementation', 
        icon: ServerIcon,
        description:"A strong top-tier backend is needed to bring strong marketing ideas to the surface; people who embrace the evolution of technology and growth.",
        href:"information-technology"
    },
  ]

const ServicesSection = () => {
    return (
      <div className="overflow-hidden bg-white " id="services">
        <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          
            <img className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" src={ContactSvg} alt="Contact" />

          
          <div className="relative py-10 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1">
            <Fade clear>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Growing Companies to Epic Heights</h2>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    We are well established and will continue to connect our clients to talented contributors
                </p>
              </Fade>
            </div>
            <Fade clear>
            <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
              {features.map((feature) => (
                <Link  to={feature.href}>
                <div className=" shadow-md ring-offset-4 ring-2 rounded-md p-5 ring-black hover:bg-yellow-50 hover:transition ease-in-out delay-150 " key={feature.name}>
                  <dt>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 text-black ">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                </div>
                </Link>
              ))}
            </dl>
            </Fade>
          </div>
        </div>
      </div>
    )
}

export default ServicesSection;


{/* <div className="relative bg-white py-0 sm:py-24 lg:pb-8 lg:pt-20">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider main-color uppercase">More to choose from</h2>
        <p className="mt-2 text-3xl font-extrabold primary-color tracking-tight sm:text-4xl">
        Growing companies to epic heights
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        We are well established and will continue to connect our clients to talented contributors
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            {features.map((feature) => (
              <Link to={feature.href}>
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 secondary-color-bg rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium primary-color tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                     {feature.content}
                    </p>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          
          </div>
        </div>
      </div>
    </div> */}