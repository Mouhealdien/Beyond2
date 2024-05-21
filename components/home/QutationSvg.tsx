import { useTranslation } from "next-i18next";
import React from "react";

type propsType = {
  customeStyle?: string;
};
const QutationSvg = ({ customeStyle }: propsType) => {
  const { i18n, t } = useTranslation();
	const language = i18n.language === 'en' ? 'en' : 'ar';
  return (
    <div className={`inline-block  ${customeStyle} `}>
      <svg
        className={`${language=="en"?"mx-4":""}   w-[25px] sm:w-[30px] md:w-[40px] xl:w-[50px] `}
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M61 25.2984V61H21.1456L0 35.9844L0 0L39.6093 0L61 25.2984Z"
          fill="white"
        />
      </svg>
      <svg
        className={`  ${language=="ar"?"mx-4":""}  w-[25px] sm:w-[30px] md:w-[40px] xl:w-[50px] `}
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M61 25.2984V61H21.1456L0 35.9844L0 0L39.6093 0L61 25.2984Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default QutationSvg;
