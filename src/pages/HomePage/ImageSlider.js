import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import SliderImg1 from "../../assets/images/Living Room_1.png";
import SliderImg2 from "../../assets/images/office.png";
import SliderImg3 from "../../assets/images/Kitchen Shot_3.png";
import SliderImg4 from "../../assets/images/bathroom_white on counter.png";

export const ImageSlider = () => {
  const images = [
    { src: SliderImg1, alt: "Living Room" },
    { src: SliderImg2, alt: "Office" },
    { src: SliderImg3, alt: "Kitchen" },
    { src: SliderImg4, alt: "Bathroom" },
  ];

  return (
    <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        <h2 className="text-base font-bold text-white pointer-events-auto">
          WHERE YOU NEED IT,
        </h2>
        <h1 className="text-4xl font-bold text-white text-center pointer-events-auto w-[50%]">
          when you need it.
        </h1>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="w-full h-[350px] z-10"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
