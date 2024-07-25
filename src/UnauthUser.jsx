import { useState , useContext } from "react";
import { myloginContext } from "./LoginContext";
const UnauthUser=()=>{
    const [nm , setNm] = useState("");
    const {login} = useContext(myloginContext);
    return(
        <>
        Enter your name :- <input type="text"  value={nm} onChange={(e)=>{setNm(e.target.value)}}></input>
        <button onClick={()=>{login(nm)}}> add</button>
        </>
    )
}
export default UnauthUser;