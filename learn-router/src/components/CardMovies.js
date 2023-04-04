import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const CardMovies = ({ id, title, description, img, rating, btnText }) => {

  return (
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="300"
          width="300"
          image={img} 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span> description : {description}</span> <br />
            <span> rating : {rating}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/movies/${id}`}>
          <Button size="small" color="primary">
            {btnText}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardMovies;

