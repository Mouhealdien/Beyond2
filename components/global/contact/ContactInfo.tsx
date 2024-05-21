import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useTranslation } from "next-i18next";
type propsType = {
  customeStyle?: string;
};
const ContactInfo = ({ customeStyle }: propsType) => {
  const { t ,i18n } = useTranslation('common');
  
  const data = [
    {
      icon: (
        <MdOutlineMailOutline className="w-8 h-8 m-auto pt-2 text-[#FE5400] " />
      ),
      text: "contact@beyond.com",
    },
    {
      icon: <FiPhone className="w-8 h-8 m-auto pt-2 text-[#FE5400] " />,
      text: "+4567 123 770 964",
    },
    {
      icon: (
        <IoLocationOutline className="w-8 h-8 m-auto pt-2 text-[#FE5400] " />
      ),
      text: "Baghdad, Al-Mansour, opposite Baghdad Tower, Iraq",
    },
  ];

  return (
    <div className={`${customeStyle}  flex flex-col gap-2`}>
      <h1 className="    text-2xl w-60   pb-3 ">{t('contact-information')}</h1>
      {data.map((e, i) => {
        return (
          <div key={i} className="flex flex-row gap-2  w-fit items-center ">
            <div
              className="bg-[#FEEEE9]  w-10 h-10"
              style={{
                clipPath:
                  " polygon(0 0, 68% 0, 100% 28%, 100% 100%, 28% 100%, 0 71%)",
              }}
            >
              {e.icon}
            </div>
            <p className="text-sm w-72">{e.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
