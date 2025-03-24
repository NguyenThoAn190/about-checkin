"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaArrowRight } from 'react-icons/fa';

const ContactForm = () => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const serviceID = 'your_service_id';
        const templateID = 'your_template_id';
        const userID = 'your_user_id';

        const templateParams = {
            fullName,
            phone,
            email,
            message,
        };

        emailjs
            .send(serviceID, templateID, templateParams, userID)
            .then(
                (response) => {
                    setStatus('Your message has been sent successfully!');
                },
                (err) => {
                    setStatus('Failed to send the message. Please try again later.');
                }
            );
    };

    return (
        <div className=" min-w-full max-w-full mt-auto py-12 bg-[#DC5F001A]">
            <div className="max px-4 mx-16">
                <h2 className="text-4xl font-bold mb-8 text-left">Liên hệ với chúng tôi</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex justify-between space-x-6">
                        <div className="flex-1">
                            <label htmlFor="fullName" className="text-lg mb-2 block">
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="phone" className="text-lg mb-2 block">
                                Số điện thoại
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="email" className="text-lg mb-2 block">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="text-lg mb-2 block">
                            Lời nhắn
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            rows={4}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="py-3 px-8 bg-white text-black font-semibold rounded-full hover:bg-orange-600 hover:text-white transition duration-200 flex items-center justify-center space-x-3"
                    >
                        <span>Gửi lời nhắn</span>
                        <FaArrowRight className="text-lg" />
                    </button>
                </form>
                {status && <p className="mt-4 text-lg text-green-500">{status}</p>}
            </div>
        </div>
    );
};

export default ContactForm;
