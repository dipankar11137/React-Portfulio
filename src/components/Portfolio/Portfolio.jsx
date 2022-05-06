import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import i from '../../img/Project/i.png';
import h from '../../img/Project/h.png';
import g from '../../img/Project/g.png';
import f from '../../img/Project/f.png';
import e from '../../img/Project/e.png';
import d from '../../img/Project/d.png';
import c from '../../img/Project/c.png';
import b from '../../img/Project/b.png';
import a from '../../img/Project/a.png';
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <h1 style={{ color: darkMode ? 'white' : '' }}>Recent Projects</h1>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={i} alt="" />
          <div className="text-center mt-2">
            <a href="https://sixth-edition-298003.web.app/home#expert" target="_blank" ><button className="button i-button">Live Link</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={h} alt="" />
          <div className="text-center mt-2">
            <a href="https://whimsical-starburst-4da913.netlify.app/" target="_blank" ><button className="button i-button">Live Link</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={g} alt="" />
          <div className="text-center mt-2">
            <a href="https://inspiring-frangollo-44427b.netlify.app/" target="_blank" ><button className="button i-button">Live Link</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={f} alt="" />
          <div className="text-center mt-2">
            <a href="https://gallant-jackson-16fd45.netlify.app/#" target="_blank" ><button className="button i-button">Live Link</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={e} alt="" />
          <div className="text-center mt-2">
            <a href="https://friendly-liskov-3700bc.netlify.app/" target="_blank" ><button className="button i-button">Live Link</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={d} alt="" />
          <div className="text-center mt-2">
            <a href="https://620e74e7f0001400a6ae5e0e--xenodochial-carson-23c011.netlify.app/" target="_blank" ><button className="button i-button">Live Link</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={c} alt="" />
          <div className="text-center mt-2">
            <a href="https://61eed2a6e9c59133c10fcb8e--xenodochial-carson-23c011.netlify.app/" target="_blank" ><button className="button i-button">Live Link</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={b} alt="" />
          <div className="text-center mt-2">
            <a href="https://dipankar11137.github.io/Assignment-2/index-ass-2.html" target="_blank" ><button className="button i-button">Live Link</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={a} alt="" />
          <div className="text-center mt-2">
            <a href="https://dipankar11137.github.io/Assignment-1/" target="_blank" ><button className="button i-button">Live Link</button></a>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
