import './App.css';
import { AddColor } from './AddColor.js'
import { MovieList, AddMovie } from "./MovieList"
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [movieList, setMovieList] = useState([
    {
      poster: "https://assetscdn1.paytm.com/images/cinema/Sardar-min-7878f140-5093-11ed-accc-bda99c20e847.jpg",
      title: "Sardar",
      rating: "7.8",
      summary: "Sardar is an 2022 Indian Tamil-language spy action film written and directed by P. S. Mithran and produced by S. Lakshman Kumar under the banner of Prince Pictures."
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      title: "TopGun Maverick",
      rating: "8.4",
      summary: "After more than 30 years of service as one of the Navy's top aviators, Pete Maverick Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him."
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BYTE1MmZiMWYtYTFmZi00YjA3LWI2ODgtMWFlNWYxZjdmNGE3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_FMjpg_UX1000_.jpg",
      title: "All Quiet On The Western Front",
      rating: "7.9",
      summary: "War breaks out in Germany in 1914. Paul Bäumer and his classmates quickly enlist in the army to serve their fatherland. No sooner are they drafted than the first images from the battlefield show them the reality of war."
    },
    {
      poster: "https://c.saavncdn.com/089/Sita-Ramam-Tamil-Original-Motion-Picture-Soundtrack-Tamil-2022-20220802141114-500x500.jpg",
      title: "Sita Ramam",
      rating: "8.5",
      summary: "An orphaned soldier's life changes after he receives a letter from a girl named Sita. He meets her and love blossoms between them. When he returns to her camp in Kashmir, he sends a letter to Sita that will not reach her."
    },
    {
      poster: "https://i.pinimg.com/564x/e0/86/94/e08694e9c45d84d99f935772001d55a4.jpg",
      title: "Nope",
      rating: "8.2",
      summary: "Two siblings running a horse ranch in California discover something wonderful and sinister in the skies above, while the owner of an adjacent theme park tries to profit from the mysterious, otherworldly phenomenon."
    },
    {
      poster: "https://i.pinimg.com/736x/a8/8b/1f/a88b1ffa546ce8f6e2fc68e30186f3cc.jpg",
      title: "Avatar 2 : The Way of Water",
      rating: "N/R",
      summary: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans."
    }
  ]);

  return (
    <div className="App">
      <div className='navigation'>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/movies/add">Add Movies</Link>
        <Link to="/color-game">Color Game</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movieList={movieList} />} />
        <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
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
    </div>
  )
}

export default App;
