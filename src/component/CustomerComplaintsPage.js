/*
 *  Page for getting all complaint by a customer
 */

import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 1000,
    },
  });

export default function CustomerComplaintsPage () {
    const classes = useStyles();

        return (

            <Card>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Loading"
                height="200"
                image="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
                title="Loading"
                />
            </CardActionArea>
            </Card>

        )
}