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

export default function Card({ title, skill, label, time }) {
    return (
        <motion.div
            className="w-[17%] h-1/2 bg-white rounded-xl flex flex-col relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.4 + time * 0.1 } }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="w-full h-full flex justify-center items-center">
                {title == "HTML" &&
                    <FaHtml5 size={80} />
                }  
                {title == "CSS" &&
                    <FaCss3Alt size={80} />
                }
                {title == "Tailwind" &&
                    <RiTailwindCssFill size={80} />
                }
                {title == "JavaScript" &&
                    <FaJs size={80} />
                }
                {title == "ReactJS" &&
                    <FaReact size={80} />
                }
                {title == "WordPress" &&
                    <FaWordpress size={80} />
                }
                {title == "SASS" &&
                    <SiSass size={80} />
                }
                {title == "PHP" &&
                    <FaPhp size={80} />
                }
                {title == "MySQL" &&
                    <SiMysql size={80} />
                }
                {title == "Git" &&
                    <FaGithub size={80} />
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
