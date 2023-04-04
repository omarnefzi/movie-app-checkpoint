import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import Data from '../data/MovieData';

const MoviesDetails = () => {
  const { id } = useParams();
  const findMovies = Data.find((movie) => movie.id === +id);
 const backbtn= useNavigate() 
 
  
  return (
<>
<div>
      <h1>{findMovies.title}</h1>
      <img src={findMovies.posterURL} />
      <h3>{findMovies.description}</h3>
    
<p> trailer :   <a href="">  {findMovies.trailer} </a> </p>
    </div>

    <Button onClick={()=>backbtn('/')}  variant='success'>back to home page</Button>
</>
  );
};

export default MoviesDetails;
