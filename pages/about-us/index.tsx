
import ImageSection from "../../components/about/imageSection";
import { Container } from "../../components/global/Container";
import Hero from "../../components/global/hero";
import React from "react";
import Footer from "../../components/global/Footer";
import ContactSection from "../../components/global/contact/ContactSection";
import Navbar from "../../components/global/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
const data = [
  {
    title: "What We Do",
    text: "At Beyond, we gather and analyze various data to understand what customers like and how they behave. We then use this knowledge to create marketing strategies that are designed to produce clear and real results. We provide innovative solutions, which include planning and running marketing campaigns on different platforms. We make ongoing adjustments based on our continuous analysis to ensure the best performance.",
  },
  {
    title: "Our Vision",
    text: "To be the leading provider of data-driven marketing solutions that transform the landscape of digital marketing through innovation and scientific precision.",
  },
  {
    title: "Our Mission",
    text: "To empower businesses to make smarter, data-informed decisions by providing cutting-edge marketing strategies that are both effective and tailored to meet their specific needs. Our mission is to harness the power of data to help our clients achieve sustainable growth and a competitive edge in their respective markets.",
  },

  {
    title: "Our Goals",
    text: "Beyond aims to continually innovate and lead industry trends through customized, effective marketing solutions that deliver measurable results. We are expanding globally, adapting to diverse markets while providing essential support and resources to empower our clients. Committed to sustainability, we ensure that our practices enhance long-term value for both our clients and the community",
  },
  {
    title: "The Promise We Made",
    text: "At Beyond, we are dedicated to being your strategic partner in the world of digital marketing. We use data to help make your decisions better and to boost your success. Let's work together to turn challenges into opportunities and strategies into accomplishments.",
  },
];
const index = () => {
  const HeroSvg = (
    <svg
      className=" m-auto absolute right-0 left-0 top-0 bottom-0 w-auto lg:w-[850px]"
      viewBox="0 0 1080 451"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        d="M909.53 7.20763L926.313 3.5055C991.217 -10.9184 1058.12 20.4776 1075.72 73.6536C1093.33 126.83 1055.01 181.64 990.102 196.064L973.319 199.766C932.71 208.805 898.849 230.201 877.958 260.106L864.578 279.242C811.294 355.352 725.029 409.97 621.687 432.904L592.404 439.395C489.063 462.377 380.909 450.982 288.013 407.374L273.166 400.402C236.724 383.286 194.237 378.815 153.687 387.805C88.7828 402.229 21.8837 370.833 4.27864 317.657C-13.3264 264.481 24.9939 209.671 89.8978 195.247C193.239 172.265 301.393 183.66 394.289 227.268L409.136 234.239C445.578 251.356 488.065 255.827 528.615 246.788L557.898 240.297C598.507 231.258 632.368 209.863 653.259 179.957L666.639 160.822C719.924 84.7119 806.188 30.0935 909.53 7.11147"
        fill="#C7C8D5"
      />
    </svg>
  );
  return (
    <div className="bg-primary ">
      
      <Container customeStyle="bg-primary">
        <Hero svg={HeroSvg} title={"Let’s tell you about our agency"} />
      </Container>

      <ImageSection />
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className={`${i % 2 == 0 ? "bg-[#E9EAFF]" : "bg-white"} px-5 lg:px-[140px] py-10 md:py-36  `}
          >
            <h1 className="text-center pb-10 text-2xl md:text-5xl">
              {e.title}
            </h1>
            <p className=" text-base md:text-2xl">{e.text}</p>
          </div>
        );
      })}

      <ContactSection />

      <Footer />
    </div>
  );
};

export default index;
