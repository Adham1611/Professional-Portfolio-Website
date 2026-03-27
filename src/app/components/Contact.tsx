import React from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Globe, Instagram, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adham-hieba/",
      icon: <Linkedin className="w-6 h-6" />,
      color: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]",
    },
    {
      name: "GitHub",
      url: "https://github.com/Adham1611",
      icon: <Github className="w-6 h-6" />,
      color: "hover:bg-gray-800 hover:text-white hover:border-gray-800",
    },

    {
      name: "Instagram",
      url: "https://instagram.com/adham_ahmed_000",
      icon: <Instagram className="w-6 h-6" />,
      color: "hover:bg-pink-600 hover:text-white hover:border-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 font-medium text-sm mb-6 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            Let's create something together
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Ready to Build Next-Gen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              AI & Data Solutions?
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Whether you need a full-stack engineer, a smart marketing campaign, or 
            someone to turn complex data into actionable insights, I'm here to help. 
            Drop me an email to start the conversation.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex flex-col gap-6 text-center md:text-left flex-1 w-full">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Send an Email</p>
              <a 
                href="mailto:adham.ahmed.cs@gmail.com" 
                className="text-2xl md:text-3xl font-bold text-white hover:text-indigo-400 transition-colors break-words"
              >
                adham.ahmed.cs@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6 border-t border-white/10 w-full">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 text-gray-300 group ${link.color}`}
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <a 
              href="mailto:adham.ahmed.cs@gmail.com" 
              className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-indigo-600 rounded-2xl overflow-hidden hover:bg-indigo-500 transition-all focus:outline-none focus:ring-4 focus:ring-indigo-500/30 active:scale-95 shadow-lg shadow-indigo-600/30 w-full md:w-auto"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-64 group-hover:h-56 opacity-10"></span>
              <span className="relative flex items-center gap-3">
                Hire Me Now
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
