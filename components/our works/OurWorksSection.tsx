import React from "react";
import { Container } from "../global/Container";
import Filter from "./Filter";
import Projects from "./Projects";
type propsType = {
  customHeaderStyle: string;
  customeContainerStyle:string;
};
const OurWorksSection = ({ customHeaderStyle  ,customeContainerStyle }: propsType) => {
  return (
    <Container  customeStyle={customeContainerStyle}>
      <h1 className={`${customHeaderStyle}`}>Side Of Our Works</h1>
      <div className=" py-8 pt-10">
        <Filter />
        <Projects />
      </div>
    </Container>
  );
};

export default OurWorksSection;
