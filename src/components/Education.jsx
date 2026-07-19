import educationData from "../data/education";

const Education = () => {
  return (
    <section id="education" className="bg-stone-100 dark:bg-[#1B1612] py-24 relative overflow-hidden border-t border-stone-200 dark:border-[#3f3129]/40 transition-colors duration-500">
      
      {/* Subtle modern background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3129_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-amber-800/40 dark:bg-amber-500/40"></div>
            <h4 className="text-amber-800 dark:text-amber-500 font-bold uppercase tracking-widest text-sm">
              Qualifications
            </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3528] dark:text-[#F4E7D4] tracking-tight">
            Academic Journey.
          </h2>
        </div>

        {/* Education Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationData.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={item.id} 
                className="group relative bg-white dark:bg-[#2A211B] border border-stone-200 dark:border-[#3f3129] rounded-[2rem] p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-200 dark:hover:border-amber-700 flex flex-col items-center text-center"
              >
                {/* Decorative Step Number */}
                <div className="absolute top-6 left-6 px-3 py-1 bg-stone-100 dark:bg-[#1B1612] text-stone-500 dark:text-stone-400 font-bold text-xs rounded-full uppercase tracking-wider group-hover:bg-amber-50 dark:group-hover:bg-amber-900/30 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                  0{index + 1}
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-stone-50 dark:bg-[#1B1612] border border-stone-100 dark:border-[#3f3129] flex items-center justify-center text-amber-700 dark:text-amber-500 text-2xl mb-8 group-hover:bg-amber-100/50 dark:group-hover:bg-amber-900/20 transition-colors duration-300">
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="text-lg font-extrabold text-[#4A3528] dark:text-[#F4E7D4] mb-2 leading-tight">
                  {item.degree}
                </h3>
                <p className="text-amber-700 dark:text-amber-500 font-bold text-sm mb-4">
                  {item.duration}
                </p>
                <p className="text-stone-500 dark:text-stone-400 text-sm font-medium mt-auto">
                  {item.institute}
                </p>

                {/* Hover line accent */}
                <div className="w-12 h-1 bg-amber-800 dark:bg-amber-500 rounded-full mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;