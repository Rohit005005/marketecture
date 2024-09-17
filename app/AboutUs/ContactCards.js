import Image from "next/image";

export default function ContactCards() {
  return (
    <div className="pt-14 flex flex-col sm:flex-row items-center justify-center gap-14">
      <div className="flex bg-[#FFFFFF] w-[300px] h-[120px]  justify-center items-center p-5 gap-5 rounded-lg shadow-xl">
        <div className="w-[200px] flex ">
          <Image
            src={"/locLogo.png"}
            alt="location icon"
            width="100"
            height="100"
          />
        </div>
        <div>
          <h1 className="text-[14px] font-[500]">Address:</h1>
          <p className="text-[12px] font-[400]">
            39, Paddana Reddy Layout Rd, Nanjappa Garden, Horamavu, Bengaluru,
            Karnataka 560043
          </p>
        </div>
      </div>
      <div className="flex bg-[#FFFFFF] w-[300px] h-[120px]  justify-start items-center p-5 gap-5 rounded-lg shadow-xl">
        <div className="w-[65px] flex ">
          <Image
            src={"/phoneLogo.png"}
            alt="location icon"
            width="100"
            height="100"
          />
        </div>
        <div>
          <h1 className="text-[14px] font-[500]">Phone:</h1>
          <p className="text-[12px] font-[400]">9900929710</p>
        </div>
      </div>
      <div className="flex bg-[#FFFFFF] w-[300px] h-[120px]  justify-start items-center p-5 gap-5 rounded-lg shadow-xl">
        <div className="w-[65px] flex ">
          <Image
            src={"/emailLogo.png"}
            alt="location icon"
            width="100"
            height="100"
          />
        </div>
        <div>
          <h1 className="text-[14px] font-[500]">Email:</h1>
          <p className="text-[12px] font-[400]">info@marketecture.in</p>
        </div>
      </div>
    </div>
  );
}
