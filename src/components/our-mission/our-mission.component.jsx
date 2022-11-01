import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline';
import MissionImage from '../../assets/our-mission-2.jpg';
import MissionBg from '../../assets/careers-bg.png';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

export default function OurMission() {
  return (
    <div className="relative overflow-hidden bg-white pt-0 pb-0">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-25"
            src={MissionBg}
            alt="Background Waves"
          />
          <div className="absolute inset-0  mix-blend-multiply" aria-hidden="true" />
        </div> 
      <div className=" relative mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <Slide right>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-black sm:text-4xl">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-500">
                    In world filled with uncertainty, we strive to use data, experiences, forecasts, and gurus to ensure the successful implementation of any growth strategy we pursue. We strive to continually earn our reputation as a company known for high quality staffing and digital marketing results, earning our reputation as a flexible employment company known for our competence, integrity, innovation, and execution.
                </p>
                <div className="mt-6">
                  <Link
                    to="our-mission"
                    className="inline-flex rounded-full border border-transparent bg-yellow-300 px-6 py-2 text-base font-medium text-black shadow-sm hover:bg-yellow-200"
                  >
                    About us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </Slide>
          <Slide left>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={MissionImage}
                alt="Group of people gathered"
              />
            </div>
          </div>
          </Slide>
        </div>
      </div>
    </div>
  )
}
