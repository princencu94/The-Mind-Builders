import { Link } from 'react-router-dom';
import HeroImage from '../../assets/hero-image.jpg';
const HeroSection = () => {
  
    return (
        <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block primary-color xl:inline">Intercom Staffing</span>{' '}
              <span className="block main-color xl:inline">Agency</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Intercom is a national employment agency focused on compliance-oriented staffing. We offer temp staffing, direct hire,
independent consultants, and third-party staffing options. Our clients benefit from workforce solutions that reduce risks and increase profits
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to="/contact-us"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black secondary-color-bg hover:secondary-color-bg-8 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/our-mission"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md primary-color bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={HeroImage}
            alt=""
          />
        </div>
      </main>
    )
}

export default HeroSection;