"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { CircleArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

function NavbarMobile({ onClose }) {
  const path = usePathname();

  return (
    <div className="fixed inset-0 bg-[url('../public/bgfull.png')] z-50 ">
      <div className="bg-white py-2 px-10 w-[99%] sm:w-[90%] mx-auto rounded-b-[50px] flex justify-between items-center relative">
        <button className="text-xl" onClick={onClose}>
          <CircleArrowLeft size={50} strokeWidth={1} />
        </button>
        <div className="w-[73px] sm:w-[93px] h-[50px] sm:h-[70px] flex justify-center items-center ">
          <Image src={"/logo.png"} width={900} height={100} />
        </div>
      </div>
      <div className="flex flex-col mt-5 ">
        <Link href="/">
          <div className={`text-[24px] font-[500] mb-4 text-center border-b-[1px] border-[#9a9898ba] ${path == "/" && `font-[800]`}`}>
            Home
          </div>
        </Link>
        {/* <div className="text-[24px] font-[500] mb-4 text-center border-b-[1px] border-[#9a9898ba]">
          Case Studies
        </div> */}
        <Link href="/Services">
          <div className={`text-[24px] font-[500] mb-4 text-center border-b-[1px] border-[#9a9898ba] ${path == "/Services" && `font-[800]`}`}>
            Services
          </div>
        </Link>
        {/* <div className="text-[24px] font-[500] mb-4 text-center border-b-[1px] border-[#9a9898ba]">
          Blog
        </div> */}
        {/* <div className="text-[24px] font-[500] mb-4 text-center border-b-[1px] border-[#9a9898ba]">
          Clients
        </div> */}
        <Link href="/AboutUs">
          <div className={`text-[24px] font-[500] mb-4 text-center border-b-[1px] border-[#9a9898ba] ${path == "/AboutUs" && `font-[800]`}`}>
            About Us
          </div>
        </Link>
        <Link href="/ContactUs">
          <div className={`text-[24px] font-[500] mb-4 text-center border-b-[1px] border-[#9a9898ba] ${path == "/ContactUs" && `font-[800]`}`}>
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
}

function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const path = usePathname();

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="bg-white py-2 px-10 w-[99%] sm:w-[90%] mx-auto rounded-b-[50px] flex justify-between items-center relative">
      <div className="w-[73px] sm:w-[93px] h-[50px] sm:h-[70px] flex justify-center items-center">
        <Image src={"/logo.png"} width={900} height={100} />
      </div>
      <div className="flex justify-between items-center sm:gap-10 gap-5">
        <div className=" gap-5 hidden sm:flex">
          <Link href="/">
            <p className={`text-black  text-[16px] ${path == "/" && `font-[700]`}`}>Home</p>
          </Link>
          {/* <p className="text-black  text-[16px]">Case Studies</p> */}
          <Link href={"/Services"}>
            <p className={`text-black  text-[16px] ${path == "/Services" && `font-[700]`}`}>Services</p>
          </Link>
          {/* <p className="text-black  text-[16px]">Blog</p> */}
          {/* <p className="text-black  text-[16px]">Clients</p> */}
          <Link href={"/AboutUs"}>
            <p className={`text-black  text-[16px] ${path == "/AboutUs" && `font-[700]`}`}>About Us</p>
          </Link>
          <Link href={"/ContactUs"}>
            <p className={`text-black  text-[16px] ${path == "/ContactUs" && `font-[700]`}`}>Contact</p>
          </Link>
        </div>
        <div>
          <button className="bg-black text-white px-5 py-2 sm:text-[16px] text-[13px] whitespace-nowrap rounded-full">
            Enquire Now
          </button>
        </div>
        <div className="flex sm:hidden">
          <Image
            src={"/navbar.png"}
            width={30}
            height={100}
            onClick={handleMobileNavToggle}
          />
        </div>
      </div>
      {isMobileNavOpen && <NavbarMobile onClose={handleMobileNavToggle} />}
    </div>
  );
}

export default Navbar;
