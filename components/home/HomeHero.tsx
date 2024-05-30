import React from "react";
import { Container } from "../global/Container";
import Navbar from "../global/navbar";
import SocialMedia from "../global/SocialMedia";
import HeroText from "../global/HeroText";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const HomeHero = () => {
  const { i18n, t } = useTranslation();
	const language = i18n.language === 'en' ? 'en' : 'ar';
  return (
    <header className="relative h-[800px]   overflow-hidden">
      <Container>
        <div className="relative w-full   bg-transparent">
          {" "}
          <Navbar customeStyle="absolute" />
        </div>

        <div className="relative">
          <div className={`border-l-gray-200 absolute top-[450px] md:top-[550px]    border-l ${language=="en"?"right-0":"left-0"} h-20 z-40  `} />
        </div>
      </Container>
      <SocialMedia customeStyle="top-52  xl:px-[120px]" />
      <div className="   ">
        <div className="flex flex-col    absolute bg-transparent w-full top-[20.5rem] md:top-80 text-center   z-50    ">
          <h1 className="text-xl xs:text-2xl md:text-4xl m-auto w-full md:w-[800px] lg:w-full  px-20 text-white">
            Unleashing Potential, Creating Impact with
          </h1>
          <HeroText />
          <div className="top-40 left-0 bottom-0 right-0 m-auto absolute">
            <Link href={'#contact'}>
            <button
              type="button"
              className="text-white font-bold mx-4 w-[120px] xs:w-[150px] bg-primary hover:text-white hover:bg-transparent hover:border-white hover:border rounded-lg text-sm px-4 py-2 text-center  "
            >
              {t('contact-us')}
            </button>
            </Link>
            <Link href="/about-us">
            <button
              type="button"
              className="text-black font-bold w-[110px] xs:w-[150px] bg-white hover:text-white hover:bg-transparent hover:border-white hover:border rounded-lg text-sm px-4 py-2 text-center  "
            >
               {t('learn-more')}
             
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div  style={{backgroundColor:'rgba(61, 70, 198,0.80)'}} className=" absolute top-0 left-0 w-full   h-full z-10"></div> */}

      <video
        color="rgba(32, 46, 255)"
        autoPlay
        loop
        muted
        className="absolute   -z-10 w-auto min-w-full min-h-full max-w-none"
        style={{
          filter:
            "sepia(100%) brightness(16%) hue-rotate(165deg) saturate(468%) contrast(118%)",
        }}
        src={"/assets/HeroVideo.mp4"}
      >
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default HomeHero;
