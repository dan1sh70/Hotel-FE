// Footer.jsx
export default function Footer() {
    return (

        <footer className="bg-white">
            {/* Main Row */}
            {/* add padding 2rem all around */}
            <div className="flex justify-between container mx-auto text-gray-700 gap-8" style={{ padding: '1rem' }}>

                {/* 1. Logo + Description (5/12) */}
                <div className="w-5/12 space-y-4">
                    <img
                        src="/flashrooms.png"
                        alt="Flash Rooms"
                        className="h-10"
                    />
            
                    <p className="text-sm leading-relaxed" style={{ paddingRight: '180px' }}>
                        Flash Rooms offers affordable stays near temples in India. Whether
                        for a short visit or pilgrimage, we ensure safe, comfortable
                        accommodations close to the temple for your devotion.
                    </p>

                    {/* Social Media Images with Gap */}
                    <div className="flex gap-16 items-center">
                        <a href="#" style={{ marginRight: '1rem' }}>
                            <img src="/facebook.png" alt="Facebook" className="h-6 w-8" />
                        </a>
                        <a href="#" style={{ marginRight: '1rem' }}>
                            <img src="/instagram.png" alt="Instagram" className="h-6 w-8" />
                        </a>
                        <a href="#">
                            <img src="/google.png" alt="Google" className="h-6 w-8" />
                        </a>
                    </div>

                </div>

                {/* 2. Home Section */}
                {/* allign to center */}
                <div className="w-2/12 text-left">
                    <h3 className="font-semibold" style={{ marginLeft: '1.2rem' }}>Home</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Facilities</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* 3. Help Section */}
                <div className="w-2/12 text-left">
                    <h3 className="font-semibold" style={{ marginLeft: '1.2rem' }}>Help</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                {/* 4. Get In Touch */}
                <div className="w-3/12">
                    <h3 className="font-semibold mb-3">Get In Touch</h3>
                    <form className="space-y-3">
                        <input
                            type="email"
                            placeholder="E-Mail"
                            className="w-[90%] border border-red-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                        />
                        <textarea
                            placeholder="Message"
                            rows="3"
                            className="w-[90%] border border-red-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                        ></textarea>
                    </form>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-gray-300 pb-4 text-center text-sm text-gray-500">
                © 2025 All rights reserved.
            </div>
        </footer>
    );
}
