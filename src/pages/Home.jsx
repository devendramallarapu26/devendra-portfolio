import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const socialLinks = [
    {
      icon: BiLogoGmail,
      link: "mailto:devendramallarapu8@gmail.com",
      label: "Email",
    },
    {
      icon: IoLogoLinkedin,
      link: "https://www.linkedin.com/in/devendra-mallarapu-36920225a/",
      label: "LinkedIn",
    },
    {
      icon: BsGithub,
      link: "https://github.com/devendramallarapu26",
      label: "GitHub",
    },
  ];

  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          {/* Heading */}
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                  ease: "easeInOut",
                },
              },
            }}
          >

            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              Hello,{" "}
              <TypeAnimation
                sequence={[
                  "I am Devendra",
                  1000,
                  "I am a Python Developer",
                  1000,
                  "I am an AI Developer",
                  1000,
                  "I build AI-powered products",
                  1000,
                ]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <span className="font-extrabold">
                Python
              </span>{" "}

              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>

            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              Building{" "}
              <span className="font-extrabold">
                AI-Powered Solutions.
              </span>
            </motion.h2>

          </motion.div>

          {/* Description */}
          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I’m a Python Developer and AI Builder focused on creating
            practical, AI-powered software solutions. I work with Python,
            SQL, Data Science, Generative AI, and modern web technologies
            to turn real-world problems into useful products. I’m
            continuously learning, building, and improving my skills
            as a software engineer.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map(
              ({ icon: Icon, link, label }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  aria-label={label}
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#000",
                    color: "#fff",
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
              )
            )}
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <img
            className="h-full w-full"
            src="/assets/hero-vector.svg"
            alt="Devendra portfolio hero illustration"
          />
        </motion.div>

      </div>
    </div>
  );
}