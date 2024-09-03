
const ContactForm = () => {
    return (
        <div className="flex justify-center items-center">
            <form className="max-w-full w-full px-10">
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
                        className="bg-gradient-to-r from-red-800 to-red-500 text-white py-3 px-10 rounded-full"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};


export default function GetInTouch() {
    return (
        <div>
            <div>
                <div className="justify-center items-center w-full sm:ml-10 ml-5">
                    <h1 className="mt-10 sm:text-4xl text-[20px] font-bold">Please <span className="bg-red-500 bg-clip-text inline-block text-transparent">Get In Touch</span></h1>
                </div>
                <div className="justify-center items-center w-full sm:ml-10 ml-5">
                    <h1 className="mt-1 mb-5 sm:text-3xl text-[20px] font-bold">Let's Talk<span className="bg-red-500 bg-clip-text inline-block text-transparent">!!! </span></h1>
                </div>
                <div className="mx-5 sm:mx-20 py-10 mb-10 bg-[#60606038]">
                    <div className="mb-10">
                        <h1 className="font-bold ml-10 text-[20px]">Send Message</h1>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>

    )
}