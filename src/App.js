import Navbar from './Components/Navbar';
import {Home} from "./Pages/Home";
import Project from './Pages/Project';
import Skills from './Pages/Skills';
import SocialLinks from './Pages/SocialLinks';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div >  
     <Navbar />
     <Home />
     <About />
     <Skills />
     <SocialLinks />
     <Project />
     <Contact />
    </div>
  );
}

export default App;
