import Image from "next/image";

export default function ContactCards() {
    return (
        <div className="pt-14 flex flex-col sm:flex-row items-center justify-center">
            <Image
                src={"/svgs/address.svg"}
                width={"348"}
                height={"148"}
            />
            <Image
                src={"/svgs/phone.svg"}
                width={"348"}
                height={"148"}
            />
            <Image
                src={"/svgs/email.svg"}
                width={"348"}
                height={"148"}
            />
            
        </div>
    );
}