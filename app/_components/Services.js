import PropTypes from "prop-types";
// import PropTypes from "prop-types";
import Animation from "./Animation";


export default function Services() {
    return (
        <div>
            <Animation />
            <div className={` w-[1440px] max-w-full overflow-hidden flex flex-col items-end justify-start py-20 px-[103px] box-border relative gap-[57px] leading-[normal] tracking-[normal] text-left text-[40px] text-black font-body-1-bold ${PropTypes.string}`}>
                <div className="items-start justify-start">
                    <div className="w-[633px] flex flex-col items-start justify-start gap-6 max-w-full">
                        <h1 className="text-[40px] py-08 font-[700] italic">
                            Branding
                        </h1>
                        <div className="text-[20px] py-10 font-[400] leading-8">
                            Our holistic branding solutions such as strategy, language and
                            visualization not only ensure that your brand stands out amidst the
                            noise but also resonates deeply with your audience thus touching
                            ensuring connection.
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
        </div>
    );
}