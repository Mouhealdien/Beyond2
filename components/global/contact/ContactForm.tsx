import React, { useRef, useState } from "react";
import Input from "../Input";
import { useTranslation } from "next-i18next";
import { useSendEmailMutation } from "../../../lib/redux/services/api";
import { ContactFormData } from "../../../common/types/contact";
import { Controller, useForm } from "react-hook-form";
import Select, { OptionsOrGroups, GroupBase } from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface OptionType {
  value: string;
  label: string;
}
const ContactForm = () => {
  const { i18n, t } = useTranslation();
  const recaptcha = useRef<ReCAPTCHA | null>(null);
  const selectStyle = {
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
      fontSize: "14px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "14px",
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      fontSize: "14px",
      paddingTop: "4px",
      borderRadius: "6px",
      border: "none",
      paddingBottom: "4px",
    }),
  };

  const selectTheme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary: "#202EFF",
    },
  });

  const questionRegardingOptions: OptionsOrGroups<
    OptionType,
    GroupBase<OptionType>
  > = [
    { value: "socialMediaManagement", label: t("socialMediaManagement") },
    {
      value: "marketingStrategyDevelopment",
      label: t("marketingStrategyDevelopment"),
    },
    { value: "nalyticsAndEvaluation", label: t("analyticsAndEvaluation") },
    { value: "designAndProduction", label: t("designAndProduction") },
  ];

  const hearUsOptions: OptionsOrGroups<OptionType, GroupBase<OptionType>> = [
    { value: "searchEngines", label: t("searchEngines") },
    { value: "socialMedia", label: t("socialMedia") },
    { value: "referrals", label: t("referrals") },
    { value: "advertising", label: t("advertising") },
  ];

  const timeOptions: OptionsOrGroups<OptionType, GroupBase<OptionType>> = [
    { value: "morning", label: t("morning") },
    { value: "afternoon", label: t("afternoon") },
    { value: "evening", label: t("evening") },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: undefined,
      email: undefined,
      phoneNumber: undefined,
    },
  });

  const onSubmit = async (data) => {
    const token = recaptcha.current.getValue();
    if (token) {
      console.log("Captcha checked");
      toast.success("we will reply you soon");
      console.log({
        ...data,
        requestType: data.requestType.value,
        HowDidYouHearAboutUs: data.HowDidYouHearAboutUs.value,
        bestTime: data.bestTime.value,
      });
    } else {
      toast.error("please check the reCaptcha");
    }

    // await toast.promise(updateService({ formData: data }).unwrap(), {
    // 	error: t('could-not-update'),
    // 	pending: t('trying-to-update'),
    // 	success: t('updated-successfully') as string,
    // });
  };

  return (
    <>
      <ToastContainer />
      <form
        className="flex flex-col justify-center items-center gap-5 px-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="basis-1/2">
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "name",
                  name: "name",
                  type: "text",
                  placeholder: "name ",
                }}
                label={t("name") + "*"}
              />
            )}
          />
          {errors.name && (
            <p className="text-xs mb-3 text-red-700">
              {t("name") + " " + t("requried")}
            </p>
          )}
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "email",
                  name: "email",
                  type: "text",
                  placeholder: "email ",
                }}
                label={t("email") + "*"}
              />
            )}
          />
          {errors.email && (
            <p className="text-xs mb-3 text-red-700">
              {t("email") + " " + t("requried")}
            </p>
          )}
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "mobileNumber",
                  name: "mobileNumber",
                  type: "text",
                  placeholder: "Mobile Number ",
                }}
                label={t("mobileNumber") + "*"}
              />
            )}
          />
          {errors.phoneNumber && (
            <p className="text-xs mb-3 text-red-700">
              {t("mobileNumber") + " " + t("requried")}
            </p>
          )}

          <Controller
            name="jobTitle"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "jobTitle",
                  name: "jobTitle",
                  type: "text",
                  placeholder: "jobTitle ",
                }}
                label={t("jobTitle")}
              />
            )}
          />

          <Controller
            name="institution"
            control={control}
            render={({ field }) => (
              <Input
                inputProps={{
                  ...field,
                  id: "institution",
                  name: "institution",
                  type: "text",
                  placeholder: "Institution ",
                }}
                label={t("institution")}
              />
            )}
          />

          <Controller
            name="requestType"
            control={control}
            render={({ field }) => {
              return (
                <Select
                  className="my-4 border-gray-200 shadow"
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={selectStyle}
                  theme={selectTheme}
                  placeholder={t("questionRegarding")}
                  {...field}
                  options={questionRegardingOptions}
                />
              );
            }}
          />
          <Controller
            name="HowDidYouHearAboutUs"
            control={control}
            render={({ field }) => (
              <Select
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={selectStyle}
                theme={selectTheme}
                className="my-4 border-gray-200 shadow"
                placeholder={t("hearUs")}
                {...field}
                options={hearUsOptions}
              />
            )}
          />
          <Controller
            name="bestTime"
            control={control}
            render={({ field }) => (
              <Select
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={selectStyle}
                theme={selectTheme}
                className="my-4 border-gray-200  shadow "
                placeholder={t("contactTime")}
                {...field}
                options={timeOptions}
              />
            )}
          />
        </div>
        <ReCAPTCHA
          sitekey="6LeK1O0pAAAAALRCLnjlY-hq0c5rpp5og9t-DgFK"
          ref={recaptcha}
        />

        <button
          type="submit"
          className="bg-primary w-[300px] sm:w-[400px] text-white py-2 rounded-full"
        >
          {t("Send")}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
