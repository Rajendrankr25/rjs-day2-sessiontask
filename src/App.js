import './App.css';
import { AddColor } from './AddColor.js'
import { MovieList, AddMovie } from "./MovieList"
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function App() {

  const [movieList, setMovieList] = useState([
    {
      poster: "https://assetscdn1.paytm.com/images/cinema/Sardar-min-7878f140-5093-11ed-accc-bda99c20e847.jpg",
      title: "Sardar",
      rating: "7.8",
      summary: "Sardar is an 2022 Indian Tamil-language spy action film written and directed by P. S. Mithran and produced by S. Lakshman Kumar under the banner of Prince Pictures.",
      trailer: "https://www.youtube.com/embed/8OQzz_i3KFE"
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      title: "TopGun Maverick",
      rating: "8.4",
      summary: "After more than 30 years of service as one of the Navy's top aviators, Pete Maverick Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
      trailer: "https://www.youtube.com/embed/giXco2jaZ_4"
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BYTE1MmZiMWYtYTFmZi00YjA3LWI2ODgtMWFlNWYxZjdmNGE3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_FMjpg_UX1000_.jpg",
      title: "All Quiet On The Western Front",
      rating: "7.9",
      summary: "War breaks out in Germany in 1914. Paul Bäumer and his classmates quickly enlist in the army to serve their fatherland. No sooner are they drafted than the first images from the battlefield show them the reality of war.",
      trailer: "https://youtube.com/embed/hf8EYbVxtCY"
    },
    {
      poster: "https://c.saavncdn.com/089/Sita-Ramam-Tamil-Original-Motion-Picture-Soundtrack-Tamil-2022-20220802141114-500x500.jpg",
      title: "Sita Ramam",
      rating: "8.5",
      summary: "An orphaned soldier's life changes after he receives a letter from a girl named Sita. He meets her and love blossoms between them. When he returns to her camp in Kashmir, he sends a letter to Sita that will not reach her.",
      trailer: "https://youtube.com/embed/QS2UPxj_Y9w"
    },
    {
      poster: "https://i.pinimg.com/564x/e0/86/94/e08694e9c45d84d99f935772001d55a4.jpg",
      title: "Nope",
      rating: "8.2",
      summary: "Two siblings running a horse ranch in California discover something wonderful and sinister in the skies above, while the owner of an adjacent theme park tries to profit from the mysterious, otherworldly phenomenon.",
      trailer: "https://youtube.com/embed/In8fuzj3gck"
    },
    {
      poster: "https://i.pinimg.com/736x/a8/8b/1f/a88b1ffa546ce8f6e2fc68e30186f3cc.jpg",
      title: "Avatar 2 : The Way of Water",
      rating: "N/R",
      summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
      trailer: "https://youtube.com/embed/o5F8MOz_IDw"
    }
  ]);
  const navigate = useNavigate();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>
          <Button color="inherit" onClick={() => navigate("/movies/add")}>Add Movies</Button>
          <Button color="inherit" onClick={() => navigate("/color-game")}>Color Game</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movieList={movieList} />} />
        <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/movies/:id" element={<MovieDetails movieList={movieList} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  const styles = {
    color: movie.rating >= 8 ? "green" : "red"
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="700"
        src={movie.trailer}
        title="Sardar Official Trailer | Karthi, Raashii Khanna, Rajisha | GV Prakash Kumar | P.S Mithran"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className='movie-details-container'>
        <div className='movieSpecs'>
          <h4 className="title">{movie.title}
          </h4>
          <p style={styles} className="rating">⭐{movie.rating}</p>
        </div>
        <p className="summary">{movie.summary}</p>
        <Button variant="contained" onClick={() => navigate(-1)}><ArrowBackIosIcon />Back</Button>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Welcome to Movie App</h1>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h1>Error 404!!!</h1>
      <img src="https://miro.medium.com/max/1400/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="404" />
    </div>
  )
}

export default App;
