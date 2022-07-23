
import Typewriter from 'typewriter-effect';
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
    <div className="left">
      <div className="imageContainer">
        <img src="assets/myimage2.png" alt="" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hello Everyone</h2>
        <h1>Paksh Gupta</h1>
        <h3>Student at<span>
        <Typewriter 
           
           options={{ 
           strings:["Graphic Era", "Deemed", "To Be", "University"],
           autoStart:true,
           delay:60,
           loop:true
           }}
           
           /> 
        </span>
        </h3>
      </div>
      <a href="#portfolio">
        <img src="assets/downarrow.png" alt="" />
      </a>
    </div>
    </div>
  );
}
