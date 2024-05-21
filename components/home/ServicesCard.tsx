import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

type propsType={
    key:number
}
const ServicesCard = ({key}:propsType) => {
  return (
        <div          
            key={key}
            className="flex-col flex gap-2   max-w-[200px]  md:max-w-[400px]  rounded-lg shadow-lg lg:basis-1/2  lg:max-w-[450px] bg-[#E9EAFF] px-4 py-2 "
            >
            <div className=" bg-primary rounded-md w-fit px-4 py-4">
                <FaLocationArrow className="text-2xl lg:text-3xl" color="#B3D4FF" />
            </div>

            <h1 className=" text-lg md:text-xl lg:text-2xl">Marketing Strategy Planning</h1>
            <p className="text-sm md:text-base lg:text-lg">
                Crafting strategic plans aligned with your business
                objectives, through market analysis, audience
                segmentation, and precise goal setting.
            </p>
            </div>
  )
}

export default ServicesCard