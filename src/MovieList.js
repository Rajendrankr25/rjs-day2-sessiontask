import { useEffect, useState } from 'react';
import { Movie } from './Movie';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';



export function MovieList() {

    const [movieList, setMovieList] = useState([]);

    const getMovies = () => {
        fetch("https://63899fddc5356b25a203eddb.mockapi.io/movies", { method: "GET" })
            .then((data) => data.json())
            .then((movies) => setMovieList(movies));
    }

    useEffect(() => getMovies(), []);

    const deleteMovie = (id) => {
        fetch(`https://63899fddc5356b25a203eddb.mockapi.io/movies/${id}`, { method: "DELETE" })
            .then((data) => getMovies());
    }

    const navigate = useNavigate();

    return (
        <div>
            <div className='movie-list'>
                {movieList.map((data) => (
                    <Movie key={data.id} movie={data} idx={data.id}
                        editButton={<IconButton sx={{ marginLeft: 'auto' }}
                            onClick={() => navigate(`/movies/edit/${data.id}`)}
                        ><EditIcon /></IconButton>}
                        deleteButton={<IconButton color='error' sx={{ marginLeft: 'auto' }}
                            onClick={() => deleteMovie(data.id)} aria-label="delete">
                            <DeleteIcon /></IconButton>}
                    />
                ))}
            </div>
        </div>
    );
}

