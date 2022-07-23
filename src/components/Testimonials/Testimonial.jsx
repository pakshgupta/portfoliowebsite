import "./testimonials.scss"

export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Shaleen Kapoor",
      title: "Vedio Editor",
      img: "assets/shaleen.png",
      icon: "assets/vedio.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus iure optio omnis ratione provident ex cum quidem? In, magnam suscipit quae qui quam repellendus, alias cupiditate et incidunt ad obcaecati",
    },
    {
      id: 2,
      name: "Rakshit Pandey",
      title: "Web Developer",
      img: "assets/rakshit.png",
      icon: "assets/dev.png",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus iure optio omnis ratione provident ex cum quidem? i",
    },
  ];

  return (
    <div className="testimonial" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d)=>(

        
        <div className="card" key={d.id}>
          <div className="top">
            <img className="left" src={d.img} alt="" />
            <img className="right" src={d.icon} alt="" />
          </div>
          <div className="center">{d.desc}</div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
        
    </div>
  );
}
