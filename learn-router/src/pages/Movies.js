import { TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";
import CardMovies from "../components/CardMovies";
import Data from "../data/MovieData";

const Movies = () => {
  const [movies, setMovies] = useState(Data);
  const [search, setSearch] = useState("");
  const [newmovies, setNewMovies] = useState({
    title: "",
    description: "",
    img: "",
    rating: "",
    id: movies.id + 1,
  });
  const handleChange = (e) => {
    setNewMovies({ ...newmovies, [e.target.name]: e.target.value });
  };
  const addMovie = () => {
    setMovies([...movies, newmovies]);
  };
  const filterMovies = movies.filter((movie) => {
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
        <Button onClick={addMovie}>Add</Button>
      </form>
    </>
  );
};

export default Movies;
