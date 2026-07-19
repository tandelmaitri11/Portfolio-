import skillsData from "../data/skills";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#FAF9F6] dark:bg-[#1B1612] py-24 border-t border-stone-200/50 dark:border-[#3f3129]/40 relative transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Asymmetric Split Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-amber-800/40 dark:bg-amber-500/40"></div>
                <h4 className="text-amber-800 dark:text-amber-500 font-bold uppercase tracking-widest text-sm">
                  Expertise
                </h4>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3528] dark:text-[#F4E7D4] leading-tight tracking-tight mb-6">
                Technologies I Work With.
              </h2>
              
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg mb-8">
                I specialize in building responsive, high-performance web applications using the MERN stack. My focus is on writing clean, scalable code and delivering seamless user experiences.
              </p>
              
              <div className="hidden lg:block w-16 h-1 bg-amber-200 dark:bg-amber-800 rounded-full"></div>
            </div>
          </div>

          {/* Right Column: Skill Categories */}
          <div className="lg:w-2/3 flex flex-col gap-10">
            
            {skillsData.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#2A211B] p-8 md:p-10 rounded-[2rem] border border-stone-200 dark:border-[#3f3129] shadow-sm hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300"
              >
                {/* Category Title */}
                <h3 className="text-2xl font-bold text-[#4A3528] dark:text-[#F4E7D4] mb-8 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-amber-700 dark:bg-amber-500 animate-pulse"></span>
                  </span>
                  {category.title}
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {category.skills.map((skill, i) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={i}
                        className="flex items-center gap-5 p-4 rounded-2xl bg-stone-50 dark:bg-[#1B1612] border border-stone-100 dark:border-[#3f3129] hover:border-amber-200 dark:hover:border-amber-700 hover:bg-white dark:hover:bg-[#3A2B23] transition-all duration-300 group"
                      >
                        {/* Progress Ring */}
                        <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                          <CircularProgressbar
                            value={skill.level}
                            strokeWidth={8}
                            styles={buildStyles({
                              pathColor: "#b45309", // Amber-700
                              trailColor: "#e7e5e4", // Stone-200
                              strokeLinecap: "round",
                              pathTransitionDuration: 1,
                            })}
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <Icon className="text-amber-800 dark:text-amber-500 text-xl group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>

                        {/* Skill Info */}
                        <div className="flex-1">
                          <p className="text-[#4A3528] dark:text-[#F4E7D4] font-bold text-base mb-1">
                            {skill.name}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-stone-500 dark:text-stone-400 text-xs font-semibold uppercase tracking-wider">
                              Proficiency
                            </p>
                            <p className="text-amber-700 dark:text-amber-500 font-bold text-sm">
                              {skill.level}%
                            </p>
                          </div>
                          {/* Mini linear progress bar */}
                          <div className="w-full h-1 bg-stone-200 dark:bg-[#3A2B23] rounded-full mt-2 overflow-hidden">
                            <div 
                              className="h-full bg-amber-600 dark:bg-amber-500 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;