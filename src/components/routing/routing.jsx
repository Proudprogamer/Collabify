import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from '../../App';
import { useEffect, useState } from 'react';
import Loader from '../loader/loader';
import Home from '../home/home';
import Login from '../login/loginpage';


function Routing(){
    


    return (
        <div>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default Routing;