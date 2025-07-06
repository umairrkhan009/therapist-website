"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Services from "@/components/Services";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Rates from "@/components/Rates";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true, // animate only once
      duration: 800, // animation duration in ms
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Rates />
      <FAQs />
      <Contact />
      <Details />
      <Footer />
    </>
  );
}
