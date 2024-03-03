import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import {Navbar} from "./components/Navbar"
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden ">
          <Navbar/>
          <Home/>
          <About/>
          <Projects/>
          {/* <Routes>
            <Route path="/projects" element={<Projects/>}/>
          </Routes> */}
          <Contact/>



    </div>
  );
}

export default App;
