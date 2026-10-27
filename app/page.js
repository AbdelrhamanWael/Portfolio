"use client";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import ArchitectureTrackRecord from "@/components/sections/ArchitectureTrackRecord";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="min-h-screen">
        {/* Movement 01: Systems Workbench & Interactive Console */}
        <Hero />

        {/* Movement 02: Engineering Dossier (Flagship Case Study & Systems Ledger) */}
        <Projects />

        {/* Movement 03: Architecture & Proven Track Record (Topology, Milestones & Verified Proof) */}
        <ArchitectureTrackRecord />

        {/* Movement 04: Direct Channel (Brief Desk & Telemetry) */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}