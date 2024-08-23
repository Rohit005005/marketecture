// components/MarketingComponent.js
import React from 'react';
import Image from 'next/image';

const MarketingComponent = () => {
    return (
        <div className='items-center justify-center'>
            <div className="sm:ml-28 mt-8 mb-24 px-5 sm:px-0 sm:mr-24 ">
                <div>
                    <h1 className="font-extrabold mt-12 text-[24px] sm:text-4xl">
                        What's all the <span className="text-red-500 italic">buzz</span> about?
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 py-8 items-center justify-center">
                    <div>
                        <div className="grid grid-cols-10">
                            <h1 className="col-span-9 font-light py-8 text-lg">
                                5 Signs You Need to Hire a Digital Marketing Agency (and how to find the ideal one)
                            </h1>
                            <div className="col-span-1 flex items-center justify-center">
                                <Image src="black_dark_arrrow.svg" width={24} height={5} alt="Arrow Icon" />
                            </div>
                        </div>
                        <div className="border-t border-black"></div>
                        <div className="grid grid-cols-10">
                            <h1 className="col-span-9 font-light py-8 text-lg">
                                How can an Influencer Marketing Agency
                                expand your reach?
                            </h1>
                            <div className="col-span-1 flex items-center justify-center">
                                <Image src="black_dark_arrrow.svg" width={24} height={5} alt="Arrow Icon" />
                            </div>
                        </div>
                        <div className="border-t border-black"></div>
                        <div className="grid grid-cols-10">
                            <h1 className="col-span-9 font-light py-8 text-lg">
                                A Beginner’s Guide to working with an
                                Influencer Marketing Agency
                            </h1>
                            <div className="col-span-1 flex items-center justify-center">
                                <Image src="black_dark_arrrow.svg" width={24} height={5} alt="Arrow Icon" />
                            </div>
                        </div>
                        <div className="border-t border-black"></div>
                    </div>
                    <div className="ml-12 mt-12 mb-[25%] relative h-[200px] ">
                        <Image
                            src={"/marketing_image.svg"}
                            width={400}
                            height={300}
                            layout="fixed"
                            className="absolute top-[-4%] left-6"
                        />
                        <Image
                            src={"/explore_now.svg"}
                            width={76}
                            height={40}
                            layout="fixed"
                            className="absolute top-[-15%] left-0"
                        // className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingComponent;
