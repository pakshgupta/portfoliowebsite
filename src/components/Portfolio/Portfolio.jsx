import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  web,certificate,badges
} from "../../data";
export default function Portfolio() {
  const [selected,setselected]=useState("web");
  const [data,setdata]=useState([]);
  const list=[
    {
    id: "web",
    title: "web app",
    },
    {
      id: "certificate",
      title: "certificate",
    },
    {
      id: "badge",
      title: "badges",
    },
  ];
  useEffect(()=>{
    switch(selected){
      case "webApp":
        setdata(web);
        break;
      case "certificate":
        setdata(certificate);
        break;
      case "badge":
        setdata(badges);
        break;
      default:
        setdata(web);
        break;
    }
  },[selected]);  // Dependency list(means when selected value is change than only render useEffect )
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
       {list.map(item=>(
        <PortfolioList title={item.title} active={selected === item.id} setselected={setselected} id={item.id} key={item.id}/>
       ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
        <div className="item" key={d.id}>
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
          ))}
      </div>
    </div>
  );
}
