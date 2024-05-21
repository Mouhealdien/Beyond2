import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { ReactElement } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type propsType = {
  customeStyle?: string;
};
const SocialMedia = ({ customeStyle }: propsType) => {

  const { t ,i18n } = useTranslation('common');
  
  const social = [
    {
      icon: <FaFacebook color="white" />,
      url: "#",
    },
    {
      icon: <FaInstagram color="white" />,
      url: "#",
    },
    {
      icon: <FaXTwitter color="white" />,
      url: "#",
    },
  ];
  return (
    <div className={`absolute ${customeStyle} z-40`}>
      <div className="flex flex-col items-center gap-10 ">
        <div className="border-l-gray-200  border-l h-36  " />
        <p className=" text-white rotate-90  ">{t('Follow-us')}</p>
        <div className="flex flex-col items-center gap-2">
          {social.map((e, i) => {
            return (
              <Link key={i} href={e.url}>
                {e.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
