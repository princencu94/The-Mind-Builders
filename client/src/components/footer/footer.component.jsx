import { Link } from 'react-router-dom';

const navigation = {
    staffing: [
      { name: 'Administrative Support', href:'administrative-support' },
      { name: 'Finance Accounting', href:'finance-accounting' },
      { name: 'Human Resources', href:'human-resources' },
      { name: 'Behavioral Healthcare', href:'behavioral-healthcare' },
      { name: 'Healthcare Support', href:'healthcare-support' },
      { name: 'IT & Implementation', href:'information-technology' },
    ],
    job: [
      { name: 'Types of Staffing', href: 'types-of-staffing' },
      // { name: 'Job Search', href: 'job-search' },
      // { name: 'Submit your Resume', href: 'submit-your-resume' },
      // { name: 'Employee Recognization program', href: 'employee-recognization-program' },
     
    ],
    company: [
      { name: 'Mission Statement', href: 'our-mission' },
      { name: 'Compliance is our focus', href: 'compliance-is-our-focus' },
      { name: 'FAQS', href: 'faqs' },
      { name: 'Competitive Advantages', href: 'competitive-advantages' },
      // { name: 'Intercom Team', href: 'our-team' },
      { name: 'Contact Us', href: 'contact-us' },
    ],
    employer: [
      // { name: 'Ebooks', href: 'ebooks' },
      { name: 'Types of Staffing', href: 'types-of-staffing' },
      // { name: 'Staffing Specialist', href: 'staffing-specialist' },
      // { name: 'Growth Solutions', href: 'growth-solutions' },
      // { name: 'Case Studies', href: 'case-studies' },
      { name: 'Request New Talent', href: 'request-new-talent' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/company/35541527/admin/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
     
    ],
  }

const Footer = () => {
    return (
      <div>
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Staffing Specialists</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.staffing.map((item) => (
                    <li key={item.name}>
                      <Link to={ `/${item.href}` } className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Job Seeker</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.job.map((item) => (
                    <li key={item.name}>
                      <Link to={ `/${item.href}` } className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link to={ `/${item.href}` } className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Employer</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.employer.map((item) => (
                    <li key={item.name}>
                      <Link to={ `/${item.href}` } className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-500">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full secondary-color-bg flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-black hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link key={item.name} to={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2022 Intercom Staffing, Inc. All rights reserved.
          </p>
        </div>
      </div>
     
    </footer>      
    </div>
    )
}

export default Footer;