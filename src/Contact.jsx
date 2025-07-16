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
          <IoMdMail size={30} color="white" />
          <FaGithub size={30} color="white" />
          <FaLinkedin size={30} color="white" />
        </div>
      </div>
    </div>
  );
}
