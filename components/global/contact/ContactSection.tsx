import React from "react";
import ContactInfo from "./ContactInfo";
import EyeSvg from "./EyeSvg";
import FooterAndContactLogo from "../FooterAndContactLogo";
import ContactForm from "./ContactForm";
import { useTranslation } from "next-i18next";

const ContactSection = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";

  return (
    <div className=" bg-white pt-10 md:py-20" id="contact">
      <div className="  lg:max-w-[1100px]  xl:w-[1423px] m-auto  flex flex-row py-2 justify-center lg:justify-start ">
        <div className=" hidden lg:block w-[150px] relative z-10 ">
          {/* <svg
            className={`absolute  ${language=="ar"?" rotate-1 -scale-x-100 right-10 xl:-right-28 left-40 ":" left-10 xl:-left-28 right-40 "}   xl:h-[600px] lg:w-[950px] xl:w-[1290px] top-0 bottom-0`}
            viewBox="0 0 1423 827"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M158.023 600.576L958.539 735.242L1073.74 816.605C1099.72 834.959 1143.7 828.015 1156.29 803.582L1413.44 392.745C1445.16 331.31 1395.06 223.202 1305.8 207.13L208.64 3.69061C104.086 -15.1157 2.1887 40.2803 0.403943 116.922L0.403917 451.227C-5.84273 521.771 60.9819 585.094 158.023 600.576Z"
              fill="#202EFF"
            />
          </svg> */}
          <svg
            className={`absolute  ${language == "ar" ? " rotate-0 -scale-x-100 right-10 xl:-right-6 left-40 " : " left-10 xl:-left-6 right-40 "}   h-[600px] lg:w-[950px] xl:w-[1100px]  top-0 bottom-0`}
            width="1412"
            height="673"
            viewBox="0 0 1412 673"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H1156.5L1411.47 252.594V672.345H260.178L1.85536 416.5L0 0Z"
              fill="#2e3192"
            />
          </svg>

          <h1
            className={` absolute  text-white lg:text-5xl xl:text-6xl w-[21rem] -rotate-90  lg:top-36  ${language == "en" ? "-left-20 lg:top-44 xl:top-52" : "-right-20 lg:top-[16rem] xl:top-60"}  `}
          >
            {t("contact-us")}
          </h1>
          <div
            className={` ${language == "en" ? "top-40 xl:top-48 right-5 lg:left-[39rem] xl:left-[40rem]" : "top-40 xl:top-48 left-5 lg:right-[39rem] xl:right-[40rem]"} absolute  `}
          >
            <ContactInfo customeStyle="text-white" />
          </div>
          <EyeSvg />
        </div>
        <div
          style={{
            clipPath:
              language == "en"
                ? "polygon(0 0, 100% 0%, 100% 100%, 0 71%)"
                : "polygon(0 0, 100% 0%, 100% 71%, 0 100%)",
          }}
          className={`hidden sm:block lg:hidden w-[150px] h-[500px] relative bg-primary ${language == "en" ? "" : ""} `}
        >
          <h1 className=" absolute  text-white text-6xl w-[21rem] -rotate-90 top-44 -left-24 ">
            {t("contact-us")}
          </h1>
        </div>

        <div className="bg-[#F3F3F3]  px-3 py-3 shadow-inner pb-5 h-fit z-20 ">
          <FooterAndContactLogo />
          <p className={`text-[#5D5E5E]  py-2 px-5 `}>{t("feel-free")}</p>
          <ContactForm />
          <ContactInfo
            customeStyle={` block  lg:hidden py-5 mt-2 px-2 text-primary pt-5`}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
