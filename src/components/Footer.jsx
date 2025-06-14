import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 w-full">
            <div className="max-w-7xl mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Column 1: Logo and Address */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V7.618a1 1 0 011.447-.894L9 9m0 11V9m0 11a2 2 0 012 2v2a2 2 0 01-2-2v-2zm0-11a2 2 0 00-2-2V7a2 2 0 002 2v2zm0 0l6.553 3.276a1 1 0 001.447-.894V7.618a1 1 0 00-1.447-.894L9 9m-3-3l6-3l6 3" />
                            </svg>
                            Tourify
                        </Link>
                        <p className="text-gray-400">
                            123 Adventure Avenue<br />
                            Mirzapur, Dhaka<br />
                            Bangladesh
                        </p>
                    </div>

                    {/* Column 2: Terms & Policy */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/terms" className="hover:text-amber-500">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="hover:text-amber-500">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-amber-500">Facebook</a>
                            <a href="#" className="hover:text-amber-500">Instagram</a>
                            <a href="#" className="hover:text-amber-500">Twitter</a>
                        </div>
                    </div>

                    {/* Column 4: Dummy/Optional */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                        <p className="text-gray-400">
                            Phone: +880-1234-567890<br />
                            Email: support@tourify.com
                        </p>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-12 border-t border-gray-800 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Tourify. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
