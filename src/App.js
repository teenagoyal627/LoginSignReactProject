import React from "react";
import { Route} from "react-router-dom";
import './App';
import Navigation from "./Component/Layout/Navigation";
import Home from "./Component/Page/Home";
import Signup from "./Component/Layout/Signup";
import Login from "./Component/Layout/Login";
import './index.css';
import ProtectedRoute from './Component/ProtectedRoute'
import { UserAuthContextProvider } from "./Component/Context/UserAuthContextProvider";
    function App(){
  return(
    <div>
            <UserAuthContextProvider>

        <Navigation/>


    <Route path='/'exact><ProtectedRoute><Home/></ProtectedRoute></Route>

      <Route path='/signup'><Signup/></Route>

      <Route path='/login'><Login/></Route>
      </UserAuthContextProvider>
    </div>
  );
}
export default App;
