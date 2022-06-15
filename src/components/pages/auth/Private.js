import React from 'react'
import { Outlet  } from "react-router-dom";
import Login from './Login';
import { useSelector } from 'react-redux';
import Header from '../../partials/Header';
import { Navigate } from 'react-router-dom';

function Private() {
        const auth = useSelector(state => state.auth.status);
        
        
           return auth ? <> <Header /> <Outlet /> </>: <Login />

        

}

export default Private