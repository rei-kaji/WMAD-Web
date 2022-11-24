import "./App.css";
import Form from "./components/Form";
const backGround = require("./assets/background.png");
const planet = require("./assets/planet.png");

function App() {
  return (
    <div className="App">
      <img src={planet} alt="planet" className="planet" />
      <Form />
    </div>
  );
}

export default App;
