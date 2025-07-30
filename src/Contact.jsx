import SectionTitle from "./SectionTitle";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [iconSize, setIconSize] = useState(25);
  
  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth < 768 ? 35 : 25);
    };
  
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
        id="contact"
        className="w-full h-[75vh] bg-black flex flex-col items-center justify-start relative px-10 pt-20 md:items-start"
    >
      <SectionTitle title="Contact." color="2" />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <motion.div 
          className="w-full text-xl text-white text-center md:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
        >
          Did you like one of my projects, have a question, or an idea for collaboration? I’d love to hear from you – I’ll get back to you as soon as possible!
        </motion.div>
        <div className="flex justify-center items-center gap-3 mt-10">
          <motion.a 
            href="mailto:martin22.krajcovic@gmail.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.7 }}
          >
            <IoMdMail size={iconSize} className="text-white hover:text-[#E9B872] transition-colors duration-300" />
          </motion.a>
          <motion.a 
            href="https://github.com/mxrshall" 
            target="_blank"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.9 }}
          >
            <FaGithub size={iconSize} className="text-white hover:text-[#E9B872] transition-colors duration-300" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/martin-kraj%C4%8Dovi%C4%8D-8493a4374" 
            target="_blank"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1.1 }}
          >
            <FaLinkedin size={iconSize} className="text-white hover:text-[#E9B872] transition-colors duration-300" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
