import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Homepage/homepage";
import Navbar from "./Components/Homepage/navbar";
import Footer from "./Components/Homepage/footer";
import Discussion from "./Components/Discussion/discussion";
import Trending from "./Components/Trending/trending";
import Explore from "./Components/Explore/explore";
import Login from "./Components/Authentication/login";
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
            path="/trending"
            element={
              <>
                <Trending></Trending>
              </>
            }
          ></Route>
          <Route
            path="/explore"
            element={
              <>
                <Explore></Explore>
              </>
            }
          ></Route>
          <Route
            path="/auth"
            element={
              <>
                <Login></Login>
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
