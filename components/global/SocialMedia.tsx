import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { ReactElement } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useGetSharedQuery } from "../../lib/redux/services/api";
import SocialLinks from "./SocialLinks";

type propsType = {
  customeStyle?: string;
};
const SocialMedia = ({ customeStyle }: propsType) => {
  const { t, i18n } = useTranslation("common");

  return (
    <div className={`absolute ${customeStyle} z-40`}>
      <div className="flex flex-col items-center gap-10 ">
        <div className="border-l-gray-200  border-l h-36  " />
        <p className=" text-white rotate-90  ">{t("Follow-us")}</p>
        <SocialLinks customeStyle={"flex-col"} />
      </div>
    </div>
  );
};

export default SocialMedia;
