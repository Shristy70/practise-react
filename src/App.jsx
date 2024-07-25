import { useContext} from "react";
import AuthUser from "./AuthUser";

 import {myloginContext} from "./LoginContext";
import UnauthUser from "./UnauthUser";
const App=()=>{
    const {user} = useContext(myloginContext);
    return(
        <>
     <h1> my login : </h1>
     {user.auth ? <AuthUser/>:<UnauthUser/> }
        </>
    )
}

export default App;
