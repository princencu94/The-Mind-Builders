/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline';

import { ChevronDownIcon } from '@heroicons/react/solid';
import logo from '../../assets/logo.png';
import { Link, Outlet } from 'react-router-dom';


const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]

const aboutIntercom = [
  {
    name: 'Mission Statement',
    href: 'our-mission',
    icon: SupportIcon,
  },
  {
    name: 'Compliance is our focus',
    href: 'compliance-is-our-focus',
    icon: SupportIcon,
  },
  {
    name: 'FAQS',
    href: 'faqs',
    icon: SupportIcon,
  },
  {
    name: 'Competitive Advantages',
    href: 'competitive-advantages',
    icon: SupportIcon,
  },
  {
    name: 'Intercom Team',
    href: 'our-team',
    icon: SupportIcon,
  },
  {
    name: 'Contact Us',
    href: 'contact-us',
    icon: SupportIcon,
  },
]

const staffing = [
  {
    name: 'Administrative Support',
    href: 'administrative-support',
    icon: SupportIcon,
  },
  {
    name: 'Finance Accounting',
    href: 'finance-accounting',
    icon: SupportIcon,
  },
  {
    name: 'Human Resources',
    href: 'human-resources',
    icon: SupportIcon,
  },
  {
    name: 'Behavioral Healthcare',
    href: 'behavioral-healthcare',
    icon: SupportIcon,
  },
  {
    name: 'Healthcare Support',
    href: 'healthcare-support',
    icon: SupportIcon,
  },
  {
    name: 'IT & Implementation',
    href: 'information-technology',
    icon: SupportIcon,
  },
]


const growth = [
  {
    name: 'Third Party Payroll Solutions',
    href: 'third-party-payroll-solutions',
    icon: SupportIcon,
  },
  {
    name: '1099 Independent Contractor Compliance',
    href: '1099-independent-contractor-compliance',
    icon: SupportIcon,
  }
]

const job = [
  {
    name: 'Types of Staffing',
    href: 'types-of-staffing',
    icon: SupportIcon,
  },
  {
    name: 'Job Search',
    href: 'job-search',
    icon: SupportIcon,
  },
  {
    name: 'Submit your Resume',
    href: 'submit-your-resume',
    icon: SupportIcon,
  },
  {
    name: 'Emoloyee Recognization program',
    href: 'employee-recognization-program',
    icon: SupportIcon,
  },
  {
    name: 'Blog',
    href: 'blog',
    icon: SupportIcon,
  }
]

const employer = [
  {
    name: 'Ebooks',
    href: 'ebooks',
    icon: SupportIcon,
  },
  {
    name: 'Types of Staffing',
    href: 'types-of-staffing',
    icon: SupportIcon,
  },
  {
    name: 'Staffing Specialist',
    href: 'staffing-specialist',
    icon: SupportIcon,
  },
  {
    name: 'Growth Solutions',
    href: 'growth-solutions',
    icon: SupportIcon,
  },
  {
    name: 'Case Studies',
    href: 'case-studies',
    icon: SupportIcon,
  },
  {
    name: 'Request New Talent',
    href: 'request-new-talent',
    icon: SupportIcon,
  }
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const Navbar = () => {
    return (
      <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Intercom Staffing</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center primary-color hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:main-color">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:main-color'
                      )}
                    >
                      <span className="primary-color">About Intercom</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'primary-color',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {aboutIntercom.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <Link
                                  to={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span className="primary-color">Staffing Specialties</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {staffing.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <Link
                                  to={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>               
              
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span className="primary-color">Growth Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {growth.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <Link
                                  to={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span className="primary-color">Job Seeker</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {job.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <Link
                                  to={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

                            
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                to="/submit-your-resume"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white secondary-color-bg hover:secondary-color-bg-8"
              >
                Submit Resume
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {aboutIntercom.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
  
                </div>
                <div>
                  <Link
                    to="/submit-your-resume"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white secondary-color-bg hover:secondary-color-bg-8"
                  >
                    Submit Resume
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <Outlet/>
    </div>
    )
}

export default Navbar;