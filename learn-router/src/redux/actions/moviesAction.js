import { ADD_MOVIES, SEE_DETAIL } from "../actionTypes/moviesActionType";

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIES,
    payload: movie
  }
}
export const seeDetail=(movie)=>{
  return {
      type :SEE_DETAIL,
      payload : movie
  }
}

