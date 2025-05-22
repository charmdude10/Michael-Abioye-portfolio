import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div>
          Hi! I'm a passionate Web Developer, skilled 3D Animator, and dedicated
          Freelancer who brings ideas to life across screens and dimensions.
          With a strong foundation in modern web technologies, I specialize in
          building fast, responsive, and user-focused websites and applications.
          Whether it's crafting seamless user experiences or developing complex
          interfaces with React, Tailwind CSS, and other frameworks, I strive to
          deliver clean and maintainable code that performs beautifully.
        </div>
        <div>
          Beyond the web, I dive into the world of 3D animation—creating
          immersive visual experiences using tools like Autodesk Maya, Motion
          Capture, Three.js, and real-time rendering engines. I love blending
          technology with creativity to tell stories, simulate products, or
          build interactive environments that captivate audiences. As a
          freelancer, I have collaborated with quite some clients from diverse
          industries, helping them build their digital presence, bring concepts
          to life, and meet their creative and technical goals. I'm committed to
          clear communication, timely delivery, and exceeding expectations with
          every project. Let us create something extraordinary together—whether
          it is a sleek web app, an animated product showcase, or a full-scale
          digital experience.
        </div>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
