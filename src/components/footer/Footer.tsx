import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-gray-100 mt-16">
            <footer className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/about" className="hover:underline">
                                About us
                            </a>
                        </li>
                        <li>
                            <a href="/careers" className="hover:underline">
                                Jobs
                            </a>
                        </li>
                        <li>
                            <a href="/press" className="hover:underline">
                                Press
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/help" className="hover:underline">
                                Help
                            </a>
                        </li>
                        <li>
                            <a href="/shipping" className="hover:underline">
                                Shipping and Return Policy
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/terms" className="hover:underline">
                                Terms and Conditions
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/cookies" className="hover:underline">
                                Cookies
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:underline">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Twitter / X
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

            <div className="bg-gray-200 py-4 text-center text-xs text-gray-600">© {new Date().getFullYear()} TechStore. All rights reserved.</div>
        </div>
    );
};

export default Footer;
