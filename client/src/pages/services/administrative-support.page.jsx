import { Link } from 'react-router-dom';
import HeaderBanner from "../../components/header-banners/header-banners.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Footer from "../../components/footer/footer.component";
import AdminImage from '../../assets/Admin.jpg';

const TwoColumns = () => {
    return (
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">

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
                <h3>Customer service excellence is a must</h3>
                <p>
                    In today’s competitive business environment, it’s imperative that administrative support staff interfacing with customers be well-trained with regard to the mindset required for service excellence. Intercom employees are evaluated for their capacity to support sales and marketing functions when necessary. Their number one priority is compliance to the processes and goals set forth by your management team.
                </p>
                <p>
                    This may pertain to such tasks as maintaining inbound or outbound call volume quotas, or supporting product returns, RMAs and return authorization guidelines, along with billing support responsibilities that may include chargeback management.
                </p>
              </div>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                <h3>Supporting compliance and regulatory guidelines.</h3>
                <p>
                    Intercom administrative support staff within medical offices, clinical settings, legal offices, accounting firms, and financial settings are compliance-oriented. Part of the skills testing, evaluation, and matching prowess that our company is known for relates to vetting concerned with compliance.
                </p>
                <p>
                    From temps to direct hire employees, our goal is to protect our clients and reduce the risks associated with industry-specific regulations and compliance. Intercom healthcare administrative support personnel are familiar with patient privacy issues related to HIPAA-compliance and many are experienced with JCAHO audits and best practices.
                </p>
                <p>
                    Intercom admin support staff who work in legal offices, accounting firms and financial institutions are also cognitive of the privacy concerns, regulations, guidelines and risk factors that must be considered as well. Our pledge is to ensure that our pairing of skills leaves every workplace more efficient and more compliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

const AdministrativeSupportPage = () => {
    return (
        <div>
            <HeaderBanner heading="Administrative Support"/>

            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                    <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                    <p className="text-2xl text-black-900">
                        Intercom is a leader in the sourcing and staffing of top-tier administrative support workforce solutions. 
                    </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative z-10">
                        <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                        <p>
                            In today’s busy working environment, virtually every office stands to gain efficiency and productivity with the addition of an organized team player capable of supporting the administrative staff.
                        </p>
                        <p>
                            Popular administrative support roles and titles include: administrative assistant, customer service, data entry, receptionist, clerical support or marketing assistant. Administrative support staff are frequently required to perform a blend of administrative skills, usually determined by unique factors within your office workflow and processes, along with the strengths of the Intercom staff member provided.
                        </p>
                        <p>
                            Our company offers flexible administrative support staffing solutions, including temps, full-time, temp-to-hire and direct hire employees.
                        </p>
                        <h3>Administrative and clerical support makes your office</h3>
                        <p>
                            Administrative assistants provide clerical support for any number of office staff, often including an office manager. A qualified administrative assistant is prepared to support the needs of multiple supervisors and act as receptionist as needed. Administrative assistants must possess strong organizational skills, particularly with regard to standard computer applications and filing. Intercom administrative assistants are also expected to provide support with research and project coordination, including the interpersonal skills required to clearly communicate with management, clients, customers and vendors alike.
                        </p>
                        </div>
                        
                    </div>
                    <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                        <svg
                        className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                        >
                        <defs>
                            <pattern
                            id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                            >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
                        </svg>
                        <blockquote className="relative bg-white rounded-lg shadow-lg">
                        <img
                                className="rounded-lg shadow-lg object-cover object-center"
                                src={AdminImage}
                                alt="Guy Typing on the computer"
                                width={1184}
                                height={500}
                            />
                        </blockquote>
                    </div>
                    </div>
                </div>
                </div>
                <TwoColumns/>
                <CallToAction/>
                <Footer/>
            </div>
    )
}

export default AdministrativeSupportPage;