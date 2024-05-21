import React from "react";
type propsType = {
  placeholder: string;
};
const Input = ({ placeholder }: propsType) => {
  return (
    <input
      className="w-[300px] sm:w-[400px] py-2 px-1"
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
