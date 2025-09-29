"use client";

import { assets, serviceData } from "@/assets/assets";
import Image from "next/image"; // Added missing import
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="scroll-behavior: smooth text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo"
      >
        I design, architect and build responsive cross-platform applications
        ranging from web to mobile applications. I also write sometimes.
      </motion.p>
      <motion.div
        initial={{ opactiy: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500"
          >
            <Image src={icon} alt="" className="w-10 justify-self-center" />
            <h3 className="text-lg my-4 text-gray-700 justify-self-center">
              {title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
