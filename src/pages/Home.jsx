import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import { Features } from "tailwindcss";
import Feature from "../components/home/Feature";
import HowItWorks from "../components/home/HowItWorks";
import DashboardPreview from "../components/home/DashboardPreview";
import Footer from "../components/home/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <HowItWorks />
      <DashboardPreview />
      <Footer />
    </>
  );
};

export default Home;
