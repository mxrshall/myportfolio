import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (target) => {
    if (window.lenis) {
      window.lenis.scrollTo(target);
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`w-full fixed top-0 transition-transform duration-300 z-40 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
    >
      <ul className="w-1/3 h-16 mx-auto mt-4 bg-[#E9B872] rounded-full flex justify-center items-center space-x-8 text-lg font-semibold cursor-pointer select-none">
          <motion.p
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScrollTo("#about")}
          >
            About Me
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScrollTo("#skills")}
          >
            Skills
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScrollTo("#projects")}
          >
            My Projects
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            onClick={() => handleScrollTo("#contact")}
          >
            Contact
          </motion.p>
      </ul>
    </motion.nav>
  );
}
