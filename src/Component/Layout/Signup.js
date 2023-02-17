// import { async } from "@firebase/util";
// import Alert from 'react-bootstrap/Alert';
import {Alert}from 'react-bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css';  

import React, { useState } from "react";
import GoogleButton from 'react-google-button'
import { Link ,useHistory} from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContextProvider";
import { ref, set } from 'firebase/database';
import { database, db } from '../../Firebase';
import { collection,addDoc } from 'firebase/firestore';

function Signup()
{    
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [description,setDescription] = useState("");
    const [error,setError] =useState("");
    const {signUp,googlesignUp} = useUserAuth();
    const history =useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        //this is for real time database on firebase
        try{
            await signUp(email,password,username,description);
            set(ref(database, 'users details/' ),{
                email:email,
                username:username,
              description:description
            })
        }catch (err) {
            setError(err.message);}
            history.replace('/');
            //this is for store data in cloud firestroe

        try{
            const docRef =await addDoc(collection(db,"users"),
            {
                  email:email,
                  username:username,
                  description:description

            });
            console.log("documents written with id:",docRef.id);
        }catch (err) {
            setError(err.message);}
            history.replace('/');


    };
    const handleGoogleSignUp = async (e) => {
        e.preventDefault();
        try{
            await googlesignUp();
            history.replace('/');
            // alert ("user created");

        }catch (err){
            setError(err.message);
        }
    };
    return(
        <section>
            <div>

                <form onSubmit={handleSubmit} 
                method="post"
                style={{transform:'translate(20%,20%)',  padding:'1rem',  margin:'auto', backgroundColor:'pink',height:'40rem',  width:'30rem',  borderRadius:'8px',boxShadow:'0 10px 10px black(0,0,0.2)'}}>
     <h1 style={{textAlign:'center',fontSize:'2rem'}}>Sign up</h1>
     {error && <Alert variant='danger'>{error}</Alert>}
 <div>
     <br/>
     <label style={{fontSize:'1.0rem'}}>User Name</label><br/>
     <input type="text" placeholder='user name' autoComplete="username"
     onChange={(e)=> setUsername(e.target.value)} 
     style={{padding:'0.5rem',width:'18rem',borderRadius:'0.5rem'}} />
</div>
    
<div>
     <br/>
     <label style={{fontSize:'1.0rem'}}>Email</label><br/>
     <input type="text" placeholder='email address' autoComplete="email"
     onChange={(e)=> setEmail(e.target.value)} 
     style={{padding:'0.5rem',width:'18rem',borderRadius:'0.5rem'}} />
</div>
     <br/>
<div>
    <label style={{fontSize:'1.0rem'}}>Password</label><br/>
    <input type="password" placeholder='Enter password' autoComplete="new-password"
          onChange={(e)=> setPassword(e.target.value)} 
      style={{padding:'0.5rem',width:'18rem',borderRadius:'0.5rem'}}/>
</div>
   <br/>
   <div>
    
    <label style={{fontSize:'1rem'}}>Description</label><br/>
     <input type="text" placeholder='Enter description'
           onChange={(e)=> setDescription(e.target.value)} 
       style={{padding:'0.5rem',width:'20rem',borderRadius:'0.5rem'}}/>
 </div><br/>
 <div>
    <button style={{ backgroundColor:'blue',   width:'20rem',  padding:'0.6rem',margin:"0.1rem", borderRadius:'1rem', fontSize:"1.3rem", }}>Sign up</button>
 </div>
     <hr/>
                    
<div style={{ display:'flex', width:'20rem', margin:'0.9rem',}}>
         <GoogleButton
          style={{width:'20rem'}} 
            onClick ={handleGoogleSignUp}
          />                   
 </div>
<h5>Already have an account
 <Link style={{textDecoration:'none',marginLeft:'1rem',fontSize:'1.5rem'}}to='/login'>Log in</Link> </h5>
 </form>
  </div>
</section>

    );
}
export default Signup;




