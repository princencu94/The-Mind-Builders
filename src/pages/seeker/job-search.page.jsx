import Footer from "../../components/footer/footer.component";
import Slide from 'react-reveal/Slide';

import CareersList from "../../components/careers/careers.component";

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
            <CareersList/>
            <Footer/>
            </Slide>
        </div>
    )
}

export default JobSearchPage;