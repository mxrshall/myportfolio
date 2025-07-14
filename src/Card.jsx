import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";

export default function Card({ title, skill }) {
    return (
        <div className="w-[20%] h-1/2 bg-white rounded-xl flex flex-col">
            <div className="w-full h-full flex justify-center items-center">
                {title == "HTML" &&
                    <FaHtml5 size={100} />
                }  
                {title == "CSS" &&
                    <FaCss3Alt size={100} />
                }
                {title == "WP" &&
                    <FaWordpress size={100} />
                }
            </div>
            <div className="w-full space-x-1 flex justify-center items-center pb-4">
                <div 
                    className="w-[10%] h-3 rounded-xl" 
                    style={{ backgroundColor: skill >= 1 ? "#4287f5" : "#E3E3E3" }}
                />
                <div 
                    className="w-[10%] h-3 rounded-xl" 
                    style={{ backgroundColor: skill >= 2 ? "#4287f5" : "#E3E3E3" }}
                />
                <div 
                    className="w-[10%] h-3 rounded-xl" 
                    style={{ backgroundColor: skill >= 3 ? "#4287f5" : "#E3E3E3" }}
                />
            </div>
        </div>
    );
}
