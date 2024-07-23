import {BrowserRouter,Route,Routes} from "react-router-dom"

import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Sideright from "../Components/Sideright"
import Home from "../Components/Home"





export default  function Router(){

 return (
    <>
    <BrowserRouter>
    <Header/>
    <Home/>
    <Sideright/>
     <Footer/>
    </BrowserRouter>
 
    </>
  )
}
