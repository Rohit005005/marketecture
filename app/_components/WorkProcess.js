// components/WorkProcess.js
import React from "react";
import Image from "next/image";

const steps = [
    { id: 1, title: "Planning", description: "The first step in any successful digital marketing campaign is planning. This includes research into your target audience, your competitors and your overall goals.", color: "bg-green-400" },
    { id: 2, title: "Strategy", description: "This is where we’ll determine approaches to reach your target audience and accomplish your objectives. It’s crucial to choose the right digital marketing channels for your company.", color: "bg-red-400" },
    { id: 3, title: "Execution", description: "This is where the rubber meets the road. We’ll start implementing your digital marketing plan for running creative campaigns and many more.", color: "bg-blue-800" },
    { id: 6, title: "Repeat", description: "Once we’ve refined your business strategy and achieved your desired results, we can further restart the procedure to get even refined outcomes down the road.", color: "bg-blue-400" },
    { id: 5, title: "Refinement", description: "After analyzing your outcome, we adjust your digital marketing plan. This may include updating your website, social media, digital advertising or other strategies.", color: "bg-blue-400" },
    { id: 4, title: "Tracking and Analysis", description: "Analyzing and keeping tab of outcome is crucial. We’ll access what’s working and what’s not and make modification to enhance.", color: "bg-red-400" },
];

export default function WorkProcess() {
    return (
        <div className="flex flex-col items-center py-16 mt-16">
            <h1 className="text-5xl md:text-5xl font-extrabold text-center mb-2 leading-tight text-gray-900">
                We Always Follow The <br className="block" />
                Standard<span className="text-red-500"> Work Process</span>
            </h1>
            <p className="text-1xl md:text-1xl text-center mb-12 font-bold italic">
                We solve clients' projects in a simple & efficient way
            </p>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-6xl">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center text-center relative">
                        <div
                            className={`w-16 h-16 flex items-center justify-center rounded-full text-white ${step.color} text-xl font-bold mb-4 shadow-lg transform transition-transform hover:scale-105`}
                        >
                            {step.id}
                        </div>
                        <h2 className="text-xl font-semibold mb-4">{step.title}</h2>
                        <p className="text-gray-400">{step.description}</p>
                        {index < steps.length - 1 && (
                            <div>
                                <div className="absolute top-6 right-[-50%] md:right-[-62%] transform md:rotate-0 rotate-90">
                                    {step.id === 1 && <Image src="/svgs/arrow1.svg" alt="Arrow 1" width={330} height={20} />}
                                    {step.id === 2 && <Image src="/svgs/arrow2.svg" alt="Arrow 2" width={330} height={20} />}
                                </div>
                                <div className="absolute top-7 right-[-5%] md:right-[-5%] transform md:rotate-0 rotate-90">
                                    {step.id === 3 && <Image src="/svgs/arrow3.svg" alt="Arrow 3" width={150} height={20} />}
                                </div>
                                <div className="absolute top-[-15%] right-[-62%] md:right-[-62%] transform md:rotate-0 rotate-90">
                                    {step.id === 5 && <Image src="/svgs/arrow4.svg" alt="Arrow 4" width={330} height={20} />}
                                    {step.id === 6 && <Image src="/svgs/arrow5.svg" alt="Arrow 5" width={330} height={20} />}
                                </div>

                            </div>

                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
