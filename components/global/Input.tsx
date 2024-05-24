import React from "react";

type PropsType = {
  placeholder: string;
  type: string;
  value: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
};

const Input: React.FC<PropsType> = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      className="w-[300px] sm:w-[400px] py-2 px-1"
      placeholder={placeholder}
      type={type}
      value={value} 
      onChange={onChange} 
      required
    />
  );
};

export default Input;