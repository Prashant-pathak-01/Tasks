import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/homepage";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Discussion from "./Components/Discussion/discussion";
import Trending from "./Components/Trending/trending";
import Explore from "./Components/Explore/explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage></Homepage>
              </>
            }
          ></Route>
          <Route
            path="/discussion"
            element={
              <>
                <Discussion></Discussion>
              </>
            }
          ></Route>
          <Route
            path="/Trending"
            element={
              <>
                <Trending></Trending>
              </>
            }
          ></Route>
          <Route
            path="/Explore"
            element={
              <>
                <Explore></Explore>
              </>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
