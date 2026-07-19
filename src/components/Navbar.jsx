import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Switched from Link to NavLink

const Navbar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "skills", path: "/skills" },
    { name: "experience", path: "/experience" },
    { name: "education", path: "/education" },
    { name: "projects", path: "/projects" },
    { name: "certificates", path: "/certificates" },
    { name: "contact", path: "/contact" },
  ];

  // Helper function to define link classes
  const getLinkClass = ({ isActive }) =>
    `capitalize cursor-pointer transition-all duration-300 relative 
    ${isActive ? "text-[#A67C52] dark:text-[#D7B899]" : "text-[#5C4033] dark:text-[#F4E7D4]"} 
    hover:text-[#A67C52] 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#A67C52] after:transition-all after:duration-300 
    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F8F4EF]/80 dark:bg-[#1B1612]/80 backdrop-blur-md border-b border-[#d8c7b6]/30 dark:border-[#3f3129]/40 shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          
          <h1 className="text-3xl font-bold text-[#8B5E3C] dark:text-[#D7B899] hover:scale-105 transition-transform duration-300">
            Maitri<span className="text-[#4A3528] dark:text-white">.</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path} 
                  end={link.path === "/"} // Ensures home only highlights at "/"
                  className={getLinkClass}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="w-11 h-11 rounded-full flex items-center justify-center bg-[#E7D9CA] dark:bg-[#3A2B23] text-[#6F4E37] dark:text-[#F5E6D3] hover:scale-110 hover:rotate-[360deg] transition-all duration-500 ease-in-out"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <a 
              href="/Maitri-Resume.pdf" 
              target="_blank" 
              className="bg-[#8B5E3C] hover:bg-[#6F4E37] hover:shadow-lg hover:-translate-y-1 text-white px-6 py-3 rounded-full transition-all duration-300"
            >
              Resume
            </a>
          </div>

          <button onClick={() => setNav(!nav)} className="lg:hidden text-[#6F4E37] dark:text-[#F4E7D4] text-2xl transition-transform duration-300 hover:rotate-90">
            {nav ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-20 left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${nav ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} bg-[#F8F4EF] dark:bg-[#1B1612] shadow-xl`}>
        <ul className="flex flex-col items-center gap-6 py-8">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path} 
                end={link.path === "/"}
                onClick={() => setNav(false)} 
                className={({ isActive }) => 
                  `capitalize transition-colors duration-300 ${isActive ? "text-[#A67C52] font-bold" : "text-[#5C4033] dark:text-[#F4E7D4]"}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;