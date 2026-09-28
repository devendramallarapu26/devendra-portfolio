import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Predictive Maintenance Platform",
    description:
      "A machine learning application that analyzes industrial sensor data and predicts potential equipment failures. Built with Python, FastAPI, Streamlit, Pandas, NumPy, Scikit-learn, and TensorFlow.",
    image: "/assets/pp1.png",
    link: "https://predictive-maintenance-platform-hwgvxctychrv4yflospalq.streamlit.app/",
  },
  {
    id: 2,
    title: "AI Decision Intelligence",
    description:
      "An AI-powered system that converts complex business questions into structured, evidence-based decision reports using Python, FastAPI, OpenAI API, PostgreSQL, Pandas, and NumPy.",
    image: "/assets/pp2.png",
    link: "#",
  },
  {
    id: 3,
    title: "PlaneX AI",
    description:
      "An AI-powered planetary image analysis application using Python, OpenCV, Flask, and Gemini API to process images, identify planetary objects, and generate structured analysis.",
    image: "/assets/pp3.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div
      className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16"
      id="projects"
    >
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${
              index % 2 === 0
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* Project Details */}
            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>

              <p className="font-bold text-white text-xl lg:text-3xl">
                {project.title}
              </p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>

              <a
                href={project.link}
                className="text-white mt-3 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}