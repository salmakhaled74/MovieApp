// favoriteReducer.js
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/favoriteActions";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      console.log("Adding to favorites:", action.payload);

      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
