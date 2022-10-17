import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import HeaderBanner from "../../components/header-banners/header-banners.component";
import Footer from "../../components/footer/footer.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Slide from 'react-reveal/Slide';

const faqs = [
    {
      question: "How do I get directions to your offices?",
      answer:
        "Click here to locate our Philadelphia, PA. staffing office on Google Maps. Post Covid, we have not yet returned to working in the office. All of our staff is working remotely (and loving it!) As such, we host interviews at a sister company in King of Prussia, PA, or we host an interview lunch or breakfast at a location near Philadelphia for interested candidates."
    },
    {
        question: "Is Intercom Staffing Solutions a staffing agency?",
        answer:
          "Intercom is a full-service staffing firm. We provide our clients with custom staffing solutions. Our services include referral services, temp staffing, temp-to-hire staffing, direct hire staffing, full-time and part-time staffing solutions.If you are in need of staffing, please contact us.If you are seeking employment with an Intercom client, let’s connect."
    },
    {
        question: "What does Referral Service mean?",
        answer:
          "At Intercom Staffing, sometimes all a company needs is a referral to a great candidate. This candidate is not on our W2, nor are they 1099 Independent Contractors. These referrals are people we know who may be able to do a great service for you and you are deciding how to screen them and place them on your team. We are the most “hands-off” with these professionals that we place, although our relationship with the candidates may be long-standing."
    },
    {
        question: "How much does Intercom know about Digital Marketing?",
        answer:
          "We know quite a bit when it comes to digital marketing! One of our founders has successfully launched her own private-label product that generated over $1 Million in profit in the first year, and it’s all thanks to her understanding of digital marketing. This does not make us experts, however, it has bridged us close to an outstanding number of professionals in this space, which led us to supporting other companies with talent in this arena."
    },
    {
        question: "What are the costs associated with working with Intercom?",
        answer:
          "Intercom Staffing is a recruiting resource for organizations. Our clients are only charged IF and WHEN we agree on a candidate for their hiring needs. Once a candidate is selected, if they are “direct-hires”, then there is a 20% of salary finders fee attached to that hire. If a candidate is selected through any other route (W2, 1099, C2C, or referral), then the placement fee obligation is between 15-25% on top of the hourly rate of the individual placed. These fees are all discussed and signed off on BEFORE a candidate is placed with you. There are no hidden fees with our company. The simplicity our clients crave is the simplicity that we provide."
    },

  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


const Faqs = () => {
    return (
        <div>
            <HeaderBanner heading="Frequently Asked Questions" />
            <Slide bottom>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                        <Disclosure as="div" key={faq.question} className="pt-6">
                            {({ open }) => (
                            <>
                                <dt className="text-lg">
                                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                    <span className="ml-6 h-7 flex items-center">
                                    <ChevronDownIcon
                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                        aria-hidden="true"
                                    />
                                    </span>
                                </Disclosure.Button>
                                </dt>
                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <p className="text-base text-gray-500">{faq.answer}</p>
                                </Disclosure.Panel>
                            </>
                            )}
                        </Disclosure>
                        ))}
                    </dl>
                    </div>
                </div>
            </div>
            
            <CallToAction/>
            <Footer/>
            </Slide>
        </div>
    )
}

export default Faqs;