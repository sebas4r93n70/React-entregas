import { HeroContainer, HeroTitleContainer } from "./HeroStyles";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Button } from "../UI/Button/Button";

export const Hero = () => {
  return (
    <HeroContainer>
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            src="/img/HeroSlider/hero_movil.jpg"
            alt=""
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/HeroSlider/hero_movil2.jpg"
            alt=""
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/img/HeroSlider/hero_movil3.jpg"
            alt=""
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>

      <HeroTitleContainer>
        <h1>ALMACEN DE CELUS</h1>
        <span>En un lugar todo lo que necesitas para tu celular.</span>
        <Button>ver</Button>
      </HeroTitleContainer>
    </HeroContainer>
  );
};
