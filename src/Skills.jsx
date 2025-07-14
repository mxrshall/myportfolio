import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

export default function Skills() {
  return (
    <div className="w-full h-screen bg-[#E9B872] flex flex-col items-start justify-start relative px-10 pt-20">
      <SectionTitle title="Skills."/>
        <div className="w-full h-full flex mt-5">
          <Card title={"HTML"} skill={3} />
          <Card title={"CSS"} skill={3} />
          <Card title={"WP"} skill={2} />
        </div>
    </div>
  );
}
