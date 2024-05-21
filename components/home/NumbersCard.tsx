import React from "react";
type props = {
  text1: string;
  text2: string;
};
const NumbersCard = ({ text1, text2 }: props) => {
  return (
    <div
      style={{
        clipPath: " polygon(0 0, 68% 0, 100% 28%, 100% 100%, 28% 100%, 0 71%)",
      }}
      className="flex flex-col gap-1 max-w-xs min-h-[200px] min-w-[160px] sm:min-w-[220px] lg:min-w-[300px]   xl:min-h-[200px] px-9  sm:px-10 py-12 bg-white border border-gray-200 "
    >
      <h5 className=" text-3xl xs:text-4xl md:text-4xl lg:text-6xl  font-bold text-primary ">
        {text1}
      </h5>
      <p className="font-normal text-[18px] xs:text-xl lg:text-2xl text-[#444545] ">
        {text2}
      </p>
    </div>
  );
};

export default NumbersCard;
