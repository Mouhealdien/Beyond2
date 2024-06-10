import React from "react";
import FotterAndContactLogo from "./FooterAndContactLogo";
import Image from "next/image";
import aboutImage from "../../public/assets/aboutImage3.png";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "next-i18next";
import AchievementCard from "../home/AchievementCard";
import SocialMedia from "./SocialMedia";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";
  const pages = [
    {
      title: t("home"),
      url: "/",
    },
    {
      title: t("about-us"),
      url: "/about-us",
    },
    {
      title: t("our-services"),
      url: "/our-services",
    },
    {
      title: t("our-wroks"),
      url: "/our-works",
    },
  ];

  return (
    <div className="bg-[#1B1C1C] h-fit ">
      <div className="flex flex-row flex-wrap ">
        <Image
          width={1000}
          height={500}
          src={aboutImage}
          className={`${language == "en" ? "" : " rotate-1 -scale-x-100"}`}
          alt="aboutImage"
        />
        <div className="flex gap-5 flex-col pt-10 px-2">
          <FotterAndContactLogo />

          <div className="flex  gap-10 flex-row">
            <ul className=" font-light flex flex-col gap-4 text-sm">
              {pages.map((page, index) => {
                return (
                  <li className=" text-white hover:font-bold" key={index}>
                    <Link
                      href={page.url}
                      className="block  px-3 text-white   md:p-0 "
                      aria-current="page"
                    >
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex-col flex gap-4 items-start">
              <p className=" text-white text-[16px] sm:text-lg  inline  ">
                {t("Follow-us")}
              </p>
              <SocialLinks customeStyle={"flex-row"} />
              <AchievementCard />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full text-center text-base justify-center py-3  text-white">
        <p> Designed by Beyond Agency © All rights reserved 2024</p>
      </div>
    </div>
  );
};

export default Footer;
