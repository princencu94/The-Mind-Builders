import { useState } from 'react'
import { CalendarIcon, ArrowUpTrayIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import CareerResumeModal from '../career-resume/career-resume.component';

const positions = [


  {
    id: 1,
    title: 'Digital Marketing',
    type: 'Virtual Assistant',
    postedDate: '2022-10-10',
    postedDateFull: 'October 10, 2022',
    href:"digital-marketing",
  },
  {
    id: 2,
    title: 'Email Marketing',
    type: 'Virtual Assistant',
    postedDate: '2022-10-10',
    postedDateFull: 'October 10, 2022',
    href:"email-marketing",
  },
  {
    id: 3,
    title: 'Outside Sales',
    type: 'Remote, Nationwide, USA',
    postedDate: '2022-10-10',
    postedDateFull: 'October 10, 2022',
    href:"outside-sales",
  },
  {
    id: 4,
    title: 'Lead Generator',
    type: 'Virtual Assistant',
    postedDate: '2022-10-10',
    postedDateFull: 'October 10, 2022',
    href:"lead-generator ",
  },
  {
    id: 5,
    title: 'Appointment Setter',
    type: 'Virtual Assistant',
    postedDate: '2022-10-10',
    postedDateFull: 'October 10, 2022',
    href:"appointment-setter",
  },
  {
    id: 6,
    title: 'Closer',
    type: 'Remote, Nationwide, USA',
    postedDate: '2022-10-10',
    postedDateFull: 'October 10, 2022',
    href:"closer ",
  },
  {
    id: 7,
    title: 'Real Estate VA',
    type: 'Virtual Assistant',
    postedDate: '2022-10-10',
    postedDateFull: 'October 10, 2022',
    href:"virtual-assistant",
  },
]

const CareersList = () => {

  const [showForm, setShowForm] = useState(false);

  const handleOpenCloseModal = () => {
      setShowForm(true)
  }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
                <div>
                <p className="text-3xl font-bold tracking-tight text-gray-900">Careers</p>
                <p className="mt-4 text-lg text-gray-500">
                    We always intend to help make sure we serve a purpose and make the impact by being able to provide opportunities as "Staffing" is what we know how to deal with.
                </p>
                </div>
                <div className="mt-12 lg:col-span-2 lg:mt-0">
                <p className="text-2xl font-medium tracking-tight text-gray-900">Currently open roles</p>
                    <div className=" mt-4 overflow-hidden bg-white shadow sm:rounded-md">
                    
                        <ul role="list" className="divide-y divide-gray-200">
                            {positions.map((position) => (
                            <li key={position.id}>
                                
                                <div className="px-4 py-4 sm:px-6 ">
                                  <Link to={position.href} className="block ">
                                    <div className="flex items-center justify-between">
                                    <p className="truncate text-sm font-medium text-black">{position.title}</p>
                                    <div className="ml-2 flex flex-shrink-0">
                                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                        {position.type}
                                        </p>
                                    </div>
                                    </div>
                                  </Link>
                                   
                                    <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                      <button onClick={handleOpenCloseModal} className="flex items-center text-sm text-gray-500">
                                        <ArrowUpTrayIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        Upload Resume
                                      </button>
                                    </div>
                                    
                                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <p>
                                        Posted on <time dateTime={position.postedDate}>{position.postedDateFull}</time>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        
           <CareerResumeModal showForm={showForm} setShowForm={setShowForm}/>     
          </div>
        
    )
}

export default CareersList;