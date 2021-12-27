import "./App.css";
import Participants from "./components/Participants";
import Play from "./components/Play";
import Winners from "./components/Winners";

function App() {
  return (
    <>
      <h1>Lottery Project</h1>
      <Play />
      <div className="container">
        <div className="container__subcard">
          <Participants />
        </div>
        <div className="container__subcard">
          <Winners />
        </div>
      </div>
    </>
  );
}

export default App;
