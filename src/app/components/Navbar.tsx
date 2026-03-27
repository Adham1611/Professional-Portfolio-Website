import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion } from "motion/react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for navbar
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => scrollTo(e, "#home")}
          className="flex items-center gap-2 text-xl font-bold tracking-tighter hover:text-indigo-600 transition-colors"
        >
          <Code2 className="w-8 h-8 text-indigo-600" />
          <span>Adham<span className="text-indigo-600">.</span>Ahmed</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                isScrolled ? "text-gray-600" : "text-gray-800"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-gray-800 font-medium py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
