import Footer from "../../components/footer/footer.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import VirtualForm from "../../components/virtual-form/virtual-form";
import { InboxArrowDownIcon, UserIcon, CogIcon, ComputerDesktopIcon, CheckIcon } from '@heroicons/react/24/outline'
import Slide from 'react-reveal/Slide';

const features = [


  {
    name: 'Real Estate Tasks',
    description: [
        {name: "Update property listings"},
        {name:"Research new listings"},
        {name:"Cold calling"},
        {name:"and more!"},
    ],
    icon: CogIcon,
  },
  {
    name: 'Remote Admin Work',
    description:[
        {name:"Data entry"},
        {name:"Email automation"},
        {name:"Digital workspace coordination"},
        {name:"Inbox management"}
    ],
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Executive Assistance',
    description:[
        {name:"Meeting and appointment scheduling"},
        {name:"Travel planning"},
        {name:"Note-taking"},
        {name:"Reminders"},
    ],
    icon: InboxArrowDownIcon,
  },
  {
    name: 'Flexible Staffing',
    description:[
        {name:"Increase or reduce VA hours easily"},
        {name:"Available outside standard office hours"},
        {name:"Get additional VAs as needed"},
        {name:"Billed weekly, no lock-ins"},
    ],
    icon: UserIcon,
  },
]

const features2 = [


    {
      name: 'Your Needs First',
      description:"We can find you any type of assistant you need to support and grow your business, such as a Real Estate Virtual Assistant!",
      icon: CheckIcon,
    },
    {
      name: 'Get an assistant in 72 hours',
      description:"We’ll find you a candidate based on your specs in 72 hours.",
      icon: CheckIcon,
    },
    {
      name: 'Flexible & Scalable',
      description:"Finding new assistants or adjusting their scheduled hours is quick and easy.",
      icon: CheckIcon,
    },
    {
      name: 'Rigorous Sourcing & Screening',
      description:'All candidates are rigorously screened. We go through hundreds of candidates to find you the best match.',
      icon: CheckIcon,
    },
  ]

export default function VirtualAssistantPage() {
    return (
        <div>
        <HeaderBanner heading="Virtual Assistant"/>

        <div className="relative bg-white py-16 sm:py-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                <div className="relative sm:py-16 lg:py-0">
                <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                 
                    
                </div>
                <Slide left>
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-5 lg:py-10 bg-gray-50 rounded-2xl shadow-md ">
                        <VirtualForm/>
                    </div>
                </Slide>
                </div>

                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                {/* Content area */}
                <Slide bottom>
                <div className="pt-12 sm:pt-16 lg:pt-20">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Get a quality Real Estate VA for only $8/hr!
                    </h2>
                    <div className="mt-6 space-y-6 text-gray-500">
                    <p className="text-lg">
                        Attract more property sales and clients with our skilled, college-educated assistants. Sign up now and we’ll match you with the right assistant within 72 hours. 
                    </p>
                    </div>
                </div>
                </Slide>
                </div>
            </div>
        </div>

        {/* Features Section */}
        <Slide bottom>
        <div className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-black sm:text-4xl">
                    The Assist You Need, Right When You Need It
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    You can trust Intercom’s Real Estate Virtual Assistants to simplify, streamline and organize your day-to-day work⁠—leaving you free to focus on the big picture.
                </p>
                </div>

                <div className="mt-10">
                <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-10 md:space-y-0">
                    {features.map((feature) => (
                    <div key={feature.name} className="relative">
                        <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 text-black">
                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-black">{feature.name}</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                        <ul>
                            {
                        
                        feature.description.map(des => 
                           <li key={des.name}>
                               {des.name}
                           </li>
                        )
                       
                        } </ul></dd>
                    </div>
                    ))}
                </dl>
                </div>
            </div>
        </div>
        </Slide>
        {/* Quickest way Section */}
        <Slide bottom>
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold leading-8 tracking-tight text-black sm:text-4xl">The Quickest Way to Your Next VA</h2>
                <p className="mt-4 text-lg text-gray-500">
                    Whether you need part-time or full-time help, one assistant or a remote team, Intercom offers the simplest, quickest options for accessing talent online.
                </p>
                </div>
                <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
                {features2.map((feature) => (
                    <div key={feature.name} className="relative">
                    <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 text-black">
                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-black">{feature.name}</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                    </div>
                ))}
                </dl>
            </div>
        </div>
        <Footer/>
        </Slide>
        </div>
    )
}