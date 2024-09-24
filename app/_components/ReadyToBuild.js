import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ReadyToBuild() {
  return (
    <div className="overflow-x-hidden absolute px-2">
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-[24px] sm:text-[40px] font-[800]">
          Ready to build
        </h1>
        <h1 className="text-[16px] sm:text-[40px] italic">
          your stack to success?
        </h1>

        <Dialog>
          <DialogTrigger>
            <div
              className={`cursor-pointer border-[#000] border-[1px]  mt-5 border-solid py-[14px] px-[36px] bg-[transparent] rounded-[32px] flex items-center justify-center hover:bg-[rgba(51,51,51,0.09)] hover:border-[#333] hover:border-[1px] hover:border-solid hover:box-border`}
            >
              <b className="text-[16px] font-bold">Enquire Now</b>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-[#ffffffd5]">
            <DialogHeader>
              <DialogTitle className="mb-5 text-center">
                Enquire Now
              </DialogTitle>
              <DialogDescription>
                <form className="max-w-full w-full px-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Full Name"
                        className="w-full py-2 border-b-2 border-gray-300 placeholder-gray-500 focus:outline-none focus:border-black bg-transparent"
                      />
                    </div>
                    <div>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="w-full py-2 border-b-2 border-gray-300 placeholder-gray-500 focus:outline-none focus:border-black bg-transparent"
                      />
                    </div>
                    <div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Phone"
                        className="w-full py-2 border-b-2 border-gray-300 placeholder-gray-500 focus:outline-none focus:border-black bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <textarea
                      id="message"
                      placeholder="Message"
                      className="w-full py-2 border-b-2 border-gray-300 placeholder-gray-500 focus:outline-none focus:border-black bg-transparent"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default ReadyToBuild;
