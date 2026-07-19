import certifications from "../data/certifications";
import { 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaIdBadge, 
  FaAward 
} from "react-icons/fa";

const Certificates = () => {
  return (
    <section id="certificates" className="bg-[#FAF9F6] dark:bg-[#1B1612] py-24 border-t border-stone-200/50 dark:border-[#3f3129]/40 relative overflow-hidden transition-colors duration-500">
      {/* Subtle modern background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3129_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-8 md:w-12 bg-amber-800/40 dark:bg-amber-500/40"></div>
            <p className="text-amber-800 dark:text-amber-500 font-bold uppercase tracking-widest text-sm">
              Verified Achievements
            </p>
            <div className="h-[2px] w-8 md:w-12 bg-amber-800/40 dark:bg-amber-500/40"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3528] dark:text-[#F4E7D4] tracking-tight">
            Certifications.
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#2A211B] border border-stone-200 dark:border-[#3f3129] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-500 group flex flex-col"
            >
              
              {/* Certificate Image Frame */}
              <div className="h-64 bg-stone-50 dark:bg-[#1B1612] flex items-center justify-center p-6 border-b border-stone-100 dark:border-[#3f3129]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start gap-3 mb-6">
                  <FaAward className="text-amber-700 dark:text-amber-500 text-2xl mt-1" />
                  <h3 className="text-xl font-extrabold text-[#4A3528] dark:text-[#F4E7D4] leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-amber-800 dark:text-amber-500 font-bold uppercase tracking-widest text-xs mb-8">
                  {item.provider}
                </p>

                {/* Meta Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-stone-600 dark:text-stone-400">
                    <FaCalendarAlt className="text-amber-700 dark:text-amber-500" />
                    <span className="text-sm font-medium">Issued: {item.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600 dark:text-stone-400">
                    <FaIdBadge className="text-amber-700 dark:text-amber-500" />
                    <span className="text-sm font-mono truncate">{item.credentialId}</span>
                  </div>
                </div>

                {/* Verify Button */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full flex justify-center items-center gap-3 bg-stone-900 dark:bg-[#F4E7D4] hover:bg-amber-800 dark:hover:bg-amber-500 text-white dark:text-[#1B1612] py-4 rounded-xl font-bold transition duration-300 text-sm"
                  >
                    Verify Certificate
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;