import { useState } from "react";
import "./works.scss"

export default function Works() {
  const [cSlide,setSlide]=useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/weatherapp.png",
      title: "Weather App",
      desc: "This is an weather application which give us current weather information. ",
      img: "assets/image.webp",
      link: "https://github.com/pakshgupta/WeatherApp.git",
    },
    {
      id: "2",
      icon: "./assets/noteApp.jpg",
      title: "Note Taking App",
      desc: "This is an Note Taking application which is created using javascript. ",
      img: "assets/image.webp",
      link: "https://github.com/pakshgupta/Note-Taking-App.git",
    },
  ];
  const handleClick = (side)=>{
    side==="left" ? setSlide(cSlide > 0 ? cSlide -1 : 1)
    : setSlide(cSlide<data.length - 1 ? cSlide +1 :0);
  };
  return (
    <div className="work" id="works">
      <div className="slider" style={{transform: `translateX(-${cSlide *100}vw)`}}>
        {data.map((d)=>(

        
        <div className="container" key={d.id}>
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imageContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <a href={d.link} target="_blank" rel="noreferrer">Projects</a>
              </div>
            </div>
            <div className="right">
              <img src="assets/image.webp" alt="" />
            </div>
            </div>
          </div>
          ))}
      </div>
      <img src="assets/sidearrow.png"className="arrow left" alt="" onClick={()=>handleClick("left")} />
      <img src="assets/sidearrow.png"className="arrow right" alt="" onClick={()=>handleClick()} />
    </div>
  )
}
