import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PopularCourses from "./components/PopularCourses";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PopularCourses />
      <Testimonials />
      <CTA />
    </>
  );
}
