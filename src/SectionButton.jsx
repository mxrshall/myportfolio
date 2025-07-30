import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SectionButton({ title }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // observe only once
                }
            },
            {
                threshold: 0.5, // 50% visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <a href={`${import.meta.env.BASE_URL}files/Martin_Krajčovič.pdf`} download>
            <motion.button
                ref={ref}
                className="bg-black text-white text-xl rounded-2xl px-5 py-1 hover:bg-[#D8A65C] transition duration-300 md:text-base"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
            >
                {title}
            </motion.button>
        </a>
    );
}
