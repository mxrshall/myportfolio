import { useEffect, useState } from "react";
import { Link } from "react-scroll";
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

  return (
    <nav
      className={`w-full fixed top-0 transition-transform duration-300 z-40 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="w-1/3 h-16 mx-auto mt-4 bg-[#E9B872] rounded-full flex justify-center items-center space-x-8 text-lg font-semibold cursor-pointer">
        <Link to="about" smooth={true} duration={500}>
          <motion.p
            whileHover={{ scale: 1.1 }}
          >
            About Me
          </motion.p>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <motion.p
            whileHover={{ scale: 1.1 }}
          >
            Skills
          </motion.p>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <motion.p
            whileHover={{ scale: 1.1 }}
          >
            My Projects
          </motion.p>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <motion.p
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.p>
        </Link>
      </ul>
    </nav>
  );
}
