import React, { Component } from "react";
import { FaLocationArrow } from "react-icons/fa";

type propsType = {
  key: number;
  title: string;
  paragraph: string;
  icon: any;
};
const ServicesCard = ({ key, title, paragraph, icon }: propsType) => {
  return (
    <div
      key={key}
      className="flex-col flex gap-2 text-secondary   max-w-[400px]  rounded-lg shadow-lg lg:basis-1/2  lg:max-w-[450px] bg-[#E9EAFF] px-4 py-2 "
    >
      <div className=" bg-primary rounded-md w-fit px-4 py-4">{icon}</div>

      <h1 className=" text-lg md:text-xl lg:text-2xl">{title}</h1>
      <p className="text-sm md:text-base lg:text-lg">{paragraph}</p>
    </div>
  );
};

export default ServicesCard;
