import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import ForgotPassword from "./pages/ForgotPassword"; 
import Register from "./pages/Register"; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;