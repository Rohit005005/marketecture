import Image from "next/image";

export default function Location() {
    return (
        <div className="relative flex flex-col items-center">
            {/* Container for the three top images */}
            <div className="relative flex space-x-4 z-20">
                <Image
                    src={"/svgs/address.svg"}
                    alt="First Image"
                    width="348"
                    height="148"
                    className="w-1/3"
                />
                <Image
                    src={"/svgs/phone.svg"}
                    alt="Second Image"
                    width="348"
                    height="148"
                    className="w-1/3"
                />
                <Image
                    src={"/svgs/email.svg"}
                    alt="Third Image"
                    width="348"
                    height="148"
                    className="w-1/3"
                />
            </div>

            {/* Background image positioned below the top images */}
            <div className="relative w-full flex justify-center mt-[-108px] z-10">
                <Image
                    src={"/svgs/location_tag.svg"}
                    width="1440"
                    height="500"
                    alt="Background Image"
                    className="w-full"
                />
            </div>
        </div>
    );
}
