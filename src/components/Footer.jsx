import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] dark:bg-[#1B1612] pt-20 pb-12 border-t border-stone-200/50 dark:border-[#3f3129]/40 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3129_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-200 dark:border-[#3f3129]">
          
          {/* Brand & Bio Column */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-2xl font-black text-[#4A3528] dark:text-[#F4E7D4] tracking-tighter">
              Maitri<span className="text-amber-800 dark:text-amber-500">.</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed max-w-sm">
              Full-Stack Software Developer specializing in building exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={import.meta.env.VITE_GITHUB || "#"} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#2A211B] border border-stone-200 dark:border-[#3f3129] flex items-center justify-center text-[#4A3528] dark:text-[#F4E7D4] hover:border-amber-800 dark:hover:border-amber-500 hover:text-amber-800 dark:hover:text-amber-500 transition shadow-sm"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href={import.meta.env.VITE_LINKEDIN || "#"} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#2A211B] border border-stone-200 dark:border-[#3f3129] flex items-center justify-center text-[#4A3528] dark:text-[#F4E7D4] hover:border-amber-800 dark:hover:border-amber-500 hover:text-amber-800 dark:hover:text-amber-500 transition shadow-sm"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href={import.meta.env.VITE_EMAIL || "#"} 
                className="w-10 h-10 rounded-xl bg-white dark:bg-[#2A211B] border border-stone-200 dark:border-[#3f3129] flex items-center justify-center text-[#4A3528] dark:text-[#F4E7D4] hover:border-amber-800 dark:hover:border-amber-500 hover:text-amber-800 dark:hover:text-amber-500 transition shadow-sm"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-500">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-stone-600 dark:text-stone-400">
              <li>
                <a href="#about" className="hover:text-amber-800 dark:hover:text-amber-500 transition">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-800 dark:hover:text-amber-500 transition">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-800 dark:hover:text-amber-500 transition">Projects</a>
              </li>
              <li>
                <a href="#education" className="hover:text-amber-800 dark:hover:text-amber-500 transition">Education</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-800 dark:hover:text-amber-500 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Status & Availability Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-500">
              Status
            </h3>
            <div className="bg-white dark:bg-[#2A211B] p-5 rounded-2xl border border-stone-200 dark:border-[#3f3129] shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A3528] dark:text-[#F4E7D4]">Open for Opportunities</span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                Currently pursuing Master's and available for full-stack developer roles or freelance projects.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 dark:text-stone-400 font-medium">
          <p>© {currentYear} Maitri. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <FaHeart className="text-amber-800 dark:text-amber-500 text-[10px]" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;