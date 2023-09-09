import React from "react";
import { connect } from "react-redux";
import { addToFavorites } from "../actions/favoriteActions";

function Cardd({ title, overview, poster, releaseDate, voteAverage }) {
  const handleAddToFavorites = () => {
    const movie = {
      title,
      poster,
      releaseDate,
      voteAverage,
    };
    console.log(movie)
    addToFavorites(movie);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-auto"
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6  pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {releaseDate}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Rating: {voteAverage}
        </span>
      </div>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorites: (movie) => dispatch(addToFavorites(movie)),
  };
};

export default connect(null, mapDispatchToProps)(Cardd);
