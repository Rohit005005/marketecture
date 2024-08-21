
const ContactForm = () => {
    return (
      <div className="flex justify-center items-center">
        <form className="max-w-full w-full px-24">
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  

export default function Form() {
    return (
        <div className="py-14">
            <div className="mb-10">
                <h1 className="font-bold ml-24">Send Message</h1>
            </div>
            <ContactForm />
        </div>
    )
}