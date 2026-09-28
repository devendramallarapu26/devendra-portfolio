import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skills() {
  const [skills] = useState([
    {
      id: 1,
      name: "Python",
      icon: <FaPython size={50} />,
    },
    {
      id: 2,
      name: "SQL",
      icon: <FaDatabase size={50} />,
    },
    {
      id: 3,
      name: "FastAPI",
      icon: <FaDatabase size={50} />,
    },
    {
      id: 4,
      name: "Pandas",
      icon: <FaDatabase size={50} />,
    },
    {
      id: 5,
      name: "NumPy",
      icon: <FaDatabase size={50} />,
    },
    {
      id: 6,
      name: "Machine Learning",
      icon: <FaDatabase size={50} />,
    },
    {
      id: 7,
      name: "Generative AI",
      icon: <FaDatabase size={50} />,
    },
    {
      id: 8,
      name: "PostgreSQL",
      icon: <BiLogoPostgresql size={50} />,
    },
    {
      id: 9,
      name: "React.js",
      icon: <FaReact size={50} />,
    },
    {
      id: 10,
      name: "JavaScript",
      icon: <FaJs size={50} />,
    },
    {
      id: 11,
      name: "Git & GitHub",
      icon: <FaGithub size={50} />,
    },
    {
      id: 12,
      name: "Streamlit",
      icon: <FaDatabase size={50} />,
    },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "AICTE & EduSkills",
      role: "AI/ML Virtual Intern",
      period: "May 2024 - Aug 2024",
      description:
        "Worked on machine learning and computer vision workflows using Python and TensorFlow. Performed data preprocessing and model validation for AI/ML tasks and applied Python-based machine learning techniques to develop and evaluate model workflows.",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">

      {/* Skills Section */}
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 max-w-6xl mx-auto place-items-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 text-center"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: skill.id * 0.1,
              }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">

        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">

                <div className="flex items-center gap-5">

                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                    AI
                  </div>

                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>

                </div>

                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>

              </div>

              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}