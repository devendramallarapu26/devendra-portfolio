import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
         I’m a <strong>Python Developer and AI Builder</strong> focused on creating practical software solutions using Python, Data Science, and Generative AI. I enjoy taking real-world problems and turning them into useful, scalable applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My development journey has led me to work across Python, SQL, FastAPI, PostgreSQL, Machine Learning, Generative AI, React, and modern web technologies. I’ve built projects including AI-powered decision systems, predictive maintenance platforms, and full-stack web applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I’m continuously improving my software engineering and problem-solving skills by building projects, experimenting with new AI technologies, and learning from real-world development challenges. I’m currently looking for opportunities where I can contribute, learn from experienced engineers, and grow as a software developer.
        </p>
      </motion.div>
    </div>
  );
}
