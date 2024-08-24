"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { CircleArrowLeft } from "lucide-react";

function NavbarMobile({ onClose }) {
  return (
    <div className="fixed inset-0 bg-[url('../public/bgfull.png')] z-50 ">
      <div className="bg-white py-2 px-10 w-[99%] sm:w-[90%] mx-auto rounded-b-[50px] flex justify-between items-center relative">
        <button className="text-xl" onClick={onClose}>
          <CircleArrowLeft size={50} strokeWidth={1} />{" "}
        </button>
        <div className="w-[73px] sm:w-[93px] h-[50px] sm:h-[70px] flex justify-center items-center ">
          <Image src={"/logo.png"} width={900} height={100}/>
        </div>
      </div>
      <div className="flex flex-col mt-5 ">
        <div className="text-[24px] font-[800] mb-4 text-center border-b-[1px] border-[#9a9898ba]">Home</div>
        <div className="text-[24px] font-[800] mb-4 text-center border-b-[1px] border-[#9a9898ba]">Case Studies</div>
        <div className="text-[24px] font-[800] mb-4 text-center border-b-[1px] border-[#9a9898ba]">Services</div>
        <div className="text-[24px] font-[800] mb-4 text-center border-b-[1px] border-[#9a9898ba]">Blog</div>
        <div className="text-[24px] font-[800] mb-4 text-center border-b-[1px] border-[#9a9898ba]">Clients</div>
        <div className="text-[24px] font-[800] mb-4 text-center border-b-[1px] border-[#9a9898ba]">About Us</div>
        <div className="text-[24px] font-[800] mb-4 text-center border-b-[1px] border-[#9a9898ba]">Contact</div>
      </div>
    </div>
  );
}

function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="bg-white py-2 px-10 w-[99%] sm:w-[90%] mx-auto rounded-b-[50px] flex justify-between items-center relative">
      <div className="w-[73px] sm:w-[93px] h-[50px] sm:h-[70px] flex justify-center items-center">
        <Image src={"/logo.png"} width={900} height={100} />
      </div>
      <div className="flex justify-between items-center sm:gap-10 gap-5">
        <div className="text-black gap-5 text-[16px] hidden sm:flex">
          <Link href="/">
            <p>
              <b>Home</b>
            </p>
          </Link>
          <p>Case Studies</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Clients</p>
          <p>About Us</p>
          <p>Contact</p>
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
