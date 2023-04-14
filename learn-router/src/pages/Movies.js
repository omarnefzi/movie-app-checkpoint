import { TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CardMovies from "../components/CardMovies";
import { addMovie } from "../redux/actions/moviesAction";


const Movies = () => {
  const moviesList= useSelector(state=>state.moviesReducer.movies)
const dispatch=useDispatch()

  const [search, setSearch] = useState("");
  const [newmovies, setNewMovies] = useState({
    title: "",
    description: "",
    img: "",
    rating: "",
    id: moviesList.id + 1,
  });
  const handleChange = (e) => {
    setNewMovies({ ...newmovies, [e.target.name]: e.target.value });
  };
 
  const filterMovies = moviesList.filter((movie) => {
    return movie.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });
  return (
    <>
      <div className=" d-flex align-items-center mt-3">
        <label htmlFor=""> search movies : </label>
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-textarea"
          label="Search movies.."
          placeholder="Search"
          multiline
        />
      </div>

      <div className="container d-flex justify-content-between flex-wrap">
        {filterMovies.map((movie) => {
          return (
            <CardMovies
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.description}
              img={movie.posterURL}
              rating={movie.rating}
              btnText='see detail'
              
            />
          );
        })}
      </div>

      <form
        className="container d-flex justify-content-between align-items-center"
        action=""
      >
        <label>Add Movies :</label>
        <TextField
          onChange={handleChange}
          placeholder="add title"
          name="title"
        />
        <TextField
          onChange={handleChange}
          placeholder="add description"
          name="description"
        />
        <TextField onChange={handleChange} placeholder="add img" name="img" />
        <TextField
          onChange={handleChange}
          placeholder="add rating"
          name="rating"
        />
        <Button onClick={()=> dispatch(addMovie(newmovies))}>Add</Button>
      </form>
    </>
  );
};

export default Movies;