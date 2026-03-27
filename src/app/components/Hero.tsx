import React from "react";
import { motion } from "motion/react";
import { ChevronRight, Download, Github, Linkedin, Mail } from "lucide-react";
import adhamImage from "../../assets/fbc32cb67ec8dd6b22c23e683f479fb2ce8c1909.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 flex items-center overflow-hidden bg-white selection:bg-indigo-100">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 max-w-2xl z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium w-max border border-indigo-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Adham Ahmed</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Data Engineer & AI Specialist
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              I build scalable, data-driven solutions combining technical expertise with strategic digital marketing to unlock business growth. Let's transform data into intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95"
              >
                View My Work
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="https://drive.google.com/file/d/1-imEr6_k48OxZC2AR8rakBQZ2p_Nllj-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-6 py-3 rounded-full font-medium hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-95"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </div>

            <div className="flex items-center gap-5 mt-6 border-t border-gray-100 pt-6">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Connect:</span>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/adham-hieba/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/Adham1611" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="mailto:adham.ahmed.cs@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-gray-50">
              <img 
                src={adhamImage}
                alt="Adham Ahmed"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="font-semibold text-xl">Adham Ahmed</div>
                <div className="text-white/80 text-sm">Based in Fayoum, Egypt</div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Python & SQL</div>
                  <div className="text-xs text-gray-500">Data Engineering</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Gen AI</div>
                  <div className="text-xs text-gray-500">Prompt Engineering</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative dots grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-0 pointer-events-none"></div>
    </section>
  );
}
