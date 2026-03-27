import React from "react";
import { motion } from "motion/react";
import { BookOpen, GraduationCap, Target } from "lucide-react";

export default function About() {
  const infoCards = [
    {
      icon: <GraduationCap className="w-8 h-8 text-indigo-500" />,
      title: "Education",
      desc: "BSc Computer Science, Nahda University, Beni Suef (2024–2028)"
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-500" />,
      title: "Focus",
      desc: "Full Stack Software & AI Engineering"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      title: "Mission",
      desc: "Building scalable, data-driven solutions with smart marketing strategies."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            I am a passionate second-year Computer Science student actively seeking opportunities to 
            merge my technical foundation in software engineering with cutting-edge AI technologies and strategic digital marketing. 
            My goal is to craft scalable applications that not only solve complex problems but also deliver measurable business value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {infoCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all text-center group"
            >
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-indigo-50 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {React.cloneElement(card.icon as React.ReactElement, {
                  className: "w-8 h-8 transition-colors text-indigo-500 group-hover:text-white"
                })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
