import Footer from "../../components/footer/footer.component";
import Slide from 'react-reveal/Slide';
const Closer = () => {
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
                        <span className="block text-center text-lg font-semibold text-yellow-300">Closer</span>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-black sm:text-4xl">
                            Responsibilities
                        </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-500">
                        After another salesperson has already connected with a client, a closer does the follow-ups and closing deals in the sales process. A closer should be able to come up with a strategy to get clients who are close to be onboarded to avail Intercom Staffing services and be fully invested in it. The responsibilities and duties that a closer must uphold are as follows:
                    </p>
                    </div>
                    <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                    <ul role="list">
                        <li>Make sure that the terms are well-discussed to potential customers.</li>
                        <li>Collaborates with Intercom Staffing’s managers to address short and long-term sales goals and strategies.</li>
                        <li>If needed, upsell additional services.</li>
                        <li>Negotiate and close deals with targeted clients.</li>
                        <li>Builds and maintains a strong relationship with partners and clients.</li>
                        <li>Providing timely reports on sales activity and pipeline.</li>
                        <li>Achieving sales closed target.</li>
                    </ul>
                    <p>
                        <span className="font-bold text-black">Educational Requirements</span> - A closer should have a Bachelor’s degree in marketing, business, economics, communications, and/or any equivalent education that demonstrates expertise in customer engagement. 
                    </p>
                    <p>
                        <span className="font-bold text-black">Experience Requirements</span> - Having a previous experience as a closer is an advantage but not required. Any experience specific to the industry or service will contribute to the success of a Closer since it demonstrates existing knowledge to support sales goals and objectives. 
                    </p>
                    </div>
                </div>
            </div>
            <Footer/>
            </Slide>
        </div>
        
    )
}

export default Closer;