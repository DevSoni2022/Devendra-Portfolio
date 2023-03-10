import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    
  
    window.scrollTo(0,0)
  }, [])
  
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
