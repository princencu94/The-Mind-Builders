import HeaderBanner from "../../components/header-banners/header-banners.component";
import Footer from "../../components/footer/footer.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [


    {
      name: 'Web Development',
      description: 'Exceptionally designed websites with attention to detail that meet every requirement. We deliver impactful, visually stunning web design that is fresh and that gets results.',
    },
    { name: 'Mobile App Development', description: 'Native and scalable universal app development for all mobile OS platforms. Optimal end-user experience within a stable, refined and fully defined app.' },
    {
      name: 'Creative',
      description: 'Stunning creative that reflects your brand, and amplifies it across all digital channels. We want to see your business thrive and look fantastic doing it. Reach new heights of imagination, problem-solving and collaboration.',
    },
    { name: 'Visual Identity', description: 'Articulate your visual identity, logo design, brand imagery and custom iconography that will leave a strong first impression.' },
    
  ]

const OurCapabilitiesPage = () => {
    return (
        <div>
            <HeaderBanner heading="Our Capabilities"/>
            <section>
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
                        <div>
                        <h2 className="text-lg font-semibold text-yellow-300">Everything you need</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-black">for all our IT Organizations</p>
                        <p className="mt-4 text-lg text-gray-500">
                            We have a dedicated team that pushes to Help and assist IT Organizations which need various services we mainly offer. We aim at Excellence, Great Communication and Effectiveness in all we strive to do 
                        </p>
                        </div>
                        <div className="mt-12 lg:col-span-2 lg:mt-0">
                        <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
                            {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                <CheckIcon className="absolute h-6 w-6 text-yellow-300" aria-hidden="true" />
                                <p className="ml-9 text-lg font-medium leading-6 text-black">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                            </div>
                            ))}
                        </dl>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction/>
            <Footer/>
        </div>

          
    )
}

export default OurCapabilitiesPage;