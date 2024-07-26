/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import likes from "../../public/assets/FBLikesBubbles.svg";
import Image from "next/image";
import { useGetSharedQuery } from "../../lib/redux/services/api";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { BsGlobe, BsEnvelope } from "react-icons/bs";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import logo2 from "../../public/assets/logo2.png";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
const index = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";
  const { data: shared } = useGetSharedQuery();
  const sharedData = shared?.data?.shared;
  console.log(shared);
  const social = [
    {
      icon: (
        <div className="bg-primary rounded-full px-2 py-2 sm:text-xl text-white">
          <SlSocialFacebook />
        </div>
      ),
      url: sharedData?.facebookLink ? sharedData?.facebookLink : "",
      title1: t("Follow-us"),
      title2: t("facebook"),
    },
    {
      icon: (
        <div className="bg-primary rounded-full px-2 py-2 sm:text-xl text-white">
          <IoLogoInstagram />
        </div>
      ),
      url: sharedData?.instagramLink ? sharedData?.instagramLink : "",
      title1: t("Follow-us"),
      title2: t("instagram"),
    },
    {
      icon: (
        <div className="bg-primary rounded-full px-2 py-2 sm:text-xl text-white">
          <FiLinkedin />
        </div>
      ),
      url: sharedData?.linkedinLink ? sharedData?.linkedinLink : "",
      title1: t("Follow-us"),
      title2: t("linkedin"),
    },
    {
      icon: (
        <div className="bg-primary rounded-full px-2 py-2 sm:text-xl text-white">
          <BsGlobe />
        </div>
      ),
      url: "https://www.beyond4m.com",
      title1: t("our-website"),
      title2: "beyond4m.com",
    },
    {
      icon: (
        <div className="bg-primary rounded-full px-2 py-2 sm:text-xl text-white">
          <FaWhatsapp />
        </div>
      ),
      url: sharedData?.linkedinLink ? sharedData?.linkedinLink : "",
      title1: t("whatsapp"),
      title2: sharedData?.phone ? sharedData?.phone : "",
    },
    {
      icon: (
        <div className="bg-primary rounded-full px-2 py-2 sm:text-xl text-white">
          <BsEnvelope />
        </div>
      ),
      url: sharedData?.linkedinLink ? sharedData?.linkedinLink : "",
      title1: t("email"),
      title2: sharedData?.email ? sharedData?.email : "",
    },
  ];
  return (
    <div className="flex flex-col justify-center pb-10 items-center">
      <Image src={likes} alt="like" />
      <div className="relative flex justify-center">
        <div className=" text-primary  flex items-center z-10 absolute  rounded-full py-11 px-3 -top-14   shadow-inner  bg-white ">
          <Image
            width={90}
            height={22}
            src={logo2}
            alt="logo"
            className=" px-0 "
            layout="fixed"
          />
        </div>
      </div>
      <div
        style={{
          clipPath: "polygon(0 0, 87% 0, 100% 9%, 100% 100%, 12% 100%, 0 91%)",
        }}
        className="bg-primary relative max-w-[600px]   pb-10 px-5 pt-28"
      >
        <div className="flex flex-col justify-center  items-center gap-3">
          <h1 className="text-white text-3xl ">{t("contact-title")}</h1>
          <p className="text-white text-center">{t("contact-paragraph")}</p>
          <div
            style={{
              clipPath:
                "polygon(0 0, 87% 0, 100% 9%, 100% 100%, 12% 100%, 0 88%)",
            }}
            className="bg-white  w-full px-5 py-5  "
          >
            {social.map((e, i) => {
              return (
                <div
                  className={` py-2  items-center gap-2 flex-row flex ${i < social.length - 1 ? "border-b-2 border-gray-200" : ""}`}
                  key={i}
                >
                  <Link href={e.url}>{e.icon}</Link>
                  <div className="flex flex-col">
                    <h2 className="text-gray-400 text-sm"> {e.title1}</h2>

                    <Link className="text-base" href={e.url}>
                      {i == 4 || i == 5 ? (
                        <a
                          dir={i == 4 && language == "ar" ? "ltr" : ""}
                          href={
                            i == 4 ? `tel:${e.title2}` : `mailto:${e.title2}`
                          }
                        >
                          {e.title2}
                        </a>
                      ) : (
                        e.title2
                      )}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
