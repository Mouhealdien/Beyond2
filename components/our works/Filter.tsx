
import { useTranslation } from "next-i18next";
import React, { useState } from "react";

const Filter = () => {
  const [category, setCategory] = useState<string>("Case Studies");
  const { i18n, t } = useTranslation();
	const language = i18n.language === 'en' ? 'en' : 'ar';

  const selectCategory = (selectedCategory: any) => {
    setCategory(selectedCategory);
  };
  const categories = [
    "Case Studies",
    "Strategy Planning",
    "Social Media",
    "Brand Development",
    "Content Marketing",
    "Analytics",
  ];
  return (
    <div className={` sticky ${language=="en"?"float-left left-0":"float-right right-0"}    top-0   h-full `}>
      {categories.map((e) => {
        return (
          <div
            className=" flex flex-row  items-center text-base sm:text-[18px]"
            key={e}
          >
            {e == category && (
              <svg
                className="inline-block"
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.79248 2.57021e-07L0 9.79248L9.79247 19.585L19.585 9.79247L9.79248 2.57021e-07Z"
                  fill="#202EFF"
                />
              </svg>
            )}
            <div
              className={`${category == e ? "font-bold" : ""} px-1 `}
              onClick={() => selectCategory(e)}
            >
              {t(e)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
