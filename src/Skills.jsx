import SectionTitle from "./SectionTitle";
import Card from "./Card";

export default function Skills() {
  const skills = [
    {
      title: "HTML",
      skill: 3,
      label: "Advanced"
    },
    {
      title: "CSS",
      skill: 3,
      label: "Advanced"
    },
    {
      title: "Tailwind",
      skill: 3,
      label: "Advanced"
    },
    {
      title: "JavaScript",
      skill: 2,
      label: "Slightly advanced"
    },
    {
      title: "ReactJS",
      skill: 2,
      label: "Slightly advanced"
    },
    {
      title: "WordPress",
      skill: 2,
      label: "Slightly advanced"
    },
    {
      title: "SASS",
      skill: 2,
      label: "Slightly advanced"
    },
    {
      title: "PHP",
      skill: 1,
      label: "Beginner"
    },
    {
      title: "MySQL",
      skill: 1,
      label: "Beginner"
    },
    {
      title: "Git",
      skill: 1,
      label: "Beginner"
    }
  ]

  return (
    <div
      id="skills" 
      className="w-full h-screen bg-[#E9B872] flex flex-col items-start justify-start relative px-10 pt-20"
    >
      <SectionTitle title="Skills." color="1" />
        <div className="w-full h-4/6 flex mt-5 flex-wrap justify-center items-center gap-12">
          {skills.map((item, index) => (
            <Card 
              key={index}
              title={item.title}
              skill={item.skill}
              label={item.label}
              time={index + 1}         
            />
          ))}
        </div>
    </div>
  );
}
