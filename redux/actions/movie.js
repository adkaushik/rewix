export const constants = {
  SET_SELECTED_MOVIE: 'movie/SET_SELECTED_MOVIE'
};

export const setSelectedMovie = (movie) => ({
  type: constants.SET_SELECTED_MOVIE,
  payload: movie
});

export default {
  setSelectedMovie
};
