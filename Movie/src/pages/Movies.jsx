import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/dataSlice.js";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Skeleton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/movieStyles.css";
import "../styles/global.css";

const Movies = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [yearFilter, setYearFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    console.log("Fetching data...");
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    console.log("Page number changed:", pageNumber);
    const currentPage = Number(pageNumber) || 1;
    setPage(currentPage);
    if (!pageNumber) {
      navigate(`/movies/1`, { replace: true });
    }
  }, [pageNumber, navigate]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(items.length / resultsPerPage)) {
      setPage(newPage);
      navigate(`/movies/${newPage}`);
    }
  };

  const handleResultsPerPageChange = (event) => {
    setResultsPerPage(event.target.value);
    setPage(1);
    navigate(`/movies/1`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchLoading(true);
    setTimeout(() => {
      setSearchLoading(false);
    }, 2000);
  };

  const handleYearFilterChange = (event) => {
    setYearFilter(event.target.value);
    setSearchLoading(true);
    setTimeout(() => {
      setSearchLoading(false);
    }, 2000);
  };

  console.log("Current status:", status);
  console.log("Number of items:", items.length);

  const filteredItems = items
    .filter((item) => item.programType === "movie" && item.releaseYear >= 2010)
    .filter((item) => (yearFilter ? item.releaseYear === parseInt(yearFilter) : true))
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  console.log("Filtered items:", filteredItems.length);

  const totalPages = Math.ceil(filteredItems.length / resultsPerPage);
  const displayedItems = filteredItems.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  );

  const handleCardClick = (movie) => {
    console.log("Clicked movie:", movie.title);
    setSelectedMovie(movie);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="page-container">
      <Header />

      <div className="content-container">
        <div className="filter-container">
          <input
            type="number"
            placeholder="Filtrar por año"
            value={yearFilter}
            onChange={handleYearFilterChange}
          />
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select onChange={handleResultsPerPageChange} value={resultsPerPage}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        {searchLoading ? (
          <div className="progress-container">
            <CircularProgress size={80} thickness={4} />
          </div>
        ) : (
          <div className="card-container">
            <div className="card-box">
              {status === "loading" ? (
                <>
                  {console.log("Rendering Skeleton...")}
                  {[...Array(5)].map((_, index) => (
                    <Card key={index} className="card-movie">
                      <Skeleton variant="rectangular" width={210} height={118} />
                      <CardContent>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" width="60%" />
                      </CardContent>
                    </Card>
                  ))}
                </>
              ) : (
                displayedItems.map((item) => (
                  <Card
                    key={item.title}
                    className="card-movie"
                    onClick={() => handleCardClick(item)}
                  >
                    <img src={item.images["Poster Art"].url} alt={item.title} className="card-img" />
                    <CardContent>
                      <Typography variant="h6">{item.title}</Typography>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        )}

        <div className="pagination">
          <Button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Anterior</Button>
          <Button onClick={() => handlePageChange(page + 1)} disabled={page >= totalPages}>Siguiente</Button>
        </div>
      </div>

      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>{selectedMovie?.title}</DialogTitle>
        <DialogContent>
          <div className="modal-content">
            <Typography variant="body1"><strong>Descripción:</strong> {selectedMovie?.description}</Typography>
            <Typography variant="body2"><strong>Año de lanzamiento:</strong> {selectedMovie?.releaseYear}</Typography>
            <img src={selectedMovie?.images["Poster Art"].url} alt={selectedMovie?.title} style={{ width: "100%", height: "auto" }} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Movies;
