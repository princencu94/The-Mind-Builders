import HeaderBanner from "../../components/header-banners/header-banners.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Footer from "../../components/footer/footer.component";
import Slide from 'react-reveal/Slide';
import EmployeeBenefitsImg from '../../assets/benefits.jpg';
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline';

const features = [
    {
      name: 'Disablity',
      description: `<p className="mt-5 text-base leading-7 text-gray-600 text-left">Provides financial protection to cover income loss from a covered disability.<br/><br/> <strong>Individual and Group Short Term Disability:</strong> Replaces a portion of your employees income if they have an accident or illness and can't work. Optional features include protection for psychiatric and psychological conditions and waiver of elimination period for hospitalization. Also, now offering a solution to complement and supplement Paid Family Medical Leave (available in select states).</p>`,
      icon: CloudArrowUpIcon,
    },
    {
        name: 'Hospital Confinement',
        description: `<p className="mt-5 text-base leading-7 text-gray-600 text-left">Medical Bridge', also called hospital confinement, provides benefits to help cover the cost of a hospital stay and other medical procedures, regardless of what health
        insurance pays.
        <br/><br/><strong>Individual and Group Medical Bridge:</strong> Provides benefits 
        for a range of procedures and medical events, such as hospitalization, surgeries, diagnostic procedures, ICU and wellness screenings.
        </p>`,
        icon: ServerIcon,
      },
    {
      name: 'Dental',
      description: `<p className="mt-5 text-base leading-7 text-gray-600 text-left">Provides coverage for a wide range of dental services, from routine cleanings to root canals. There are no waiting periods for preventive or basic services, such as fillings and simple extractions. Offers additional savings through a large national network of providers. Options available for orthodontia, vision and an annual maximum rollover benefit.
      </p>`,
      icon: ArrowPathIcon,
    },
    {
      name: 'Accident',
      description: `<p className="mt-5 text-base leading-7 text-gray-600 text-left">From a fall to a car accident, this coverage offers a range of benefits to help cover medical or non-medical related expenses due to a covered accident.
      <br/><br/><strong>Individual and Group Accident:</strong> Provides benefits to help cover initial care, such as ER visits or x-rays, as well as more serious needs, such as fractures and dislocations. Includes follow-up care, like doctor's visits, and physical therapy to assist with recovery. Optional features include active lifestyle benefits and wellness.
      </p>`,
      icon: ShieldCheckIcon,
    },
    {
      name: 'Special Risk',
      description: `<p className="mt-5 text-base leading-7 text-gray-600 text-left">Provides lump-sum benefits for a diagnosis of a covered critical illness or cancer, as well as ongoing benefits for treatment.
      <br/><br/><strong>Individual and Group Cancer:</strong> Provides benefits for a cancer diagnosis and treatment. Option to add cancer screening benefit.
      <br/><strong>Individual and Group Critical Illness:</strong> Provides lump-sum benefits for a covered critical illness, such as a heart attack or stroke. Optional features include cancer treatment, cancer reoccurrence and a subsequent diagnosis benefit. Group critical illness also has heart benefits, infectious diseases, and progressive diseases riders available.
      </p>`,
      icon: CogIcon,
    },

    {
        name: 'Life',
        description: `<p className="mt-5 text-base leading-7 text-gray-600 text-left">Can provide financial protection for an employee's family in the event of a covered death.
        <br/><br/><strong>Individual Term Life:</strong> Term life is ideal for high demand working years. Flexible benefit design offers four term options (10-, 15-, 20- and 30-year), family coverage and a set death benefit payment. It can be renewed or converted to a
        whole life policy.<br/>
        <strong>Group Term Life:</strong> Flexible benefit designs with both employer and employee-paid options. Allows employees to purchase additional coverage at group rates. It's portable and convertible to a whole life policy under certain conditions.
        <br/><strong>Individual Whole Life:</strong> Provides protection for a lifetime. Features guaranteed level premiums and increasing cash values over time. Your employee may purchase the option to increase coverage on the second, fifth and eighth policy anniversary without answering health questions.
        </p>`,
        icon: LockClosedIcon,
      },
];

const TwoColumns = () => {
    return (
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-max lg:max-w-7xl mx-auto">
                <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div className="text-base max-w-prose lg:max-w-none">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                            What is the difference between Individual and Group benefits?
                        </p>  
                    </div>
                </div>
                <div className="relative">
                <svg
                    className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                >
                    <defs>
                    <pattern
                        id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                </svg>
                <svg
                    className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                >
                    <defs>
                    <pattern
                        id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                </svg>
                <div className="relative md:bg-white md:p-6">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                    <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                        <h4>Individual Benefits</h4>
                        <ul role="list">
                            <li>Employee-owned</li>
                            <li>Rate stable</li>
                            <li>Portable (employee can continue coverage after leaving the company)</li>
                            <li>Coverage is guaranteed renewable</li>
                            <li>No minimum participation requirement</li>
                        </ul>

                        <h4>Group Benefits</h4>
                        <ul role="list">
                            <li>Employer-owned with flexible underwriting</li>
                            <li>Guaranteed-issue options</li>
                            <li>Rate flexibility</li>
                            <li>Limited portability options</li>
                        </ul>
                        
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                    <h4>Common features across multiple products</h4>
                        <ul role="list">
                            <li>Coverage is available for spouses and eligible dependent children</li>
                            <li>Guaranteed issue with easy participation requirements</li>
                            <li>Benefits are payable directly to the insured</li>
                            <li>Employees can continue coverage with no increase in premiums if they retire or change jobs</li>
                            <li>Employees may receive benefits in addition to other insurance benefits</li>
                            <li>Premiums can be deducted from payroll for easy administration</li>
                            <li>HSA compliant</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const EmployeeBenefitsPage = () => {
    return (
        <div>
            <HeaderBanner heading="Employee Benefits"/>
            <Slide bottom>
                <div className="relative bg-white py-16 sm:py-32 lg:py-20">
                    <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                            Our clients benefit from big solutions that attract & retain employees, contractors, and part-time workers, all while increasing profit.
                        </p>
                        <div className="mt-20">
                        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
                            {features.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root rounded-lg bg-yellow-50 px-6 pb-8">
                                <div className="-mt-6">

                                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900 text-left">
                                    {feature.name}
                                    </h3>
                                    <div  className="text-left mt-3" dangerouslySetInnerHTML={{__html: feature.description}} />
                                    
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>


                <div className="bg-white py-16 lg:py-8">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-xl bg-yellow-300 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                        <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
                            <img
                            src={EmployeeBenefitsImg}
                            alt="Group of people working together"
                            className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="relative lg:col-span-1">
                            <blockquote className="mt-6 text-black">
                            <p className="text-xl font-bold sm:text-2xl">
                                "85% of all employers recognize voluntary benefits and services as an important part of their Total Rewards strategy"
                            </p>
                            <footer className="mt-6">
                                <p className="flex flex-col font-medium">
                                <span>Willis Towers Watson, 2021 Emerging Trends in Health Care Survey, 2021</span>
                               
                                </p>
                            </footer>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                </div>

            
            <TwoColumns/>
            <CallToAction/>
            <Footer/>
            </Slide>
        </div>
    )
}

export default EmployeeBenefitsPage;