import Image from "next/image";
import React from "react";
import Link from 'next/link';


function Navbar() {
  return (
    <div className="bg-white py-2 px-10 w-[90%] mx-auto rounded-b-[50px] flex justify-between items-center">
      <div className="w-[93px] h-[70px] flex justify-center items-center">
        <Image src={'/logo.png'} width={900} height={100} />
      </div>
      <div className="flex justify-between items-center gap-10">
        <div className="text-black flex gap-5 text-[16px]">
          <Link href="/"><p><b>Home</b></p></Link>
          <p>Case Studies</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Clients</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div>
          <button className="bg-black text-white px-5 py-2 text-[16px] rounded-full">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
