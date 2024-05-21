import React from "react";
import Image from "next/image";
import aboutImage from "../../public/assets/aboutImage3.png";
const ImageSection = () => {
  return (
    <div className="bg-white relative ">
      <div className="text-black px-5 pt-7 md:px-0 md:pt-0  md:absolute relative w-96 xl:w-[400px] sm:right-0 sm:top-0 md:right-5 md:top-28 lg:right-32 lg:top-44 xl:top-52 xl:right-44">
        <h1 className="text-black  text-2xl lg:text-4xl">
          A little bit about us
        </h1>
        <p className="text-black text-base lg:text-lg">
          Founded in 2021, Beyond was created to meet the urgent need for
          practical, data-driven marketing solutions. In a world full of data,
          our founders aimed to use this information to build marketing
          strategies that are both effective and scientifically sound.
        </p>
      </div>
      <div className=" relative   ">
        <Image className=" " src={aboutImage} alt="aboutImage"></Image>
      </div>
    </div>
  );
};

export default ImageSection;
