import educationData from "../data/education";

const Education = () => {
  return (
    // Changed bg-slate-900 to bg-slate-950 for a deeper, darker base
    <section id="education" className="bg-slate-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold text-sm">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Academic Journey</h2>
          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Desktop Wave Roadmap */}
        <div className="hidden lg:block relative h-96">
          {/* SVG Wave Line */}
          <svg className="absolute top-16 left-0 w-full h-32" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,50 Q300,0 600,50 T1200,50" fill="none" stroke="#1e293b" strokeWidth="4" strokeDasharray="10 10" />
          </svg>

          <div className="grid grid-cols-4 gap-8 relative">
            {educationData.map((item, index) => {
              const Icon = item.icon;
              const isHigh = index % 2 === 0;
              
              return (
                <div key={item.id} className={`flex flex-col items-center relative ${isHigh ? "mt-0" : "mt-32"}`}>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-cyan-400 flex items-center justify-center text-cyan-400 text-2xl shadow-xl z-20 hover:scale-110 transition-transform">
                    <Icon />
                  </div>

                  {/* Card - Using bg-slate-900 to contrast against bg-slate-950 background */}
                  <div className="mt-8 w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                    <p className="text-cyan-400 text-sm font-semibold mt-2">{item.duration}</p>
                    <p className="text-gray-400 text-xs mt-3">{item.institute}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-7 top-0 h-full w-1 bg-slate-800"></div>
          <div className="space-y-10">
            {educationData.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 text-xl shrink-0 z-10">
                    <Icon />
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 w-full">
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    <p className="text-cyan-400 mt-1 text-sm">{item.duration}</p>
                    <p className="text-gray-400 text-sm mt-3">{item.institute}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;