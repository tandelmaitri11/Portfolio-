import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowDown,
} from "react-icons/fa";
import heroImage from "../assets/images/Hero.jpeg";

const Hero = () => {
    // Environment Variables
    const {
        VITE_NAME,
        VITE_GITHUB,
        VITE_LINKEDIN,
        VITE_EMAIL,
        VITE_RESUME,
    } = import.meta.env;

    return (
        <section
            id="home"
            className="min-h-screen bg-white dark:bg-[#1B1612] flex items-center pt-24 pb-12 overflow-hidden transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative">
                
                {/* Subtle background blur spot */}
                <div className="absolute top-0 -left-10 w-72 h-72 bg-amber-50 dark:bg-amber-900/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

                    {/* Left Section */}
                    <div>
                        <p className="text-amber-800 dark:text-amber-500 text-lg font-bold tracking-widest uppercase mb-3 flex items-center gap-4">
                            <span className="w-8 h-0.5 bg-amber-800 dark:bg-amber-500"></span>
                            Hello, I'm
                        </p>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            {VITE_NAME}
                        </h1>

                        <p className="text-gray-600 dark:text-gray-300 mt-6 leading-relaxed max-w-xl text-lg">
                            I'm a passionate <span className="text-amber-800 dark:text-amber-500 font-bold">MERN Stack Developer</span>{" "}
                            specializing in building high-performance, scalable web applications. My expertise spans {" "}
                            <span className="text-gray-900 dark:text-gray-100 font-semibold">React.js, Node.js, Express.js, and MongoDB</span>,{" "}
                            complemented by robust backend security using <span className="text-amber-700 dark:text-amber-400 font-medium">JWT</span>{" "}
                            and real-time data integration via <span className="text-amber-700 dark:text-amber-400 font-medium">Socket.io</span>.{" "}
                            I thrive on architecting seamless digital experiences with <span className="text-gray-900 dark:text-gray-100 font-semibold">Tailwind CSS and modern JavaScript</span>,{" "}
                            turning complex ideas into clean, efficient, and user-centric web solutions.
                        </p>
                        
                        {/* Buttons */}
                        <div className="flex flex-wrap gap-5 mt-10">
                            <a
                                href="/contact"
                                className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-amber-900/20 font-medium"
                            >
                                Hire Me
                            </a>

                            <a
                                href={VITE_RESUME}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-amber-800 text-amber-800 dark:text-amber-500 dark:border-amber-500 hover:bg-amber-800 hover:text-white px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 font-medium"
                            >
                                View Resume
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-8 mt-12 text-2xl items-center">
                            <a href={VITE_GITHUB} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-amber-800 dark:hover:text-amber-500 transition-all duration-300 hover:-translate-y-1">
                                <FaGithub />
                            </a>
                            <a href={VITE_LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-amber-800 dark:hover:text-amber-500 transition-all duration-300 hover:-translate-y-1">
                                <FaLinkedin />
                            </a>
                            <a href={VITE_EMAIL} className="text-gray-400 dark:text-gray-500 hover:text-amber-800 dark:hover:text-amber-500 transition-all duration-300 hover:-translate-y-1">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="relative w-full max-w-sm md:max-w-md">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-amber-100 dark:bg-amber-900/20 rounded-full blur-3xl opacity-50 z-0"></div>
                            <div className="absolute inset-0 translate-x-6 translate-y-6 md:translate-x-8 md:translate-y-8 rounded-3xl border-2 border-amber-800/20 dark:border-amber-500/20 z-0 transition-transform duration-500 hover:translate-x-4 hover:translate-y-4"></div>

                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/10 border-4 border-white dark:border-[#3A2B23] bg-white aspect-[4/5] group">
                                <img src={heroImage} alt={VITE_NAME} className="w-full h-full object-cover object-[50%_10%] transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            <div className="absolute -left-6 bottom-10 md:-left-12 md:bottom-16 z-20 bg-white dark:bg-[#3A2B23] px-6 py-4 rounded-2xl shadow-xl shadow-amber-900/10 border border-amber-50 dark:border-none flex items-center gap-4 transition-transform duration-500 hover:-translate-y-2">
                                <div className="relative flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-700"></span>
                                </div>
                                <span className="text-gray-900 dark:text-white font-bold text-sm md:text-base whitespace-nowrap">
                                    MERN Stack Developer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default Hero;