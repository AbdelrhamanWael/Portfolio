"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeSimple, LinkedinLogo, GithubLogo, PaperPlaneTilt, CheckCircle, WarningCircle } from "@phosphor-icons/react";

const contactLinks = [
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: "abdelrhamanwael8@gmail.com",
    href: "mailto:abdelrhamanwael8@gmail.com",
    color: "#5BA4C4",
  },
  {
    icon: LinkedinLogo,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/abdelrhaman-wael-mohammed-790171366",
    color: "#A855F7",
  },
  {
    icon: GithubLogo,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/AbdelrhamanWael",
    color: "#CCD0CF",
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }
    setSending(true);
    setStatus({ type: "", message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Message sent! I'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send message:", err);
      setStatus({
        type: "error",
        message: err.message || "Failed to send. Please email me directly at abdelrhamanwael8@gmail.com",
      });
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none";

  return (
    <section id="contact" className="py-32 relative overflow-hidden"
      style={{ background: "#050505" }}>
      
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #5BA4C4, transparent 70%)" }} 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} 
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
            style={{ background: "rgba(91,164,196,0.15)", color: "#5BA4C4", border: "1px solid rgba(91,164,196,0.3)" }}>
            <EnvelopeSimple size={18} weight="bold" />
            Get in Touch
          </span>
          <h2 className="font-black" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F8FAFC", lineHeight: 1.1 }}>
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BA4C4] to-[#7C3AED]">Work Together</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg" style={{ color: "#9BA8AB" }}>
            Have a project in mind? Let&apos;s create something amazing together. I&apos;m always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {contactLinks.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 p-6 rounded-2xl group transition-all duration-300"
                style={{ 
                  background: "rgba(17,33,45,0.4)", 
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.05)" 
                }}
                whileHover={{ 
                  borderColor: `${color}60`, 
                  background: "rgba(17,33,45,0.8)",
                  boxShadow: `0 20px 40px ${color}15, 0 0 20px ${color}10 inset`, 
                  x: 8 
                }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `${color}20`, color }}>
                  <Icon size={28} weight="duotone" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#4A5C6A" }}>{label}</p>
                  <p className="font-semibold text-lg" style={{ color: "#CCD0CF" }}>{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl"
              style={{ 
                background: "rgba(17,33,45,0.3)", 
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
              }}>
              
              <div className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <label htmlFor="contact-name" className="block text-sm font-bold mb-2 tracking-wide text-[#CCD0CF]">Your Name</label>
                  <input
                    id="contact-name" type="text" name="name" required
                    value={form.name} onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                    style={{
                      background: "rgba(5,5,5,0.5)",
                      border: focusedInput === "name" ? "1px solid rgba(91,164,196,0.8)" : "1px solid rgba(255,255,255,0.1)",
                      boxShadow: focusedInput === "name" ? "0 0 20px rgba(91,164,196,0.2)" : "none",
                      color: "#F8FAFC"
                    }}
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
                
                {/* Email */}
                <div className="relative">
                  <label htmlFor="contact-email" className="block text-sm font-bold mb-2 tracking-wide text-[#CCD0CF]">Your Email</label>
                  <input
                    id="contact-email" type="email" name="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                    style={{
                      background: "rgba(5,5,5,0.5)",
                      border: focusedInput === "email" ? "1px solid rgba(91,164,196,0.8)" : "1px solid rgba(255,255,255,0.1)",
                      boxShadow: focusedInput === "email" ? "0 0 20px rgba(91,164,196,0.2)" : "none",
                      color: "#F8FAFC"
                    }}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
                
                {/* Message */}
                <div className="relative">
                  <label htmlFor="contact-message" className="block text-sm font-bold mb-2 tracking-wide text-[#CCD0CF]">Message</label>
                  <textarea
                    id="contact-message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={inputClass + " resize-none"}
                    style={{
                      background: "rgba(5,5,5,0.5)",
                      border: focusedInput === "message" ? "1px solid rgba(124,58,237,0.8)" : "1px solid rgba(255,255,255,0.1)",
                      boxShadow: focusedInput === "message" ? "0 0 20px rgba(124,58,237,0.2)" : "none",
                      color: "#F8FAFC"
                    }}
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="flex items-center gap-3 p-4 rounded-xl text-sm font-bold"
                    style={{
                      background: status.type === "success" ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)",
                      border: `1px solid ${status.type === "success" ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
                      color: status.type === "success" ? "#4ADE80" : "#F87171",
                    }}
                  >
                    {status.type === "success"
                      ? <CheckCircle size={20} weight="bold" />
                      : <WarningCircle size={20} weight="bold" />}
                    {status.message}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  id="contact-submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white transition-all duration-300 disabled:opacity-50 mt-4 relative overflow-hidden group"
                  style={{ 
                    background: "linear-gradient(135deg, #5BA4C4, #7C3AED)",
                    boxShadow: "0 10px 20px rgba(91,164,196,0.3)"
                  }}
                  whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(124,58,237,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    {sending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperPlaneTilt size={22} weight="bold" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}