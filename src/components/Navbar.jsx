import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "experience",
    "education",
    "projects",
    "certificates",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer">
            Maitri<span className="text-white">.</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-300 font-medium">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass="text-cyan-400"
                  className="cursor-pointer capitalize hover:text-cyan-400 transition duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Resume Button */}
          <div className="hidden lg:block">
            <a
              href="/Maitri-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition duration-300 hover:scale-105"
            >
              View Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNav(!nav)}
            className="lg:hidden text-white text-2xl"
          >
            {nav ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-slate-900 transition-all duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-white">

          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setNav(false)}
                activeClass="text-cyan-400"
                className="cursor-pointer capitalize hover:text-cyan-400 transition duration-300"
              >
                {link}
              </Link>
            </li>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/Maitri-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setNav(false)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition duration-300"
          >
            View Resume
          </a>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;