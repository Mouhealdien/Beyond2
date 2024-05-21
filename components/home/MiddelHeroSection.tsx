import React from "react";
import { Container } from "../global/Container";
import QutationSvg from "./QutationSvg";
import { useTranslation } from "next-i18next";

const MiddelHeroSection = () => {
  const { i18n, t } = useTranslation();
	const language = i18n.language === 'en' ? 'en' : 'ar';
  return (
    <div className="bg-primary">
      <Container>
        <div className=" bg-primary h-[500px] relative ">
          <svg
            className="m-auto absolute right-0 left-0 top-0 bottom-0  w-auto md:w-[700px]"
            viewBox="0 0 761 485"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M633.466 4.51409C646.086 1.04171 659.625 0.0376491 673.415 1.92027C728.199 9.4089 766.561 59.9467 759.081 114.835C737.518 272.85 621.556 413.042 470.45 463.622C396.276 488.43 315.208 491.694 235.894 473.077C157.123 454.585 85.9581 415.845 30.0874 361.082C-9.44412 322.342 -10.0709 258.877 28.6248 219.3C67.3206 179.723 130.713 179.054 170.245 217.836C230.587 276.992 327.911 299.918 406.932 273.436C486.121 246.912 549.346 170.561 560.629 87.7258C566.229 46.6847 595.898 14.8476 633.466 4.55593"
              fill="#C7C8D5"
            />
          </svg>

          <div className="pt-[150px]  md:pt-[100px]">
            <QutationSvg customeStyle="text-start  pt-[20px]" />
            <p className=" inline-block text-center text-white text-[20px] xs:text-[25px] sm:text-[30px] md:text-[40px]  lg:text-[50px]  ">
              We promise to be your dedicated strategic partner in the digital
              marketing world
            </p>
            <QutationSvg customeStyle={`${language=='en'?"float-right":"float-left"}`} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MiddelHeroSection;
