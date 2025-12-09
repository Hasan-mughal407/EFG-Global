import React from "react";
import Logod from "/src/images/logo.png";

import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    const iconClass = "text-white w-5 h-5";

    const SocialIcon = ({ icon: Icon, href }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 hover:bg-gradient-to-r border-2 border-white from-[rgb(30,100,30)] to-[rgb(220,130,50)] transition-colors"
        >
            <Icon className={iconClass} />
        </a>
    );

    const ContactItem = ({ icon: Icon, text, href, isLink = false }) => (
        <div className="flex items-start space-x-3 mt-4">
            <Icon className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />

            {isLink ? (
                <a href={href} className="text-sm text-gray-700 hover:text-orange-500 transition-colors">
                    {text}
                </a>
            ) : (
                <p className="text-sm text-gray-700">{text}</p>
            )}
        </div>
    );

    return (
        <footer className="w-full bg-orange-200 py-10 md:py-16 ">

            {/* ---------------- MAIN CONTAINER ---------------- */}
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Flex Wrapper */}
                <div className="flex flex-col md:flex-row  justify-between gap-10">

                    {/* ---------------- LEFT SIDE ---------------- */}
                    <div className="md:w-1/2 lg:w-5/12">
                        <div className="flex items-center space-x-2">
                            <img src={Logod} alt="logo" className="w-52 h-auto" />
                        </div>

                        <p className="mt-4 text-sm text-gray-700 max-w-sm">
                            EFG Afro Market Company is a dynamic digital gateway under the EFG Hub (Enterprise of the Future Generation), connecting global markets with premium African products.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-3 mt-6">
                            <SocialIcon icon={FaFacebookF} href="https://web.facebook.com/EFGAFROMARKET/" />
                            <SocialIcon icon={FaTwitter} href="https://x.com/efgafromarket" />
                            <SocialIcon icon={FaLinkedinIn} href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGN2_NCQzyzrQAAAZsBzj1gW-scBQU0xiAS5J7i2PqetT8kq13ql1Z2pzgTHqJkt3YgZmMRR5yAU9MaXBLi2mB0WSRMV53HpYOHF2MZEud-B63cLfLW-tEx4xjUBwuf9K8dHVw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fefgafromarket" />
                            <SocialIcon icon={FaInstagram} href="https://www.instagram.com/efgafromarket/" />
                            <SocialIcon icon={FaYoutube} href="#" />
                        </div>
                    </div>

                    {/* ---------------- RIGHT SIDE ---------------- */}
                    <div className="md:w-1/2 lg:w-5/12">
                        <h3 className="text-lg font-semibold text-green-700">Contact Us</h3>

                        <div className="mt-4">
                            <ContactItem
                                icon={FaEnvelope}
                                text="info@efgafromarket.ae"
                                href="mailto:info@efgafromarket.ae"
                                isLink
                            />

                            <ContactItem
                                icon={FaPhoneAlt}
                                text="+97142390993"
                                href="tel:+97142390993"
                                isLink
                            />

                            <ContactItem
                                icon={FaMapMarkerAlt}
                                text="Office 208, Abraj Al Mamzar Building, Block A, Al Mihad Road, PO Box 15058, Dubai, UAE."
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* ---------------- COPYRIGHT ---------------- */}
            <div className="w-full mt-10 pt-6 border-t border-orange-200 text-center">
                <p className="text-xs text-gray-600">
                    © 2025 EFG-HUB. All rights reserved. | Enterprise of the Future Generation
                </p>
            </div>
        </footer>
    );
};

export default Footer;
