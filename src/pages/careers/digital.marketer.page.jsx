import Footer from "../../components/footer/footer.component";
import Slide from 'react-reveal/Slide';

const DigitalMarketer = () => {
    return (
        <div>
            <Slide bottom>
            <div className="relative overflow-hidden bg-white py-16">
                <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                    <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                    <svg
                        className="absolute top-12 left-full translate-x-32 transform"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                        <pattern
                            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                        <pattern
                            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full translate-x-32 transform"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                        <pattern
                            id="d3eb07ae-5182-43e6-857d-35c643af9034"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                    </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-prose text-lg">
                    <h1>
                        <span className="block text-center text-lg font-semibold text-yellow-300">Digital Marketing</span>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-black sm:text-4xl">
                            Responsibilities
                        </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-500">
                        As a digital marketer, the responsibilities given to you are to maintain all of the following channels:
                    </p>
                    </div>
                    <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                    <ul role="list">
                        <li>Social Media Platforms such as Facebook, Tiktok, Twitter etc.</li>
                        <li>Company websites.</li>
                        <li>Search Engines such as Google, Yahoo, Bing etc.</li>
                        <li>Mobile apps such as Whatsapp, Instagram, etc.</li>
                        <li>Blogs</li>
                        <li>Online ads</li>
                        <li>Email advertisements/marketing</li>
                    </ul>
                    <p>
                        These are to ensure that you are adept in maintaining good performance on each channel as well as generating more leads, identifying weaknesses and measuring the analytics. In order to maintain good performance, a digital marketer has a keen observation on each channel with the following duties and responsibilities:
                    </p>

                    <ul role="list">
                        <li>Research advertising trends</li>
                        <li>Research competitors’ pricing and products</li>
                        <li>Decide on appropriate placement of ads</li>
                        <li>Determine what content will reach customers</li>
                        <li>Develop projects to create content</li>
                        <li>Publish digital marketing content online</li>
                        <li>Implement email marketing campaigns</li>
                        <li>Monitor social media and Google Analytics</li>
                        <li>Optimize paid advertising campaigns using SEO and other tools</li>
                        <li>Report on the growth and analytics of campaigns to stakeholders.</li>
                        <li>Conduct market research to inform campaigns.</li>
                    </ul>
                    
                    <p>
                        <span className="font-bold text-black">Educational Requirements</span> - A digital marketer has at least a bachelor's degree in relevance to content creating fields with business, technology, sales techniques, digital resources and/or English communications to ensure to keep track, analyze and organize each channel's data/sales.
                    </p>
                    <p>
                        <span className="font-bold text-black">Experience Requirements</span> - A digital marketer has sufficient training and experience in researching and promoting businesses via blogs, advertisements, social media and website contents.
                    </p>
                    </div>
                </div>
            </div>
            <Footer/>
            </Slide>
        </div>
        
    )
}

export default DigitalMarketer;