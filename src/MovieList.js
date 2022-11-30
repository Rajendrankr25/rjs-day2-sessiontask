import { useState } from 'react';
import { Movie } from './Movie';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function MovieList({ movieList }) {
    return (
        <div>
            <div className='movie-list'>
                {movieList.map((data, index) => (
                    <Movie key={index} movie={data} idx={index} />
                ))}
            </div>
        </div>
    );
}

export function AddMovie({ movieList, setMovieList }) {

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [rating, setRating] = useState('');
    const [summary, setSummary] = useState('');

    const addNewMovie = () => {
        const newMovie = {
            poster: poster,
            title: title,
            rating: rating,
            summary: summary
        };
        setMovieList([...movieList, newMovie]);
    };

    return (
        <div className='add-movie'>
            <h1>Add New Movie</h1>
            <TextField label="Movie Name" variant="outlined"
                onChange={(event) => setTitle(event.target.value)} />
            <TextField label="Movie Poster URL" variant="outlined"
                onChange={(event) => setPoster(event.target.value)} />
            <TextField label="Rating" variant="outlined"
                onChange={(event) => setRating(event.target.value)} />
            <TextField label="Summary" variant="outlined"
                onChange={(event) => setSummary(event.target.value)} />
            <Button variant="outlined" onClick={addNewMovie}>Add Movie</Button>
        </div>
    )
}