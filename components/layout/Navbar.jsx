"use client";
import { useState, useEffect } from "react";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import BrandLogo from "../ui/BrandLogo";

const navItems = [
  { id: "systems", num: "01", label: "SYSTEMS", href: "#systems" },
  { id: "dossier", num: "02", label: "DOSSIER", href: "#dossier" },
  { id: "architecture", num: "03", label: "ARCHITECTURE", href: "#architecture" },
  { id: "channel", num: "04", label: "CHANNEL", href: "#channel" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("systems");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navItems.map((n) => n.id);
      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#090A0C]/95 backdrop-blur-md border-b border-[#232733]"
          : "bg-transparent border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand & Telemetry */}
        <div className="flex items-center gap-6">
          <a
            href="#systems"
            onClick={(e) => scrollTo(e, "systems")}
            className="flex items-center"
            aria-label="Home"
          >
            <BrandLogo />
          </a>

          {/* Live Telemetry Pill (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#14171E] border border-[#232733] rounded text-[11px] font-mono text-[#8A909E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[#F4F5F7]">STATUS: OPEN FOR CONTRACTS</span>
            <span className="text-[#525866]">|</span>
            <span className="text-[#8A909E]">CAIRO (UTC+2)</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollTo(e, item.id)}
                className={`px-3.5 py-2 rounded transition-colors duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? "text-[#F59E0B] bg-[#14171E] border border-[#F59E0B]/30"
                    : "text-[#8A909E] hover:text-[#F4F5F7] hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-[10px] text-[#525866]">{item.num}</span>
                <span>{item.label}</span>
              </a>
            );
          })}

          <a
            href="#channel"
            onClick={(e) => scrollTo(e, "channel")}
            className="ml-3 btn-signal py-1.5 px-3.5 text-xs font-mono"
          >
            INITIATE BRIEF
            <ArrowUpRight size={13} weight="bold" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-[#8A909E] hover:text-[#F4F5F7] border border-[#232733] bg-[#0E1015] rounded"
        >
          {mobileOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#090A0C] border-b border-[#232733] px-6 py-6 font-mono text-xs space-y-3">
          <div className="flex items-center gap-2 mb-4 text-[11px] text-[#8A909E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>STATUS: OPEN FOR CONTRACTS (UTC+2)</span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollTo(e, item.id)}
              className="block py-2.5 px-3 rounded border border-[#232733] bg-[#0E1015] text-[#F4F5F7] flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-[#F59E0B]">{item.num}</span>
            </a>
          ))}
          <a
            href="#channel"
            onClick={(e) => scrollTo(e, "channel")}
            className="w-full btn-signal mt-4 py-3 text-xs justify-center"
          >
            INITIATE BRIEF
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </div>
      )}
    </nav>
  );
}