/*
 *  NavBar for the home page with home, AboutUs, Services and Search option linked to it
 */

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Navbar extends Component {

    render (){

        return(

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">
                    <img src= "https://i.pinimg.com/originals/47/7f/a4/477fa4df6509e5120468638e7ab14d22.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                    <p>Online Courier Management</p>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/AboutUs">About Us<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Services">Services<span class="sr-only">(current)</span></a>
                        </li>
                        
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <Button variant="contained" color="primary" href="https://www.google.com/">
                            SEARCH
                        </Button>
                    </form>
                </div>
            </nav>

        );


    }

}