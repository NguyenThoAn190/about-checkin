import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdArrowUpward } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <footer className="text-sm min-w-full max-w-full mt-auto flex justify-center">
            <div className="flex flex-col gap-6 lg:gap-10 px-4 lg:px-0 py-6 lg:py-10 w-full mr-22">
                <div className="flex flex-col items-start lg:flex-row gap-8 lg:gap-6 w-full">
                    {/* Column 1: Logo and Social Media Links */}
                    <div className="flex flex-row justify-between w-full lg:w-1/4 lg:justify-start items-center lg:flex-col gap-y-6 basis-1/4">
                        <img alt="EnjoySport Logo" className="w-36 h-19" src="/enjoy-sport-logo.png" />
                        <div className="flex gap-3">
                            <div className="flex w-10 h-10 items-center justify-center">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="w-8 h-8 text-gray-600" />
                                </a>
                            </div>
                            <div className="flex w-10 h-10 items-center justify-center">
                                <a href="https://www.facebook.com/enjoysport.vn/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="w-8 h-8 text-gray-600" />
                                </a>
                            </div>
                            <div className="flex w-10 h-10 items-center justify-center">
                                <a href="https://www.youtube.com/@ENJOYSPORT-gq9bm" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className="w-8 h-8 text-gray-600" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: About Enjoy Sport */}
                    <div className="flex flex-col gap-y-2 basis-1/4 lg:w-1/4">
                        <h4 className="font-bold text-xl text-[#FBD784]">About ENJOYSPORT</h4>
                        <div className="flex flex-col gap-3">
                            <div>
                                <a href="https://enjoysport.vn/" target="_blank" className="text-sm font-medium">Contact</a>
                            </div>
                            <div>
                                <a href="https://about.enjoysport.vn/en" target="_blank" className="text-sm font-medium">About Us</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Support Center */}
                    <div className="flex flex-col gap-y-2 basis-1/4 lg:w-1/4">
                        <h4 className="font-semibold text-xl text-[#FBD784]">Support Center</h4>
                        <div className="flex flex-col gap-3">
                            <div>
                                <a href="/terms-conditions" target="_blank" className="text-sm font-medium">Terms and Conditions</a>
                            </div>
                            <div>
                                <a href="/privacy-policy" target="_blank" className="text-sm font-medium">Privacy Policy</a>
                            </div>
                            <div>
                                <a href="/payment-process" target="_blank" className="text-sm font-medium">Payment Process</a>
                            </div>
                            <div>
                                <a href="/buyer-guide" target="_blank" className="text-sm font-medium">Buyer Guide</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contact Information */}
                    <div className="flex flex-col gap-y-2 basis-1/4 lg:w-1/4">
                        <h4 className="font-semibold text-xl text-[#FBD784]">Contact Information</h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-[6px] text-sm font-medium items-center">
                                <FaPhoneAlt className="w-6 h-6 text-gray-600" />
                                1900 633 733 (1.000VNĐ/min)
                            </div>
                            <div className="flex gap-[6px] text-sm font-medium items-center">
                                <FaEnvelope className="w-6 h-6 text-gray-600" />
                                support@enjoysport.vn
                            </div>
                            <div className="flex gap-[6px] text-sm font-medium items-center">
                                <FaMapMarkerAlt className="w-6 h-6 text-gray-600" />
                                537/63 Nguyen Oanh Street, Ward 17, Go Vap District, Ho Chi Minh City, Viet Nam
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-row justify-between mx-22">
                    <div className="flex flex-row items-center text-sub-body gap-8 justify-between lg:justify-start w-full lg:w-max">
                        <div className="flex flex-col gap-0 text-[#727F8E]">
                            <div>© Powered by Enjoy Sport. All rights reserved</div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <button className="flex gap-[6px] items-center">
                            <div className="text-base text-[#FBD784] font-medium">Back to top</div>
                            <MdArrowUpward className="w-6 h-6 text-[#FBD784]" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
