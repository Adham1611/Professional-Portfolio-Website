import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Professional Data & AI Portfolio",
    category: "DATA ENGINEERING & AI",
    description: "A high-end, responsive personal brand platform featuring a dual-mode (Dark/Light) UI. It showcases technical proficiency in Data Engineering and AI through interactive skill visualizations and a curated certifications gallery.",
    tools: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    link: "https://adham1611.github.io/adham-portfolio/",
    image: "https://images.unsplash.com/photo-1702479744062-1880502275b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZXJuJTIwd2Vic2l0ZSUyMGRhc2hib2FyZCUyMGNvZGV8ZW58MXx8fHwxNzc0NTk3NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Invura Tech Platform",
    category: "SOFTWARE SOLUTIONS & SAAS",
    description: "A sophisticated, enterprise-grade landing page designed for modern tech solutions. Features a streamlined user interface with a heavy focus on interactive elements and professional data presentation.",
    tools: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://youssofelmneesy-dotcom.github.io/invura/",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwVUklMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzQ1OTc2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Premium Barber Shop Experience",
    category: "E-COMMERCE & LOCAL BRANDING",
    description: "A complete digital transformation for a local business. Optimized for local SEO and high conversion rates, featuring service menus and customer engagement tools with a premium aesthetic.",
    tools: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    link: "https://am-barbershop-live-20260327.netlify.app/",
    image: "https://images.unsplash.com/photo-1645318588650-f0fb322cd740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmFyYmVyJTIwc2hvcCUyMGludGVyaW9yJTIwZGFya3xlbnwxfHx8fDE3NzQ1OTc2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "AI-Powered Advertising Campaign",
    category: "Generative AI & Marketing",
    description: "An innovative advertising campaign leveraging multiple generative AI models to create high-converting marketing assets from scratch.",
    tools: ["Gemini", "Copilot", "Hailuo AI", "Suno", "CapCut"],
    link: "#",
    image: "https://images.unsplash.com/photo-1702368198452-d89194714d70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmVvbnxlbnwxfHx8fDE3NzM1MTU1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Skyways Travel Marketing Campaign",
    category: "Digital Marketing",
    description: "A WhatsApp-first marketing strategy tailored for a travel agency, boosting direct engagement and conversion rates significantly.",
    tools: ["WhatsApp Business API", "Meta Ads", "SEO", "Analytics"],
    metrics: [
      { label: "Sales Increase", value: "+15%" },
      { label: "ROI", value: "140%" }
    ],
    link: "#",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzczNTE1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Enterprise Sales Dashboard",
    category: "Data Engineering & BI",
    description: "Comprehensive interactive dashboards providing deep insights into sales performance utilizing advanced BI techniques.",
    tools: ["Power BI", "SQL", "Decomposition Trees", "Drill-through Features"],
    link: "#",
    image: "https://images.unsplash.com/photo-1764053430604-d585d1f1dad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5naW5lZXJpbmclMjBuZXR3b3JrfGVufDF8fHx8MTc3MzUxNTUxMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 border-t border-gray-100 relative selection:bg-indigo-100 selection:text-indigo-900">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6 shadow-sm"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A showcase of my recent work bridging the gap between sophisticated engineering, aesthetic design, and high-conversion strategy.
          </motion.p>
        </div>

        <div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <a 
                  href={project.link !== "#" ? project.link : undefined} 
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                  className={`block relative rounded-2xl overflow-hidden group bg-white border border-gray-200 shadow-xl ${project.link === "#" ? "cursor-default" : "cursor-pointer"}`}
                  onClick={(e) => project.link === "#" && e.preventDefault()}
                >
                  <div className="absolute inset-0 bg-indigo-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-auto aspect-[4/3] object-cover transform transition-transform duration-700 ease-out ${project.link !== "#" ? "group-hover:scale-105" : ""}`}
                  />
                </a>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <motion.span 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-4"
                >
                  {project.category}
                </motion.span>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors"
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                >
                  {project.description}
                </motion.p>

                {/* Metrics if available (from old projects) */}
                {project.metrics && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                    className="grid grid-cols-2 gap-4 mb-8 w-full"
                  >
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
                        <div className="text-indigo-600 font-black text-2xl">{metric.value}</div>
                        <div className="text-sm text-gray-700 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </motion.div>
                )}

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3 mb-10"
                >
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full border border-indigo-100 shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </motion.div>

                {project.link !== "#" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold group w-max transition-colors text-lg"
                    >
                      <span className="relative">
                        View Project Details
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-indigo-600 group-hover:text-indigo-800" />
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
