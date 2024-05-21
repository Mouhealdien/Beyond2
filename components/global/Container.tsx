import React, { ReactNode } from "react";

type props = {
  children: ReactNode;
  customeStyle?: string;
};

export const Container = ({ children, customeStyle }: props) => {
  return (
    <div className={`${customeStyle}  px-5 xl:px-[120px]`}>{children}</div>
  );
};
