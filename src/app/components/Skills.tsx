import React from "react";
import { motion } from "motion/react";
import { Code, Database, BrainCircuit, LineChart, Users, Languages } from "lucide-react";

const skillsCategories = [
  {
    title: "Programming",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python (NumPy, Pandas, OOP)", "C++", "HTML/CSS", "SQL"],
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    dotColor: "bg-blue-500",
  },
  {
    title: "Data Engineering",
    icon: <Database className="w-6 h-6" />,
    skills: ["Data Cleaning", "Dashboarding", "Analytics", "Power BI"],
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    title: "Artificial Intelligence",
    icon: <BrainCircuit className="w-6 h-6" />,
    skills: ["Generative AI", "Prompt Engineering", "LLM Applications"],
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    dotColor: "bg-purple-500",
  },
  {
    title: "Digital Marketing",
    icon: <LineChart className="w-6 h-6" />,
    skills: ["SEO", "Social Media Ads", "Campaign Optimization", "Analytics"],
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    dotColor: "bg-orange-500",
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-6 h-6" />,
    skills: ["Problem-solving", "Time Management", "Teamwork", "Communication"],
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    dotColor: "bg-pink-500",
  },
  {
    title: "Languages",
    icon: <Languages className="w-6 h-6" />,
    skills: ["Arabic (Native)", "English (B1)"],
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600",
    dotColor: "bg-teal-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Core Expertise</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical abilities and professional competencies across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl ${category.bgColor} ${category.iconColor}`}>
                  {React.cloneElement(category.icon as React.ReactElement, {
                    className: "w-8 h-8",
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 group/item">
                    <span className={`w-2 h-2 rounded-full ${category.dotColor} opacity-50 group-hover/item:opacity-100 transition-opacity`}></span>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
