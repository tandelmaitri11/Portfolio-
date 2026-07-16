import cms from "../assets/images/Project/cms.png";
import school from "../assets/images/w8.jpg";
import ecommerce from "../assets/images/w8.jpg";
import hospital from "../assets/images/w8.jpg";
import resume from "../assets/images/w8.jpg";
import facemask from "../assets/images/w8.jpg";

const projects = [
  {
    id: 1,
    title: "Content Management System (CMS)",
    category: "Software Development Internship",

    image: cms,

    description:
      "Developed and maintained a scalable enterprise Content Management System (CMS) using the MERN Stack and Next.js. Built secure authentication, responsive admin dashboards, AI-powered editor components, and Cloudinary media management while collaborating in a Git-based Agile development environment.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Next.js",
      "REST API",
      "JWT",
      "Cloudinary",
    ],

    features: [
      "Developed secure JWT Authentication with Refresh Tokens.",
      "Designed responsive Admin Dashboard with user management.",
      "Integrated AI-powered content editor.",
      "Implemented Cloudinary media upload and optimization.",
      "Built scalable REST APIs using Express.js.",
      "Worked with Git version control in a 5-member development team.",
    ],

    github: "",
    demo: "https://mono-repo-seo-generator-frontend.vercel.app/",
  },

  {
    id: 2,
    title: "Advance School Management System (SchoolY)",
    category: "MERN Stack",

    image: school,

    description:
      "A complete MERN Stack School Management System with role-based authentication for Admin, Teacher, Student, and Parent. Includes attendance, examinations, assignments, fee payment, LMS, and real-time notifications.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.io",
      "Razorpay",
    ],

    features: [
      "Role-based Login System.",
      "Attendance Management.",
      "Assignments & Learning Management System.",
      "Exam & Timetable Management.",
      "Online Fee Payment using Razorpay.",
      "Analytics Dashboard.",
      "Real-time Notifications using Socket.io.",
    ],

    github: "https://github.com/tandelmaitri11/School-Management-System",
    demo: "",
  },

  {
    id: 3,
    title: "E-Commerce Clothes Shopping Website",
    category: "Web Development",

    image: ecommerce,

    description:
      "Designed and developed an online clothing shopping platform with product search, shopping cart, authentication, and an admin panel for product management.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],

    features: [
      "User Registration & Login.",
      "Shopping Cart Management.",
      "Product Search & Filtering.",
      "Product Categories.",
      "Admin Dashboard.",
      "Database Management using MySQL.",
    ],

    github: "https://github.com/tandelmaitri11/School-Management-System",
    demo: "",
  },

  {
    id: 4,
    title: "Hospital Management System",
    category: "Web Application",

    image: hospital,

    description:
      "Developed a Hospital Management System for managing patients, doctors, appointments, medical records, and administrative operations.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],

    features: [
      "Patient Management.",
      "Doctor Management.",
      "Appointment Scheduling.",
      "Medical Record Management.",
      "Admin Dashboard.",
      "Hospital Database System.",
    ],

    github: "https://github.com/tandelmaitri11/Hospital-Management-System",
    demo: "",
  },

  {
    id: 5,
    title: "AI Powered Resume Screening Tool",
    category: "Artificial Intelligence",

    image: resume,

    description:
      "Built an AI-based Resume Screening Tool using NLP techniques to parse resumes, rank candidates using cosine similarity, and provide recruiter-friendly results through a Streamlit interface.",

    technologies: [
      "Python",
      "spaCy",
      "TF-IDF",
      "NLP",
      "Streamlit",
    ],

    features: [
      "Resume Parsing.",
      "Candidate Ranking.",
      "Cosine Similarity Matching.",
      "Results Export.",
      "Interactive Recruiter Dashboard.",
    ],

    github: "",
    demo: "",
  },

  {
    id: 6,
    title: "Face Mask Detection System",
    category: "Machine Learning",

    image: facemask,

    description:
      "Implemented a real-time Face Mask Detection System using OpenCV, TensorFlow, CNN, and Haar Cascade for webcam-based mask detection and classification.",

    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "CNN",
      "Haar Cascade",
    ],

    features: [
      "Real-time Webcam Detection.",
      "CNN-based Classification.",
      "OpenCV Image Processing.",
      "Mask / No Mask Prediction.",
      "Deep Learning Model.",
    ],

    github: "",
    demo: "",
  },
];

export default projects;