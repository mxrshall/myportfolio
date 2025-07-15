import { Link } from "react-scroll";

export default function Navigation() {
    return (
        <nav className="w-full fixed h-20 flex items-center justify-center z-40">
            <ul className="w-1/3 h-16 bg-[#E9B872] rounded-full flex justify-center items-center space-x-8 text-lg font-semibold cursor-pointer">
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                >
                    About Me
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                >
                    Skills
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                >
                    My Projects
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                >
                    Contact
                </Link>
            </ul>
        </nav>
    );
}
