"use client";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import useScrollToTop from "../hooks/useScrollToTop";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-fullflex justify-center text-sm">
      <div className="flex w-full flex-col gap-4 p-5 md:gap-6 md:p-8 lg:gap-8 lg:p-12 xl:px-24">
        <div className="flex w-full flex-col items-start gap-4 lg:flex-row">
          {/* Column 1: Logo and Social Media Links */}
          <div className="flex w-full basis-1/4 flex-col gap-y-6 lg:w-1/4 lg:flex-col lg:justify-start">
            <img
              alt="EnjoySport Logo"
              className="h-19 w-36"
              src="/enjoy-sport-logo.png"
            />
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-8 w-8 text-[#FB6F00]" />
                </a>
              </div>
              <div className="flex h-10 w-10 items-center justify-center">
                <a
                  href="https://www.facebook.com/enjoysport.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="h-8 w-8 text-[#FB6F00]" />
                </a>
              </div>
              <div className="flex h-10 w-10 items-center justify-center">
                <a
                  href="https://www.youtube.com/@ENJOYSPORT-gq9bm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="h-8 w-8 text-[#FB6F00]" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: About Enjoy Sport */}
          <div className="flex basis-1/4 flex-col gap-y-2 lg:w-1/4">
            <h4 className="text-xl font-bold text-[#FB6F00]">Về ENJOYSPORT</h4>
            <div className="flex flex-col gap-3">
              <div>
                <Link
                  href="https://enjoysport.vn/"
                  target="_blank"
                  className="text-sm font-medium"
                >
                  Liên hệ
                </Link>
              </div>
              <div>
                <Link
                  href="https://about.enjoysport.vn/en"
                  target="_blank"
                  className="text-sm font-medium"
                >
                  Về chúng tôi
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Support Center */}
          <div className="flex basis-1/4 flex-col gap-y-2 lg:w-1/4">
            <h4 className="text-xl font-semibold text-[#FB6F00]">
              Trung tâm hỗ trợ
            </h4>
            <div className="flex flex-col gap-3">
              <div>
                <Link
                  href="https://enjoysport.vn/terms-conditions"
                  target="_blank"
                  className="text-sm font-medium"
                >
                  Điều khoản chung
                </Link>
              </div>
              <div>
                <a
                  href="https://enjoysport.vn/privacy-policy"
                  target="_blank"
                  className="text-sm font-medium"
                >
                  Chính sách bảo mật
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex basis-1/4 flex-col gap-y-2 lg:w-1/4">
            <h4 className="text-xl font-semibold text-[#FB6F00]">
              Contact Information
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-[6px] text-sm font-medium">
                <FaPhoneAlt className="h-6 w-6 text-[#FB6F00]" />
                1900 633 733 (1.000VNĐ/min)
              </div>
              <div className="flex items-center gap-[6px] text-sm font-medium underline">
                <FaEnvelope className="h-6 w-6 text-[#FB6F00]" />
                support@enjoysport.vn
              </div>
              <div className="flex items-center gap-[6px] text-sm font-medium">
                <FaMapMarkerAlt className="h-6 w-6 text-[#FB6F00]" />
                537/63 Nguyen Oanh Street, Ward 17, Go Vap District, Ho Chi Minh
                City, Viet Nam
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-center lg:flex-row lg:justify-between">
          <div className="text-sub-body flex w-full items-center justify-center gap-8 lg:w-max lg:flex-row">
            <div className="flex flex-col gap-0 text-[#727F8E]">
              <p>© Powered by Enjoy Sport. All rights reserved</p>
              <p>
                Mã số thuế: 0317455983 cấp ngày 31/08/2022 do Sở Kế hoạch và Đầu
                tư Thành phố Hồ Chí Minh cấp phép.
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <button
              className="flex cursor-pointer items-center gap-[6px] duration-300 ease-in-out hover:brightness-125"
              onClick={useScrollToTop}
            >
              <div className="text-base font-medium text-[#FB6F00]">
                Quay lại đầu trang
              </div>
              <MdArrowUpward className="h-6 w-6 text-[#FB6F00]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
