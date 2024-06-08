/* eslint-disable react-hooks/rules-of-hooks */
import { Container } from "../../../components/global/Container";
import Navbar from "../../../components/global/navbar";
import React from "react";
import Image from "next/image";
import heroImg from "../../../public/assets/projectHero.png";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ProjectHero from "../../../components/our works/ProjectHero";
import { GetStaticPaths } from "next/types";
import { useGetProjectQuery } from "../../../lib/redux/services/api";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import parse from "html-react-parser";
import Footer from "../../../components/global/Footer";
import Loader from "../../../components/global/Loader";
// export async function getStaticPaths(id:string) {
//   return {
//     paths: [
//       // String variant:
//       '/our-works/[id]',
//       // Object variant:
//       { params: { id: 'second-post' } },
//     ],
//     fallback: true,
//   }
// }

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
const page = () => {
  const router = useRouter();
  const { id } = router.query;
  const { i18n, t } = useTranslation();
  const language = i18n.language === "en" ? "en" : "ar";

  const { data, isFetching } = useGetProjectQuery(id.toString());

  const project = data?.data.project;

  const htmlData = project?.content?.[language].toString();
  if (isFetching) return <Loader />;
  return (
    <div>
      <ProjectHero
        photo={project?.photo}
        title={project?.title}
        category={project?.category}
      />
      <div className="py-20">
        <Container customeStyle="bg-white pt-20">
          <div className="">{htmlData ? parse(htmlData) : ""}</div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default page;
