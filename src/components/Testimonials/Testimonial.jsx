import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import dipu from "../../img/Project/dipankar.png"


const Testimonial = () => {
  const clients = [
    {
      img: dipu,
      review:
        "I’ve made a lot of mistakes in my career. Those mistakes helped me learn some valuable lessons and to become an exceptional freelancer.",
    },
    {
      img: dipu,
      review:
        "I’ve made a lot of mistakes in my career. Those mistakes helped me learn some valuable lessons and to become an exceptional freelancer.",
    },
    {
      img: dipu,
      review:
        "I’ve made a lot of mistakes in my career. Those mistakes helped me learn some valuable lessons and to become an exceptional freelancer.",
    },
    {
      img: dipu,
      review:
        "I’ve made a lot of mistakes in my career. Those mistakes helped me learn some valuable lessons and to become an exceptional freelancer.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
