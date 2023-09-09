import React from "react";
import { connect } from "react-redux";
import { removeFromFavorites } from "../actions/favoriteActions";
import Cardd from "./Card";
import { useParams, Link } from "react-router-dom";

function FavoritesPage({ favorites, removeFromFavorites }) {
    return (
      <div>
        <h1>Your Favorite Movies</h1>
        <ul>
          {favorites.map((movie) => (
            <li key={movie.id}>
              <Cardd
                title={movie.title}
                poster={movie.poster_path}
                releaseDate={movie.release_date}
                voteAverage={movie.vote_average}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  

const mapStateToProps = (state) => ({
  favorites: state.favorite.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (movieId) => dispatch(removeFromFavorites(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
