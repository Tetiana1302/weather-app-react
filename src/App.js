import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is created by Tetiana Bysykalo and is
          <a
            href="https://github.com/Tetiana1302/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GidHub
          </a>
        </footer>
      </div>
    </div>
  );
}
