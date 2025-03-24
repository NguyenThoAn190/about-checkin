import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaClock, FaCheckCircle, FaCog } from 'react-icons/fa';
import ContactForm from './ContactForm';
export default function Homepage() {
    return (
        <>
            <div className="relative h-[660px] w-full">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/cover.jpg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center top"
                        quality={100}
                    />
                </div>

                {/* Content */}
                <div className="absolute top-1/4 left-20 z-10 text-white text-left">
                    <h1 className="font-inter font-normal text-[72px] md:text-[48px] leading-[90px] tracking-[0px]">
                        Check-in Enjoy Sport
                    </h1>
                    <p className="font-inter font-normal text-[36px] md:text-[24px] leading-[90px] tracking-[0px] mt-4">
                        Nền tảng Check-in sự kiện thể thao hàng đầu
                    </p>
                </div>

                {/* Navbar */}
                <nav className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent z-20">
                    <div className="text-white ml-16 font-bold text-xl flex items-center">
                        <Image src="/enjoysport-logo.png" alt="Logo" width={50} height={50} />
                    </div>
                    <div className="flex mr-16 text-white">
                        <button className="bg-red-500 px-3 py-1 rounded text-white">🇻🇳</button>
                    </div>
                </nav>
            </div>

            {/* Stats Section */}
            <div className="relative bg-white py-10 px-10">
                {/* Background Dots (Top-Left and Bottom-Right) */}
                <div className="absolute top-0 left-0 z-0">
                    <Image
                        src="/left-point.png"
                        alt="Background Left Dots"
                        width={200}
                        height={200}
                        objectFit="contain"
                        quality={100}
                    />
                </div>

                <div className="absolute bottom-0 right-0 z-0">
                    <Image
                        src="/right-point.png"
                        alt="Background Right Dots"
                        width={200}
                        height={200}
                        objectFit="contain"
                        quality={100}
                    />
                </div>

                {/* Stats Content Section */}
                <div className="relative z-10 max-w-7xl ml-30 text-center">
                    {/* Flex Layout for Stats in Horizontal Row */}
                    <div className="flex flex-col md:flex-row md:space-x-18 space-y-8 md:space-y-0">
                        <div className="text-left">
                            <p className="text-[20px] text-[#9AA0A6CC] mb-8 font">GIẢI PHÁP CÔNG NGHỆ</p>
                            <p className="text-[48px] md:text-[48px] font-bold mb-8">Check-in sự kiện</p>
                        </div>

                        {/* First Stat */}
                        <div className="text-center ">
                            <p className="text-[128px] font-bold  md:text-[96px] text-orange-600">10K</p>
                            <p className="text-lg text-[#9AA0A6CC]">Người dùng tin tưởng sử dụng</p>
                        </div>

                        {/* Second Stat */}
                        <div className="text-center">
                            <p className="text-[128px] font-bold  md:text-[96px] text-orange-600">10+</p>
                            <p className="text-lg text-[#9AA0A6CC]">Đơn vị đồng hành hợp tác</p>
                        </div>

                        {/* Third Stat */}
                        <div className="text-center">
                            <p className="text-[128px] font-bold  md:text-[96px] text-orange-600">30+</p>
                            <p className="text-lg text-[#9AA0A6CC]">Sự kiện đã được triển khai</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 px-0">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                    {/* Left Section */}
                    <div className="flex-1 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* First Item */}
                            <div className="flex flex-col space-y-4">
                                <div className="bg-white text-orange-600 p-4 rounded-full">
                                    <FaStar className="h-8 w-8" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">Giao diện thân thiện</p>
                                    <p className="text-base text-[#7D7987]">Giao diện trực quan, dễ sử dụng, giúp bạn tổ chức và người tham gia thao tác nhanh chóng.</p>
                                </div>
                            </div>

                            {/* Second Item */}
                            <div className="flex flex-col space-y-4">
                                <div className="bg-white text-orange-600 p-4 rounded-full">
                                    <FaClock className="h-8 w-8" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">Quy trình nhanh chóng</p>
                                    <p className="text-base text-[#7D7987]">Chỉ với 2 bước thực hiện cho việc ký miễn trừ trách nhiệm.</p>
                                </div>
                            </div>

                            {/* Third Item */}
                            <div className="flex flex-col space-y-4">
                                <div className="bg-white text-orange-600 p-4 rounded-full">
                                    <FaCheckCircle className="h-8 w-8" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">Ủy quyền cá nhân và đội nhóm</p>
                                    <p className="text-base text-[#7D7987]">Chủ động ủy quyền cho người khác để nhận Racekit với 1 vài thao tác trên điện thoại.</p>
                                </div>
                            </div>

                            {/* Fourth Item */}
                            <div className="flex flex-col space-y-4">
                                <div className="bg-white text-orange-600 p-4 rounded-full">
                                    <FaCog className="h-8 w-8" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">Tùy chỉnh theo yêu cầu BTC</p>
                                    <p className="text-base text-[#7D7987]">Linh hoạt theo nhu cầu của từng ban tổ chức.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Section (Images) */}
                    <div className="flex-1 space-y-2 bg-[#DC5F001A] p-6 rounded-lg md:ml-20">
                        <p className="text-[18px] text-[#7D7987] font-semibold ml-4">Chúng tôi luôn mang đến cho bạn sự lựa chọn tốt nhất</p>
                        <p className="text-[36px] font-bold ml-4">Về dịch vụ của chúng tôi</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:grid-rows-[307px_166px] md:auto-rows-fr">
                            {/* First Image aligned to the right */}
                            <div className="relative h-[307px] w-[234px] md:col-span-1 justify-self-end">
                                <Image
                                    src="/pic-1.png"
                                    alt="Image 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Second Image */}
                            <div className="relative h-[166px] w-[268px] md:col-span-1">
                                <Image
                                    src="/pic-2.png"
                                    alt="Image 2"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Third Image */}
                            <div className="relative h-[166px] w-[268px] md:col-span-1 justify-self-end">
                                <Image
                                    src="/pic-3.png"
                                    alt="Image 3"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Fourth Image */}
                            <div className="relative h-[307px] w-[234px] md:col-span-1 md:row-span-2">
                                <Image
                                    src="/pic-4.png"
                                    alt="Image 4"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="p-8">
                {/* Orange Line */}
                <div className="w-16 h-1 bg-orange-500 mb-4 ml-30"></div>

                {/* Main Section: Two columns */}
                <div className="flex justify-between items-center">
                    {/* Left Section: Title and Description */}
                    <div className="flex flex-col space-y-4 ml-30">
                        <h2 className="text-[32px] font-semibold">Đối tác đồng hành</h2>
                        <p className="text-lg text-[#727F8E]">Enjoy Sport tự hào đồng hành cùng các đơn vị thể thao uy tín.</p>
                    </div>

                    {/* Right Section: Logos in a horizontal row */}
                    <div className="flex space-x-8 mr-16">
                        <img src="/partner-1.png" alt="Logo 1" className="w-32 h-32 object-contain" />
                        <img src="/partner-2.png" alt="Logo 2" className="w-32 h-32 object-contain" />
                        <img src="/partner-3.png" alt="Logo 3" className="w-32 h-32 object-contain" />
                        <img src="/partner-4.png" alt="Logo 4" className="w-32 h-32 object-contain" />
                        <img src="/partner-5.png" alt="Logo 5" className="w-32 h-32 object-contain" />
                    </div>
                </div>
            </div>
            <ContactForm />
        </>
    );
}
