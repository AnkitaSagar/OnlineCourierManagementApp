import React from 'react';
import { useParams } from 'react-router-dom';
import TestNav from '../component/TestNav';
import Footer from '../component/Footer';
import CustomerCards from '../component/CustomerCards';
import Box from '@material-ui/core/Box';

export default function CustomerComponent() {

    let { customerid } = useParams()
    Number(customerid);

    return (

        <div>
            <TestNav/><br></br>
            <Box m={10}></Box>
            {/* <NavBarLogin/><br></br> */}
            <CustomerCards/><br></br>
            <Footer/>
        </div>
    );
}