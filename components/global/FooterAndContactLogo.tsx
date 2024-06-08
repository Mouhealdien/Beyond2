import Image from "next/image";
import React from "react";
import logo from "../../public/assets/Logo.svg";
import Logo from "./Logo";
const FooterAndContactLogo = () => {
  return (
    <div className="flex flex-row px-3 items-end gap-1">
      <div className="relative">
        <svg
          width="140"
          height="111"
          viewBox="0 0 166 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H127.972L166 37.6854V111H38.8046L0.27672 72.8296L0 0Z"
            fill="#202EFF"
          />
        </svg>
        {/* <Image
          className="absolute top-5 left-5"
          priority
          src={logo}
          height={50}
          width={100}
          alt="Follow us on Twitter"
        /> */}
        <Logo customeStyle="absolute top-5 left-4 w-24" />
      </div>

      <p className="text-xs text-primary font-bold">
        {" "}
        Creative <br /> Iraqi <br /> Modern
      </p>
    </div>
  );
};

export default FooterAndContactLogo;
