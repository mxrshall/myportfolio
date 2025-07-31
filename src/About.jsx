import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SectionButton from "./SectionButton";

export default function About() {
  return (
    <div 
      id="about"
      className="w-full h-screen flex items-start justify-start relative"
    >
      <div className="w-full h-4/5 bg-[#F4F1DE] flex flex-col items-center justify-center px-10 py-20 md:w-4/5 md:items-start md:justify-start">
        <SectionTitle title="About Me." color="1" />
        <motion.div 
          className="w-full text-2xl my-10 text-center md:w-5/6 md:text-left md:my-5"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
        >
          Hi, my name is Martin, and I’m from Slovakia. I’m currently studying at university, focusing on creating modern websites and web applications. In addition to development, I specialize in SEO strategy and working with analytical tools, which allows me to not only build projects but also optimize them. I enjoy creating creative solutions that are both functional and visually appealing.
        </motion.div>
        <SectionButton title="Download CV"/>
      </div>
    </div>
  );
}
