import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Avatar, Grid, Paper, CssBaseline, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Header from "../components/header-login";
import Footer from "../components/Footer";
import "../styles/headerStylestwo.css";
import "../styles/loginStyles.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!user || !password) {
      setError("Por favor, completa todos los campos");
      return;
    }
    setError("");
    navigate("/home");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="root">
      <CssBaseline />
      <Header />
      <div className="main-content">
        <Grid component={Paper} elevation={3} square item xs={12} sm={8} md={5} className="size">
          <div className="paper">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" className="login-title">
              Iniciar Sesión
            </Typography>
            <form onSubmit={handleLogin} className="form">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="user"
                label="Usuario"
                name="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="textField"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="textField"
              />
              {error && <Typography color="error" className="error-text">{error}</Typography>}
              <Button type="submit" fullWidth variant="contained" color="primary" className="submitButton">
                Ingresar
              </Button>
              <div className="link-container">
                <span className="link" onClick={handleForgotPassword}>
                  ¿Olvidaste la contraseña?
                </span>
                <span className="link" onClick={handleRegister}>
                  ¿No tienes una cuenta? Regístrate
                </span>
              </div>
            </form>
          </div>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
