import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import TestimonialsCard from "./TestimonialsCard";
import { Container } from "../global/Container";
import { useTranslation } from "next-i18next";
const Testimonials = ({ title, subTitle, testimonials }) => {
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";

  const settings = {
    infinite: true,
    slidesToShow: 2,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
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

  return (
    <div className="bg-[#E9EAFF] py-10">
      <Container>
        <div className="pb-10">
          <h2 className="text-4xl md:text-6xl font-bold">
            {title?.[language]}
          </h2>
          <h3 className="text-xl md:text-2xl  pt-3">{subTitle?.[language]}</h3>
        </div>
      </Container>
      <Slider arrows={false} {...settings}>
        {testimonials?.map((e, i) => {
          return (
            <TestimonialsCard
              key={i}
              name={e.name?.[language]}
              job={e.job?.[language]}
              description={e.description?.[language]}
              img={e.img}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
