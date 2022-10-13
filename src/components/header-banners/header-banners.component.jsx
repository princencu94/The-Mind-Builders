import Banner from '../../assets/banner.png';

const HeaderBanner = ({ heading }) => {
    return (
        <div className="relative bg-black">
            <div className="absolute inset-0">
                <img
                className="w-full h-full object-cover"
                src={Banner}
                alt="Background Banner"
                />
                <div className="absolute inset-0 bg-yellow-300 mix-blend-multiply" aria-hidden="true" />
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-center text-black sm:text-5xl lg:text-4xl">{heading}</h1>
            </div>
        </div>
    )
}

export default HeaderBanner;