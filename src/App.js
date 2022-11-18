import logo from './logo.svg';
import './App.css';

function App() {
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
    <div className="App">
      <h1>React Day2 Session Task!!!</h1>
      <h4>Movie details</h4>
      <div className='container'>
        <div className='row'>
          {mlist.map((data) => (
            <Movie
              poster={data.poster}
              title={data.title}
              rating={data.rating}
              summary={data.summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Movie({ poster, title, rating, summary }) {
  return (
    <div className='col-md-4'>
      <div className="card">
        <img className="poster" src={poster} alt={title} />
        <h1 className="title">{title}</h1>
        <h4 className="rating">{rating}</h4>
        <span className="summary">{summary}</span>
      </div>
    </div>
  )
}

export default App;
