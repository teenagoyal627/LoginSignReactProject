import React  from "react";
import { useUserAuth } from "./Context/UserAuthContextProvider";
import { Redirect} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';

const ProtectedRoute =({children})=>
{
    // let navigate = useNavigate();

    let {user}=useUserAuth();

    if(!user){
        return (
        <Redirect to="/signup" />
        // navigate('/login')
        // <Navigate to="login"  replace={true} />
        // <Redirect to ='/login'/>
        );
    }
    return children;

};
export default ProtectedRoute;