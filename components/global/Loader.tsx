import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Loader = () => {
  // const [isLoading, setLoading] = React.useState(false);
  // const router = useRouter();

  // React.useEffect(() => {
  //   let timer;

  //   const start = () => (timer = setTimeout(() => setLoading(true)));

  //   const end = () => {
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //     setLoading(false);
  //   };

  //   router.events.on("routeChangeStart", start);
  //   router.events.on("routeChangeComplete", end);
  //   router.events.on("routeChangeError", end);

  //   return () => {
  //     router.events.off("routeChangeStart", start);
  //     router.events.off("routeChangeComplete", end);
  //     router.events.off("routeChangeError", end);

  //     if (timer) {
  //       clearTimeout(timer.current);
  //     }
  //   };
  // }, [router.events]);

  return (
    <div
      dir="ltr"
      className="loading space-x-1 z-50 text-[1rem] sm:text-[6rem]  text-primary loading01"
    >
      <span>B</span>
      <span>E</span>
      <span>Y</span>
      <span>O</span>
      <span>N</span>
      <span>D</span>
      <span className="inline">
        <svg
          className="inline ml-0 pl-0 mt-[23px] md:mt-[27px]    w-[15px] h-[14px] md:w-[16px] md:h-[20px] "
          width="15"
          height="20"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3813 -1.87188e-05L0.5 10.6636L11.3812 21.3272L22.2625 10.6636L11.3813 -1.87188e-05Z"
            fill="#2e3192"
          />
        </svg>
      </span>
    </div>
  );
};

export default Loader;
