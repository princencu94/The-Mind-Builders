import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <div className="primary-color-bg">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">You can count on Intercom</span>
                <span className="block">for staffing compliance</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                If you’re a professional with educational experience and/or certifications that speak to your compliance adherence, and you’re seeking to work with a Intercom client, let’s connect.
                </p>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <Link
                        to="/request-new-talent"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                        Request New Job
                        </Link>
                    </div>
                    <div className="ml-3 inline-flex">
                        <Link
                        to="/request-new-talent"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                        >
                        Submit Your Resume
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction;