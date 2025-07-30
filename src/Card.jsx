import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

import { useEffect, useState } from "react";

export default function Card({ title, skill, label, time }) {
    const [iconSize, setIconSize] = useState(80);

    useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth < 768 ? 50 : 80);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <motion.div
            className="w-[25%] h-1/4 bg-white rounded-xl flex flex-col relative md:w-[17%] md:h-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ 
                opacity: { delay: 0.4 + time * 0.1, duration: 0.5 }, 
                scale: { type: "spring", stiffness: 300 } 
            }}
        >
            <div className="w-full h-full flex justify-center items-center">
                {title == "HTML" &&
                    <FaHtml5 size={iconSize} />
                }  
                {title == "CSS" &&
                    <FaCss3Alt size={iconSize} />
                }
                {title == "Tailwind" &&
                    <RiTailwindCssFill size={iconSize} />
                }
                {title == "JavaScript" &&
                    <FaJs size={iconSize} />
                }
                {title == "ReactJS" &&
                    <FaReact size={iconSize} />
                }
                {title == "WordPress" &&
                    <FaWordpress size={iconSize} />
                }
                {title == "SASS" &&
                    <SiSass size={iconSize} />
                }
                {title == "PHP" &&
                    <FaPhp size={iconSize} />
                }
                {title == "MySQL" &&
                    <SiMysql size={iconSize} />
                }
                {title == "Git" &&
                    <FaGithub size={iconSize} />
                }
            </div>
            <div className="w-full space-x-1 flex justify-center items-center pb-4">
                <div 
                    className="w-[10%] h-3 rounded-xl" 
                    style={{ backgroundColor: skill >= 1 ? "#4287f5" : "#E3E3E3", boxShadow: skill >= 1 ? "0px 0px 5px #4287f5" : "none" }}
                />
                <div 
                    className="w-[10%] h-3 rounded-xl" 
                    style={{ backgroundColor: skill >= 2 ? "#4287f5" : "#E3E3E3", boxShadow: skill >= 2 ? "0px 0px 5px #4287f5" : "none" }}
                />
                <div 
                    className="w-[10%] h-3 rounded-xl" 
                    style={{ backgroundColor: skill >= 3 ? "#4287f5" : "#E3E3E3", boxShadow: skill >= 3 ? "0px 0px 5px #4287f5" : "none"  }}
                />
            </div>
            <motion.div 
                className="w-full h-full rounded-xl bg-black/75 absolute top-0 left-0 z-10 flex flex-col justify-center items-center cursor-pointer"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <h1 className="text-xl text-white font-bold">
                    {title}
                </h1>
                <br />
                <h1 className="text-xl text-white font-bold">
                    {label}
                </h1>
            </motion.div>
        </motion.div>
    );
}
