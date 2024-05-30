import React from 'react'
import Image from "next/image";
import x from "../../public/assets/aboutImage.png";
const AchievementCard = () => {
  return (
    <div
             
              className="flex gap-2  items-center flex-row max-w-[300px] sm:max-w-[300px] min-w-[150px]"
            >
              <div className="overflow-hidden rounded-full max-w-20 max-h-20 min-w-20 min-h-20 sm:max-w-20 sm:max-h-20 sm:min-w-20 sm:min-h-20 bg-gray-50 border border-gray-200">
                <Image src={x} alt="aa" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-primary text-[20px] sm:text-[20px]">
                  2024
                </h2>
                <h3 className=" text-white text-base xs:text-lg sm:text-base">
                  Meta Certified Digital Marketing Associate
                </h3>
                <h4 className=" text-white text-sm ">
                  Issued by Meta
                </h4>
              </div>
            </div>
  )
}

export default AchievementCard