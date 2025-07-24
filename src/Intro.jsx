import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <div className="fixed flex top-0 left-0 w-full h-screen overflow-hidden z-50 pointer-events-none">
            <motion.div 
                className="w-1/2 h-screen bg-black"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.6, delay: 1 }}
            />
            <motion.div 
                className="w-[1px] bg-white absolute left-1/2 bottom-0 z-10 origin-bottom"
                initial={{ height: 0, opacity: 1 }}
                animate={{ height: "100vh", opacity: 0 }}
                transition={{ 
                    height: { duration: 0.3, delay: 0.5 },
                    opacity: { duration: 0.2, delay: 0.9 }
                }}
            />
            <motion.div 
                className="w-1/2 h-screen bg-black"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.6, delay: 1 }}
            />
        </div>
    );
}
