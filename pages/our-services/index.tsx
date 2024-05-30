import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "../../components/global/Container";
import Footer from "../../components/global/Footer";
import ContactSection from "../../components/global/contact/ContactSection";
import Hero from "../../components/global/hero";
import Navbar from "../../components/global/navbar";
import ServicesCard from "../../components/home/ServicesCard";
import React from "react";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}


const page = () => {
  const HeroSvg = (
    <svg
      className=" m-auto absolute right-0 left-0 top-0 bottom-0 w-auto lg:w-[850px]"
      viewBox="0 0 907 501"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        d="M197.355 25.3273L328.14 265.495L605.469 243.407L696.537 0L907 78.6816L765.857 455.99L200.596 501L0 132.772L197.355 25.3273Z"
        fill="#C7C8D5"
      />
    </svg>
  );

  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="bg-primary" >
     
      <Container customeStyle="bg-primary">
        <Hero svg={HeroSvg} title={"What Services We Offer at Beyond"} />
      </Container>

      <Container  customeStyle="bg-white">
        <h1 className="text-3xl text-[#444545] px-40 pt-10">
          Services We Offer
        </h1>

        <div className="flex gap-5  items-center justify-center flex-col flex-wrap md:flex-row">
          <div className="flex flex-col gap-5">
            {arr.map((e, i) => {
              if (i < (arr.length - 1) / 2)
                return (
                  <ServicesCard key={i}/>
                );
            })}
          </div>

          <div className="flex flex-col gap-5">
            {arr.map((e, i) => {
              if (i >= Math.floor(arr.length / 2))
                return (
                  <ServicesCard key={i}/>
                );
            })}
          </div>
        </div>
      </Container>

      <ContactSection />

      <Footer />
    </div>
  );
};

export default page;
{
  /* <div className=" flex gap-5 py-3  justify-center flex-wrap">
     
        {arr.map((e,i)=>{
          return <div key={i} className="flex-col  rounded-lg shadow-lg lg:basis-1/2 lg:max-w-[450px] bg-[#E9EAFF] px-4 py-2 ">
          <div className=" bg-primary rounded-md w-fit px-2 py-2">
          <FaLocationArrow className="text-3xl" color="#B3D4FF"/>
          </div>
          
          <h1 className=" text-2xl">
          Marketing Strategy Planning
          </h1>
          <p className="text-lg">Crafting strategic plans aligned with your business objectives, through market analysis, audience segmentation, and precise goal setting.</p>
      </div>
        })}
      </div> */
}
