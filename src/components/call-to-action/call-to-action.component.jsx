import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                <span className="block">You can count on Intercom</span>
                <span className="block">for staffing compliance</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-700">
                If you’re a professional with educational experience and/or certifications that speak to your compliance adherence, and you’re seeking to work with an Intercom client, let’s connect.
                </p>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-full shadow">
                        <Link
                        to="/contact-us"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-black bg-yellow-300 hover:bg-yellow-400"
                        >
                        Contact Us
                        </Link>
                    </div>
                    <div className="ml-3 inline-flex">
                        <Link
                        to="/request-new-talent"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-black bg-yellow-100 hover:bg-yellow-200"
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