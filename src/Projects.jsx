import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <div 
        id="projects"
        className="w-full h-screen flex items-start justify-start relative"
    >
      <div className="w-4/5 h-4/5 bg-[#F4F1DE] flex flex-col items-start justify-start px-10 py-20">
        <SectionTitle title="My Projects." color="1" />
      </div>
    </div>
  );
}
