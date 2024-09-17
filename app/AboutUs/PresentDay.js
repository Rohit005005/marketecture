export default function PresentDay() {
  return (
    <div className="sm:h-[380px] md:h-[560px] lg:h-[400px] bg-[url('../public/bgfull.png')] bg-cover bg-center drop-shadow-2xl rounded-2xl">
      <div className="items-center justify-center text-center ">
        <h1 className="px-4 mt-4 sm:mt-10 font-extrabold sm:text-4xl text-[24px] text-gray-600">
          Present Day: A Comprehensive Business Solutions Provider
        </h1>
      </div>
      <div className="pt-4 px-4">
        <svg
          width="100%"
          height="2"
          viewBox="0 0 640 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L638.257 1"
            stroke="url(#paint0_linear_625_33)"
            stroke-width="2"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_625_33"
              x1="-3.68227e-08"
              y1="1"
              x2="638"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F470D9" />
              <stop offset="1" stop-color="#6E68ED" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="sm:py-12 py-5 md:py-4 px-8 lg:py-8 items-center justify-center text-center text-[14px] sm:text-[18px]">
        <p>
          Today, Marketecture stands as a testament to what dedication and
          vision can achieve. We serve clients across various domains, including
          IT, dealerships, restaurants, transport, and real estate. Our
          expertise isn't limited to just marketing; we handle everything from
          strategic marketing and sales to designing and furnishing interiors.
          Whether you are looking for a new apartment or need a cloud kitchen,
          office space setup, or any other commercial space arrangement,
          Marketecture is your go-to partner.
        </p>
      </div>
    </div>
  );
}
