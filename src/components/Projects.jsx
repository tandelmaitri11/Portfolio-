import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#FAF9F6] dark:bg-[#1B1612] py-32 border-t border-stone-200/50 dark:border-[#3f3129]/40 relative overflow-hidden transition-colors duration-500">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3f3129_1px,transparent_1px),linear-gradient(to_bottom,#3f3129_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-200 dark:border-[#3f3129] pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-amber-800 dark:bg-amber-500"></div>
              <h4 className="text-amber-800 dark:text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">
                Selected Work
              </h4>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#4A3528] dark:text-[#F4E7D4] tracking-tight">
              Featured Projects.
            </h2>
          </div>
          
          <p className="text-stone-500 dark:text-stone-400 max-w-sm text-lg md:text-right italic">
            A selection of my recent work, blending clean architecture with seamless user experiences.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Image Side */}
              <div className={`relative ${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-300 dark:shadow-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto transform transition-transform duration-[2s] hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-amber-500/50 rounded-tl-[2rem]"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className={`flex flex-col ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}>
                <span className="text-amber-800 dark:text-amber-500 font-bold text-lg mb-4 block">
                  0{index + 1} / {projects.length}
                </span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#4A3528] dark:text-[#F4E7D4] mb-6 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-bold text-[#4A3528] dark:text-[#F4E7D4] bg-stone-100 dark:bg-[#3f3129] px-4 py-2 rounded-full uppercase tracking-widest border border-stone-200 dark:border-[#3f3129]">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-[#4A3528] dark:text-[#F4E7D4] hover:text-amber-800 dark:hover:text-amber-500 transition">
                      <FaGithub className="text-xl" /> View Source
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-[#4A3528] dark:text-[#F4E7D4] hover:text-amber-800 dark:hover:text-amber-500 transition">
                      <FaExternalLinkAlt className="text-lg" /> Visit Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;