import React from "react";
import Image from "next/image";
import aboutImage from "../../public/assets/aboutImage3.png";
const ImageSection = ({ title, paragraph }) => {
  return (
    <div className="bg-white relative ">
      <div className="text-secondary px-5 pt-7 md:px-0 md:pt-0  md:absolute relative w-96 xl:w-[400px] sm:right-0 sm:top-0 md:right-5 md:top-28 lg:right-32 lg:top-44 xl:top-52 xl:right-44">
        <h1 className="text-secondary pb-8  text-2xl lg:text-4xl">{title}</h1>
        <p className="text-secondary text-base lg:text-lg">{paragraph}</p>
      </div>
      <div className=" relative   ">
        <Image className=" " src={aboutImage} alt="aboutImage"></Image>
      </div>
    </div>
  );
};

export default ImageSection;
