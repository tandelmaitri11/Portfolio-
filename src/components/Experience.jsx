import { useState } from "react";
import experienceData from "../data/experience";
import { FaChevronDown } from "react-icons/fa";

const Experience = () => {
  // Set the first item as open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-24 bg-[#FAF9F6] dark:bg-[#1B1612] relative border-t border-stone-200/50 dark:border-[#3f3129]/40 transition-colors duration-500"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3f3129_1px,transparent_1px),linear-gradient(to_bottom,#3f3129_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Accordion List */}
          <div className="lg:w-7/12 flex flex-col gap-4">
            {experienceData.map((item, index) => {
              const isOpen = openIndex === index;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`group border transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? "bg-white dark:bg-[#2A211B] border-amber-200 dark:border-amber-700 shadow-xl rounded-[2rem] p-6 md:p-8" 
                      : "bg-white dark:bg-[#2A211B] border-stone-200 dark:border-[#3f3129] hover:border-amber-200 dark:hover:border-amber-700 shadow-sm rounded-[2rem] p-6"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-colors duration-300 ${
                        isOpen ? "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-500" : "bg-stone-50 dark:bg-[#1B1612] text-stone-500 group-hover:bg-amber-50 group-hover:text-amber-700"
                      }`}>
                        <Icon />
                      </div>
                      
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-amber-900 dark:text-amber-400" : "text-[#4A3528] dark:text-[#F4E7D4]"}`}>
                          {item.role}
                        </h3>
                        <p className="text-stone-500 dark:text-stone-400 font-semibold mt-1">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-50 dark:bg-[#1B1612] border border-stone-100 dark:border-[#3f3129] text-stone-600 dark:text-stone-400 shadow-sm">
                        {item.duration}
                      </span>
                      
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                        isOpen ? "bg-amber-800 dark:bg-amber-700 border-amber-800 text-white rotate-180" : "bg-stone-50 dark:bg-[#1B1612] border-stone-200 dark:border-[#3f3129] text-stone-400 group-hover:border-amber-300 group-hover:text-amber-700"
                      }`}>
                        <FaChevronDown className="text-sm" />
                      </div>
                    </div>
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}>
                    <div className="overflow-hidden">
                      <div className="pl-0 md:pl-[76px]">
                        <div className="w-full h-px bg-stone-200 dark:bg-[#3f3129] mb-6"></div>
                        <ul className="space-y-4">
                          {item.description.map((point, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <span className="mt-2 shrink-0 flex items-center justify-center w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-500"></span>
                              <span className="text-stone-600 dark:text-stone-300 leading-relaxed text-base md:text-lg">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Header */}
          <div className="lg:w-5/12">
            <div className="lg:sticky lg:top-32 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <div className="h-[2px] w-8 bg-amber-800/40 dark:bg-amber-500/40"></div>
                <h4 className="text-amber-800 dark:text-amber-500 font-bold uppercase tracking-widest text-sm">
                  Experience
                </h4>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3528] dark:text-[#F4E7D4] tracking-tight">
                My Career Path.
              </h2>
              
              <p className="mt-6 text-stone-600 dark:text-stone-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A timeline of my professional journey, building scalable web applications 
                and crafting high-performance digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;