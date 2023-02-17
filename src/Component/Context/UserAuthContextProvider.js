import { createContext, useContext, useEffect, useState } from "react";
import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    // signUpWithPopup
} from 'firebase/auth';
import { auth } from "../../Firebase";

const userAuthContext=createContext();
export function UserAuthContextProvider({children}){
    const [user,setUser]=useState("");

    function signUp(username,email,password,description){
        return createUserWithEmailAndPassword(auth,username,email,password,description);
    }
    function logIn(email,password){
        console.log("Email",email);
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logOut()
    {
        return signOut(auth);
    }
    function googlesignIn()
    {
         const googleAuthProvider = new GoogleAuthProvider();
         return signInWithPopup(auth,googleAuthProvider);
    }
    function googlesignUp()
    {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }
    useEffect(()=>{
         const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
              setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[]);


    return (
    <userAuthContext.Provider value={{ user,signUp,logIn,logOut,googlesignIn,googlesignUp}}>{children}</userAuthContext.Provider>
);}
export function useUserAuth(){
    return useContext(userAuthContext);
}