import Navbar from './Components/Navbar';
import {Home} from "./Pages/Home";
import Project from './Pages/Project';
import Skills from './Pages/Skills';
import SocialLinks from './Pages/SocialLinks';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {GithubCalender} from "./Pages/githubCalender";
import Stats from './Pages/Stats';


function App() {
  return (
    <div className="" >  
     <Navbar />
     <Home />
     <About />
     <Skills />
     {/* <SocialLinks /> */}
     <Project />
     {/* <Stats /> */}
     <Contact />
    </div>
  );
}

export default App;
