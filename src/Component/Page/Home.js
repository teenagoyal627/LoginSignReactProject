import React from "react";
import { useUserAuth } from "../Context/UserAuthContextProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Home()
{
    const history=useHistory()
    const {user,logOut}=useUserAuth();
   console.log(user);
   const handleLogOut = async () =>
   {
    try {
          await logOut();

    } catch (err) {
        console.log(err.message);
    }
    history.replace("/signup")

   };
    return(
        <div>
            <div className="p-4 box mt-3 text-center">
          Hello world
          <br/>
            {user && user.email}
            </div>
            <div>
            <button
            onClick={handleLogOut}
              style={{
                backgroundColor: " #d57969",
                alignItem:"center",
                width: "25rem",
                padding: "0.5rem",
                marginLeft: "35rem",
                borderRadius: "1rem",
                fontSize: "1.3rem",
              }}
            >
             Logout
            </button>
          </div>
        
        
        </div>
    );
};
export default Home;

