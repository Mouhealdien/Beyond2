import React from "react";

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
        <h1 className="absolute top-5 left-5 text-xl font-extrabold text-white">
          {" "}
          Beyond.
        </h1>
      </div>

      <p className="text-xs text-primary font-bold">
        {" "}
        Creative <br /> Iraqi <br /> Modern
      </p>
    </div>
  );
};

export default FooterAndContactLogo;
