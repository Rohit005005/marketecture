// components/Layout.js

import React from 'react';
import Animation from './Animation';
import PropTypes from "prop-types";
import Scroll from './Scroll_Util';
import Section from './Sections';
const FixedLayout = () => {
    return (
        <div>
            <Scroll />
            <div className="flex">
                {/* Fixed Sidebar (Left Part) */}
                <div className="w-1/4 h-screen p-4 sidebar">
                    <Animation />
                </div>

                {/* Scrolling Content Area (Right Part) */}
                <div className="w-3/4 p-4 content-wrapper">
                    <Section title="Branding" description="dfjgnlkj nfj gldf" buttonText="See more" />
                    <Section title="Branding" description="dfjgnlkj nfj gldf" buttonText="See more" />
                    <Section title="Branding" description="dfjgnlkj nfj gldf" buttonText="See more" />
                    <Section title="Branding" description="dfjgnlkj nfj gldf" buttonText="See more" />
                    <Section title="Branding" description="dfjgnlkj nfj gldf" buttonText="See more" />
                    <Section title="Branding" description="dfjgnlkj nfj gldf" buttonText="See more" />
                    <Section title="Branding" description="dfjgnlkj nfj gldf" buttonText="See more" />
                    <Section title="Branding" description="dfjgnlkj nfj gldf" buttonText="See more" />
                    <Section title="Branding" description="dfjgnlkj nfj gldf" buttonText="See more" />
                    <Section title="Branding" description="dfjgnlkj nfj gldf" buttonText="See more" />
                    {/* <div
                        className={` w-[1440px] max-w-full overflow-hidden flex flex-col items-end justify-start py-20 px-[103px] box-border relative gap-[57px] leading-[normal] tracking-[normal] text-left text-[40px] text-black font-body-1-bold ${PropTypes.string}`}
                    >
                        <div className="items-start justify-start">
                            <div className="w-[633px] flex flex-col items-start justify-start gap-6 max-w-full">
                                <h1 className="text-[40px] py-08 font-[700] italic">Branding</h1>
                                <div className="text-[20px] py-10 font-[400] leading-8">
                                    Our holistic branding solutions such as strategy, language and
                                    visualization not only ensure that your brand stands out amidst
                                    the noise but also resonates deeply with your audience thus
                                    touching ensuring connection.
                                </div>
                            </div>
                            <button
                                className={`cursor-pointer border-[#000] border-[1px] border-solid py-[14px] px-[36px] bg-[transparent] rounded-[32px] flex items-center justify-center hover:bg-[rgba(51,51,51,0.09)] hover:border-[#333] hover:border-[1px] hover:border-solid hover:box-border`}
                            >
                                <b className="text-[16px] font-[500] font-bold ">See More</b>
                            </button>
                        </div>
                    </div>
                    <div className={` w-[1440px] max-w-full overflow-hidden flex flex-col items-end justify-start py-20 px-[103px] box-border relative gap-[57px] leading-[normal] tracking-[normal] text-left text-[40px] text-black font-body-1-bold ${PropTypes.string}`}>
                        <div className="items-start justify-start">
                            <div className="w-[633px] flex flex-col items-start justify-start gap-6 max-w-full">
                                <h1 className="text-[40px] py-08 font-[700] italic">
                                    Creative Media
                                </h1>
                                <div className="text-[20px] py-10 font-[400] leading-8">
                                    Our creative media isn’t just about aesthetics; it’s about strategic vision.
                                    We blend imagination with purpose, steering your brand’s innovative endeavours
                                    towards impactful outcomes.
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
                    <div className={` w-[1440px] max-w-full overflow-hidden flex flex-col items-end justify-start py-20 px-[103px] box-border relative gap-[57px] leading-[normal] tracking-[normal] text-left text-[40px] text-black font-body-1-bold ${PropTypes.string}`}>
                        <div className="items-start justify-start">
                            <div className="w-[633px] flex flex-col items-start justify-start gap-6 max-w-full">
                                <h1 className="text-[40px] py-08 font-[700] italic">
                                    Marketing
                                </h1>
                                <div className="text-[20px] py-10 font-[400] leading-8">
                                    Our data-driven approach, combined with creative ingenuity,
                                    allows us to tailor strategies that resonate with your target audience,
                                    driving engagement, conversion, and long-term brand loyalty.
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
                    <div className={` w-[1440px] max-w-full overflow-hidden flex flex-col items-end justify-start py-20 px-[103px] box-border relative gap-[57px] leading-[normal] tracking-[normal] text-left text-[40px] text-black font-body-1-bold ${PropTypes.string}`}>
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
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default FixedLayout;
