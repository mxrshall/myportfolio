import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SectionButton from "./SectionButton";

export default function About() {
  return (
    <div 
      id="about"
      className="w-full h-screen flex items-start justify-start relative"
    >
      <div className="w-4/5 h-4/5 bg-[#F4F1DE] flex flex-col items-start justify-start px-10 py-20">
        <SectionTitle title="About Me." color="1" />
        <div className="w-5/6 text-2xl mt-10">
          Hi, my name is Martin, and I’m from Slovakia. I’m currently studying at university and focusing on creating modern websites and web applications. In addition to development, I also specialize in SEO strategy and working with analytical tools, which allows me to not only build projects but also optimize them. I enjoying creating creative solutions that are both functional and visually appealing.
        </div>
        <SectionButton title="Download CV"/>
      </div>
    </div>
  );
}
