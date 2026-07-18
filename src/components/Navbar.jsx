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
    "internships",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          <h1 className="text-3xl font-bold text-cyan-400">
            Maitri<span className="text-white">.</span>
          </h1>

          <ul className="hidden lg:flex items-center gap-8 text-gray-300">

            {links.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-cyan-400"
                  className="cursor-pointer capitalize hover:text-cyan-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}

          </ul>

          <a
            href="/Maitri-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full text-white"
          >
            View Resume
          </a>

          <button
            onClick={() => setNav(!nav)}
            className="lg:hidden text-white text-2xl"
          >
            {nav ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-slate-900 transition-all duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center py-8 gap-6">

          {links.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setNav(false)}
                className="text-white capitalize cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}

          <a
            href="/Maitri-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 px-6 py-3 rounded-full text-white"
          >
            View Resume
          </a>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;