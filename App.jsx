import { useState } from "react";
import axios from "axios";

function App() {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[isloggedIn,setIsLoggedIn]=useState(false);
  const[user,setUser]=useState(null);
  const[errorMsg,setErrorMsg]=useState("");
  const handleEmail=(e)=>{
  e.preventDefault();
  setEmail(e.target.value)}

  const handlePassword=(e)=>{
  e.preventDefault();
  setPassword(e.target.value)
 }
 
  const submitLogin = (e) => {
    e.preventDefault();
   
  
    axios
    .post("http://localhost:4000/login", {email, password
    })
      .then((result) => {
        console.log(result.data);
        if(result.data.message=== "Login success!"){
          setUser(result.data.user)   
          setIsLoggedIn(true);
        
        }
        
      })
      .catch(err=>{
        console.log("error from axios,error");
          setIsLoggedIn(false);
          setErrorMsg(err.response.data.message);
      })

  };
  return(
  <> 
    {isloggedIn ? (
    <>
    
    <h1 style={{color:"blue"}}>Login success! Hello{ user.name}</h1>:
   <div style={{border:"solid black 2px"}}>
    <h2>Role:{user.role}</h2>
    <h4>Employee code:{user.employeeCode}</h4>
   </div>
   </>
    ):(<form>

      <h1>Login</h1>
      <div>
      <label> Username:</label> 
      <input type="email" onChange={handleEmail}/> 
      </div>
      <div>
      <label > Password:</label> 
      <input type="password"onChange={handlePassword}/> 
      </div>{errorMsg&&<div style={{fontSize: "0.8", color:"red"}}>{errorMsg}</div>}
      <button onClick={submitLogin}>Login</button>
    </form>)}
      </>

    






  );






}    
export default App