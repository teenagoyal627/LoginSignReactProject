import React, { useState } from "react";
import GoogleButton from 'react-google-button'
import { Link, Redirect } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContextProvider";
import {Alert }from 'react-bootstrap';  

function Login()
{
    const [email,setEmail] = useState("");
    const [ password,setPassword] = useState("");
    const [error,setError] =useState("");
    const {logIn,googlesignIn} = useUserAuth();
    // const history =useHistory();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try{
            await logIn(email,password);
            <Redirect to="/" />
            // history.return("/");
            // redirect("/login");

        }catch (err) {
            setError(err.message);
        }

    };
    
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try{
            await googlesignIn();
            <Redirect to="/" />
        } catch (err){
            setError(err.message);
        }

    };
    return(
        <section>
            <div>
                <form  onSubmit={handleSubmit}
                method='post'
                style={{transform:'translate(20%,20%)',  padding:'1rem',  margin:'auto', backgroundColor:'pink',height:'40rem',  width:'30rem',  borderRadius:'8px',boxShadow:'0 10px 10px black(0,0,0.2)'}}>
     <h1 style={{textAlign:'center',fontSize:'2rem'}}>Log in</h1>
     {error && <Alert variant='danger'>{error}</Alert>}

<div>
     <br/>
     <label style={{fontSize:'1.5rem'}}>Email</label><br/>
     <input type='text'placeholder='email address' autoComplete="username"  
          onChange={(e)=> setEmail(e.target.value)} 

     style={{padding:'1.1rem',width:'18rem',borderRadius:'0.5rem'}} />
</div>
     <br/>
<div>
    <label style={{fontSize:'1.5rem'}}>Password</label><br/>
     <input type='password' placeholder='enter password' autoComplete="current-password" 
          onChange={(e)=> setPassword(e.target.value)} 

      style={{padding:'1.1rem',width:'18rem',borderRadius:'0.5rem'}}/>
</div>
   <br/>
 <div>
    <button style={{ backgroundColor:'blue',   width:'20rem',  padding:'1rem',margin:"0.1rem", borderRadius:'1rem', fontSize:"1.3rem", }}>Log in</button>
 </div>
     <br/> <hr/>
                    
<div style={{ display:'flex', width:'20rem', margin:'0.9rem',}}>
         <GoogleButton 
         style={{width:'20rem'}}
         onClick={handleGoogleSignIn}
          />                   
 </div>
<h3>Don't have an account
 <Link style={{textDecoration:'none',marginLeft:'1rem',fontSize:'1.5rem'}}to='/signup'>Sign up</Link> </h3>
 </form>
  </div>
</section>

    );
}
export default Login;