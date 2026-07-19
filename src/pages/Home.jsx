import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="transition-colors duration-500">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section
        id="home"
        className="h-screen flex items-center justify-center
        bg-[#F8F4EF] dark:bg-[#1B1612]"
      >
        <h1 className="text-5xl text-[#4A3528] dark:text-[#F4E7D4]">
          Home
        </h1>
      </section>

      <section
        id="about"
        className="h-screen flex items-center justify-center
        bg-[#EFE6DA] dark:bg-[#2A211B]"
      >
        <h1 className="text-5xl text-[#5C4033] dark:text-[#F4E7D4]">
          About
        </h1>
      </section>

      <section
        id="skills"
        className="h-screen flex items-center justify-center
        bg-[#F8F4EF] dark:bg-[#1B1612]"
      >
        <h1 className="text-5xl text-[#4A3528] dark:text-[#F4E7D4]">
          Skills
        </h1>
      </section>

      <section
        id="experience"
        className="h-screen flex items-center justify-center
        bg-[#EFE6DA] dark:bg-[#2A211B]"
      >
        <h1 className="text-5xl text-[#5C4033] dark:text-[#F4E7D4]">
          Experience
        </h1>
      </section>

      <section
        id="education"
        className="h-screen flex items-center justify-center
        bg-[#F8F4EF] dark:bg-[#1B1612]"
      >
        <h1 className="text-5xl text-[#4A3528] dark:text-[#F4E7D4]">
          Education
        </h1>
      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center
        bg-[#EFE6DA] dark:bg-[#2A211B]"
      >
        <h1 className="text-5xl text-[#5C4033] dark:text-[#F4E7D4]">
          Projects
        </h1>
      </section>

      <section
        id="certificates"
        className="h-screen flex items-center justify-center
        bg-[#F8F4EF] dark:bg-[#1B1612]"
      >
        <h1 className="text-5xl text-[#4A3528] dark:text-[#F4E7D4]">
          Certificates
        </h1>
      </section>

    

      <section
        id="contact"
        className="h-screen flex items-center justify-center
        bg-[#F8F4EF] dark:bg-[#1B1612]"
      >
        <h1 className="text-5xl text-[#4A3528] dark:text-[#F4E7D4]">
          Contact
        </h1>
      </section>

    </div>
  );
}

export default App;