"use client";
import { motion } from "framer-motion";
import { CalendarBlank, MapPin, Certificate, Briefcase } from "@phosphor-icons/react";

const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company: "Cloud 11",
    organization: "Cloud 11",
    location: "Remote",
    period: "Recent",
    description: "Served as a Cloud & AI Engineering Intern, focusing on building and deploying intelligent systems and robust cloud infrastructure.",
    achievements: [
      "Machine Learning: Built multi-agent AI systems with Google Agent Engine, ADK, and Gen AI SDK. Created RAG-based chat apps using AlloyDB and connected LangChain with Flutter.",
      "Cloud Infrastructure: Automated environments using Terraform (IaC) and configured internal, network, and application load balancers on Compute Engine.",
      "Data Management: Executed continuous MySQL to Google Cloud migrations and built data pipelines using BigQuery and Cloud SQL.",
      "Security & Architecture: Secured enterprise AI apps using Google Model Armor and established event-driven systems with Pub/Sub and Cloud Run Functions.",
      "Cloud Operations: Monitored system health and managed access control via Google Cloud Operations and IAM."
    ],
    skills: ["Google Cloud", "Terraform", "LangChain", "BigQuery", "Generative AI"],
    type: "Part-time Internship",
    certified: false,
    color: "#5BA4C4",
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Mostaql (مستقل)",
    organization: "Freelance Platform",
    location: "Remote",
    period: "Ongoing",
    description: "Successfully delivered over 10 high-quality web development and integration projects for diverse clients, maintaining excellent ratings for communication and technical execution.",
    achievements: [
      "Project Delivery: Completed 10+ end-to-end projects ranging from modern landing pages to full-scale web applications.",
      "Client Collaboration: Gathered requirements, provided technical consultancy, and delivered tailored solutions.",
      "Tech Stack Versatility: Utilized React, .NET Core, Python, and Tailwind CSS to meet diverse client requirements.",
      "Quality Assurance: Ensured responsive design, robust backend architectures, and high-performance deployments.",
    ],
    skills: ["Full Stack Development", "Client Communication", "React", ".NET", "Web Design"],
    type: "Freelance",
    certified: false,
    color: "#F59E0B",
  },
  {
    title: "Full Stack .NET Web Developer",
    company: "Digital Egypt Pioneers Program",
    organization: "Ministry of Communications & Information Technology",
    location: "Egypt",
    period: "Nov 2024 – May 2025",
    description: "Completed an enriching program in Full Stack .NET Web Development with practical exposure to contemporary web technologies. Received invaluable mentorship throughout the transformative experience.",
    skills: ["C#", "ASP.NET Core", "SQL Server", "React", ".NET"],
    type: "Training Program",
    certified: true,
    color: "#9BA8AB",
  },
  {
    title: "Web Development Intern",
    company: "DevWave",
    organization: "DevWave",
    location: "Remote",
    period: "3-Month Internship",
    description: "Successfully completed a three-month web development internship demonstrating ability to build dynamic, innovative web solutions. Delivered real-world projects including a Medical Center Website and collaborated on an e-commerce platform.",
    achievements: [
      "Modern Front-End: Responsive design and component reusability with React and Tailwind CSS",
      "Project Delivery: Medical Center Website with admin dashboard + e-commerce frontend",
      "Clean Code: Rebuilt static projects with Bootstrap/Tailwind, cross-browser compatibility",
    ],
    skills: ["React", "Tailwind CSS", "Firebase", "Responsive Design"],
    type: "Internship",
    certified: true,
    color: "#9BA8AB",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden" style={{ background: "#11212D" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #5BA4C4, transparent 70%)" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag mb-4 inline-flex">
            <Briefcase size={14} />
            Career Journey
          </span>
          <h2 className="font-black mt-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#CCD0CF" }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line transform md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-6 z-10 ring-4"
                style={{
                  background: exp.color,
                  boxShadow: `0 0 15px ${exp.color}80`,
                  ringColor: "rgba(17,33,45,0.8)",
                }}>
                <div className="absolute inset-0 rounded-full animate-ping opacity-40"
                  style={{ background: exp.color }} />
              </div>

              {/* Card */}
              <div className={`md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-14" : "md:pl-14"}`}>
                <motion.div
                  className="p-6 rounded-2xl"
                  style={{ background: "rgba(17,33,45,0.9)", border: `1px solid ${exp.color}28` }}
                  whileHover={{ borderColor: `${exp.color}55`, boxShadow: `0 20px 50px ${exp.color}15`, y: -5 }}
                >
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                      {exp.type}
                    </span>
                    {exp.certified && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
                        style={{ background: "rgba(34,197,94,0.15)", color: "#4ADE80", border: "1px solid rgba(34,197,94,0.25)" }}>
                        <Certificate size={12} />
                        Certified
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-xl mb-1" style={{ color: "#CCD0CF" }}>{exp.title}</h3>
                  <p className="font-semibold mb-0.5" style={{ color: exp.color }}>{exp.company}</p>
                  {exp.organization !== exp.company && (
                    <p className="text-sm mb-3" style={{ color: "#4A5C6A" }}>{exp.organization}</p>
                  )}

                  <div className="flex flex-wrap gap-4 mb-4 text-sm" style={{ color: "#9BA8AB" }}>
                    <span className="flex items-center gap-1.5">
                      <CalendarBlank size={14} style={{ color: exp.color }} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} style={{ color: exp.color }} />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#9BA8AB" }}>{exp.description}</p>

                  {exp.achievements && (
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#9BA8AB" }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: exp.color }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: "rgba(91,164,196,0.05)", color: "#CCD0CF", border: "1px solid rgba(91,164,196,0.15)" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}