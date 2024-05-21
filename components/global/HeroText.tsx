
import React, { useState, useEffect } from "react";

const HeroText = () => {
  const sentences = [
    "Marketing Strategy",
    "Social Media",
    "Analytics and Reporting",
    "Design and Production",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 3000); // Change sentence every 3 seconds

    return () => clearInterval(interval);
  }, );

  const colorLastWord = (sentence: string) => {
    const words = sentence.split(" ");
    const lastWord = words[words.length - 1];
    const coloredLastWord = `<p class="text-blue-600 inline-block">${lastWord}</p>  `;
    const modifiedSentence = sentence.replace(lastWord, coloredLastWord);
    return <div className="inline-block"  dangerouslySetInnerHTML={{ __html: modifiedSentence }} />;
  };

  return (
    <div className="flex items-center justify-center ">
      <div className=" mt-2 text-white  text-4xl p-4">
        {/* {sentences.map((sentence, index) => (
          <div
            key={index}
            className={`absolute   md:top-20  lg:top-12 font-bold right-0 left-0 bottom-0 m-auto transition-all duration-1000 ${
              index === currentIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-100%]"
            }`}
          >
            <p className="  text-[23px] xs:text-3xl inline-block md:text-5xl">
              {colorLastWord(sentence)}
            </p>
            <svg
              className="inline-block mt-3"
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
          </div>
        ))} */}
      </div>


      
      {/* <div className=" overflow-hidden h-[100px] pt-2  ">
      <p className="textHero transition-all duration-1000 text-4xl">{sentences[currentIndex]}</p>
      </div> */}

     

<div className="text-[23px] xs:text-3xl inline-block md:text-5xl">
  <span className=" sentencesWrapper ">
    {sentences.map((e,i)=>{
        return <span className="heroSentence " key={i} >{colorLastWord(e)}
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
    })}
    
   
    </span>
    
</div>    


    </div>
  );
};

export default HeroText;
