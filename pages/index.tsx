
import Footer from "../components/global/Footer";
import ContactSection from "../components/global/contact/ContactSection";
import Achievements from "../components/home/Achievements";
import OurClients from "../components/home/OurClients";
import Testimonials from "../components/home/Testimonials";
import NumbersSection from "../components/home/NumbersSection";
import MiddelHeroSection from "../components/home/MiddelHeroSection";
import HomeHero from "../components/home/HomeHero";
import OurWorksSection from "../components/our works/OurWorksSection";
import OurServicesSection from "../components/home/OurServicesSection";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import { useGetHomeQuery } from "../lib/redux/services/api";
import { useGetPokemonByNameQuery } from "../lib/redux/services/pokemon";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {

  const { t ,i18n } = useTranslation('common');
  const arabic = 'ar';
	const English = 'en';
  const { data, error, isLoading } = useGetHomeQuery()
 

  console.log(data)
  return (
    <div>
  
      <HomeHero />

      <NumbersSection />

      <OurServicesSection/>

      <div className="bg-[#E9EAFF] pt-8">
        <OurWorksSection customeContainerStyle="bg-[#E9EAFF]" customHeaderStyle="text-4xl md:text-6xl w-48  md:w-80 text-black font-bold  pt-10" />
      </div>

      <MiddelHeroSection />
      <OurClients />

      <Testimonials />

      {/* <Achievements /> */}
      <ContactSection />

      <Footer />
    </div>
  );
}
