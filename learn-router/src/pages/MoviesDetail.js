import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const MoviesDetails = () => {
  const { id } = useParams();

  const movieDetail = useSelector((state) => state.moviesReducer.movies);
  const seeDetails = movieDetail.find((movie) => movie.id === +id);

  const backbtn = useNavigate();

  return (
    <>
      <div>
        <h1>{seeDetails.title}</h1>
        <img src={seeDetails.posterURL} />
        <h3>{seeDetails.description}</h3>

        <p>
          {" "}
          trailer : <a href=""> {seeDetails.trailer} </a>{" "}
        </p>
      </div>

      <Button onClick={() => backbtn("/")} variant="success">
        back to home page
      </Button>
    </>
  );
};

export default MoviesDetails;
