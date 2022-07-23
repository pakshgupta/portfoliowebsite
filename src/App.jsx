import Topbar from "./components/topbar/Topbar";
import Intro from "./components/introduction/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Work from "./components/Works/Work";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      
      <Topbar Open={menuOpen} setOpen={setMenuOpen}/>
      <Menu Open={menuOpen} setOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Testimonial/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
