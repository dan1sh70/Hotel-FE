export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#FAE972] to-[#E5BD4B] mx-4 sm:mx-6 md:mx-10 mt-5 mb-3 rounded-2xl text-black">
      {/* Logo */}
      <div className="flex justify-center mx-auto bg-[#FCC90080]/50 rounded-b-full w-5/6 sm:w-2/3 pb-4 sm:pb-5 mb-5">
        <img src="/flashrooms.png" alt="Flash Rooms" className="h-12 sm:h-14 mt-4" />
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-8 pb-6">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
          
          {/* Description */}
          <div className="w-full md:w-5/12 space-y-4">
            <p className="text-xs sm:text-sm leading-relaxed pr-0 md:pr-20 font-bold">
              Flash Rooms offers affordable stays near temples in India. Whether
              for a short visit or pilgrimage, we ensure safe, comfortable
              accommodations close to the temple for your devotion.
            </p>
            <div className="flex gap-4 sm:gap-6 flex-wrap">
              <img src="/footer-pay.png" alt="visa" className="h-16 sm:h-20 w-28 sm:w-36" />
              <img src="/footer-pay2.png" alt="googlepay" className="h-16 sm:h-20 w-28 sm:w-36" />
            </div>
          </div>

          {/* ---- Aligned Link Sections ---- */}
          <div className="flex flex-row flex-wrap justify-between w-full md:w-7/12 gap-6">
            {/* Home */}
            <div className="w-1/3 sm:w-auto min-w-[150px]">
              <h3 className="font-bold mb-2 text-[#333333] text-lg sm:text-2xl">Home</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-red-500">Booking</a></li>
                <li><a href="#" className="hover:text-red-500">Facilities</a></li>
                <li><a href="#" className="hover:text-red-500">Location</a></li>
                <li><a href="#" className="hover:text-red-500">Contact</a></li>
              </ul>
            </div>

            {/* Help */}
            <div className="w-1/3 sm:w-auto min-w-[150px]">
              <h3 className="font-bold mb-2 text-[#333333] text-lg sm:text-2xl">Help</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-red-500">About Us</a></li>
                <li><a href="#" className="hover:text-red-500">Help center</a></li>
                <li><a href="#" className="hover:text-red-500">Privacy policy</a></li>
                <li><a href="#" className="hover:text-red-500">FAQs</a></li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="w-1/3 sm:w-auto min-w-[180px]">
              <h3 className="font-bold mb-2 text-[#333333] text-lg sm:text-2xl">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center text-xs sm:text-sm">
                  <svg className="w-4 h-4 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>+91 90033 02205</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm">
                  <svg className="w-4 h-4 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>info@flashrooms.in</span>
                </div>
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#E5BD4B]"
                />
                <textarea
                  placeholder="Message"
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#E5BD4B]"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-400 pt-4 pb-6 mx-4 sm:mx-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="text-xs sm:text-sm text-black font-semibold text-center md:text-left">
              © 2025 Flash Rooms. All rights reserved
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <a href="#" className="text-black font-semibold hover:text-red-500">Refund Policy</a>
              <a href="#" className="text-black font-semibold hover:text-red-500">Terms and Conditions</a>
              <a href="#" className="text-black font-semibold hover:text-red-500">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
