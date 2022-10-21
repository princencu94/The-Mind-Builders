import HeaderBanner from "../../components/header-banners/header-banners.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Footer from "../../components/footer/footer.component";
import { Link } from 'react-router-dom';
import DigitalImage from '../../assets/digital.jpg';
import Slide from 'react-reveal/Slide';

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
                <h3>Email Marketing</h3>

                <p>
                  Spreading the word of what our company can do, the email marketers are the ones who are inviting the target audiences to the company, knocking on their inboxes, spreading awareness through email campaigns for them
                </p>
                <p>
                  As Intercom Staffing strives to become an internationally known brand that unites the best of the best staffing services to companies and start-up business owners in the world, being a lead generator would mean that the role is fit for someone whose endeavors are aligned with attracting clients and converting them into customers. 
                </p>
              
                <p>
                  In a world filled with uncertainty, we strive to use data, experiences, forecasts, and gurus to ensure the successful implementation of any growth strategy we pursue. We strive to continually earn our reputation as a company known for high quality staffing and digital marketing results, earning our reputation as a flexible employment company known for our competence, integrity, innovation, and execution.
                </p>

                <p>
                  We embrace the competitive nature of business and seek to provide a significant advantage to every company, and each individual, with whom we interface.
                </p>
                <p>
                  As part of a well-established team, we are providing an opportunity to individuals who are adept at building email lists, creating and optimizing emails for conversion and sales, and keeping leads warm through email marketing.
                </p>
              </div>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                {/* <h3>Bookkeeper</h3>
                <p>
                    Overseeing accounts payable and accounts receivable functions. May include supervising accounts payable, accounts receivable and accounting clerk staff.
                </p>
                <ol role="list">
                    <li>Reconciling bank and general ledgers</li>
                    <li>Payroll processing</li>
                    <li>Month-end closings</li>
                    <li>Tracking fixed assets</li>
                    <li>Senior Accountant, Financial Reporting</li>
                    <li>Preparing depreciation schedules</li>
                    <li>Preparing the trial balance</li>
                </ol> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

const DigitalMarketingPage = () => {
    return (
        <div>
            <HeaderBanner heading="Digital Marketing"/>

            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                    <Slide bottom>
                    <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                    <p className="text-2xl text-black-900">
                      In the business industry, most target audiences needed a way or a guide to look for the right business for them. In order for the target audience to locate Intercom Staffing, a competent digital marketer is the right position to make it all work.
                    </p>
                    </div>
                    </Slide>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <Slide bottom>
                    <div className="relative z-10">
                        <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                        <p>
                          In a world filled with uncertainty, we strive to use data, experiences, forecasts, and gurus to ensure the successful implementation of any growth strategy we pursue. We strive to continually earn our reputation as a company known for high quality staffing and digital marketing results, earning our reputation as a flexible employment company known for our competence, integrity, innovation, and execution.
                        </p>
                        <p>
                          As our name suggests, the goal of Intercom is to unite the very best clients with strategically placed employees for successful and measurable growth.
                        </p>
                        <p>
                          We embrace the competitive nature of business and seek to provide a significant advantage to every company, and each individual, with whom we interface.
                        </p>
                        <p>
                        As part of a well-established team, we are providing an opportunity to individuals who are adept at maintaining and analyzing digital channels in order to generate leads and build brand awareness for Intercom Staffing.
                        </p>
                        </div>
                        <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                        <div className="rounded-full shadow">
                            <Link
                            to="/careers"
                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-black bg-yellow-300 hover:bg-yellow-200"
                            >
                                Marketing VA Opportunities
                            </Link>
                        </div>
                        </div>
                    </div>
                    </Slide>
                    <Slide right>
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
                                src={DigitalImage}
                                alt="Computer showing digital Marketing"
                                width={1184}
                                height={500}
                            />
                        </blockquote>
                    </div>
                    </Slide>
                    </div>
                </div>
            </div>
            <Slide bottom>
            <TwoColumns/>
            <CallToAction/>
            <Footer/>
            </Slide>
        </div>
    )
}

export default DigitalMarketingPage;