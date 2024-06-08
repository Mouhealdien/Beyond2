import Image from "next/image";
import { Container } from "../global/Container";
import logo from "../../public/assets/FedEx-Logo.png";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import useMediaQuery from "../../lib/hooks/hooks/useMediaQuery";
import { clients } from "../../constants/clients";

const OurClients = () => {
  const [showMore, setShowMore] = useState(false);

  const { t, i18n } = useTranslation("common");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ismobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    if (isDesktop) setShowMore(true);
    if (ismobile) setShowMore(false);
  }, [isDesktop, ismobile]);

  return (
    <Container>
      <div className="text-center py-5">
        <h2 className="text-4xl md:text-6xl font-bold">{t("our-clients")}</h2>
      </div>
      <div className="flex gap-10 py-5 flex-row flex-wrap items-center mb-3 justify-center">
        {clients.map((e, i) => {
          if (i < 3)
            return (
              <Image
                key={i}
                className="  max-w-[220px]  lg:max-w-[300px] min-w-[150px] transition duration-1000  grayscale hover:filter-none "
                src={e}
                width={300}
                height={110}
                alt="logo"
              />
            );
        })}
      </div>
      <div className="flex gap-10 flex-row flex-wrap pb-20  items-center justify-center">
        {clients.map((e, i) => {
          if (showMore) {
            if (i > 2)
              return (
                <Image
                  key={i}
                  className="max-w-[180px] py-2 min-w-[120px] transition duration-1000  grayscale hover:filter-none"
                  src={e}
                  width={200}
                  height={120}
                  alt="logo"
                />
              );
          } else {
            if (i > 2 && i < 9)
              return (
                <Image
                  key={i}
                  className="max-w-[180px] py-2 min-w-[120px] transition duration-1000  grayscale hover:filter-none"
                  src={e}
                  width={200}
                  height={120}
                  alt="logo"
                />
              );
          }
        })}
      </div>
      <div className="w-full flex justify-center py-3">
        <button
          onClick={() => {
            setShowMore(!showMore);
          }}
          type="button"
          className=" block md:hidden font-bold  mx-4 w-[120px] xs:w-[150px] bg-[#E9EAFF] text-black  hover:bg-transparent hover:border-[#E9EAFF] hover:border-2 rounded-lg text-sm px-4 py-2 text-center  "
        >
          {showMore ? t("show-less") : t("show-more")}
        </button>
      </div>
    </Container>
  );
};

export default OurClients;
