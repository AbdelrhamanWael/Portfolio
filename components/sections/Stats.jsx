"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code, Briefcase, Trophy, Star } from "@phosphor-icons/react";

const stats = [
  { icon: Code,     value: 10,  suffix: "+", label: "Technologies",      color: "#38bdf8" },
  { icon: Briefcase,value: 6,   suffix: "+", label: "Projects Built",     color: "#818cf8" },
  { icon: Trophy,   value: 2,   suffix: "+", label: "Certifications",     color: "#34d399" },
  { icon: Star,     value: 100, suffix: "%", label: "Client Satisfaction", color: "#f59e0b" },
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / 40;
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 40);
    return () => clearInterval(id);
  }, [target]);
  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ background: "#0a1220" }}>
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(56,189,248,0.03) 0%, rgba(129,140,248,0.03) 100%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5) 30%, rgba(129,140,248,0.5) 70%, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.3) 30%, rgba(129,140,248,0.3) 70%, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl card-hover"
              style={{
                background: "linear-gradient(135deg, rgba(14,28,43,0.9), rgba(8,15,24,0.95))",
                border: `1px solid ${color}22`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
              whileHover={{ borderColor: `${color}50`, boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${color}15` }}
            >
              <div className="inline-flex w-14 h-14 rounded-xl items-center justify-center mb-4 skill-icon-wrap"
                style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}>
                <Icon size={28} weight="duotone" />
              </div>
              <div className="text-4xl font-black mb-1 stat-number" style={{ color: "#e8eef4" }}>
                {visible ? <CountUp target={value} suffix={suffix} /> : `0${suffix}`}
              </div>
              <p className="text-sm font-medium" style={{ color: "#8a9bb0" }}>{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}