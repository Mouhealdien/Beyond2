import Link from "next/link";
import React, { ReactElement } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialMedia from "./SocialMedia";
import { useTranslation } from "next-i18next";
import Navbar from "./navbar";

type props = {
  svg: ReactElement;
  title: String;
};

const Hero = ({ svg, title }: props) => {

  const { i18n, t } = useTranslation();
	const language = i18n.language === 'en' ? 'en' : 'ar';
  return (
    <div className=" relative bg-primary  h-[800px]">
      <Navbar/>
      <SocialMedia customeStyle="top-28 md:top-52" />
      <div className={`border-l-gray-200 absolute top-[350px] ${language=="en"?"right-0":"left-0"} md:top-[500px] right-0  border-l h-20  `} />
      <div className="absolute m-auto top-[400px] left-10 right-10">
        <div className="  absolute top-60">
        <svg
          className=" absolute top-4 left-4"
          width="47"
          height="36"
          viewBox="0 0 47 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.04957 30.6676C7.74059 33.0563 11.4548 34.6633 15.7226 35.2855C19.9905 35.9077 24.6202 35.5171 29.0265 34.163C33.4328 32.809 37.4178 30.5524 40.4776 27.6785C43.5374 24.8046 45.5346 21.4425 46.2168 18.0172C46.8989 14.5919 46.2354 11.2574 44.31 8.43513C42.3845 5.61287 39.2838 3.42964 35.3997 2.16151C31.5156 0.89339 27.0226 0.5973 22.4888 1.31068C17.955 2.02406 13.584 3.71489 9.92846 6.16936C5.0285 9.46323 1.76232 13.8937 0.847486 18.4873C-0.0673408 23.0808 1.44403 27.4618 5.04957 30.6676Z"
            fill="#C7C8D5"
          />
        </svg>

        <svg
          width="111"
          height="74"
          viewBox="0 0 111 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M110.672 2.5867L107.886 2.12961C106.016 1.77509 59.68 -5.51946 28.2582 15.0754C9.99983 27.039 0.686424 45.9104 0.602932 71.16L0.590412 73.0434L2.97748 72.4067C3.49136 72.2696 15.9339 69.0575 35.264 59.0481C53.0161 49.8462 80.162 32.9252 108.7 4.51275L110.672 2.5867ZM20.4869 25.7485C23.4089 22.6639 26.8034 19.8475 30.5768 17.3771C55.9986 0.715966 93.0956 3.59469 103.587 4.84977C57.3764 50.0832 14.9976 65.4804 4.62729 68.7399C5.04838 50.8137 10.3515 36.4122 20.4372 25.7618"
            fill="#C7C8D5"
          />
        </svg>
        </div>
        
        <p className=" text-center  text-white text-xl xxs:text-[25px] px-2 sm:px-8 md:px-12  sm:leading-none  sm:text-[45px]  ">
        {title}
      </p>
      </div>
      {svg}
     
    </div>
  );
};

export default Hero;
