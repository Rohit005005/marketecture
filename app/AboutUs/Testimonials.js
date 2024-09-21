// import Image from "next/image";

// export default function AboutTestimonies() {
//     return (
//         <div>
//             <div>
//                 <div className="justify-center items-center w-full sm:ml-10 ml-5">
//                     <h1 className="mt-10 text-[24px] sm:text-4xl font-bold bg-gradient-to-r from-pink-300 to-purple-700 bg-clip-text inline-block text-transparent">TESTIMONIALS</h1>
//                 </div>
//                 <div className="justify-center items-center w-full sm:ml-10 ml-5">
//                     <h1 className="mt-1 mb-5 text-[20px] sm:text-3xl font-bold">Don't <span className="bg-red-500 bg-clip-text inline-block text-transparent">Just take </span> Our Words For It!</h1>
//                 </div>
//             </div>
//                 <HorizontalScroll />
//         </div>
//     );
// }

// function HorizontalScroll() {
//     const itemsDetails = {
//         '1': "I'm impressed with this Bangalore-based digital marketing firm and the caliber of its work. Very professional, punctual, communicates effectively, and comes up with brilliant ideas on time.",
//         '2': "The team at Digital Corsel was really helpful. They are highly adaptable, responsive, and futuristic. Very professional, punctual, communicates effectively, and comes up with brilliant ideas on time.",
//         '3': "ROI: Our digital presence in the local market has been established by a team of talented and driven individuals at Digital Corsel.",
//         '4': "The complete team at this digital marketing agency is fantastic. They are dedicated and provided us with prompt replies. Simply said, they are the best.",
//         '5': "Satisfied with this SEO company in Bangalore for their better ROI than conventional marketing platforms. They were super easy to negotiate compared to the agencies and freelancers we worked with previously.",
//         '6': "This digital marketing company in Bangalore is one of the greatest I've come across in my extensive experience. If you're looking to engage an agency, you will get first-class advice and execution.",
//         '7': "If you need someone who can be creative, make your platform appear cool, and understand your demands, go no further. You only need to get in touch with Digital Corsel for their passionate and timely output.",
//     };

//     return (
//         <div className="ml-6">
//             <div className=" py-4">
//                 <div className="no-scrollbar overflow-x-auto flex space-x-16">
//                     {Object.entries(itemsDetails).map(([key, description]) => (
//                         <div key={key} className="flex items-center justify-center space-x-4">
//                             <div className="w-[500px] select-none">
//                                 <Image
//                                     src={`/svgs/testimonals_${key}.svg`}
//                                     width={490}
//                                     height={395}
//                                     alt={`Testimonial ${key}`}
//                                 />
//                             </div>
//                             <div className="w-64">
//                                 <p className="text-sm text-center select-none">{description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutTestimonies() {
    return (
        <div>
            <div>
                <div className="justify-center items-center w-full sm:ml-10 ml-5">
                    <h1 className="mt-10 text-[24px] sm:text-4xl font-bold bg-gradient-to-r from-pink-300 to-purple-700 bg-clip-text inline-block text-transparent">TESTIMONIALS</h1>
                </div>
                <div className="justify-center items-center w-full sm:ml-10 ml-5">
                    <h1 className="mt-1 mb-5 text-[20px] sm:text-3xl font-bold">Don't <span className="bg-red-500 bg-clip-text inline-block text-transparent">Just take </span> Our Words For It!</h1>
                </div>
            </div>
            <HorizontalScroll />
        </div>
    );
}

function HorizontalScroll() {
    const scrollRef = useRef(null);

    const itemsDetails = {
        '1': "I'm impressed with this Bangalore-based digital marketing firm and the caliber of its work. Very professional, punctual, communicates effectively, and comes up with brilliant ideas on time.",
        '2': "The team at Digital Corsel was really helpful. They are highly adaptable, responsive, and futuristic. Very professional, punctual, communicates effectively, and comes up with brilliant ideas on time.",
        '3': "ROI: Our digital presence in the local market has been established by a team of talented and driven individuals at Digital Corsel.",
        '4': "The complete team at this digital marketing agency is fantastic. They are dedicated and provided us with prompt replies. Simply said, they are the best.",
        '5': "Satisfied with this SEO company in Bangalore for their better ROI than conventional marketing platforms. They were super easy to negotiate compared to the agencies and freelancers we worked with previously.",
        '6': "This digital marketing company in Bangalore is one of the greatest I've come across in my extensive experience. If you're looking to engage an agency, you will get first-class advice and execution.",
        '7': "If you need someone who can be creative, make your platform appear cool, and understand your demands, go no further. You only need to get in touch with Digital Corsel for their passionate and timely output.",
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            scrollAmount += 1; // Adjust the speed of the scroll by changing this value
            if (scrollContainer) {
                scrollContainer.scrollLeft = scrollAmount;
                if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollAmount = 0; // Reset scroll to the beginning once it reaches the end
                }
            }
        };

        const intervalId = setInterval(scroll, 20); // Set interval to control scrolling speed

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="">
            <div className="py-4">
                <div ref={scrollRef} className="no-scrollbar overflow-x-auto flex space-x-16">
                    {Object.entries(itemsDetails).map(([key, description]) => (
                        <div key={key} className="flex items-center justify-center space-x-4">
                            <div className="w-[500px] select-none">
                                <Image
                                    src={`/svgs/testimonals_${key}.svg`}
                                    width={490}
                                    height={395}
                                    alt={`Testimonial ${key}`}
                                />
                            </div>
                            <div className="w-64">
                                <p className="text-sm text-center select-none">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
