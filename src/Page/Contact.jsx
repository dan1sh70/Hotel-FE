import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 mt-20">
      <div className="max-w-6xl w-full bg-[#FBF7DE] rounded-2xl shadow-lg overflow-hidden 
                      grid grid-cols-1 md:grid-cols-2 
                      "
                      >
        
        {/* Left Section - Contact Form */}
        <div className="p-6 sm:p-8 md:p-10 border-t-[20px] border-b-[20px] border-r-[20px] sm:border-t-[30px] sm:border-b-[30px] sm:border-r-[30px] md:border-t-[40px] border-t-[#FBF7DE] border-b-[#FBF7DE] border-r-[#FBF7DE]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base">
            Have questions or need help? Get in touch with us today. We’re always here to
            assist you.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="tel"
              placeholder="Phone number *"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <textarea
              placeholder="Message For Us"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 font-medium rounded-2xl shadow-md hover:bg-red-600 transition"
            >
              SEND
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row  gap-6 mt-10 text-gray-700 text-sm">
            <div className="flex items-center gap-3">
              <FaPhone className="text-red-500" />
              <p>
                <span className="block font-semibold">Phone</span>
                03 5432 1234
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <p>
                <span className="block font-semibold">Address</span>
                123 Lotus St, Srirangam, TN 620006
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <p>
                <span className="block font-semibold">Email</span>
                info@marcc.com.au
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Map */}
        <div className="relative w-full h-64 sm:h-80 md:h-auto  md:border-t-[40px] md:border-b-[40px] md:border-r-[40px] border-t-[red] border-b-[red] border-r-[red]
        border-t-[20px] border-b-[20px] border-r-[20px] sm:border-t-[30px] sm:border-b-[30px] sm:border-r-[30px]
        ">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.8668572341918!2d106.8117672!3d-6.1931049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f41bb68a0c6b%3A0x8a353c4b44e6d8c!2sKebon%20Kacang!5e0!3m2!1sen!2sid!4v1617159097634!5m2!1sen!2sid"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
