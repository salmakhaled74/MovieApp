import React, { useState, useEffect } from "react";
import "../../index.css";
import Cardd from "../Card";
import axios from "axios";
import Nav from "../nav";
import Pagination from "../paginetion"; 
import { useParams, Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=fb74e345aafaf3c0ebd94c1f53508964"
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <>
      <Nav />
      <div className="flex flex-wrap justify-center space-x-4 gap-y-4">
        {currentMovies.map((movie) => (
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <Cardd
              key={movie.id} // Add a unique key here
              title={movie.title}
              poster={movie.poster_path}
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
            />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
