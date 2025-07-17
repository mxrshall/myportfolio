import SectionTitle from "./SectionTitle";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div 
        id="contact"
        className="w-full h-[75vh] bg-black flex flex-col items-start justify-start relative px-10 pt-20"
    >
      <SectionTitle title="Contact." color="2" />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-1/2 text-xl text-white text-center">
          Did you like one of my projects, have a question, or an idea for collaboration? I’d love to hear from you – I’ll get back to you as soon as possible!
        </div>
        <div className="flex justify-center items-center gap-3 mt-10">
          <a href="mailto:martin22.krajcovic@gmail.com">
            <IoMdMail size={30} className="text-white hover:text-[#E9B872] transition-colors duration-300" />
          </a>
          <a href="https://github.com/mxrshall" target="_blank">
            <FaGithub size={30} className="text-white hover:text-[#E9B872] transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/martin-kraj%C4%8Dovi%C4%8D-8493a4374" target="_blank">
            <FaLinkedin size={30} className="text-white hover:text-[#E9B872] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
