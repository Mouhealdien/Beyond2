import React, { useState } from "react";
import Input from "../Input";
import { useTranslation } from "next-i18next";
import { useSendEmailMutation } from "../../../lib/redux/services/api";
import { ContactFormData } from "../../../common/types/contact";
const ContactForm = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState("");
  const [challenge, setChallenge] = useState("");

  const { i18n, t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData:ContactFormData={
      name: fullName,
      email: email,
      requestType: requestType,
      message: challenge,
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSendEmailMutation(formData)
    
    setFullName("");
    setEmail("");
    setRequestType(""); 
    setChallenge("");
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-5 px-5"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder={t("full-name")}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        type="email"
        placeholder={t("email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        required
        className="w-[300px]   sm:w-[400px] py-2 px-1"
        value={requestType}
        onChange={(e) => setRequestType(e.target.value)}
      >
        
        <option value=""  disabled selected hidden>
       {t('select-request-type')}
        </option>
        <option value="general question">{t("general question")}</option>
        <option value="marketing" className="hover:bg-primary">
          {t("marketing")}
        </option>
        
        <option value="graphic design">{t("graphic design")}</option>
        
      </select>
      <textarea
        required
        rows={5}
        placeholder={t("what-is-your-challenge")}
        value={challenge}
        onChange={(e) => setChallenge(e.target.value)}
        className="w-[300px] sm:w-[400px] py-2 px-1"
      />
      <button type="submit" className="bg-primary w-[300px] sm:w-[400px] text-white py-2 rounded-full">
        {t("Send")}
      </button>
    </form>
  );
};

export default ContactForm;
