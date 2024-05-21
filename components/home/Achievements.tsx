import React from "react";
import { Container } from "../global/Container";
import Image from "next/image";
import x from "../../public/assets/aboutImage.png";
const Achievements = () => {
  const arr = [1, 2, 3];
  return (
    <Container>
      <div className="w-full text-center py-10 ">
        <h2 className=" py-5 text-4xl md:text-6xl m-auto max-w-[700px] font-bold">
          Certificates and achievements we collect
        </h2>
      </div>

      <div className="flex justify-center gap-5 flex-row flex-wrap">
        {arr.map((e, i) => {
          return (
            <div
              key={i}
              className="flex gap-2  items-center flex-row max-w-[300px] sm:max-w-[400px] min-w-[150px]"
            >
              <div className="overflow-hidden rounded-full max-w-32 max-h-32 min-w-32 min-h-32 sm:max-w-36 sm:max-h-36 sm:min-w-36 sm:min-h-36 bg-gray-50 border border-gray-200">
                <Image src={x} alt="aa" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#FE5400] text-[20px] sm:text-[32px]">
                  2024
                </h2>
                <h3 className=" text-[#444545] text-base xs:text-lg sm:text-2xl">
                  Meta Certified Digital Marketing Associate
                </h3>
                <h4 className=" text-[#444545] text-sm sm:text-lg">
                  Issued by Meta
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Achievements;
