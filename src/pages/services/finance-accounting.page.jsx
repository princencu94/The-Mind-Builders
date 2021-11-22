import Navbar from "../../components/navbar/navbar.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Footer from "../../components/footer/footer.component";

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
                <h3>Accounts Payable Staffing</h3>

                <ul role="list">
                    <li>Manage invoices – match, batch and code entries.</li>
                    <li>Batch reconciliation.</li>
                    <li>Manage, report and communicate status of payable accounts Resolve issues regarding vendor or customer payments.</li>
                    <li>Update and reconcile and sub-ledger and general ledger.</li>
                    <li>Manage chargebacks and other credit-related issues as needed.</li>
                    <li>Work in coordination with other accounting department staff, including accounts receivable, tax accounting, credit and collections staff.</li>
                </ul>
                <p>
                    Intercom will work with members of your management team to develop and support the staffing strategies that suit the ever-changing needs of your accounting and finance departments, Our goal is to continuously recruit employees to bolster our national database, ranging from clerks to CPAs, with a wide range of skills and levels of compensation.
                </p>
                <p>
                    Here’s a partial list that offers a snapshot of additional accounting and finance positions that Intercom  offers for temp, direct-hire, temp-to-hire, independent contractor and third party payroll staffing solutions:
                </p>
                <ol role="list">
                    <li>Financial Analyst</li>
                    <li>Business Analyst</li>
                    <li>Billing Analyst</li>
                    <li>Book Keeper</li>
                    <li>Senior Accountant, Financial Reporting</li>
                    <li>ERP Analyst</li>
                    <li>Clerk</li>
                    <li>Financial Customer Service Rep</li>
                    <li>Commercial Banker</li>
                </ol>
                <p>
                    If you are in need of an experienced accounting or finance professional, let’s talk.
                </p>
              </div>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                <h3>Bookkeeper</h3>
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
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

const FinanceAccountingPage = () => {
    return (
        <div>
            <HeaderBanner heading="Finance Accounting"/>

            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                    <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                    <p className="text-2xl text-black-900">
                        Most businesses experience seasonal and growth-related events that impact workloads for bookkeeping, credit, collecting and tax accounting staff.
                    </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative z-10">
                        <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                        <p>
                            Intercom offers cost-effective flexible staffing options to ensure that your finance and accounting responsibilities are met without waste or undue stress.
                        </p>
                        <p>
                            You can depend on Intercom for finance and accounting pros who are QuickBooks Certified and knowledgeable about the guidelines and standards that govern your workflows, including compliance with GAAP standards, state and federal regulations and laws, DSO guidelines and any governing bodies that pertain to your customers, clients or industry. Whether you need temp accounting support for month-end closing, quarterly filing, debt collections, or anything else that impacts your business objectives, Intercom has a timely staffing solution for you, within budget.
                        </p>
                        <h3>Finance and accounting temp staff, direct hire and contractors.</h3>
                        <p>
                            Administrative assistants provide clerical support for any number of office staff, often including an office manager. A qualified administrative assistant is prepared to support the needs of multiple supervisors and act as receptionist as needed. Administrative assistants must possess strong organizational skills, particularly with regard to standard computer applications and filing. Intercom administrative assistants are also expected to provide support with research and project coordination, including the interpersonal skills required to clearly communicate with management, clients, customers and vendors alike.
                        </p>
                        </div>
                        <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                        <div className="rounded-md shadow">
                            <a
                            href="#"
                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Contact Us
                            </a>
                        </div>
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
                                src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                                alt="Whitney leaning against a railing on a downtown street"
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

export default FinanceAccountingPage;