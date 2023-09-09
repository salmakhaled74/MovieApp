// favoriteActions.js
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addToFavorites = (movie) => {
    console.log("Adding movie to favorites:", movie);
    return {
      type: ADD_TO_FAVORITES,
      payload: movie,
    };
  };

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});
