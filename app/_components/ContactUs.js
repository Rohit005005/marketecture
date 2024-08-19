import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

export default function ContactUs() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>
        </div>
    )
}