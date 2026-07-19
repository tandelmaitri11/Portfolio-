import aboutImage from "../assets/images/about-me.png";
import { 
  FaUserGraduate, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaLaptopCode, 
  FaBriefcase, 
  FaCode, 
  FaMobileAlt 
} from "react-icons/fa";

const About = () => {
  const name = import.meta.env.VITE_NAME || "Maitri Tandel";
  const email = import.meta.env.VITE_EMAIL || "mailto:example@gmail.com";
  const phone = import.meta.env.VITE_PHONE || "+91 0000000000";

  const techStack = [
    "React.js", "Node.js", "Express.js", "MongoDB", 
    "JavaScript", "HTML", "CSS", "Tailwind CSS", "REST APIs", "JWT"
  ];

  return (
    <section id="about" className="bg-[#FAF9F6] dark:bg-[#1B1612] py-24 relative overflow-hidden transition-colors duration-500">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3f3129_1px,transparent_1px),linear-gradient(to_bottom,#3f3129_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Minimalist Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-amber-800 dark:bg-amber-500"></div>
            <h4 className="text-amber-800 dark:text-amber-500 font-bold uppercase tracking-widest text-sm">
              Discover
            </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3528] dark:text-[#F4E7D4] tracking-tight">
            About Me.
          </h2>
        </div>

        {/* Modern Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Image & Identity */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden bg-white dark:bg-[#2A211B] border border-stone-200 dark:border-[#3f3129] shadow-sm min-h-[400px]">
            <img 
              src={aboutImage} 
              alt="about" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8">
              <h3 className="text-3xl font-bold text-white mb-1">{name}</h3>
              <p className="text-amber-400 font-medium tracking-wide">MERN Stack Developer</p>
            </div>
          </div>

          {/* Card 2: Main Bio & Tech Stack */}
          <div className="lg:col-span-8 bg-white dark:bg-[#2A211B] rounded-3xl p-8 md:p-12 border border-stone-200 dark:border-[#3f3129] shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#4A3528] dark:text-[#F4E7D4] mb-6">
              Architecting Digital Experiences
            </h3>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6 text-lg">
              I am a passionate <span className="text-amber-800 dark:text-amber-500 font-semibold">MERN Stack Developer</span> driven by the desire to build modern, highly responsive, and user-friendly web applications. From conceptualization to deployment, I specialize in transforming complex requirements into functional, scalable digital solutions. 
            </p>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-8 text-lg">
              My approach focuses on writing clean, efficient code and utilizing modern architectural patterns. Whether designing intuitive frontend interfaces or structuring secure backend databases, my ultimate goal is to deliver impactful, high-quality web experiences that solve real-world problems.
            </p>
            
            {/* Tech Stack Pills */}
            <div className="mt-auto">
              <h4 className="text-sm font-bold text-[#4A3528] dark:text-[#F4E7D4] uppercase tracking-wider mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-1.5 bg-amber-50 dark:bg-amber-900/30 text-amber-900 dark:text-amber-300 rounded-full text-sm font-medium border border-amber-100 dark:border-amber-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Contact Info Strip */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
            <InfoModule icon={<FaUserGraduate />} title="Education" detail="M.Sc.CA Student" />
            <InfoModule icon={<FaMapMarkerAlt />} title="Location" detail="Gujarat, India" />
            <InfoModule icon={<FaEnvelope />} title="Email" detail={email.replace("mailto:", "")} link={email} />
            <InfoModule icon={<FaPhoneAlt />} title="Phone" detail={phone} link={`tel:${phone.replace(/\s/g, "")}`} />
          </div>

          {/* Card 4: Statistics Strip */}
          <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
            <StatModule icon={<FaLaptopCode />} number="5+" label="Projects Built" />
            <StatModule icon={<FaBriefcase />} number="1" label="Internship" />
            <StatModule icon={<FaCode />} number="15+" label="Technologies" />
            <StatModule icon={<FaMobileAlt />} number="100%" label="Responsive UI" />
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- Sub-Components --- */

const InfoModule = ({ icon, title, detail, link }) => (
  <div className="bg-white dark:bg-[#2A211B] p-6 rounded-3xl border border-stone-200 dark:border-[#3f3129] shadow-sm flex items-center gap-5">
    <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/40 text-amber-800 dark:text-amber-500 flex items-center justify-center text-xl shrink-0">
      {icon}
    </div>
    <div className="overflow-hidden">
      <h4 className="text-stone-500 dark:text-stone-400 text-xs font-semibold uppercase tracking-wider mb-1">{title}</h4>
      {link ? (
        <a href={link} className="text-[#4A3528] dark:text-[#F4E7D4] font-bold text-lg hover:text-amber-800 dark:hover:text-amber-500 transition-colors truncate block">
          {detail}
        </a>
      ) : (
        <p className="text-[#4A3528] dark:text-[#F4E7D4] font-bold text-lg truncate">{detail}</p>
      )}
    </div>
  </div>
);

const StatModule = ({ icon, number, label }) => (
  <div className="bg-amber-800 dark:bg-amber-700 p-8 rounded-3xl text-center relative overflow-hidden shadow-lg shadow-amber-900/20">
    <div className="relative z-10 flex flex-col items-center">
      <div className="text-amber-200 dark:text-amber-300 text-3xl mb-4">{icon}</div>
      <h2 className="text-4xl font-extrabold text-white mb-2">{number}</h2>
      <p className="text-amber-100 font-medium">{label}</p>
    </div>
  </div>
);

export default About;