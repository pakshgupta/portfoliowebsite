import "./menu.scss"

export default function menu({ Open, setOpen }) {
  return (
    <div className={"menu " + (Open && "active")}>
        <ul>
            <li onClick={()=>setOpen(false)}>  {/*on clicking the ancer tag it will close the menu bar */}
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setOpen(false)}>
                <a href="#testimonials">Testimonial</a>
            </li>
            <li onClick={()=>setOpen(false)}>
                <a href="#works">Work</a>
            </li>
            <li onClick={()=>setOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
