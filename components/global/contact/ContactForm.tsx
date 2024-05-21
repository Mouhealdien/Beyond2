import React from "react";
import Input from "../Input";

const ContactForm = () => {
  return (
    <form
      className="flex flex-col justify-center items-center gap-5 px-5 "
      action=""
    >
      <Input placeholder="Full Name" />
      <Input placeholder="Email" />
      <Input placeholder="Select request Type" />
      <textarea
        rows={5}
        placeholder="What is your Challange"
        className="w-[300px] sm:w-[400px] py-2 px-1"
      />
      <button className="bg-primary w-[300px] sm:w-[400px] text-white py-2 rounded-full">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
