import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Results from "./Results";
import Forecast from "./Forecast";
import CurrentLocation from "./CurrentLocation";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <br />
        <Results />
        <br />
        <Forecast />
        <CurrentLocation />
        <br />
      </div>
      <a
        href="https://github.com/mackenzimarie/weather-react-test"
        rel="noreferrer"
        target="_blank"
      >
        <span id="author">Coded by Mackenzi Kingdon</span>
      </a>
    </div>
  );
}
