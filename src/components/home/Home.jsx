import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import OnlineCourses from "../services/OnlineCourses";
import Statistics from "../statistics/Statistics";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <OnlineCourses />
      <Statistics />
      <Footer />
    </>
  );
};

export default Home;
