import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';


export function Movie({ movie, idx, deleteButton }) {
    const styles = {
        color: movie.rating >= 8 ? "green" : "red"
    };
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    return (
        <div className="movie-container">
            <Card className='movie-card'>
                <img className="poster" src={movie.poster} alt={movie.title} />
                <CardContent>
                    <div className='movieSpecs'>
                        <h4 className="title">{movie.title}
                            <IconButton onClick={() => setShow(!show)} color="primary" aria-label="toggle">
                                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </IconButton>
                            <IconButton onClick={() => navigate(`/movies/${idx}`)} >
                                <InfoIcon />
                            </IconButton>
                        </h4>
                        <p style={styles} className="rating">⭐{movie.rating}</p>
                    </div>
                    {show ? <p className="summary">{movie.summary}</p> : null}
                </CardContent>
                <CardActions>
                    <Counter /> {deleteButton}
                </CardActions>
            </Card >
            <br></br>
        </div >
    );
}
