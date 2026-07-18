import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";

const Internship = () => {
  return (
    <section id="internships" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Professional Experience
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Internship
            <span className="text-cyan-400">.</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            My professional software development internship where I gained
            hands-on experience building full-stack web applications,
            developing CMS solutions, and collaborating with a development team.
          </p>

        </div>

        {/* Internship Card */}

        <div className="bg-slate-950 rounded-3xl border border-slate-700 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-500 p-10">

          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left Side */}

            <div className="lg:w-1/3">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center">

                  <FaBriefcase className="text-white text-2xl" />

                </div>

                <div>

                  <h2 className="text-3xl font-bold text-white">
                    Software Development Intern
                  </h2>

                  <p className="text-cyan-400 text-lg font-semibold mt-1">
                    CodeSynergiX
                  </p>

                </div>

              </div>

              <div className="space-y-5">

                <div className="flex items-center gap-3 text-gray-300">

                  <FaCalendarAlt className="text-cyan-400" />

                  <span>Apr 2025 – May 2026</span>

                </div>

                <div className="flex items-center gap-3 text-gray-300">

                  <FaMapMarkerAlt className="text-cyan-400" />

                  <span>On-site</span>

                </div>

              </div>

              <div className="mt-10">

                <h3 className="text-xl font-semibold text-white mb-5">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-3">

                  {[
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "JavaScript",
                    "REST API",
                    "Git",
                    "GitHub",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="lg:w-2/3">

              <div className="flex items-center gap-3 mb-8">

                <FaCode className="text-cyan-400 text-2xl" />

                <h3 className="text-3xl font-bold text-white">
                  Roles & Responsibilities
                </h3>

              </div>

              <div className="space-y-6">

                <div className="flex gap-4">

                  <FaCheckCircle className="text-cyan-400 mt-1 text-lg" />

                  <p className="text-gray-300 leading-7">
                    Developed modern full-stack web applications using the
                    <span className="text-cyan-400 font-semibold">
                      {" "}MERN Stack
                    </span>
                    , delivering scalable and responsive solutions.
                  </p>

                </div>

                <div className="flex gap-4">

                  <FaCheckCircle className="text-cyan-400 mt-1 text-lg" />

                  <p className="text-gray-300 leading-7">
                    Built responsive and user-friendly interfaces using
                    <span className="text-cyan-400 font-semibold">
                      {" "}React.js
                    </span>
                    {" "}and
                    <span className="text-cyan-400 font-semibold">
                      {" "}Next.js
                    </span>
                    .
                  </p>

                </div>

                <div className="flex gap-4">

                  <FaCheckCircle className="text-cyan-400 mt-1 text-lg" />

                  <p className="text-gray-300 leading-7">
                    Integrated REST APIs and managed backend functionality
                    using Node.js, Express.js, and MongoDB.
                  </p>

                </div>

                <div className="flex gap-4">

                  <FaCheckCircle className="text-cyan-400 mt-1 text-lg" />

                  <p className="text-gray-300 leading-7">
                    Worked on Enterprise Content Management System (CMS)
                    development, feature implementation, and bug fixing.
                  </p>

                </div>

                <div className="flex gap-4">

                  <FaCheckCircle className="text-cyan-400 mt-1 text-lg" />

                  <p className="text-gray-300 leading-7">
                    Collaborated with the development team using Git &
                    GitHub while following clean coding practices and agile
                    development workflow.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Internship;