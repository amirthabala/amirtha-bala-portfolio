"use client";

import { useRef } from "react";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import Hobbies from "@/components/Hobbies";
import Journey from "@/components/Journey";
import useInView from "@/utils/useInView";

export default function Home() {
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(intersectionRef);

  console.log(inView);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      if (section === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="relative">
      <div ref={intersectionRef} className="absolute top-[50px]" />
      <Header scrollToSection={scrollToSection} isShrink={!inView} />
      <HeroImage isShrink={!inView} />
      <AboutMe />
      <FeaturedWork />
      <Journey />
      <Education />
      <Hobbies />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
