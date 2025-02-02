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
import "../styles/serieStyle.css";

const Series = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [yearFilter, setYearFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    const currentPage = Number(pageNumber) || 1;
    setPage(currentPage);
    if (!pageNumber) {
      navigate(`/series/1`, { replace: true });
    }
  }, [pageNumber, navigate]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(items.length / resultsPerPage)) {
      setPage(newPage);
      navigate(`/series/${newPage}`);
    }
  };

  const handleResultsPerPageChange = (event) => {
    setResultsPerPage(event.target.value);
    setPage(1);
    navigate(`/series/1`);
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

  const filteredItems = items
    .filter((item) => item.programType === "series" && item.releaseYear >= 2010)
    .filter((item) => (yearFilter ? item.releaseYear === parseInt(yearFilter) : true))
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  const totalPages = Math.ceil(filteredItems.length / resultsPerPage);
  
  const displayedItems = filteredItems.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  );

  const handleCardClick = (series) => {
    setSelectedSeries(series);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedSeries(null);
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
              {displayedItems.map((item) => (
                <Card
                  key={item.title}
                  className="card-series"
                  onClick={() => handleCardClick(item)}
                >
                  <img src={item.images["Poster Art"].url} alt={item.title} className="card-img" />
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="pagination">
          <Button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Anterior</Button>
          <Button onClick={() => handlePageChange(page + 1)} disabled={page >= totalPages}>Siguiente</Button>
        </div>
      </div>

      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>{selectedSeries?.title}</DialogTitle>
        <DialogContent>
          <div className="modal-content">
            <Typography variant="body1"><strong>Descripción:</strong> {selectedSeries?.description}</Typography>
            <Typography variant="body2"><strong>Año de lanzamiento:</strong> {selectedSeries?.releaseYear}</Typography>
            <img src={selectedSeries?.images["Poster Art"].url} alt={selectedSeries?.title} style={{ width: "100%", height: "auto" }} />
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

export default Series;
