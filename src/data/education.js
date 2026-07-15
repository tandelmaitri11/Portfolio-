import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaBookOpen,
} from "react-icons/fa";

const educationData = [
  // SSC
  {
    id: 1,
    degree: "Secondary School Certificate (S.S.C.)",
    institute:
      "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
    duration: "2020",
    score: "Percentage: 75.67%",
    icon: FaSchool,
    description:
      "Completed Secondary School education with excellent academic performance, building a strong foundation in mathematics, science, and communication skills.",
  },

  // HSC
  {
    id: 2,
    degree: "Higher Secondary Certificate (H.S.C.)",
    institute:
      "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
    duration: "2022",
    score: "Percentage: 68.15%",
    icon: FaBookOpen,
    description:
      "Completed Higher Secondary education with a strong academic foundation in Computer Science, Mathematics, and logical reasoning.",
  },

  // BCA
  {
    id: 3,
    degree: "Bachelor of Computer Sciences (Bsc.)",
    institute:
      "Dolat Usha Institute of Applied Sciences and Technology, Valsad (Affiliated to VNSGU, Surat)",
    duration: "2022 - 2025",
    score: "CGPA: 7.77 / 10",
    icon: FaUniversity,
    description:
      "Completed Bachelor's degree in Computer Applications with strong knowledge of Programming, Web Development, Database Management, Software Engineering, Computer Networks, and MERN Stack Development.",
  },

  // MSc
  {
    id: 4,
    degree: "Master of Science in Computer Applications (M.Sc. CA)",
    institute:
      "Dolat Usha Institute of Applied Sciences and Technology, Valsad (Affiliated to VNSGU, Surat)",
    duration: "2025 - Present",
    score: "Currently Pursuing",
    icon: FaGraduationCap,
    description:
      "Currently pursuing a Master's degree focused on Full Stack Development, Artificial Intelligence, Data Analytics, Software Engineering, and Modern Web Technologies.",
  },
];

export default educationData;