import aboutImage from "../assets/images/about-me.png";
import { FaUserGraduate, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLaptopCode, FaBriefcase, FaCode, FaChartLine } from "react-icons/fa";

const About = () => {
  const name = import.meta.env.VITE_NAME || "Maitri Tandel";
  const email = import.meta.env.VITE_EMAIL || "mailto:example@gmail.com";
  const phone = import.meta.env.VITE_PHONE || "+91 0000000000";

  return (
    <section id="about" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h4 className="text-cyan-400 uppercase tracking-widest">About Me</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Get To Know Me</h2>
          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img src={aboutImage} alt="about" className="w-80 md:w-96 rounded-3xl border-4 border-cyan-400 shadow-xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">MERN Stack Developer</h2>
            <p className="text-gray-400 leading-8 mb-8">
              Hello! I'm <span className="text-cyan-400 font-semibold">{name}</span>, a passionate <span className="text-white font-medium">MERN Stack Developer</span> with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into functional digital solutions using <span className="text-white">React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, and Tailwind CSS</span>. Through academic and personal projects, I have gained hands-on experience in frontend development, backend integration, REST APIs, authentication, and database management while following clean coding practices and creating seamless user experiences.
            </p>
            <p className="text-gray-400 leading-8 mb-8">
              Alongside web development, I am continuously expanding my knowledge in <span className="text-cyan-400 font-semibold">Data Analytics</span> by learning <span className="text-white">Python, SQL, Excel, and Power BI</span>. I enjoy exploring new technologies, solving real-world problems, and continuously improving my technical skills. My goal is to build innovative, scalable applications while combining development and analytical thinking to create impactful digital solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <FaUserGraduate className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Education</h4>
                  <p className="text-gray-400">M.Sc.CA Student</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">Gujarat, India</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaEnvelope className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a href={email} className="text-gray-400 hover:text-cyan-400 transition">{email.replace("mailto:", "")}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <FaPhoneAlt className="text-cyan-400 text-xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-gray-400 hover:text-cyan-400 transition">{phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <StatCard icon={<FaLaptopCode />} number="5+" title="Projects" />
          <StatCard icon={<FaBriefcase />} number="1" title="Internship" />
          <StatCard icon={<FaCode />} number="15+" title="Technologies" />
          <StatCard icon={<FaChartLine />} number="Learning" title="Data Analytics" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, number, title }) => (
  <div className="bg-slate-800 rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 duration-300">
    <div className="text-cyan-400 text-5xl mx-auto mb-5 flex justify-center">{icon}</div>
    <h2 className="text-3xl font-bold text-white">{number}</h2>
    <p className="text-gray-400 mt-2">{title}</p>
  </div>
);

export default About;