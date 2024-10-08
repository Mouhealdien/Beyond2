import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import useMediaQuery from "../../lib/hooks/hooks/useMediaQuery";
import { useTranslation } from "next-i18next";
import { Project } from "../../common/types/projects";
import { getPhotoUrl } from "../../lib/utils";
const Projects = ({ projects }) => {
  const istab = useMediaQuery("(min-width: 1025px)");
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";

  return (
    <div className="flex flex-row  xxs:gap-5 px-1  justify-center xl:justify-end flex-wrap ">
      {projects?.map((e: Project, i) => {
        let mt = istab ? `${(i % 3) + 1}rem` : `${(i % 2) + 1}rem`;

        return (
          <div
            key={i}
            style={{ marginTop: `${mt}` }}
            className={`pb-5 sm:pb-1  max-w-[200px] sm:max-w-[300px] md:max-w-[260px] xl:max-w-[300px] `}
          >
            <Link
              className="text-primary px-10 text-[10px] md:text-base"
              href={`our-works/${e._id}`}
            >
              <a>
                <div className=" rounded-xl mb-1  overflow-hidden  ">
                  <Image
                    style={{ transform: "scale(2.5)" }}
                    className="rounded-t-lg   "
                    src={getPhotoUrl(e.photo)}
                    height="600px"
                    width="500px"
                    objectFit="contain"
                    alt=""
                  />
                </div>
                <div className="  text-primary ">
                  <h1 className="text-lg  text-secondary md:text-[18px]  lg:text-[24px]   font-bold">
                    {e.title?.[language]}
                  </h1>

                  {t("show-full-project")}

                  <FaArrowRight
                    className={` text-[12px] mx-2   inline text-primary ${language == "ar" ? "rotate-180" : ""}`}
                  />
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
