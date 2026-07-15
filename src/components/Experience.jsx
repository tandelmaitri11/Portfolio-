import experienceData from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            My Journey
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            My journey as a MERN Stack Developer and aspiring Data Analyst has
            allowed me to build modern web applications while continuously
            improving my analytical and problem-solving skills.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-cyan-500 rounded-full"></div>

          {experienceData.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center mb-20 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >

                {/* Card */}

                <div className="md:w-5/12">

                  <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-xl transition duration-500">

                    <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-4">
                      {item.duration}
                    </span>

                    <h3 className="text-2xl font-bold text-white">
                      {item.role}
                    </h3>

                    <h4 className="text-cyan-400 mt-2 text-lg">
                      {item.company}
                    </h4>

                    <ul className="mt-6 space-y-3">

                      {item.description.map((point, i) => (

                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                        >

                          <span className="text-cyan-400 mt-1">✔</span>

                          <span>{point}</span>

                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

                {/* Center Icon */}

                <div className="relative z-10 my-8 md:my-0 md:w-2/12 flex justify-center">

                  <div className="w-20 h-20 rounded-full bg-slate-950 border-4 border-cyan-400 flex items-center justify-center text-cyan-400 text-3xl shadow-lg shadow-cyan-500/30">

                    <Icon />

                  </div>

                </div>

                {/* Empty Space */}

                <div className="hidden md:block md:w-5/12"></div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default Experience;