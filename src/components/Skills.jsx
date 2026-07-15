import skillsData from "../data/skills";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[6px] font-semibold">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Technologies I Work With
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            I specialize in building responsive full-stack applications using
            the MERN Stack while continuously learning modern technologies and
            Data Analytics.
          </p>

        </div>

        {/* Categories */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {skillsData.map((category, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500"
            >

              <h3 className="text-xl font-bold text-cyan-400 text-center mb-8 border-b border-slate-700 pb-4">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-6">

                {category.skills.map((skill, i) => {

                  const Icon = skill.icon;

                  return (

                    <div
                      key={i}
                      className="flex flex-col items-center"
                    >

                      <div className="w-16 h-16 mb-3">

                        <CircularProgressbar
                          value={skill.level}
                          text={`${skill.level}%`}
                          strokeWidth={10}
                          styles={buildStyles({
                            pathColor: "#22d3ee",
                            trailColor: "#334155",
                            textColor: "#ffffff",
                            textSize: "24px",
                          })}
                        />

                      </div>

                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 text-xl mb-2">

                        <Icon />

                      </div>

                      <p className="text-gray-300 text-xs text-center">
                        {skill.name}
                      </p>

                    </div>

                  );

                })}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;