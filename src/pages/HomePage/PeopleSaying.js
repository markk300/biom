import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const PeopleSaying = () => {
  const testimonials = [
    {
      title: "WHAT PEOPLE ARE SAYING",
      subtitle:
        "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”",
      author: " RACHAEL H.",
    },
    {
      title: "WHAT PEOPLE ARE SAYING",
      subtitle:
        "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”",
      author: " RACHAEL H.",
    },
    {
      title: "WHAT PEOPLE ARE SAYING",
      subtitle:
        "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”",
      author: " RACHAEL H.",
    },
    {
      title: "WHAT PEOPLE ARE SAYING",
      subtitle:
        "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”",
      author: " RACHAEL H.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-[300px] md:min-h-[450px] bg-siva1">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination]}
        className="h-[280px] md:h-[260px] flex justify-center items-center"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="text-center w-[90%] md:w-[70%] lg:w-[50%]">
              <h3 className="text-sm md:text-base font-light">
                {testimonial.title}
              </h3>
              <p className="text-base md:text-lg mt-2">
                {testimonial.subtitle}
              </p>
              <h5 className="text-xs md:text-sm font-light mt-4">
                - {testimonial.author}
              </h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
