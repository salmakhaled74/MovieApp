import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fb74e345aafaf3c0ebd94c1f53508964`
      )
      .then((item) => {
        console.log(item.data);
        setMovie(item.data);
      })
      .catch((err) => {
        console.log("error fetching data", err);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="dark:bg-gray-900 dark:border-gray-700  md:mx-auto	">
        <div className="flex md:flex-col sm:flex-col lg:flex-row flex-col  dark:bg-gray-900 dark:border-gray-700 ">
          <div className="md:w-2/5 flex justify-center">
            <img
            className=""
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className=" container md:w-3/5 ">
            <div className="flex flex-col  space-y-4 pt-8">
              <div className=" flex flex-row justify-between ">
                <h1 className=" text-white text-3xl md:text-6xl  font-bold">
                  {movie.title}
                </h1>
                <span className="text-white text-4xl font-bold">
                  {Math.floor(movie.vote_average * 10) / 10}
                  <FontAwesomeIcon
                    icon="star"
                    style={{ color: "#ff9b29", marginLeft: "10px" }}
                  />
                </span>
              </div>
              <div className="pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {movie.release_date}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {movie.status}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {" "}
                  {movie.genres &&
                    movie.genres.map((genre) => genre.name).join(", ")}
                </span>
              </div>
              <p className="text-white text-1xl  font-semibold  max-w-md">
                {movie.overview}
              </p>
              <div className="flex flex-col pt-4">
                <div className="flex flex-row ">
                  <span className="text-white w-2/5">
                    Produnction countries
                  </span>
                  <span className="text-white">
                    {movie.production_countries &&
                      movie.production_countries
                        .map((lang) => lang.name)
                        .join(", ")}
                  </span>
                </div>
                <div className="flex flex-row items-start ">
                  <span className="text-white w-2/5 ">Spoken languages</span>
                  <span className="text-white">
                    {movie.spoken_languages &&
                      movie.spoken_languages
                        .map((lang) => lang.name)
                        .join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
