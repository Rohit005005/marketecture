import PropTypes from "prop-types";


export default function Technology() {
    return (
        <div className={`bg-[url('../public/bg.png')] h-full bg-no-repeat bg-cover bg-center w-[1440px] max-w-full overflow-hidden flex flex-col items-end justify-start py-20 px-[103px] box-border relative gap-[57px] leading-[normal] tracking-[normal] text-left text-[40px] text-black font-body-1-bold ${PropTypes.string}`}>
            <div className="items-start justify-start">
                <div className="w-[633px] flex flex-col items-start justify-start gap-6 max-w-full">
                    <h1 className="text-[40px] py-08 font-[700] italic">
                        Technology
                    </h1>
                    <div className="text-[20px] py-10 font-[400] leading-8">
                        Innovation is at the core of our technological solutions.
                        We leverage cutting-edge technologies to architect and enhance your digital ecosystem,
                        ensuring seamless experiences across all touchpoints, from UI/UX Design to app development.
                    </div>
                </div>
                <button className={`cursor-pointer border-[#000] border-[1px] border-solid py-[14px] px-[36px] bg-[transparent] rounded-[32px] flex items-center justify-center hover:bg-[rgba(51,51,51,0.09)] hover:border-[#333] hover:border-[1px] hover:border-solid hover:box-border`}
                >
                    <b className="text-[16px] font-[500] font-bold ">
                        See More
                    </b>
                </button>
            </div>
        </div>
    );
}
