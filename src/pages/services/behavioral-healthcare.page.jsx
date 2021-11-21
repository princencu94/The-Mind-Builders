import Navbar from "../../components/navbar/navbar.component";
import HeaderBanner from "../../components/header-banners/header-banners.component";
import CallToAction from "../../components/call-to-action/call-to-action.component";
import Footer from "../../components/footer/footer.component";

const TwoColumns = () => {
    return (
        <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-max lg:max-w-7xl mx-auto">
                <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div className="text-base max-w-prose lg:max-w-none">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                        Temp staffing of licensed nurses and certified medical assistants.
                        </p>  
                    </div>
                </div>
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
                        <p>
                            Licensed Practical Nurses (LPNs) are in high demand do our nation’s growing healthcare needs. Uniforce maintains a healthy network of compassionate and experienced LPNs seeking temp work in clinical settings. “Organized, competent, compassionate, communicative, tolerant and talented.” These are the attributes we hear most often in the form of compliments for the licensed nurse staff we place.</p>
                        <p>
                            The LPNs we place are self-starters and highly trained in the basics, like taking vital signs, compiling health information, updating records, taking blood pressure, administering the use of catheters, oxygen suppliers and other frequently used medical equipment. Additionally, LPNs are adept at supervising nursing assistants and nursing aides. Running the spectrum of infant care to geriatric support, Intercom has the dependable staff available to bolster your clinical setting.
                        </p>
                        <p>
                            Certified Medical Assistants (CMAs) are integral participants in the delivery of excellent medical care. Intercom is a valued resource for our clinical healthcare clients because we provide temporary, temp-to hire and direct hire staffing of medical assistants who are certified and compliant with local, state and federal laws and guidelines. Whether your clinical healthcare needs require support for scheduling appointments, preparing treatment rooms for exams, providing clean and sterilized instruments, disposing of contaminated materials or any of the other duties that CMAs are qualified to perform, contact Intercom.
                        </p>
                        <p>
                            CMAs are also trained to take vital signs, take and record vital signs, conduct patient interviews, record medical information, collect specimens and administer medications with physician supervision. Depending on the clinical setting, a CMA may also contribute with any number of administrative duties, from scheduling tests to interfacing with hospital administrations.
                        </p>
                        <p>
                            Supplementing Allied Health Professional staffing requirements in education via in-person and now online methods, as a post-covid option for school districts.
                        </p>
                        
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                        <p>
                            Phlebotomists are among the health professionals available for temp staffing. Whether your clinical healthcare needs require blood collection for clinical lab testing or blood donation, a part-time phlebotomist may provide just the right level of staffing for productive and efficient procedures. Intercom offers phlebotomy staff that’s fully compliant with all applicable laws and regulations, including HIPAA privacy concerns. From properly sanitized equipment and storage to accurate labeling and safe transportation, you can rest assured that best practices are adhered to and safety protocols are strictly observed.
                        </p>
                        <p>
                            If your clinical lab, doctor’s office, community health center, nursing home, blood donation center, hospital or healthcare facility needs a competent phlebotomist, Intercom is ready to discuss your scheduling requirements.
                        </p>
                        <p>
                            Intercom also has you covered if your temporary or full-time staffing needs require diagnostic imaging technicians, including radiographers (medical imaging techs). When you need a technologist to assist radiologists and compassionately support patients, Intercom can help. We have skilled radiographers prepared to work with obtaining X-rays, CT (Computed Tomography) scans, MRI (Magnetic Resonance Imaging) scans and other diagnostic technologic tools employed. Clinical radiology performed in the operating theatre and diagnostic radiology performed in hospitals and offices are expected placements for the radiographers we help to gain employment, whether it’s on a temporary or director hire basis.
                        </p>
                        <p>
                            Credentialed sonographers and ultrasonographers are other medical personnel that Intercom places to satisfy specific clinical healthcare needs. Ultrasonic imaging professionals are available for placement as temp or full-time employees to support the needs of your clinical practice. Areas of specialties that correspond to the experience and credentialing of the employees available include obstetric and gynecologic, cardiac, vascular, obstetrical and general sonography.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const Behavioralhealthcare = () => {
    return (
        <div>
            <Navbar/>
            <HeaderBanner heading="Behavioral Healthcare"/>

            <div className="py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                    <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                    <p className="text-2xl text-black-900">
                        Like all things clinical, there’s a science to being one of the nation’s most trusted behavioral healthcare staffing agencies.
                    </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative z-10">
                        <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                        <p>
                            Trust comes from the knowing that Intercom focuses on matching our clients with certified behavioral healthcare professionals who understand that compliance to the laws, regulations and best practices that govern the healthcare industry are priority number one.
                        </p>
                        <p>
                            If your behavioral environment is in need of temp staffing to address patient to employee ratios, Intercom is here for you. If you’re seeking credentialed healthcare professionals, such as counselors, RNs, CMAs, phlebotomists, clinical data coordinators, clinical researchers, sonographers, teachers, radiographers or LPNs, Intercom has the staffing solution for you. Need a licensed healthcare temp, some staffing support for your temporary hiring shortage, or additional behavioral healthcare staff to ease the pressure of a sudden uptick in patient population? Intercom has a staffing solution for you.
                        </p>
                        <h3>Let the professionals manage your corporate growth.</h3>
                        <p>
                            In addition to helping companies grow internally- by increasing their talent workforce- we also tackle growth goals head-on for corporations nationwide. Intercom’s digital marketing experience has been offers staffing solutions for the data coordination and research needs that support your clinical staff. Clinical data coordinators are qualified to prepare and manage the documents and patient appointments, while also updating regulatory information and preparing reports. Intercom provided clinical data coordinators are proficient in the use of systems and applications used to support the tasks they perform.
                        </p>
                        <p>
                            If your clinical healthcare business is in need of a Clinical Research Coordinator (CRC), Intercom can find you a matching employee candidate who suits your requirements. Our staffing agency is experienced in providing CRC candidates who are adept at planning and coordinated strategies for maximizing research participant enrollment, training personnel and identifying new research opportunities. Clinical research coordinators establish the protocol eligibility and screen participants to determine qualifications for participation. CRCs are responsible for accuracy of research structure and timeliness of preparing documentation for review, and submitting findings to sponsors. Compliance with local and federal agencies, including the FDA and Institutional Review Board (IRB) are to be expected.
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

export default Behavioralhealthcare;