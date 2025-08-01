import { motion } from "framer-motion";

export default function SectionTitle({ title, color }) {
    return (
        <>
            <motion.h1 
                className="text-6xl font-bold hidden md:flex"
                style={{ color: color == 1 ? "black" : "white" }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {title}
            </motion.h1>
            <motion.h1 
                className="text-6xl font-bold flex text-center md:hidden"
                style={{ color: color == 1 ? "black" : "white" }}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {title}
            </motion.h1>
        </>
    );
}
