import './App.css';
import { AddColor } from './AddColor.js'
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <MovieList /> */}
      {/* <AddColor /> */}
      <AddMovie />
    </div>
  );
}
function MovieList() {
  const mlist = [
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
    }
  ]
  return (
    <div className='movie-list'>
      {mlist.map((data) => (
        <Movie movie={data} />
      ))}
    </div>
  )
}

function Movie({ movie }) {
  const styles = {
    color: movie.rating >= 8 ? "green" : "red"
  }
  const [show, setShow] = useState(true);
  return (
    <div className="movie-container">
      <img className="poster" src={movie.poster} alt={movie.title} />
      <div className='movieSpecs'>
        <h3 className="title">{movie.title}</h3>
        <p style={styles} className="rating">⭐{movie.rating}</p>
      </div>
      <button className='toggle' onClick={() => setShow(!show)}>🔼🔽</button>
      {show ? <p className="summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  )
}

function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);

  const styles = {
    border: "none",
    backgroundColor: "white",
    fontSize: "20px",
  }

  return (
    <div>
      <button style={styles} onClick={() => setLike(like + 1)}>👍{like}</button>
      <button style={styles} onClick={() => setDisLike(disLike + 1)}>👎{disLike}</button>
    </div>
  );
}

function AddMovie() {
  return (
    <div>
      <h1>Add New Movie</h1>
      <input
        placeholder='Enter poster URL' />
      <input placeholder='Enter movie name' />
      <input placeholder='Enter rating' />
      <input placeholder='Enter summary' />
      <button>Add Movie</button>
    </div>
  );
}

export default App;
