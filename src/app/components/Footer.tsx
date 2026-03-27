import React from "react";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">
            <Code2 className="w-6 h-6 text-indigo-500" />
            <span>Adham<span className="text-indigo-500">.</span>Ahmed</span>
          </div>
          
          <div className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Adham Ahmed. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm font-semibold">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
