import { useNavigate } from "react-router-dom"
import Loader from "../loader/loader";
import { useEffect, useState } from "react";

function Home(){
    const navigate = useNavigate();

    const shifter = () =>{
        navigate('/login')
    }

    let [loader,setloader] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setloader(false)
            console.log("called")
        },4000)
    },[])

    return (
        <>
        {loader &&  <Loader />}
        This is the home page!
        <button onClick={shifter}>Login</button>
        </>
    )

}

export default Home