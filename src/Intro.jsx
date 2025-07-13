import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <div className="absolute flex top-0 left-0 w-full h-screen overflow-hidden">
            <motion.div 
                className="w-1/2 h-screen bg-black"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.5, delay: 0.8 }}
            />
            <motion.div 
                className="w-[1px] bg-white absolute left-1/2 bottom-0 z-10 origin-bottom"
                initial={{ height: 0, opacity: 1 }}
                animate={{ height: "100vh", opacity: 0 }}
                transition={{ 
                    height: { duration: 0.2, delay: 0.4 },
                    opacity: { duration: 0.3, delay: 0.8 }
                }}
            />
            <motion.div 
                className="w-1/2 h-screen bg-black"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.5, delay: 0.8 }}
            />
        </div>
    );
}
