import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Experience } from "./Pages/Experience";
import { Education } from "./Pages/Education";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
