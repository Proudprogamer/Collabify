import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { docreate } from "../auth_functions/allfunctions";


function Login(){
    let [email, setemail] = useState("");
    let [password, setpassword] =useState("");

    const submitdetails = (e) =>{
        e.preventDefault();
        docreate(email,password)
    }

    return (
        <div>
            <form onSubmit={submitdetails}>
                <label htmlFor="name">email</label>
                <input id="email" type="text" placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
                <label htmlFor="password">password</label>
                <input id="password" type="text" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login