import React, { useState } from "react";
import { Container } from "../global/Container";
import Filter from "./Filter";
import Projects from "./Projects";
import { useTranslation } from "next-i18next";
import { useGetProjectsQuery } from "../../lib/redux/services/api";
type propsType = {
  customHeaderStyle: string;
  customeContainerStyle: string;
  isHome: boolean;
};
const OurWorksSection = ({
  customHeaderStyle,
  customeContainerStyle,
  isHome,
}: propsType) => {
  const { i18n, t } = useTranslation();

  const [category, setCategory] = useState("case_studies");

  const { data } = useGetProjectsQuery();
  const projects = data?.data.projects;
  const handelCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    console.log(selectedCategory);
  };

  const filteredProjects = projects?.filter(
    (project) => project.category === category
  );
  const displayedProjects = isHome
    ? filteredProjects?.slice(0, 3)
    : filteredProjects;
  return (
    <Container customeStyle={customeContainerStyle}>
      <h1 className={`${customHeaderStyle} text-secondary`}>
        {t("side-of-our-works")}
      </h1>
      <div className=" py-8 pt-10 min-h-[400px]">
        <Filter handelCategory={handelCategory} />
        <Projects projects={displayedProjects} />
      </div>
    </Container>
  );
};

export default OurWorksSection;
