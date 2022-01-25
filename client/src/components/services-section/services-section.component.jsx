/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'
  
  import { Link } from 'react-router-dom';

const features = [
    { 
        name: 'Administrative Support', 
        icon: CloudUploadIcon, 
        content: "In today's competitive environment, virtually every business stands to gain from recognizable market identity.",
        href:"administrative-support"
      },
    { 
        name: 'Finance Accounting', 
        icon: LockClosedIcon,
        content: "Having a person to rally for your organization in all facets of marketing can yield high return and visibility, pretty rampantly.",
        href:"finance-accounting"
    },
    { 
        name: 'Human Resources', 
        icon: RefreshIcon,
        content:"Intercom Rockstars understand the product and use their people and lead-generation skills to solidify and close deals.",
        href:"human-resources"
    },
    { 
        name: 'Behavioral Healthcare', 
        icon: ShieldCheckIcon,
        content: "Intercom is a leader in the sourcing and staffing of top-tier advertising professionals and experts, contributing to comprehensive marketing strategies.",
        href:"behavioral-healthcare",
    },
    { 
        name: 'Healthcare Support',
         icon: CogIcon,
         content:"Most businesses experience growth-related events that impact productivity and sales. You need experts who can tell you how to pivot to create your next win.",
         href:"healthcare-support"
    },
    { 
        name: 'IT & Implementation', 
        icon: ServerIcon,
        content:"A strong top-tier backend is needed to bring strong marketing ideas to the surface; people who embrace the evolution of technology and growth.",
        href:"information-technology"
    },
  ]

const ServicesSection = () => {
    return (
        <div className="relative bg-white py-16 sm:py-24 lg:py-32">
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
    </div>
    )
}

export default ServicesSection;