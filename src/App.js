import Weather from "./Weather";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather default="New Delhi" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Shivika2934"
            target="_blank"
            rel="noreferrer"
          >
            Shivika Mittal
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Shivika2934/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on Github
        </footer>
      </div>
    </div>
  );
}
