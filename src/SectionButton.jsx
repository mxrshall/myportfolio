import { motion } from "framer-motion";

export default function SectionButton({ title }) {
    return (
        <motion.button 
            className="bg-black text-white text-base rounded-2xl px-5 py-1 hover:bg-[#D8A65C] transition duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}    
        >
            {title}
        </motion.button>
    );
}
