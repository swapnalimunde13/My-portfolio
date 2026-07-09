import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import { SiMysql, SiTensorflow, SiOpencv, SiScikitlearn } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "RealityShield - AI Deepfake Detector",
      desc: "Developed an AI-powered platform for detecting deepfake images, videos, and audio files. The system provides real vs fake prediction scores to verify media authenticity. Built using React.js, Node.js, Python, TensorFlow, OpenCV, and Scikit-learn. Used CNN, SVM, and ViT models for deepfake detection and integrated REST APIs for seamless communication. Implemented GitHub, Docker, and CI/CD for development and deployment workflows.",
      tech: [
        FaReact,
        FaNodeJs,
        FaPython,
        SiTensorflow,
        SiOpencv,
        SiScikitlearn,
        FaDocker,
        FaGithub,
      ],
    },

    {
      title: "Cab Booking Website",
      desc: "Developed a full-stack cab booking platform with Customer, Driver, and Admin dashboards. The system supports ride booking, trip management, user authentication, and booking history tracking.",
      tech: [FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, SiMysql],
    },

    {
      title: "Student Management System",
      desc: "Built a role-based academic management system with separate Admin, Teacher, and Student dashboards. The platform helps manage students, classes, attendance, and academic records efficiently.",
      tech: [FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, SiMysql],
    },

    {
      title: "Credit Card Default Prediction",
      desc: "Developed a machine learning model to predict the likelihood of credit card payment defaults. The system analyzes customer financial data and provides risk predictions for better decision-making.",
      tech: [FaPython, SiScikitlearn, SiTensorflow],
    },
  ];

  return (
    <section className="section" id="projects">
      <h2 className="title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="tech-icons">
              {project.tech.map((Icon, i) => (
                <span key={i}>
                  <Icon />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
