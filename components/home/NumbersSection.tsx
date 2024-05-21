import React from "react";
import { Container } from "../global/Container";
import NumbersSvg from "./NumbersSvg";
import NumbersCard from "./NumbersCard";
import { useTranslation } from "next-i18next";

const NumbersSection = () => {

  const { i18n, t } = useTranslation();
	const language = i18n.language === 'en' ? 'en' : 'ar';
  return (
    <div className=" relative bg-primary ">
      <svg
        className="w-full  -z-10 absolute -mt-32"
        viewBox="0 0 1728 892"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M865 6.10352e-05C1191.5 0 1569 79.5001 1728 129.5V892L3.97992e-06 892L-7.62939e-06 129.5C150 80.0001 538.5 0.00012207 865 6.10352e-05Z"
          fill="#202EFF"
        />
      </svg>

      <Container>
        <div className="z-20 w-full h-[600px]  xl:h-[650px]   bg-primary">
          <div className="  flex flex-row gap-5 md:gap-1 justify-center items-center flex-wrap md:flex-nowrap   ">
            <h1 className="text-white z-20  xl:w-[500px]  font-bold w-fit text-4xl sm:text-5xl lg:text-6xl">
              We Make A Big Numbers
            </h1>

            <NumbersSvg />

            <div className="flex relative flex-row z-20  gap-7">
              <div className=" flex flex-col gap-5">
                <NumbersCard text1="+30" text2="Happy customers" />
                <NumbersCard text1="+30" text2="Cases study" />
              </div>

              <div className="  flex flex-col gap-5 mt-16">
                <NumbersCard text1="+100" text2="Projects" />
                <NumbersCard text1="+50K$" text2="Marketing spending" />
              </div>

              <svg
                className={`absolute max-w-36  top-36    xxs:max-w-36     ${language=="en"?"left-[8rem] right-[4rem]  xxs:right-36  xxs:left-auto  xs:left-40 xs:right-36":" left-[4rem] right-[8rem] xxs:right-36  xxs:left-auto  xs:left-36 xs:right-40"}    xs:max-w-44 sm:left-auto sm:right-44  sm:max-w-48  md:max-w-44 md:top-36   ${language=="en"?"md:right-36":"md:right-40"} lg:max-w-52   lg:top-36  lg:right-52 xl:top-36  ${ language=="en"?" ":"rotate-1 -scale-x-100"} xl:right-56  z-20   `}
                viewBox="0 0 192 214"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M77.6085 209.708C68.2039 213.068 57.9051 214.549 47.6943 212.844C30.7762 210.014 17.0731 198.979 9.10419 181.753C1.00611 164.255 2.3598 142.058 12.5371 125.216C22.1608 109.32 36.9731 100.907 47.2782 95.9667C51.0575 94.1546 54.9064 92.4929 58.6283 90.8766C71.9886 85.0842 83.5304 80.0849 89.5684 70.1538C90.9337 67.9137 92.5418 64.3921 92.4885 60.3648C92.3374 48.2638 79.7918 39.6666 71.2175 39.0656C62.5624 38.4617 54.8594 41.325 48.9557 47.3529C41.3254 55.1447 37.8137 66.977 39.0283 80.6735C39.9658 91.1872 32.2158 100.471 21.7111 101.42C11.2013 102.355 1.91821 94.5997 0.966585 84.091C-1.25727 59.4125 6.28477 36.2635 21.6573 20.5922C35.4374 6.52537 53.9803 -0.44933 73.8698 0.936355C87.1802 1.86855 100.878 8.03089 111.462 17.8227C123.667 29.1223 130.487 44.0663 130.694 59.8908C130.827 70.2461 127.892 80.6617 122.216 90.0015C109.874 110.325 89.8691 119.001 73.8016 125.951C70.2583 127.488 66.9217 128.935 63.795 130.434C54.2928 134.992 48.5743 139.488 45.2306 145.015C42.2307 149.99 40.4896 158.577 43.7827 165.701C47.6431 174.055 52.2511 174.83 53.9791 175.121C61.1576 176.316 71.9712 171.864 78.5818 164.962C84.1023 159.199 89.0737 151.942 94.3345 144.248C99.5126 136.68 104.884 128.85 111.35 121.586C131.033 99.4845 156.369 91.2458 179.134 99.5217C189.054 103.131 194.166 114.097 190.561 124.019C186.956 133.941 175.995 139.052 166.075 135.442C154.946 131.389 143.211 143.292 139.881 147.03C135.028 152.476 130.581 158.971 125.862 165.866C119.971 174.47 113.868 183.373 106.182 191.408C99.1536 198.746 89.0466 205.622 77.6227 209.703"
                  fill="#7E86FF"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NumbersSection;
