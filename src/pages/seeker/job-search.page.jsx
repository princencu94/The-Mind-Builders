import Footer from "../../components/footer/footer.component";
import Slide from 'react-reveal/Slide';

const marketings = [


    {
      title: 'Digital Marketing',
      href: '/careers/digital-marketing',
      description:
        'In the business industry, most target audiences needed a way or a guide to look for the right business for them. In order for the target audience to locate Intercom Staffing, a competent digital marketer is the right position to make it all work.',
    },
    {
      title: 'Email Marketing',
      href: '/careers/email-marketing',
      description: 'Spreading the word of what our company can do, the email marketers are the ones who are inviting the target audiences to the company, knocking on their inboxes, spreading awareness through email campaigns for them',
    },
  ]

  const sales = [


    {
      title: 'Outside Sales',
      href: '/careers/outside-sales',
      description:
        'You want to meet people personally and conduct sales to the customers or clients out in the field to test your interpersonal and marketing skills? Then being an outside sales representative is a job for you.',
    },
    {
        title: 'Closer',
        href: '/careers/closer',
        description: 'As part of the final blow in the sales process, a closer takes on the role of finding that perfect strategy into getting a prospect to become fully onboard with the services that we offer. ',
    },
    {
      title: 'Lead Generator',
      href: '/careers/lead-generator',
      description: 'Paving the way for a successful marketing campaign, the lead generators spearhead the lead generation processes of a marketing funnel. ',
    },
    {
        title: 'Appointment Setter',
        href: '/careers/appointment-setter',
        description: 'Do you enjoy talking to people, following a schedule, and are interested in sales? Then being an appointment setter might just be for you! ',
    },
    
  ]

const JobSearchPage = () => {
    return (
        <div>
            <Slide bottom>
            <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
                <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
                    <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Careers</h2>
                    </div>
                    <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                    {marketings.map((marketing) => (
                        <div key={marketing.title}>
                        
                        <a href="#" className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">{marketing.title}</p>
                            <p className="mt-3 text-base text-gray-500">{marketing.description}</p>
                        </a>
                        <div className="mt-3">
                            <a href={marketing.href} className="text-base font-semibold text-yellow-300 hover:text-yellow-200">
                                Read more
                            </a>
                        </div>
                        </div>
                    ))}
                    </div>

                    <div className="mt-16 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                    {sales.map((sale) => (
                        <div key={sale.title}>
                        
                        <a href="#" className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">{sale.title}</p>
                            <p className="mt-3 text-base text-gray-500">{sale.description}</p>
                        </a>
                        <div className="mt-3">
                            <a href={sale.href} className="text-base font-semibold text-yellow-300 hover:text-yellow-200">
                                Read more
                            </a>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            <Footer/>
            </Slide>
        </div>
    )
}

export default JobSearchPage;