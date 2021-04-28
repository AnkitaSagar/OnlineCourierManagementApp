/*
 *  Component for shipment module to link NavBar, header and cards 
 */

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ShipmentCards from '../component/ShipmentCards';
import ShipmentHeader from '../component/ShipmentHeader';
import TestNav3 from '../component/TestNav3';
import Box from '@material-ui/core/Box';

export default function ShipmentComponent () {

    let { managerid } = useParams()
    Number(managerid);

    return(

        <div>
            <TestNav3/>
            <Box m={8.2}/>
            <ShipmentHeader/>
            <Box m={5}/>
            <ShipmentCards/>
            <Box m={15}/>
        </div>
    )

}