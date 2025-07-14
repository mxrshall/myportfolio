import { motion } from "framer-motion";

export default function Homepage() {
  const array = ["H", "i", ",", " ", "m", "y", " ", "n", "a", "m", "e", " ", "i", "s", " ", "M", "a", "r", "t", "i", "n"];

  return (
    <div className="w-full h-screen flex items-end justify-start relative">
      <div className="w-1/3 h-2/3 bg-[#E9B872] absolute top-0 left-1/2 -translate-x-1/2" />
      <div className="w-4/5 h-4/5 bg-[#F4F1DE] flex flex-col items-start justify-end px-10 py-20">
        <div className="w-4/5 flex items-center flex-wrap">
          {array.map((char, index) =>
            char === " " ? (
              <span key={index} className="w-6" />
            ) : (
              <motion.span
                key={index}
                className="text-9xl font-bold z-20 relative cursor-pointer inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {char}
              </motion.span>
            )
          )}
        </div>

        <p className="text-2xl mt-5">Front End Developer</p>
      </div>
    </div>
  );
}
