import "./App.css";
import React, { useState } from "react";
import Play from "./components/Play";
import Clock from "./components/Clock";
import InfoBanner from "./components/InfoBanner";
import MainContainer from "./components/MainContainer";


function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <>
      <header>
        <h1>Lottery Project</h1>
        {isAdmin === true && <button className="btn btn-danger">PickWinner</button>
        }
      </header>
      <MainContainer />
      <Clock />
      <InfoBanner />
      <Play setIsAdmin={setIsAdmin} />
    </>
  );
}

export default App;


// class App extends React.Component {
//   render() {
//     console.log(web3.version);
//     return (
      
//     );
//   }
// }
// export default App;
