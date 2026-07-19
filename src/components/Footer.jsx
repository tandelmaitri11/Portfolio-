const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAFA] dark:bg-[#121212] py-16 border-t border-stone-200 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black text-stone-900 dark:text-white tracking-tighter mb-2">
            Maitri<span className="text-amber-800">.</span>
          </h2>
          <p className="text-stone-500 dark:text-stone-400 text-sm font-medium">
            Full-stack Developer
          </p>
        </div>

        {/* Legal/Copyright */}
        <p className="text-stone-400 dark:text-stone-600 text-xs uppercase tracking-widest font-bold">
          © {currentYear} All Rights Reserved
        </p>

        {/* Tech Stack Indicator */}
        <div className="text-stone-500 dark:text-stone-500 text-xs font-medium">
          Crafted with passion
        </div>
      </div>
    </footer>
  );
};

export default Footer;