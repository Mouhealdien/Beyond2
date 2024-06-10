import React, { useState } from "react";
import Image from "next/image";
import x from "../../public/assets/aboutImage.png";
import { useTranslation } from "next-i18next";
import { getPhotoUrl } from "../../lib/utils";
type propsType = {
  name: string;
  job: string;
  description: string;
  img: string;
};
const TestimonialsCard = ({ name, job, description, img }: propsType) => {
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";
  return (
    <div
      dir={language == "en" ? "ltr" : "rtl"}
      className="min-w-[250px] max-w-[600px] min-h-[300px] xs:min-h-[250px] sm:min-h-[250px]  md:min-h-[320px]  lg:min-h-[270px] xl:min-h-[250px]  mx-4 rounded-lg bg-white border border-black p-10 text-gray-800 font-light mb-6"
    >
      <div className="w-full flex flex-row mb-4 items-center">
        <div className="overflow-hidden rounded-full min-w-16 min-h-16 w-16 h-16 bg-gray-50 border border-gray-200">
          <Image
            src={getPhotoUrl(img)}
            layout="responsive"
            width={40}
            height={40}
            alt="aa"
          />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-base uppercase  text-gray-600">
            {" "}
            {name}
          </h6>
          <h6 className="text-base"> {job}</h6>
        </div>
      </div>
      <div className="w-full">
        <p className=" text-base sm:text-xl text-secondary leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
