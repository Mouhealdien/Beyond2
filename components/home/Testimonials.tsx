import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import TestimonialsCard from "./TestimonialsCard";
import { Container } from "../global/Container";
const Testimonials = () => {
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
  const arr = ["1", "2", "3"];
  return (
    <div className="bg-[#E9EAFF] py-10">
      <Container>
        <div className="pb-10">
          <h2 className="text-4xl md:text-6xl font-bold">TESTIMONIALS</h2>
          <h3 className="text-xl md:text-2xl  pt-3">What our customers said</h3>
        </div>
      </Container>
      <Slider arrows={false} {...settings}>
        {arr.map((e, i) => {
          return (
            <TestimonialsCard
              key={i}
              title1={e}
              title2="as asd as das"
              text="Byound Agency has transformed our digital presence. Their creativity and dedication have exceeded our expectations. Working with them has been a pleasure."
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
