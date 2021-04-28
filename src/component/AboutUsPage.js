/*
 *  About Us Page with the details of the team
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { CardContent } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.disabled,
    backgroundColor: 'grey'
  },
}));

export default function ImgMediaCard() {

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Navbar/>
      <Carousel fade>
                <Carousel.Item>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="About US"
                        height="400"
                        image="https://blog.exitbee.com/wp-content/uploads/2016/03/about-us.jpg"
                        title="About Us"
                      />
                      </CardActionArea>
                  </Card>
                    <Carousel.Caption>
                   Intelligent Routing
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

                <Box m={5}/>

                <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
                  <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  <Card className={classes.root}>
                  <CardContent>
                    While  courier management is essentially the delivery of your precious cargo from one location to another, our services, while doing just that, ensure that you have the best possible experience. With several awards under our belt, we hold the unbeaten record for the fastest delivery service in India. With 24-hour delivery for local packages and 24-hour customer service, our Online Courier Management Application offers you around-the-clock service. In the rare occasion of any complaints, our courier managers are always on the lookout to solve them as soon as possible while working hand-in-hand with the Shipment department. We keep our courier services as comfy as possible and accessible from the comfort of your houses with our scheduled pick-up service.
                  </CardContent>
                  </Card>
                </Paper>
              </Grid>
             </Grid>

    <Box m={5}/>

                <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
      <Grid item xs={3}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Couriers"
          height="200"
          image="https://i.pinimg.com/736x/6a/1f/be/6a1fbe5063e56e8c47eaa576d0ddd40e.jpg"
          title="Couriers"
        />
      </CardActionArea>
      <CardContent>
      AKsheya K S
      <Typography variant="body2" color="textSecondary" component="p">
            Manager Login, Manager Landing, Office Module
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>

      <Grid item xs={9}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
         
        />
      </CardActionArea>
      <CardContent>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>
    </Grid>
    <Box m={3}/>
    <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
      <Grid item xs={3}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Couriers"
          height="200"
          image="https://i.pinimg.com/originals/a7/91/5e/a7915ea590195829ed7e09160b4f4e45.jpg"
          title="Couriers"
        />
      </CardActionArea>
      <CardContent>
      Ankita Sagar
      <Typography variant="body2" color="textSecondary" component="p">
            Customer Registration, Manager Actions, Manager Data Handling
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>

      <Grid item xs={9}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
         
        />
      </CardActionArea>
      <CardContent>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>
    </Grid>
    <Box m={3}/>
    <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
      <Grid item xs={3}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Couriers"
          height="200"
          image="https://pm1.narvii.com/7050/6824c090fe96496d7ccb2b9cff91d701cba98accr1-1080-1080v2_hq.jpg"
          title="Couriers"
        />
      </CardActionArea>
      <CardContent>
      Nagisetty Sreeja
      <Typography variant="body2" color="textSecondary" component="p">
        Overseeing Shipment, Courier Status Handling, Manager Shipment Actions
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>

      <Grid item xs={9}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
         
        />
      </CardActionArea>
      <CardContent>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>
    </Grid>
    <Box m={3}/>
    <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
      <Grid item xs={3}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Couriers"
          height="200"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRks4utowK2k1ZMnaVKLQrnBiTVG7Htdl9RhA&usqp=CAU"
          title="Couriers"
        />
      </CardActionArea>
      <CardContent>
      Konka Rachana
      <Typography variant="body2" color="textSecondary" component="p">
            Customer Login, Customer Landing Page, Customer Authentication 
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>

      <Grid item xs={9}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
         
        />
      </CardActionArea>
      <CardContent>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>
    </Grid>
    <Box m={3}/>
    <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
      <Grid item xs={3}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Couriers"
          height="200"
          image="https://pickaface.net/gallery/avatar/unr_handsomeboy_180407_1616_z233f.png"
          title="Couriers"
        />
      </CardActionArea>
      <CardContent>
      Karan Thapa
      <Typography variant="body2" color="textSecondary" component="p">
            Sample Page Templates, Customer Data Handling, Payment Module  
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>

      <Grid item xs={9}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
         
        />
      </CardActionArea>
      <CardContent>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>
    </Grid>
    <Box m={3}/>
    <Grid container component="main" spacing={3} direction="row" justify="space-around" alignItems="center">
      <Grid item xs={3}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Couriers"
          height="200"
          image="https://pickaface.net/gallery/avatar/20160221_130710_2010_coolboy.png"
          title="Couriers"
        />
      </CardActionArea>
      <CardContent>
     Sidharth Venkat
      <Typography variant="body2" color="textSecondary" component="p">
            Home Landing Page, About Us Page, Services Page, Routes Handling, PPT
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>

      <Grid item xs={9}>
      <Paper className={classes.paper}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
         
        />
      </CardActionArea>
      <CardContent>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
      </CardContent>
    </Card>
    </Paper>
    </Grid>
    </Grid>
    <Box m={3}/>
    <Box m={10}/>
    <Footer/>
    </div>

  );

}