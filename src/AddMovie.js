import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


export function AddMovie() {

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [rating, setRating] = useState('');
    const [summary, setSummary] = useState('');
    const [trailer, setTrailer] = useState('');

    const navigate = useNavigate();

    const addNewMovie = () => {
        const newMovie = {
            poster: poster,
            title: title,
            rating: rating,
            summary: summary,
            trailer: trailer
        };

        fetch("https://63899fddc5356b25a203eddb.mockapi.io/movies", {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: { "Content-type": "application/json" },
        }).then(() => navigate("/movies"));
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
            <TextField label="Trailer URL" variant="outlined"
                onChange={(event) => setTrailer(event.target.value)} />
            <Button variant="outlined" onClick={addNewMovie}>Add Movie</Button>
        </div>
    );
}
