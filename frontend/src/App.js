import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/homepage";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
