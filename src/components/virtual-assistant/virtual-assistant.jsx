import { Link } from 'react-router-dom';
import VirtualAssistantSvg from '../../assets/virtual-assistant.svg';
import Slide from 'react-reveal/Slide';
export default function VirtualAssistant() {
    return (
        <div className="relative bg-gray-50 py-16">
            <Slide left>
            <div className="h-56 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
                <img
                className="h-full w-full "
                src={VirtualAssistantSvg}
                alt="Woman around a computer assiting"
                />
            </div>
            </Slide>
            <Slide bottom>
            <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
                <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
                
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Get a quality Real Estate VA for only $8/hr!
                </h2>
                <p className="mt-6 text-lg text-gray-500">
                    Attract more property sales and clients with our skilled, college-educated assistants. Sign up now and we’ll match you with the right assistant within 72 hours. 
                </p>
                <div className="mt-8 sm:flex">
                <div className="rounded-full shadow">
                  <Link
                    to="/virtual-assistant"
                    className="flex items-center justify-center rounded-full border border-transparent bg-yellow-300 px-5 py-3 text-base font-medium text-black hover:bg-yellow-200"
                  >
                    Find out more?
                  </Link>
                </div>
              </div>
                </div>
            </div>
            </Slide>
        </div>
    )
  }
  