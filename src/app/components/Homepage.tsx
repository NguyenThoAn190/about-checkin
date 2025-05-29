"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/customSwiper.css";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaClock, FaCheckCircle, FaCog, FaBars } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { FaUser } from "react-icons/fa6";
export default function Homepage() {
  const partnersData = [
    {
      img: "/doitac/1.png",
      alt: "URS AN LÃO Trail",
    },
    {
      img: "/doitac/2.png",
      alt: "DFL Run",
    },
    {
      img: "/doitac/3.png",
      alt: "VIETNAM TRIATHLON FEDERATION",
    },
    {
      img: "/doitac/4.png",
      alt: "VIỆT NAM MTB SERIES",
    },
    {
      img: "/doitac/5.png",
      alt: "",
    },
    {
      img: "/doitac/6.png",
      alt: "BU GIA MAP",
    },
    {
      img: "/doitac/7.png",
      alt: "ĐẢO KIM QUY",
    },
    {
      img: "/doitac/8.png",
      alt: "LA VUÔNG TRIAL",
    },
    {
      img: "/doitac/9.png",
      alt: "MINH ĐAM DISCOVERY MARATHON",
    },
    {
      img: "/doitac/10.png",
      alt: "Giải chạy thiếu nhi",
    },
  ];

  return (
    <>
      <div className="relative min-h-[240px] w-full md:min-h-[360px] lg:min-h-[560px] xl:min-h-[600px]">
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

        {/* Navbar */}
        <nav className="absolute top-0 left-0 z-20 flex w-full items-center justify-between bg-transparent p-5 md:p-8 lg:p-12 xl:px-24">
          {/* Header Mobile */}
          <div className="grid w-full grid-cols-3 items-center lg:hidden">
            <div className="flex justify-start">
              <FaBars className="h-6 w-6 cursor-pointer text-white" />
            </div>

            <div className="flex justify-center">
              <Link href={`/`} className="block lg:hidden">
                <Image
                  src="/enjoysport-logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>

            <div className="flex items-center justify-end gap-4 text-white">
              <Image
                src="/vietnam.png"
                alt="Viet Nam Logo"
                width={40}
                height={40}
                objectFit="cover"
                className="cursor-pointer rounded-sm"
              />
              <Link href="#">
                <FaUser className="h-6 w-6 cursor-pointer" />
              </Link>
            </div>
          </div>
          {/* Header Desktop */}
          <div className="hidden w-full grid-cols-4 items-center justify-items-center text-lg font-medium text-white lg:grid xl:text-xl">
            <Link
              href="#"
              className="duration-300 ease-in-out hover:text-[#FB6F00]"
            >
              Trang chủ
            </Link>
            {/* <Link
              href="#"
              className="duration-300 ease-in-out hover:text-[#FB6F00]"
            >
              Pricing
            </Link> */}
            <Link
              href="#"
              className="duration-300 ease-in-out hover:text-[#FB6F00]"
            >
              Liên hệ
            </Link>
            <Link
              href="#"
              className="duration-300 ease-in-out hover:text-[#FB6F00]"
            >
              Enjoy Sport
            </Link>

            <div className="flex">
              <Image
                src="/vietnam.png"
                alt="Viet Nam Logo"
                width={50}
                height={40}
                objectFit="cover"
                className="mr-5 cursor-pointer rounded-sm"
              />
              <Link href="#">
                <button className="flex h-10 cursor-pointer items-center rounded-full bg-[#FB6F00] p-4">
                  Đăng nhập
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="absolute top-2/6 left-0 z-10 w-full p-4 text-left text-white md:text-center">
          <Link href={`/`} className="hidden justify-center lg:flex">
            <Image
              src="/enjoysport-logo-desktop.png"
              alt="Logo"
              width={213}
              height={113}
              objectFit="cover"
            />
          </Link>
          <h1 className="font-inter mt-4 text-2xl font-bold md:text-[48px] lg:text-[72px]">
            Check-in Enjoy Sport
          </h1>
          <p className="font-inter mt-4 text-base md:text-[24px] lg:text-[36px]">
            Nền tảng Check-in sự kiện thể thao hàng đầu
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-white p-5 md:p-8 lg:p-12 xl:px-24">
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

        <div className="absolute right-0 bottom-0 z-0">
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
        <div className="relative z-10 w-full text-center">
          {/* Flex Layout for Stats in Horizontal Row */}
          <div className="flex flex-col xl:flex-row">
            <div className="flex w-full flex-col justify-center lg:w-2/6 lg:items-start">
              <p className="mb-4 text-base text-[#80868B] md:text-lg lg:text-xl xl:text-2xl">
                GIẢI PHÁP CÔNG NGHỆ
              </p>
              <p className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
                Check-in sự kiện
              </p>
            </div>
            <div className="flex w-full flex-col justify-between gap-4 lg:flex-row xl:w-4/6">
              {/* First Stat */}
              <div className="flex-1 text-center">
                <p className="text-[96px] font-medium text-[#FB6F00] md:text-[128px]">
                  10K
                </p>
                <p className="text-lg text-[#80868B]">
                  Người dùng tin tưởng sử dụng
                </p>
              </div>

              {/* Second Stat */}
              <div className="flex-1 text-center">
                <p className="text-[96px] font-medium text-[#FB6F00] md:text-[128px]">
                  10+
                </p>
                <p className="text-lg text-[#80868B]">
                  Đơn vị đồng hành hợp tác
                </p>
              </div>

              {/* Third Stat */}
              <div className="flex-1 text-center">
                <p className="text-[96px] font-medium text-[#FB6F00] md:text-[128px]">
                  30+
                </p>
                <p className="text-lg text-[#80868B]">
                  Sự kiện đã được triển khai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="h-auto w-full">
        <div className="flex flex-col items-center gap-4 p-5 md:p-8 lg:p-12 xl:flex-row xl:px-24">
          {/* Right Section (Images) */}
          <div className="lg:p w-full rounded-lg bg-[#DC5F001A] px-4 py-10 md:px-6 md:py-12 lg:px-8 lg:py-14 xl:order-2 xl:px-10 xl:py-16">
            <div className="flex w-full flex-col items-center gap-4 pb-10 md:py-10">
              <p className="text-xs font-semibold text-[#7D7987] lg:text-[18px]">
                Chúng tôi luôn mang đến cho bạn sự lựa chọn tốt nhất
              </p>
              <p className="text-xl font-bold lg:text-[36px]">
                Về dịch vụ của chúng tôi
              </p>
            </div>
            <div className="flex w-full gap-4">
              <div className="flex w-1/2 flex-col items-center gap-4">
                {/* First Image aligned to the right */}
                <div className="relative h-[250px] w-full md:h-[400px] lg:h-[450px]">
                  <Image
                    src="/pic-1.png"
                    alt="Image 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[10px] object-contain"
                  />
                </div>
                {/* Third Image */}
                <div className="relative h-[160px] w-full md:h-[250px] lg:h-[300px]">
                  <Image
                    src="/pic-3.png"
                    alt="Image 3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[10px]"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-col gap-4">
                {/* Second Image */}
                <div className="relative h-[160px] w-full md:col-span-1 md:h-[250px] lg:h-[300px]">
                  <Image
                    src="/pic-2.png"
                    alt="Image 2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[10px]"
                  />
                </div>

                {/* Fourth Image */}
                <div className="relative h-[250px] w-full md:h-[400px] lg:h-[450px]">
                  <Image
                    src="/pic-4.png"
                    alt="Image 4"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Left Section */}
          <div className="mt-5 grid w-full grid-cols-1 gap-4 pb-5 md:grid-cols-2 md:pb-8 lg:pb-12 xl:order-1">
            {/* First Item */}
            <div className="bg-white text-[#FB6F00]">
              <div className="mb-2 flex items-center gap-2">
                <FaStar className="h-8 w-8" />
                <p className="text-lg font-semibold text-[#252F40]">
                  Giao diện thân thiện
                </p>
              </div>
              <p className="text-sm leading-[26px] text-[#67748E] md:text-base">
                Giao diện trực quan, dễ sử dụng, giúp ban tổ chức và người tham
                gia thao tác nhanh chóng.
              </p>
            </div>

            {/* Second Item */}
            <div className="bg-white text-[#FB6F00]">
              <div className="mb-2 flex items-center gap-2">
                <FaClock className="h-8 w-8" />
                <p className="text-lg font-semibold text-[#252F40]">
                  Quy trình nhanh chóng
                </p>
              </div>
              <p className="text-base text-[#252F40]">
                Chỉ với 2 bước thực hiện cho việc ký miễn trừ trách nhiệm.
              </p>
            </div>

            {/* Third Item */}
            <div className="bg-white text-[#FB6F00]">
              <div className="mb-2 flex items-center gap-2">
                <FaCheckCircle className="h-8 w-8" />
                <p className="text-lg font-semibold text-[#252F40]">
                  Ủy quyền cá nhân và đội nhóm
                </p>
              </div>
              <p className="text-sm leading-[26px] text-[#67748E] md:text-base">
                Chủ động ủy quyền cho người khác để nhận Racekit với 1 vài thao
                tác trên điện thoại.
              </p>
            </div>

            {/* Fourth Item */}
            <div className="bg-white text-[#FB6F00]">
              <div className="mb-2 flex items-center gap-2">
                <FaCog className="h-8 w-8" />
                <p className="text-lg font-semibold text-[#252F40]">
                  Tùy chỉnh theo yêu cầu BTC
                </p>
              </div>
              <p className="text-sm leading-[26px] text-[#67748E] md:text-base">
                Linh hoạt theo nhu cầu của từng ban tổ chức.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="flex w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12 xl:px-24">
        {/* Orange Line */}

        {/* Left Section: Title and Description */}
        <div className="flex w-full flex-col gap-4 pb-5 text-center xl:flex-row">
          <div className="flex flex-col items-center justify-center xl:items-start">
            <div className="mb-4 h-1 w-[70px] bg-[#FB6F00]"></div>
            <h2 className="text-xl font-bold text-[#252F40] lg:text-[32px]">
              Đối tác đồng hành
            </h2>
            <p className="text-sm text-[#67748E] lg:text-lg xl:text-start">
              Enjoy Sport tự hào đồng hành cùng các đơn vị thể thao uy tín.
            </p>
          </div>

          {/* Right Section: Swiper Partners */}
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            loop={true}
            pagination={{ dynamicBullets: true }}
            initialSlide={5}
            breakpoints={{
              320: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="custom-swiper-pagination w-full xl:w-4/6"
          >
            {partnersData.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="mb-5 flex h-48 w-full cursor-pointer items-center justify-center">
                  <Image
                    src={partner.img}
                    alt={partner.alt}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ContactForm />
    </>
  );
}
