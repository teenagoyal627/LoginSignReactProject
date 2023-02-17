import React from "react";
import { Link } from "react-router-dom";
function Navigation ()
{
 return(
        <header style={{width:'125%', backgroundColor:'brown',height:'5rem',display:'flex',justifyContent:'space-between', alignItems:'center',padding:"0 3rem" }}>
        <div style={{fontSize: "2rem",fontWeight: 'bold',color: 'white'}}> Test </div>
 <nav>
  <ul style={{listStyle:'none',display:'flex', padding:'0',margin:'auto',alignItems:'baseline' }}>    
        <li style={{ marginLeft:'6rem', backgroundcolor:'black',fontWeight:'bold',fontSize:'2rem'  }}>
        <Link to ='/' style={{textDecoration:'none',color:'white'}}>Home</Link></li>
         <li style={{ marginLeft:'6rem', fontWeight:'bold',  fontSize:'2rem', textDecoration: 'none' }}>
         <Link to ='/signup' style={{textDecoration:'none',color:'white'}}>Sign up</Link></li>
  </ul>
 </nav>
         </header>
    );
}
export default Navigation;