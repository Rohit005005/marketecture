import Image from "next/image";
import React from "react";

function Footer() {
  const footervectors1 = [
    {
      img: "/footervector1.png",
      name: "Lead Generation",
    },
    {
      img: "/footervector2.png",
      name: "Paid Media",
    },
    {
      img: "/footervector3.png",
      name: "Search Engine Optimisation",
    },
    {
      img: "/footervector4.png",
      name: "Creative Design",
    },
    {
      img: "/footervector5.png",
      name: "Creative Marketing",
    },
  ];

  const footervectors2 = [
    {
      img: "/footervector6.png",
      name: "Performance Marketing",
    },
    {
      img: "/footervector7.png",
      name: "Influencer Marketing",
    },
    {
      img: "/footervector8.png",
      name: "Web Design and Development",
    },
    {
      img: "/footervector9.png",
      name: "Google Ads Marketing",
    },
  ];
  return (
    <div className="flex flex-col bg-black p-20">
      <div className=" flex gap-20 justify-center">
        <div className="flex flex-col gap-10 w-[40%]">
          <div>
            <Image src={"/footerlogo.png"} height={100} width={100} />
          </div>
          <div>
            <p className="text-[16px] font-[400px] text-[#BBBBBB]">
              Marketecture is a dynamic branding and creative agency dedicated
              to transforming vision into iconic brand experiences. We serve as
              the catalyst propelling your brand's journey to success.
              Leveraging the transformative power of captivating storytelling
              and strategic brand building. With offices in the US, UK and
              India. We collaborate globally to craft high-impact strategies,
              digital experience and media solutions tailored to elevate your
              brand to new heights.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 whitespace-nowrap">
          <h1 className="text-[20px] font-[700] text-white">Solutions</h1>
          <h1 className="text-[16px] font-[400] text-[#BBBBBB]">Branding</h1>
          <h1 className="text-[16px] font-[400] text-[#BBBBBB]">
            Creative Media
          </h1>
          <h1 className="text-[16px] font-[400] text-[#BBBBBB]">Marketing</h1>
          <h1 className="text-[16px] font-[400] text-[#BBBBBB]">Technology</h1>
        </div>
        <div className="flex flex-col gap-10 whitespace-nowrap">
          <h1 className="text-[20px] font-[700] text-white">Company</h1>
          <h1 className="text-[16px] font-[400] text-[#BBBBBB]">
            News and Events
          </h1>
          <h1 className="text-[16px] font-[400] text-[#BBBBBB]">Blog</h1>
          <h1 className="text-[16px] font-[400] text-[#BBBBBB]">Work</h1>
          <h1 className="text-[16px] font-[400] text-[#BBBBBB]">Career</h1>
        </div>
        <div className="flex flex-col gap-10 whitespace-nowrap">
          <h1 className="text-[20px] font-[700] text-white">Contact</h1>
          <div className="text-[16px] font-[400] text-[#BBBBBB]">
            <p>Mail us</p>
            <p>hello@Marketecture.com</p>
          </div>
          <h1 className="text-[16px] font-[400] text-[#BBBBBB]">
            Business Enquiries
          </h1>
          <div className="text-[16px] font-[400] text-[#BBBBBB] whitespace-normal">
            <p>For any business enquiry, please fill up our</p>
            <strong>enqury from here</strong>
          </div>
          <div>
            <h1 className="text-[20px] font-[700] text-white">Follow us</h1>
            <div className="flex gap-5 justify-start items-center mt-5">
              <div className=" p-2 rounded-full flex justify-center items-center bg-[#FEC63E]">
                <Image src={"/linkedinlogo.png"} height={100} width={20} />
              </div>
              <div className=" p-2 rounded-full flex justify-center items-center bg-[#F34742]">
                <Image src={"/instalogo.png"} height={100} width={20} />
              </div>
              <div className=" p-2 rounded-full flex justify-center items-center bg-[#5FBEEA]">
                <Image src={"/facebooklogo.png"} height={100} width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 border-[#BBBBBB]" />
      <div className="flex gap-20 justify-center items-center">
      {footervectors1.map((item, index) => (
            <div className="flex gap-4" key={index}>
              <div className="flex justify-center items-center">
                <Image src={item.img} height={20} width={20} />
              </div>
              <p className="text-[16px] font-[400] text-[#BBBBBB]">
                {item.name}
              </p>
            </div>
      ))}
      </div>
      <div className="flex gap-20 justify-center items-center mt-10">
      {footervectors2.map((item, index) => (
            <div className="flex gap-4" key={index}>
              <div className="flex justify-center items-center">
                <Image src={item.img} height={20} width={20} />
              </div>
              <p className="text-[16px] font-[400] text-[#BBBBBB]">
                {item.name}
              </p>
            </div>
      ))}
      </div>
    </div>
  );
}

export default Footer;
