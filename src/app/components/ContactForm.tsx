"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const userID = "your_user_id";

    const templateParams = {
      fullName,
      phone,
      email,
      message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        setStatus("Your message has been sent successfully!");
      },
      (err) => {
        setStatus("Failed to send the message. Please try again later.");
      },
    );
  };

  return (
    <div className="w-full bg-[#DC5F001A]">
      <div className="relative overflow-hidden p-5 md:p-8 lg:p-12 xl:px-24">
        <h2 className="mb-8 text-left text-2xl font-bold lg:text-4xl">
          Liên hệ với chúng tôi
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between space-x-6">
            <div className="flex-1">
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm lg:text-lg"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border-b border-gray-300 p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="phone" className="mb-2 block text-sm lg:text-lg">
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-b border-gray-300 p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="mb-2 block text-sm lg:text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-300 p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm lg:text-lg">
              Lời nhắn
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border-b border-gray-300 p-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex max-w-[150px] cursor-pointer items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white p-4 font-semibold text-black transition duration-200 ease-in-out hover:bg-orange-600 hover:text-white"
          >
            <span>Gửi lời nhắn</span>
            <FaArrowRight className="text-lg" />
          </button>
        </form>
        {status && <p className="mt-4 text-lg text-green-500">{status}</p>}
        {/* Circle Blur */}
        <div className="absolute -right-[100px] -bottom-[150px] -z-10 h-[286px] w-[317px] overflow-hidden rounded-full bg-[#FF820066] blur-[100px] lg:-right-[100px] lg:-bottom-[100px] xl:-right-[200px] xl:-bottom-[200px] xl:h-[512px] xl:w-[508px]"></div>
      </div>
    </div>
  );
};

export default ContactForm;
