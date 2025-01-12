import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="bg-gray-900 text-white p-8 md:w-1/2 flex flex-col justify-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-6 text-gray-300">Feel Free To Contact Me</p>
          <div className="space-y-4">
            
            <div className="flex items-start">
              <span className="text-xl mr-3">📞</span>
              <p>+92 321 2119362</p>
            </div>
            <div className="flex items-start">
              <span className="text-xl mr-3">📧</span>
              <p>mrayyanafzal2009@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Send Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 mb-2">
                Type Your Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
