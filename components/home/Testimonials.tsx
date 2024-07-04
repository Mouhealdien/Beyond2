import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import TestimonialsCard from "./TestimonialsCard";
import { Container } from "../global/Container";
import { useTranslation } from "next-i18next";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute text-primary px-2  top-1/2 transform -translate-y-1/2 cursor-pointer z-20 right-0`}
      onClick={onClick}
    >
      <FaArrowCircleRight style={{ ...style, fontSize: "30px" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-primary px-2  absolute top-1/2 transform -translate-y-1/2 cursor-pointer z-20 left-0`}
      onClick={onClick}
    >
      <FaArrowCircleLeft style={{ ...style, fontSize: "30px" }} />
    </div>
  );
}

const Testimonials = ({ title, subTitle, testimonials }) => {
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";
  //let sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 2.5,
    //speed: 4000,
    //autoplay: true,
    //autoplaySpeed: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    //pauseOnFocus: true,
    //cssEase: "linear",

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.05,
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
      <div className=" relative overflow-hidden">
        <Slider
          // ref={(slider) => (sliderRef = slider)}
          arrows={false}
          {...settings}
          className="inline "
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
