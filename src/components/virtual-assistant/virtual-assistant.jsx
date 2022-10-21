import { Link } from 'react-router-dom';
import VirtualAssistantSvg from '../../assets/virtual-assistant.svg';
import CareersBg from '../../assets/careers-bg-2.jpg';
import Slide from 'react-reveal/Slide';

export default function VirtualAssistant() {
    return (
        <div className="relative bg-gray-50 py-16">
          <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={CareersBg}
            alt="Background Waves"
          />
          <div className="absolute inset-0  mix-blend-multiply" aria-hidden="true" />
        </div>
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
                  We are looking for quality VA's.
                </h2>
                <p className="mt-6 text-lg text-gray-500">
                    At Intercom we aim to give the best people who are qualified for the Job to our Clients. We currently have a number of roles that need filling for VA's in Real Estate, Sales and Marketing positions. 
                </p>
                <div className="mt-8 sm:flex">
                <div className="rounded-full shadow">
                  <Link
                    to="/careers"
                    className="flex items-center justify-center rounded-full border border-transparent bg-yellow-300 px-5 py-3 text-base font-medium text-black hover:bg-yellow-200"
                  >
                    Open Careers with Intercom?
                  </Link>
                </div>
              </div>
                </div>
            </div>
            </Slide>
        </div>
    )
  }
  