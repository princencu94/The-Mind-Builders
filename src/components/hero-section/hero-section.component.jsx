import HeroImage from '../../assets/Intercom.jpeg';
import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';



const HeroSection = () => {
  
    return (

      <>
        <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">

                  </div>
                </div>

              </nav>
            </div>


          </Popover>

          <main className="mx-auto m-0 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-5 lg:px-8 xl:mt-2">
            <div className="sm:text-center lg:text-left transition ease-in-out delay-200">
            <Fade top big>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Intercom Staffing</span>{' '}
                <span className="block text-yellow-300 xl:inline">Agency</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Intercom is a national employment agency focused on compliance-oriented staffing. We offer temp staffing, direct hire, independent consultants, and third-party staffing options. Our clients benefit from workforce solutions that reduce risks and increase profits.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full shadow">
                  <Link
                    to="/contact-us"
                    className="flex w-full items-center justify-center rounded-full border border-transparent bg-yellow-300 px-8 py-3 text-base font-medium text-black hover:bg-yellow-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Lets Talk!
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#services"
                    className="flex w-full items-center justify-center rounded-full border border-transparent bg-yellow-100 px-8 py-3 text-base font-medium text-black hover:bg-yellow-300 md:py-4 md:px-10 md:text-lg"
                  >
                    How we can Help?
                  </a>
                </div>
              </div>
              </Fade>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Fade right big>
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={HeroImage}
            alt="A Woman in Business"
          />
        </Fade>
      </div>
    </div>
      </>
    )
}

export default HeroSection;