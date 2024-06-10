import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import TestimonialsCard from "./TestimonialsCard";
import { Container } from "../global/Container";
import { useTranslation } from "next-i18next";
const Testimonials = ({ title, subTitle, testimonials }) => {
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";
  //let sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnFocus: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  // const [play, setPlay] = useState(true);
  // const handelPlay = () => {
  //   if (play) sliderRef.slickPlay();
  //   else sliderRef.slickPause();
  //   setPlay(!play);
  // add it to the slider parent div
  // };

  return (
    <div className="bg-[#E9EAFF] py-10">
      <Container>
        <div className="pb-10">
          <h2 className="text-4xl text-secondary md:text-6xl font-bold">
            {title?.[language]}
          </h2>
          <h3 className="text-xl md:text-2xl text-secondary  pt-3">
            {subTitle?.[language]}
          </h3>
        </div>
      </Container>
      <div>
        <Slider
          // ref={(slider) => (sliderRef = slider)}
          arrows={false}
          {...settings}
        >
          {testimonials?.map((e, i) => {
            return (
              <TestimonialsCard
                key={i}
                name={e.name?.[language]}
                job={e.job?.[language]}
                description={e.description?.[language]}
                img={e.img}
                //handelPlay={handelPlay}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
