
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useState } from "react";
type propsType = {
  backgroundColor?: string;
  customeStyle?: string;
  display?: string;
};
const Navbar = (props: propsType) => {
  const { t ,i18n } = useTranslation('common');
  const arabic = 'ar';
	const English = 'en';

  const handleLanguageChange = () => {
		const nextLocale = i18n.language === arabic ? English : arabic;
    console.log(nextLocale)
		i18n.changeLanguage(nextLocale);

	};
  const pages = [
    {
      title: t("home"),
      url: "/",
    },
    {
      title: t("about-us"),
      url: "/about-us",
    },
    {
      title: t("our-services"),
      url: "/our-services",
    },
    {
      title: t("our-wroks"),
      url: "/our-works",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav
      style={{ backgroundColor: props.backgroundColor, display: props.display }}
      className={`  w-full top-0 start-0  ${props.customeStyle} z-40 `}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3  rtl:space-x-reverse"
        >
          <h1 className=" text-xl text-white font-extrabold">Beyond.</h1>
        </Link>
        
        <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link href={'#contact'}>
          <button
            type="button"
            className="text-black hidden xxs:block font-bold bg-white hover:text-white hover:bg-transparent hover:border-white hover:border focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center  "
          >
            {t('contact-us')}
          </button>
          </Link>
          <button
							onClick={handleLanguageChange}
							className="px-3 py-2 cursor-pointer  text-sm  font-bold  bg-secondary text-white  border-white rounded-lg hover:bg-white hover:text-black transition duration-300 border "
						>
							{t('lang')}
						</button>
          
          <button
            onClick={() => {
              setOpen(!open);
            }}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                style={{
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                }}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${open ? "" : "hidden"} w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}
        >
          <ul className="flex flex-col gap-3 md:gap-0 text-center p-4 md:p-0 mt-4 font-medium rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {pages.map((page, index) => {
              return (
                <li className="text-white" key={index}>
                  <Link
                    href={page.url}
                    className="block py-2 px-3 text-white   md:bg-transparent  md:p-0 "
                    aria-current="page"
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
