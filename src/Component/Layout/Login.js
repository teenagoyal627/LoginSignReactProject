import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login()
{
    const history=useHistory();
    const [email,setEmail] = useState("");
    const [ password,setPassword] = useState("");
    // const history =useHistory();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setEmail("");
        setPassword("");
        history.replace("/")
       
    };
   
    return(
        <section>
            <div>
                <form  onSubmit={handleSubmit}
                method='post'
                style={{transform:'translate(20%,20%)',  padding:'1rem',  margin:'auto', backgroundColor:' #f6bcad',  width:'30rem',  borderRadius:'8px',boxShadow:'0 10px 10px black(0,0,0.2)'}}>
     <h1 style={{textAlign:'center',fontSize:'1.6rem'}}>Log in</h1>
     {/* {error && <Alert variant='danger'>{error}</Alert>} */}

<div>
     
     <label style={{fontSize:'1.2rem'}}>Email</label><br/>
     <input type='email' value={email} placeholder='email address' autoComplete="username"  
          onChange={(e)=> setEmail(e.target.value)} 
     style={{padding:'.3rem',width:'25rem',borderRadius:'0.5rem'}} />
</div>
     <br/>
<div>
    <label style={{fontSize:'1.2rem'}}>Password</label><br/>
     <input type='password' value={password} placeholder='enter password' autoComplete="current-password" 
          onChange={(e)=> setPassword(e.target.value)} 
      style={{padding:'.3rem',width:'25rem',borderRadius:'0.5rem'}}/>
</div>
   <br/>
 <div>
    <button style={{ backgroundColor:' #d57969',   width:'25rem',  padding:'.5rem',margin:"0.1rem", borderRadius:'1rem', fontSize:"1.3rem" }}>Log in</button>
 </div>
    <hr/>
                    

<h5>Don't have an account
 <Link to='/signup' style={{textDecoration:'none',marginLeft:'1rem',fontSize:'1.2rem'}}>Sign up</Link>
  </h5>
 </form>
  </div>
</section>

    );
}
export default Login;