import React from "react";
import ContactInfo from "./ContactInfo";
import EyeSvg from "./EyeSvg";
import FooterAndContactLogo from "../FooterAndContactLogo";
import ContactForm from "./ContactForm";
import { useTranslation } from "next-i18next";

const ContactSection = () => {
  const { i18n, t } = useTranslation();
	const language = i18n.language === 'en' ? 'en' : 'ar';
  
  return (
    <div className=" bg-white pt-10 md:py-20" id="contact">
      <div className=" lg:max-w-[1100px]  xl:w-[1423px] m-auto  flex flex-row py-2 justify-center lg:justify-start ">
        <div className=" hidden lg:block w-[150px] relative z-10 ">
          <svg
            className={`absolute  ${language=="ar"?" rotate-1 -scale-x-100 right-10 xl:-right-28 left-40 ":" left-10 xl:-left-28 right-40 "}   xl:h-[600px] lg:w-[950px] xl:w-[1290px] top-0 bottom-0`}
            viewBox="0 0 1423 827"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M158.023 600.576L958.539 735.242L1073.74 816.605C1099.72 834.959 1143.7 828.015 1156.29 803.582L1413.44 392.745C1445.16 331.31 1395.06 223.202 1305.8 207.13L208.64 3.69061C104.086 -15.1157 2.1887 40.2803 0.403943 116.922L0.403917 451.227C-5.84273 521.771 60.9819 585.094 158.023 600.576Z"
              fill="#202EFF"
            />
          </svg>
          <h1 className={` absolute  text-white lg:text-5xl xl:text-6xl w-[21rem] -rotate-90 top-52 xl:top-48 ${language=="en"?"-left-16":"-right-20"}  `}>
            {t('contact-us')}
          </h1>
          <div className={` ${ language=="en"?"top-40 xl:top-48 right-5 lg:left-[39rem] xl:left-[40rem]":"top-40 xl:top-48 left-5 lg:right-[39rem] xl:right-[40rem]"} absolute  `}>
            <ContactInfo customeStyle="text-white" />
          </div>
          <EyeSvg />
        </div>
        <div className={`hidden sm:block lg:hidden w-[150px] h-[500px] relative bg-primary ${language=="en"?"rounded-tl-[6rem] rounded-bl-[6rem]":"rounded-tr-[6rem] rounded-br-[6rem]"} `}>
          <h1 className=" absolute  text-white text-6xl w-80 -rotate-90 top-52 -left-20 ">
            {t('contact-us')}
          </h1>
        </div>

        <div className="bg-[#F3F3F3] shadow-inner h-[800px] lg:h-[550px] z-20 ">
          <FooterAndContactLogo />
          <p className={`text-[#5D5E5E]"  py-2 px-5 `}>
            Feel free to write meassage to us
          </p>
          <ContactForm />
        <ContactInfo customeStyle={` block  lg:hidden py-5 mt-2 px-2 text-primary pt-5`} />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
