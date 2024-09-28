"use client";
import PropTypes from "prop-types";
// import PropTypes from "prop-types";
import { useState } from 'react';

export default function InteriorDesignAndFurnishing() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`w-[1440px] max-w-full overflow-hidden items-end justify-start py-20 px-[13px] box-border relative gap-[57px] leading-[normal] tracking-[normal] text-left text-[40px] text-black font-body-1-bold ${PropTypes.string}`}
        >
            <div className="items-start justify-start">
                <div className="w-[633px] flex flex-col items-start justify-start gap-6 max-w-full">
                    <h1 className="text-[40px] py-08 font-[700] italic">Interior Design and Furnishing</h1>
                    <div
                        className={`text-[20px] py-10 font-[400] leading-8 ${isExpanded ? '' : 'line-clamp-2'}`}
                        style={{
                            height: isExpanded ? 'auto' : '108px', // Approx. 2 lines height in pixels, adjust based on font-size
                        }}
                    >
                        A well-designed space can significantly impact productivity and customer experience.
                        We offer complete interior design services, from initial concept to final furnishing.
                        Our solutions cater to all types of spaces, ensuring functionality and aesthetic appeal.
                    </div>
                </div>
            </div>
            <div className="w-[633px] flex flex-col items-center justify-center gap-6 max-w-full">
                <div className="items-center justify-center">
                    <button
                        onClick={toggleText}
                        className={`cursor-pointer hover:underline focus:outline-none border-[#000] border-[1px] border-solid py-[14px] px-[36px] bg-[transparent] rounded-[32px] flex items-center justify-center hover:bg-[rgba(51,51,51,0.09)] hover:border-[#333] hover:border-[1px] hover:border-solid hover:box-border`}
                    >
                        <b className="text-[16px] font-[500] font-bold ">{isExpanded ? 'Show Less' : 'Show More'}</b>
                    </button>
                </div>
            </div>
        </div >
    );
}
