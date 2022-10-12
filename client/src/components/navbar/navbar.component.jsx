/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ArrowDownRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import logo from '../../assets/logo-4.png';
import { Link, Outlet } from 'react-router-dom';


const aboutIntercom = [
  {
    name: 'Mission Statement',
    href: 'our-mission',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'Compliance is our focus',
    href: 'compliance-is-our-focus',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'FAQS',
    href: 'faqs',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'Competitive Advantages',
    href: 'competitive-advantages',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'Our Capabilities',
    href: 'our-capabilities',
    icon: ArrowDownRightIcon,
  },
  // {
  //   name: 'Intercom Team',
  //   href: 'our-team',
  //   icon: ArrowDownRightIcon,
  // },
  {
    name: 'Contact Us',
    href: 'contact-us',
    icon: ArrowDownRightIcon,
  },
]

const staffing = [
  {
    name: 'Administrative Support',
    href: 'administrative-support',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'Finance Accounting',
    href: 'finance-accounting',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'Human Resources',
    href: 'human-resources',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'Behavioral Healthcare',
    href: 'behavioral-healthcare',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'Healthcare Support',
    href: 'healthcare-support',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'IT & Implementation',
    href: 'information-technology',
    icon: ArrowDownRightIcon,
  },
]


const growth = [
  {
    name: 'Third Party Payroll Solutions',
    href: 'third-party-payroll-solutions',
    icon: ArrowDownRightIcon,
  },
  {
    name: '1099 Independent Contractor Compliance',
    href: '1099-independent-contractor-compliance',
    icon: ArrowDownRightIcon,
  }
]

const job = [
  {
    name: 'Types of Staffing',
    href: 'types-of-staffing',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'Careers',
    href: 'careers',
    icon: ArrowDownRightIcon,
  },
  // {
  //   name: 'Submit your Resume',
  //   href: 'submit-your-resume',
  //   icon: ArrowDownRightIcon,
  // },
  // {
  //   name: 'Emoloyee Recognization program',
  //   href: 'employee-recognization-program',
  //   icon: ArrowDownRightIcon,
  // },
  // {
  //   name: 'Blog',
  //   href: 'blog',
  //   icon: ArrowDownRightIcon,
  // },
  {
    name: 'Request New Talent',
    href: 'request-new-talent',
    icon: ArrowDownRightIcon,
  }
]

const employer = [
  // {
  //   name: 'Ebooks',
  //   href: 'ebooks',
  //   icon: ArrowDownRightIcon,
  // },
  {
    name: 'Types of Staffing',
    href: 'types-of-staffing',
    icon: ArrowDownRightIcon,
  },
  // {
  //   name: 'Staffing Specialist',
  //   href: 'staffing-specialist',
  //   icon: ArrowDownRightIcon,
  // },
  // {
  //   name: 'Growth Solutions',
  //   href: 'growth-solutions',
  //   icon: ArrowDownRightIcon,
  // },
  // {
  //   name: 'Case Studies',
  //   href: 'case-studies',
  //   icon: ArrowDownRightIcon,
  // },
  {
    name: 'Request New Talent',
    href: 'request-new-talent',
    icon: ArrowDownRightIcon,
  }
]

const companies = [

  
  {
    name: 'CitiFreedom',
    href: '#',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'Cyber Divers',
    href: '#',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'Gold Improv',
    href: '#',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'The Task Collectors',
    href: '#',
    icon: ArrowDownRightIcon,
  },
  {
    name: 'UpMySalary.Com',
    href: 'upmysalary.com/',
    icon: ArrowDownRightIcon,
  },
 
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
                  className="h-16 w-auto sm:h-16"
                  src={logo}
                  alt="Intercom Staffing Logo"
                />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-black',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900'
                      )}
                    >
                      <span className="text-black">About Intercom</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-yellow-300' : 'text-black',
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
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-50 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {aboutIntercom.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-300" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </Link>
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
                        open ? 'text-gray-900' : 'text-black',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900'
                      )}
                    >
                      <span className="text-black">Staffing Specialties</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-yellow-300' : 'text-black',
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
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-50 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {staffing.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-300" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </Link>
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
                        open ? 'text-gray-900' : 'text-black',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900'
                      )}
                    >
                      <span className="text-black">Growth Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-yellow-300' : 'text-black',
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
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-50 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {growth.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-300" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </Link>
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
                        open ? 'text-gray-900' : 'text-black',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900'
                      )}
                    >
                      <span className="text-black">Job Seeker</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-yellow-300' : 'text-black',
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
                      <Popover.Panel className="absolute -ml-4 mt-3 transform z-50 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {job.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-300" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </Link>
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
                to="/request-new-talent"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-yellow-300 hover:secondary-color-bg-8"
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
            className="absolute top-0 inset-x-0 z-50 p-2 transition transform origin-top-right md:hidden"
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
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100   focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
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
                        <item.icon className="flex-shrink-0 h-6 w-6 text-yellow-300" aria-hidden="true" />
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
                    to="/request-new-talent"
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