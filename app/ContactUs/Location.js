import Image from "next/image";

export default function Location() {
    return (
        <div className="">
            {/* <div className="items-center justify-center grid md:grid-cols-3">
                <div>
                    <Image src="./svgs/address.svg" width="348" height="148" />
                </div>
                <div>
                    <Image src="./svgs/phone.svg" width="348" height="148" />
                </div>
                <div>
                    <Image src="./svgs/email.svg" width="348" height="148" />
                </div>
            </div>
            <div className="">
                    <Image src="./svgs/location_tag.svg" width="1440" height="500" />
            </div> */}
            <div className="">
                <div class="absolute w-full flex justify-center items-center inline-block">
                    <div class="absolute top-1/2 transform -translate-y-1">
                        <Image src={"/svgs/location_tag.svg"} width="1440" height="500" alt="Background Image" layout="fixed" class="w-full opacity-100" />
                    </div>
                    <div class="absolute flex space-x-4">
                        <Image src={"/svgs/address.svg"} alt="First Image" width="348" height="148" layout="fixed" class="w-1/3 " />
                        <Image src={"/svgs/phone.svg"} alt="Second Image" width="348" height="148" layout="fixed" class="w-1/3" />
                        <Image src={"/svgs/email.svg"} alt="Third Image" width="348" height="148" layout="fixed" class="w-1/3" />
                    </div>
                </div>
            </div>
        </div>
    );
}