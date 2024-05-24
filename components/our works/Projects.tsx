
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import work from "../../public/assets/works.png";
import { FaArrowRight } from "react-icons/fa";
import useMediaQuery from "../../lib/hooks/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
const Projects = () => {
  const arr = [1, 2, 3];
  const istab = useMediaQuery("(min-width: 1025px)");
  const { i18n, t } = useTranslation();
	const language = i18n.language === 'en' ? 'en' : 'ar';

  return (
    <div className="flex flex-row  xxs:gap-5  justify-center xl:justify-end flex-wrap ">
      {arr.map((e, i) => {
        let mt = istab ? `${(i % 3) + 1}rem` : `${(i % 2) + 1}rem`;

        return (
          <div
            key={i}
            style={{ marginTop: `${mt}` }}
            className=" pb-5 sm:pb-1   max-w-[200px] sm:max-w-[300px] md:max-w-[260px] xl:max-w-[270px] h-[300px] sm:h-[400px]  "
          >
            <div className=" rounded-xl h-[70%] xxs:h-[80%] mb-2  overflow-hidden  ">
              <Image
                style={{ transform: "scale(2.5)"  }}
                className="rounded-t-lg   "
                src={work}
                height="600px"
                width="500px"
                
                objectFit="contain"
                alt=""
              />
            </div>
            <div className="  text-primary ">
              <h1 className="text-lg  text-black md:text-[18px]  lg:text-[24px]   font-bold">
                Brand awareness
              </h1>
              <Link
             
                className="text-primary px-10 text-[10px] md:text-base"
                href={"our-works/id"}
              
              >    
               {t('show-full-project')}
              </Link>
              <FaArrowRight className={` text-[12px] mx-2   inline text-primary ${language=="ar"?"rotate-180":""}`}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

{
  /* <div key={i} style={{marginTop:`${mt}`}} className={`flex flex-col`}>
                  <div className="overflow-hidden rounded-md max-w-[9rem] md:max-w-[16rem] lg:max-w-[350px] h-[15rem]  lg:h-[25rem] ">
                    <Image
                      style={{ transform: "scale(2.5)" }}
                      className="   "
                      src={work}
                      alt="work"
                    />
                  </div>
                  <h1 className="text-[20px]  sm:text-green-700 md:text-blue-700 lg:text-red-500 font-bold">hello world</h1>
                  <Link className="text-primary px-5" href={"#"}>
                    show full project{" "}
                    <FaArrowRight width={3} className="inline-block" />{" "}
                  </Link>
                </div>  */
}
