import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white">FutureLearn 2050</h2>
                    <p className="mt-2 text-gray-400">
                        The ultimate destination for next-gen learning. Stay ahead with AI-powered courses.
                    </p>
                </div>

                {/* Quick Links with Hover Animation */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        {["Courses", "About Us", "Contact", "Privacy Policy"].map((item, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="relative text-gray-300 hover:text-indigo-400 transition duration-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-indigo-400 before:transition-all before:duration-300 hover:before:w-full"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media with Glow Effect */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4 mt-3">
                        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-indigo-400 hover:text-indigo-300 transition relative group"
                            >
                                <Icon size={20} />
                                <span className="absolute inset-0 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-300 blur-xl"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-8">
                &copy; 2050 FutureLearn. All rights reserved.
            </div>
        </footer>
    );
}
