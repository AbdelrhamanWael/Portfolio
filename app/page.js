"use client";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";


export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}