/*
 *  Manager Component for linking Cards, Navbar and footer
 */

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TestNavManager from '../component/TestNavManager';
import ManagerCards from '../component/ManagerCards';
import Box from '@material-ui/core/Box';
import Footer from '../component/Footer';

export default function ManagerComponent () {

    let { managerid } = useParams()
    Number(managerid);

    return(

        <div>
            <TestNavManager/><br></br>
            <Box m={5}/>
            <ManagerCards/>
            <Box m={10}/>
            <Footer/>
        </div>
    )

}