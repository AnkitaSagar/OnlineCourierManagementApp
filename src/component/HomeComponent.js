import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import HomePage from '../component/HomePage';
import HomeCards from '../component/HomeCards';
import Footer from '../component/Footer';
 
export default function HomeComponent () {
 
    return(
        <div>
        <Navbar/>
           <HomePage /><br></br>
           <br></br><HomeCards/><br></br>
           <br></br><Footer/>
    </div>
     );
}