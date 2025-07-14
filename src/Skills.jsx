import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

export default function Skills() {
  const skills = [
    {
      title: "HTML",
      skill: 3,
    },
    {
      title: "CSS",
      skill: 3,
    },
    {
      title: "Tailwind",
      skill: 3,
    },
    {
      title: "JavaScript",
      skill: 2,
    },
    {
      title: "ReactJS",
      skill: 2,
    },
    {
      title: "WordPress",
      skill: 2,
    },
    {
      title: "SASS",
      skill: 2,
    },
    {
      title: "PHP",
      skill: 1,
    },
    {
      title: "MySQL",
      skill: 1,
    },
    {
      title: "Git",
      skill: 1,
    }
  ]

  return (
    <div className="w-full h-screen bg-[#E9B872] flex flex-col items-start justify-start relative px-10 pt-20">
      <SectionTitle title="Skills."/>
        <div className="w-full h-4/6 flex mt-5 flex-wrap justify-center items-center gap-12">
          {skills.map((item, index) => (
            <Card 
              key={index}
              title={item.title}
              skill={item.skill}          
            />
          ))}
        </div>
    </div>
  );
}
