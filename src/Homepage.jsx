import { motion } from "framer-motion";
import person from "./images/mee.png";
import Lenis from "lenis";

export default function Homepage() {
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1.2,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const array = ["H", "i", ",", " ", "m", "y", " ", "n", "a", "m", "e", " ", "i", "s", " ", "M", "a", "r", "t", "i", "n"];

  return (
    <div className="w-full h-screen flex items-end justify-start relative">
      <motion.div 
        className="w-2/3 bg-[#E9B872] absolute top-0 left-1/2 -translate-x-1/2 md:w-1/3"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "66.6667%", opacity: 1 }}
        transition={{ 
          height: { duration: 0.6, delay: 1.2 },
        }}
      />
      <div className="w-full h-4/5 bg-[#F4F1DE] flex flex-col items-center justify-center px-10 py-20 md:w-4/5 md:h-4/5 md:items-start md:justify-end">
        <motion.div 
          className="w-4/5 flex items-center flex-wrap"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 1.3 }}
        >
          {array.map((char, index) =>
            char === " " ? (
              <span key={index} className="w-6" />
            ) : (
              <motion.span
                key={index}
                className="text-5xl font-bold z-20 relative cursor-pointer inline-block md:text-9xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {char}
              </motion.span>
            )
          )}
        </motion.div>
        <motion.p 
          className="text-2xl mt-5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 1.5 }}
        >
          Front End Developer
        </motion.p>
      </div>
      <div className="w-full h-full absolute bottom-0 right-0 flex items-center justify-center md:w-1/3 md:h-5/6 md:justify-left">
        <motion.div 
          className="w-[30vh] h-[30vh] rounded-full bg-cover bg-center md:w-[65vh] md:h-[65vh]"
          style={{ backgroundImage: `url(${person})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
        />
      </div>
    </div>
  );
}
