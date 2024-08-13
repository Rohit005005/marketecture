import React from "react";

function ReadyToBuild() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-[40px] font-[800]">
          Ready to build
        </h1>
        <h1 className="text-[40px] italic">your stack to success?</h1>
        <button className={`cursor-pointer border-[#000] border-[1px]  mt-5 border-solid py-[14px] px-[36px] bg-[transparent] rounded-[32px] flex items-center justify-center hover:bg-[rgba(51,51,51,0.09)] hover:border-[#333] hover:border-[1px] hover:border-solid hover:box-border`}
                    >
                        <b className="text-[16px] font-bold">
                            Enquire Now
                        </b>
                    </button>
      </div>
    </div>
  );
}

export default ReadyToBuild;
