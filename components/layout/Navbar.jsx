"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import BrandLogo from "../ui/BrandLogo";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(2,4,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(1.6)" : "none",
        borderBottom: scrolled ? "1px solid rgba(56,189,248,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          aria-label="Abdelrhaman Wael - Home"
          className="text-xl font-bold relative group flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <BrandLogo />
          <motion.span
            className="absolute -bottom-2 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
            style={{ background: "#5BA4C4" }}
          />
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.3 }}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{ color: isActive ? "#38bdf8" : "#8a9bb0" }}
                whileHover={{ color: "#e8eef4" }}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-px"
                    style={{ background: "linear-gradient(90deg, #38bdf8, #818cf8)" }}
                  />
                )}
              </motion.a>
            );
          })}
          <motion.a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="ml-4 px-5 py-2 rounded-lg text-sm font-bold text-white transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #38bdf8, #0ea5e9)", color: "#020408", boxShadow: "0 4px 16px rgba(56,189,248,0.3)" }}
            whileHover={{ scale: 1.05, boxShadow: "0 6px 24px rgba(56,189,248,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#9BA8AB" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          whileHover={{ color: "#fff" }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(2,4,8,0.98)", borderTop: "1px solid rgba(56,189,248,0.08)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 px-4 rounded-lg text-sm font-medium transition-all"
                  style={{
                    color: activeSection === item.href.replace("#", "") ? "#38bdf8" : "#8a9bb0",
                    background: activeSection === item.href.replace("#", "") ? "rgba(56,189,248,0.08)" : "transparent",
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}