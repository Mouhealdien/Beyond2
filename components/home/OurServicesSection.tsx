import React, { useState } from "react";
import { Container } from "../global/Container";
import ServicesCard from "./ServicesCard";
import { useTranslation } from "next-i18next";
import { useGetServicesQuery } from "../../lib/redux/services/api";
import { IoMdAnalytics, IoMdPhonePortrait } from "react-icons/io";
import { SiMicrostrategy, SiTaichigraphics } from "react-icons/si";
import { PiTargetBold, PiNotePencilBold } from "react-icons/pi";
import { FaPenNib, FaEarthAmericas } from "react-icons/fa6";

const iconStyle = "text-2xl lg:text-4xl text-[#B3D4FF]";
export const icons = [
  <IoMdAnalytics key={1} className={iconStyle} />,
  <SiMicrostrategy key={2} className={iconStyle} />,
  <PiTargetBold key={3} className={iconStyle} />,
  <PiNotePencilBold key={4} className={iconStyle} />,
  <IoMdPhonePortrait key={5} className={iconStyle} />,
  <FaPenNib key={6} className={iconStyle} />,
  <SiTaichigraphics key={7} className={iconStyle} />,
  <FaEarthAmericas key={8} className={iconStyle} />,
];
const OurServicesSection = () => {
  const [showMore, setShowMore] = useState(false);
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const { data } = useGetServicesQuery();

  const services = data?.data?.services;
  console.log(services);
  return (
    <Container>
      <div className="flex  gap-8 justify-center items-center  flex-wrap md:flex-nowrap  md:flex-row pt-40 pb-10">
        <div className="flex gap-4 justify-center flex-col">
          <h1 className="text-white px-2 lg:px-5 py-4 rounded-xl text-center bg-orange-500 text-xl md:text-2xl lg:text-4xl">
            {t("our-services")}
          </h1>
          {services?.map((service, i) => {
            if (i < 2)
              return (
                <ServicesCard
                  key={i}
                  title={service.title?.[language]}
                  paragraph={service.paragraph?.[language]}
                  icon={icons[i]}
                />
              );
          })}
        </div>

        <div className="flex gap-4  flex-col">
          {services?.map((service, i) => {
            if (i >= 2 && i <= 4)
              return (
                <ServicesCard
                  key={i}
                  title={service.title?.[language]}
                  paragraph={service.paragraph?.[language]}
                  icon={icons[i]}
                />
              );
          })}
        </div>

        <div
          className={`flex gap-4 ${showMore ? "block" : "hidden"} md:flex justify-center flex-row flex-wrap md:flex-col`}
        >
          {services?.map((service, i) => {
            if (i > 4 && i <= arr.length)
              return (
                <ServicesCard
                  key={i}
                  title={service.title?.[language]}
                  paragraph={service.paragraph?.[language]}
                  icon={icons[i]}
                />
              );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center py-3">
        <button
          onClick={() => {
            setShowMore(!showMore);
          }}
          type="button"
          className=" block md:hidden font-bold  mx-4 w-[120px] xs:w-[150px] bg-[#E9EAFF] text-black  hover:bg-transparent hover:border-[#E9EAFF] hover:border-2 rounded-lg text-sm px-4 py-2 text-center  "
        >
          {showMore ? t("show-less") : t("show-more")}
        </button>
      </div>
    </Container>
  );
};

export default OurServicesSection;
