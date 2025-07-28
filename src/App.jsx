import Intro from "./Intro";
import Homepage from "./Homepage";
import Navigation from "./Navigation";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Scroll from "./Scroll";

export default function App() {

  return (
    <>
      <Scroll />
      <Intro />
      <Navigation />
      <Homepage />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
