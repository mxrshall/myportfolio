import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SectionButton from "./SectionButton";
import person from "./images/me.png";

export default function About() {
  return (
    <div 
      id="about"
      className="w-full h-screen flex items-start justify-start relative"
    >
      <div className="w-4/5 h-4/5 bg-[#F4F1DE] flex flex-col items-start justify-start px-10 py-20">
        <SectionTitle title="About Me." color="1" />
        <motion.div 
          className="w-5/6 text-2xl my-5"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
        >
          Hi, my name is Martin, and I’m from Slovakia. I’m currently studying at university and mainly focusing on creating modern websites and web applications. In addition to development, I also specialize in SEO strategy and working with analytical tools, which allows me to not only build projects but also optimize them. I enjoying creating creative solutions that are both functional and visually appealing.
        </motion.div>
        <SectionButton title="Download CV"/>
      </div>
      <div className="w-1/3 h-5/6 absolute bottom-0 right-0 flex items-center justify-left">
        <motion.div 
          className="w-[70vh] h-[70vh] rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${person})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
        />
      </div>
    </div>
  );
}
