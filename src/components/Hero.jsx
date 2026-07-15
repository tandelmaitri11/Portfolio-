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
            className="min-h-screen bg-slate-950 flex items-center pt-24"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Left Section */}
                    <div>
                        <p className="text-cyan-400 text-lg font-semibold mb-3">
                            Hello, I'm
                        </p>

                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            {VITE_NAME}
                        </h1>

                        <p className="text-gray-400 mt-6 leading-8 max-w-xl">
                            I'm a passionate <span className="text-cyan-400 font-semibold">MERN Stack Developer</span>{" "}
                            specializing in building high-performance, scalable web applications. My expertise spans {" "}
                            <span className="text-white">React.js, Node.js, Express.js, and MongoDB</span>,{" "}
                            complemented by robust backend security using <span className="text-cyan-400">JWT (JSON Web Tokens)</span>{" "}
                            and real-time data integration via <span className="text-cyan-400">Socket.io</span>.{" "}
                            I thrive on architecting seamless digital experiences with <span className="text-white">Tailwind CSS and modern JavaScript</span>.{" "}
                            Beyond development, I am actively evolving into a <span className="text-cyan-400 font-semibold">Data Analyst</span>,{" "}
                            leveraging <span className="text-white">Python, SQL, Excel, and Power BI</span> to drive data-informed
                            decision-making and innovative problem-solving.
                        </p>
                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a
                                href="#contact"
                                className="bg-cyan-500 hover:bg-cyan-600 text-white px-7 py-3 rounded-full transition duration-300 hover:scale-105"
                            >
                                Hire Me
                            </a>

                            <a
                                href={VITE_RESUME}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-7 py-3 rounded-full transition duration-300 hover:scale-105"
                            >
                                View Resume
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-6 mt-10 text-2xl">
                            <a
                                href={VITE_GITHUB}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-cyan-400 transition duration-300 hover:scale-125"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href={VITE_LINKEDIN}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-cyan-400 transition duration-300 hover:scale-125"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href={VITE_EMAIL}
                                className="text-gray-400 hover:text-cyan-400 transition duration-300 hover:scale-125"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex justify-center">
                        <div className="relative flex items-center justify-center">

                            {/* Glow */}
                            <div className="absolute w-80 h-80 md:w-[430px] md:h-[430px] rounded-full bg-cyan-500 blur-3xl opacity-20"></div>

                            {/* Rotating Ring */}
                            <div className="absolute w-80 h-80 md:w-[430px] md:h-[430px] rounded-full animate-spin-slow bg-[conic-gradient(#06b6d4,transparent,#22d3ee,transparent,#06b6d4)]"></div>

                            {/* Inner Circle */}
                            <div className="absolute w-[300px] h-[300px] md:w-[390px] md:h-[390px] rounded-full bg-slate-950"></div>

                            {/* Profile Image Wrapper */}
                            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-400 overflow-hidden shadow-2xl">
                                <img
                                    src={heroImage}
                                    alt={VITE_NAME}
                                    className="w-full h-full object-cover object-[50%_8%]"
                                />

                                {/* Floating MERN Badge */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 px-6 py-2 bg-slate-900/90 backdrop-blur-sm border border-cyan-400/30 rounded-2xl shadow-xl">
                                    <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm whitespace-nowrap">
                                        MERN Developer
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Scroll Down */}
                <div className="flex justify-center mt-16 animate-bounce">
                    <a href="#about">
                        <FaArrowDown className="text-cyan-400 text-3xl hover:text-cyan-300 transition duration-300" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;