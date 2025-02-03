import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Movie from "../assets/ImageneMovie.webp";
import Serie from "../assets/ImageneSerie.jpg";
import "../styles/homeStyles.css";
import "../styles/global.css";

const Home = () => {
  return (
    <div className="page-container"> 
      <Header />
      <main className="main-content">
        <Container className="container">
          <Typography variant="h4" className="title">
            Bienvenido a Mr. Movies
          </Typography>
          <Typography variant="body1" className="description">
            Disfruta de nuestras series y películas exclusivas.
          </Typography>
          
          <div className="grid-container">
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Link to="/Series" className="link">
                  <Card className="card">
                    <CardMedia
                      component="img"
                      height="200"
                      image={Serie}
                      alt="Series Populares"
                    />
                    <CardContent>
                      <Typography variant="h5" className="card-title">Series Populares</Typography>

                    </CardContent>
                  </Card>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Link to="/Movies" className="link">
                  <Card className="card">
                    <CardMedia
                      component="img"
                      height="200"
                      image={Movie}
                      alt="Películas Populares"
                    />
                    <CardContent>
                      <Typography variant="h5" className="card-title">Películas Populares</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;