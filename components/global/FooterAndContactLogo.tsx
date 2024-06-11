import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/FooterAndContactLogo.png";
import Link from "next/link";
const FooterAndContactLogo = () => {
  return (
    <div className="flex flex-row px-3  items-end gap-2">
      <div className="relative">
        <Link href="/">
          <Image
            className="p-0"
            width={140}
            height="90"
            src={Logo}
            alt="logo"
          />
        </Link>
      </div>

      <p className="text-xs text-primary px-0 font-bold">
        {" "}
        Creative <br /> Iraqi <br /> Modern
      </p>
    </div>
  );
};

export default FooterAndContactLogo;
