import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const [email,setEmail]=useState("");
  const [msg,setMsg]= useState("");
  const [userdata,setUserData]=useState([]);
 
  const handleSubmit= (e)=>{
    e.preventDefault(); // stops automatic refresh the form
    if(email && msg){
    const newData={email: email, message: msg};
    setUserData([...userdata,newData]); // it also store the previous data using ...
    setEmail("");
    setMsg("")
    }
    else{
      alert("Please fill all details");
    }
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contactimage.png" alt="" />
      </div>
      <div className="right">
        <h2 className="top">Contact form</h2>  
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" 
          placeholder="Email" autoComplete="off" value={email} onChange={(e)=> setEmail(e.target.value) }/>
          <textarea placeholder="Message" autoComplete="off" value={msg} onChange={(e)=> setMsg(e.target.value)}></textarea> 
          <button type="submit">Send</button>
          <input type="file" />
        </form>
      </div>
    </div>
  )  
}
