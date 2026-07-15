import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaChartBar,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        icon: FaReact,
        level: 90,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: 90,
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        level: 95,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        level: 90,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: 90,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        level: 85,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        level: 85,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: 85,
      },
      {
        name: "MySQL",
        icon: SiMysql,
        level: 80,
      },
    ],
  },

  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        icon: FaJava,
        level: 80,
      },
      {
        name: "Python",
        icon: FaPython,
        level: 75,
      },
      {
        name: "SQL",
        icon: SiMysql,
        level: 80,
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        level: 85,
      },
      {
        name: "GitHub",
        icon: FaGithub,
        level: 90,
      },
      {
        name: "VS Code",
        icon: VscCode,
        level: 95,
      },
      {
        name: "Postman",
        icon: SiPostman,
        level: 85,
      },
      {
        name: "Power BI",
        icon: FaChartBar,
        level: 70,
      },
    ],
  },
];

export default skillsData;