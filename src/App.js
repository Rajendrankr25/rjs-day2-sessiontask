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

    }
  ]
  return (
    <div className="App">
      <h1>React Day2 Session Task!!!</h1>
      <h4>Movie details</h4>
      {mlist.map((data) => (
        <Movie
          poster={data.poster}
          title={data.title}
          rating={data.rating}
          summary={data.summary}
        />
      ))}
    </div>
  );
}

function Movie({ poster, title, rating, summary }) {
  return (
    <div className="container">
      <img className="poster" src={poster} alt={title} />
      <h1 className="title">{title}</h1>
      <span className="rating">{rating}</span>
      <p className="summary">{summary}</p>
    </div>
  )
}

export default App;
