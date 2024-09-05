export default function Mission() {
    return (
        <div className="sm:h-[380px] md:h-[560px] lg:h-[400px] bg-[url('../public/bgfull.png')] bg-cover bg-center drop-shadow-2xl rounded-2xl">
            <div className="items-center justify-center text-center">
                <h1 className="px-4 mt-4 sm:mt-10 font-extrabold sm:text-4xl text-[24px] text-gray-600">OUR MISSION</h1>
            </div>
            <div className="pt-4 px-4">
                <svg width="100%" height="2" viewBox="0 0 640 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L638.257 1" stroke="url(#paint0_linear_625_33)" stroke-width="2" stroke-linecap="round" />
                    <defs>
                        <linearGradient id="paint0_linear_625_33" x1="-3.68227e-08" y1="1" x2="638" y2="1" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F470D9" />
                            <stop offset="1" stop-color="#6E68ED" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="sm:py-12 py-5 md:py-8 lg:py-14 px-8 align-middle items-center justify-center text-center text-[14px] sm:text-[18px]">
                <p>
                    To ensure long-term success for our companies, we strive diligently to combine
                    the best of digital and traditional marketing strategies. We will accomplish this
                    by focusing entirely on inexpensive, more easily measurable, and more unique techniques
                    and breakthroughs.
                </p>
            </div>
        </div>
    );
}
