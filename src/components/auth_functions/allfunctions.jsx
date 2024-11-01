import { createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../firebase/firebase";


export const docreate = async(email,password) =>{

    const result = await createUserWithEmailAndPassword(auth, email, password)
    

}
  
  