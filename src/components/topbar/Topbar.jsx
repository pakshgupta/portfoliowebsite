import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
export default function topBar({ Open, setOpen }) {
  return (
    <div className={"topbar " + (Open && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">Home</a>
            <div className="itemContainer">
              <Person className="icons"/>
              <span>+91 971 969 99 47</span>
            </div>
            <div className="itemContainer">
            <Mail className="icons" />
              <span>pakshgupta007@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="sidebar" onClick={()=>setOpen(!Open)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
    </div>
  )
}
