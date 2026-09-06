"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowsOut, X, ChatCircleText } from "@phosphor-icons/react";

const testimonialsData = [
  {
    id: 1,
    platform: "Mostaql Client",
    image: "/images/testimonials/feedback-1.png",
  },
  {
    id: 2,
    platform: "Mostaql Client",
    image: "/images/testimonials/feedback-2.png",
  },
  {
    id: 3,
    platform: "Mostaql Client",
    image: "/images/testimonials/feedback-3.png",
  },
  {
    id: 4,
    platform: "Mostaql Client",
    image: "/images/testimonials/feedback-4.png",
  },
  {
    id: 5,
    platform: "Mostaql Client",
    image: "/images/testimonials/feedback-5.png",
  },
];

export default function Testimonials() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: "#11212D" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #253745, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #5BA4C4, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag mb-4 inline-flex">
            <ChatCircleText size={14} />
            Client Feedback
          </span>
          <h2 className="font-black mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#CCD0CF" }}>
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#9BA8AB" }}>
            Real feedback from clients — take a look at what they think about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {testimonialsData.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ background: "rgba(17,33,45,0.9)", border: "1px solid rgba(74,92,106,0.5)" }}
              whileHover={{ borderColor: "rgba(91,164,196,0.4)", boxShadow: "0 20px 50px rgba(91,164,196,0.12)", y: -4 }}
              onClick={() => setSelected(t.image)}
            >
              <div className="relative h-72 bg-gray-900 flex items-center justify-center">
                <Image
                  src={t.image}
                  alt={t.platform}
                  fill
                  className="object-contain p-4 group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(10,10,15,0.5)" }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300"
                    style={{ background: "rgba(91,164,196,0.8)", backdropFilter: "blur(8px)" }}>
                    <ArrowsOut size={24} style={{ color: "#fff" }} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold" style={{ color: "#CCD0CF" }}>{t.platform}</h3>
                <p className="text-xs mt-1" style={{ color: "#4A5C6A" }}>Click to expand</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(10,10,15,0.92)", backdropFilter: "blur(12px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-50"
              style={{ background: "rgba(17,33,45,0.9)", border: "1px solid rgba(74,92,106,0.5)", color: "#9BA8AB" }}
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              src={selected}
              alt="Feedback"
              className="max-w-full max-h-[88vh] object-contain rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}