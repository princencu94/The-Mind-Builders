import Fade from 'react-reveal/Fade';
import CitiFreedom from '../../assets/logo-1.svg';
import GoldImprov from '../../assets/logo-6.svg';
import UpMySalary from '../../assets/logo-5.svg';
import CyberDivers from '../../assets/logo-3.svg';
import TaskManagers from '../../assets/logo-7.svg';
import Skipping360 from '../../assets/logo-8.svg'


const Clients = () => {
    return (
      <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <Fade left>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Intercom Staffing <br/> Companies
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Intercom Staffing Companies is a conglomerate committed to bettering the lives of those it touches. Each business operation is separate, allowing us to provide solutions to a number of world problems.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-full shadow">
                  <a
                    href="/contact-us"
                    className="flex items-center justify-center rounded-full border border-transparent bg-yellow-300 px-5 py-3 text-base font-medium text-black hover:bg-yellow-200"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              </Fade>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <Fade right>
            <div className="col-span-1 flex flex-col justify-center bg-yellow-50 py-8 px-8">
              <img
                className="max-h-32"
                src={CitiFreedom}
                alt="Citi Freedom Insuarance"
              />
              <p className='text-sm text-gray-700 text-center'>Citi Freedom Insuarance</p>
            </div>
            <div className="col-span-1 flex flex-col justify-center bg-yellow-50 py-8 px-8">
              <img className="max-h-32" src={CyberDivers} alt="Cyber Divers" />
              <p className='text-sm text-gray-700 text-center'>Cyber Divers</p>
            </div>
            <div className="col-span-1 flex flex-col justify-center bg-yellow-50 py-8 px-8">
              <img className="max-h-32" src={GoldImprov} alt="Gold Improv" />
              <p className='text-sm text-gray-700 text-center' >Gold Improv</p>
            </div>
            <div className="col-span-1 flex flex-col justify-center bg-yellow-50 py-8 px-8">
              <img
                className="max-h-32"
                src={TaskManagers}
                alt="The Task Collectors"
              />
             <p className='text-sm text-gray-700 text-center' >The Task Collectors</p>
            </div>
            <div className="col-span-1 flex flex-col justify-center bg-yellow-50 py-8 px-8">
              <img
                className="max-h-32"
                src={UpMySalary}
                alt="UpMySalary"
              />
               <p className='text-sm text-gray-700 text-center'><a href="http://upmysalary.com/" target="_blank">UpMySalary</a></p>
              
            </div>

            <div className="col-span-1 flex flex-col justify-center bg-yellow-50 py-8 px-8">
            <img
                className="max-h-32"
                src={Skipping360}
                alt="360 Skiptracing"
              />
               <p className='text-sm text-gray-700 text-center'>360 Skiptracing</p>
              
            </div>
            
            </Fade>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Clients;


// <div className="bg-white">
//       <div className="mx-auto max-w-6xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl text-center">
//           Intercom Staffing Companies
//         </h2>
//         <div className="mt-8 flow-root lg:mt-10">
//           <div className="-mt-4 -ml-8 flex flex-wrap justify-around lg:-ml-4">
//             <div className="mt-4 ml-8 flex flex-shrink-0 flex-col flex-grow lg:ml-0 lg:flex-grow-0">
//               <img className="h-24 w-auto" src={CitiFreedom} alt="Citi Freedom" />
//               <p className='text-sm text-yellow-700 text-center'>Citi Freedom Insuarance</p>
//             </div>
//             <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow flex-col lg:ml-0 lg:flex-grow-0">
//               <img className="h-24" src={CyberDivers} alt="Cyber Divers" />
//               <p className='text-sm text-gray-700 text-center'>Cyber Divers</p>
//             </div>
//             <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow flex-col lg:ml-0 lg:flex-grow-0">
//               <img className="h-24"src={GoldImprov} alt="Gold Improv" />
//               <p className='text-sm text-gray-700 text-center' >Gold Improv</p>
//             </div>
//             <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow flex-col lg:ml-0 lg:flex-grow-0">
//               <img className="h-24"src={TaskManagers} alt="The Task Collectors" />
//               <p className='text-sm text-gray-700 text-center' >The Task Collectors</p>
//             </div>
//             <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow flex-col lg:ml-0 lg:flex-grow-0">
//               <img className="h-24" src={UpMySalary} alt="UpMySalary" />
//               <p className='text-sm text-gray-700 text-center'><a href="http://upmysalary.com/" target="_blank">UpMySalary</a></p>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>