import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/homepage";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
