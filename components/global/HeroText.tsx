import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
const HeroText = ({ subTitles }) => {
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";
  const sentences = subTitles?.[language];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 3000); // Change sentence every 3 seconds

    return () => clearInterval(interval);
  });

  const colorLastWord = (sentence: string) => {
    const words = sentence?.split(" ");
    const lastWord = words[words.length - 1];
    const coloredLastWord = `<p class="text-blue-600 inline-block">${lastWord}</p>  `;
    const modifiedSentence = sentence.replace(lastWord, coloredLastWord);
    return (
      <div
        className="inline-block"
        dangerouslySetInnerHTML={{ __html: modifiedSentence }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="text-[23px] xs:text-3xl inline-block md:text-5xl">
        <span className=" sentencesWrapper ">
          {sentences?.map((e, i) => {
            return (
              <span className="heroSentence " key={i}>
                {colorLastWord(e)}
                <svg
                  className="inline ml-0 pl-0 mt-[23px] md:mt-[27px]    w-[10px] h-[14px] md:w-[15px] md:h-[20px] "
                  width="15"
                  height="20"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3813 -1.87188e-05L0.5 10.6636L11.3812 21.3272L22.2625 10.6636L11.3813 -1.87188e-05Z"
                    fill="#FFF"
                  />
                </svg>
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default HeroText;
