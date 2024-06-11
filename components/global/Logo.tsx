import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/assets/Logo.png";
type propsType = {
  customeStyle?: string;
};
const Logo = ({ customeStyle }: propsType) => {
  return (
    <Link href="/">
      <Image
        className={customeStyle}
        width={115}
        height={29}
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
