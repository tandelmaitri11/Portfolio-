import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-24">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Here are some of the projects I have developed using MERN Stack,
            Artificial Intelligence, Machine Learning, and modern Web
            Technologies.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">

          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full max-w-[460px] bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 flex flex-col"
            >

              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}

              <div className="p-7 flex flex-col flex-grow">

                {/* Category */}

                <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-4 py-2 rounded-full mb-4 self-start">
                  {project.category}
                </span>

                {/* Title */}

                <h3 className="text-2xl font-bold text-white leading-8">
                  {project.title}
                </h3>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-5 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-slate-800 border border-cyan-500/20 text-cyan-300 text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}

                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {project.description}
                </p>

                {/* Features */}

                <div className="flex-grow">

                  <h4 className="text-white font-semibold mb-3">
                    Key Features
                  </h4>

                  <ul className="space-y-2">

                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-400 text-sm leading-6"
                      >
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}

                  </ul>

                </div>

                {/* Buttons */}

                {(project.github || project.demo) && (
                  <div className="flex gap-4 mt-8">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-cyan-500 text-white py-3 rounded-xl transition duration-300"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white py-3 rounded-xl transition duration-300"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}

                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;