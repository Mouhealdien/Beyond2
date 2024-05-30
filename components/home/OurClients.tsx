import Image from "next/image";
import { Container } from "../global/Container";
import logo from "../../public/assets/FedEx-Logo.png";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import useMediaQuery from "../../lib/hooks/hooks/useMediaQuery";

const OurClients = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 111, 12, 13, 14, 15, 61, 17, 18, 19, 20, 21,
    22, 23,
  ];
  const [showMore,setShowMore]=useState(false)

  const { t ,i18n } = useTranslation('common');
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ismobile = useMediaQuery("(max-width: 768px)");
useEffect(()=>{
  if(isDesktop)
    setShowMore(true)
  if(ismobile)
    setShowMore(false)
  
},[isDesktop,ismobile])
  
  return (
    <Container>
      <div className="text-center py-5">
        <h2 className="text-4xl md:text-6xl font-bold">{t('our-clients')}</h2>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {arr.map((e, i) => {
          if (i < 3)
            return (
              <Image
                key={i}
                className=" max-w-[220px] lg:max-w-[300px] min-w-[150px] transition duration-1000  grayscale hover:filter-none "
                src={logo}
                width={220}
                height={70}
                alt="logo"
              />
            );
        })}
      </div>
      <div className="flex flex-row flex-wrap pb-20  items-center justify-center">
        {arr.map((e, i) => {
          if(showMore)
          {if (i > 2 )
            return (
              <Image
                key={i}
                className="max-w-[180px] min-w-[120px] transition duration-1000  grayscale hover:filter-none"
                src={logo}
                width={180}
                height={60}
                
                alt="logo"
              />
            )}
          else
          {if (i > 2 && i<9)
          return (
            <Image
              key={i}
              className="max-w-[180px] min-w-[120px] transition duration-1000  grayscale hover:filter-none"
              src={logo}
              width={180}
              height={60}
              
              alt="logo"
            />
          )}
          
        })}
      </div>
      <div className='w-full flex justify-center py-3'>
<button
            onClick={()=>{setShowMore(!showMore)}}
              type="button"
              className=" block md:hidden font-bold  mx-4 w-[120px] xs:w-[150px] bg-[#E9EAFF] text-black  hover:bg-transparent hover:border-[#E9EAFF] hover:border-2 rounded-lg text-sm px-4 py-2 text-center  "
            >
              {showMore?t('show-less'):t('show-more')}
            </button>
</div>

    </Container>
  );
};

export default OurClients;
