import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from '../../App';
import { useEffect, useState } from 'react';
import Loader from '../loader/loader';
import Home from '../home/home';


function Routing(){
    let [loader,setloader] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setloader(false)
            console.log("called")
        },4000)
    },[])


    return (
        <div>
            {loader &&  <Loader />}
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default Routing;