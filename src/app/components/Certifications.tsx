import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Award, CheckCircle2 } from "lucide-react";

type Category = "All" | "AI" | "Data" | "Programming" | "Marketing" | "Soft Skills" | "Experience";

interface Certification {
  title: string;
  issuer: string;
  link: string;
  tag: string;
  category: Category;
}

const certifications: Certification[] = [
  {
    title: "Building LLM Applications with Prompt Engineering",
    issuer: "NVIDIA",
    link: "https://drive.google.com/file/d/110v1UdMF2vAxa4tLQrqc5A5PI2NqrkDX/view",
    tag: "🔥 AI Focus",
    category: "AI",
  },
  {
    title: "Generative AI (Beginner Level)",
    issuer: "NVIDIA DLI",
    link: "https://drive.google.com/file/d/1hw4Kur1UX5kpHwrA0sL9WeWkW0_guevB/view",
    tag: "AI Foundations",
    category: "AI",
  },
  {
    title: "Power BI – Data Analysis & Dashboard Development",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1nlNzxY1ERd6rVrBm9udqaC2SiwnwKbEY/view",
    tag: "📊 Data Visualization",
    category: "Data",
  },
  {
    title: "Introduction to SQL",
    issuer: "DataCamp",
    link: "https://drive.google.com/file/d/1uzF4t3ewKd512txhHYzeXa5Ez0DrFOBA/view",
    tag: "Data Engineering",
    category: "Data",
  },
  {
    title: "Object-Oriented Programming in Python",
    issuer: "M3aarf",
    link: "https://drive.google.com/file/d/1SeNlpLv6-HHUFChHPX66WQ6GA-VHx3on/view",
    tag: "Programming",
    category: "Programming",
  },
  {
    title: "Digital Marketing Training",
    issuer: "ITIDA & NTI",
    link: "https://drive.google.com/file/d/1Bx3_sgQLQI_P38bGvA_8TByCYZO1qMFE/view",
    tag: "⭐ Score: 97%",
    category: "Marketing",
  },
  {
    title: "Ambassadors of Artificial Intelligence",
    issuer: "NTI",
    link: "https://drive.google.com/file/d/18-BoqNsFtEu4a8DCEhsXTsLewx0AZzwJ/view",
    tag: "🚀 Leadership",
    category: "AI",
  },
  {
    title: "The Green Leap – CIB Summer Program",
    issuer: "CIB",
    link: "https://drive.google.com/file/d/1YuNznMlG4rm-L3AfLU5maxp0RxLjQrae/view",
    tag: "Experience",
    category: "Experience",
  },
  {
    title: "Communication & Interpersonal Skills",
    issuer: "El Garhy Foundation",
    link: "https://drive.google.com/file/d/1rq_uTwDWym1BND54ddNMZchsz17cn-Ie/view",
    tag: "Soft Skills",
    category: "Soft Skills",
  },
  {
    title: "Understanding Data Engineering",
    issuer: "DataCamp",
    link: "https://drive.google.com/file/d/1agpBu2Ja-xwtIVdzT-1myyQYr2Z7cSTJ/view",
    tag: "🔥 Data Engineering",
    category: "Data",
  },
  {
    title: "Intermediate SQL",
    issuer: "DataCamp",
    link: "https://drive.google.com/file/d/1dg6ORkX88-YGkdmKIsEuzMNGLaZCj-75/view",
    tag: "Advanced SQL",
    category: "Data",
  },
  {
    title: "AI for All – From Basics to GenAI Practice",
    issuer: "Online Certification",
    link: "https://drive.google.com/file/d/1a1Ty2JSkRb0zpt7Y7nQmEzCqw8YXgHrX/view",
    tag: "AI Journey",
    category: "AI",
  },
  {
    title: "Python Programming Basics",
    issuer: "Mahara Tech",
    link: "https://drive.google.com/file/d/1S4lSGgzzssT1tsKxlTxMY5ACgsrHu13P/view",
    tag: "Programming Foundations",
    category: "Programming",
  },
  {
    title: "Computer Architecture Basics",
    issuer: "Online Certification",
    link: "https://drive.google.com/file/d/1utql8ANvIfY4tBhYsV-FGiElTf4gx_gf/view",
    tag: "Core CS",
    category: "Programming",
  },
];

const categories: Category[] = ["All", "AI", "Data", "Programming", "Marketing", "Soft Skills", "Experience"];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredCerts = certifications.filter(
    (cert) => activeCategory === "All" || cert.category === activeCategory
  );

  return (
    <section id="certifications" className="py-24 bg-gray-50 relative selection:bg-blue-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Certifications & Professional Development
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Validated expertise in AI, Data Engineering, and Digital Marketing through industry-recognized programs.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200 scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.a
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02] hover:border-blue-400 hover:shadow-blue-100 transition-all duration-300 ease-out"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-blue-400/0 group-hover:bg-blue-400/5 transition-colors duration-300 pointer-events-none"></div>

                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Award className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {cert.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 leading-tight text-xl mb-3 group-hover:text-blue-700 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-gray-500 font-medium">
                    {cert.issuer}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                    Verified
                  </div>
                  <div className="text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
