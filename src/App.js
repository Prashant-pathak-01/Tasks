import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./Components/Authentication/auth";
import Discussion from "./Components/Discussion/discussion";
import Explore from "./Components/Explore/explore";
import Footer from "./Components/Homepage/footer";
import Homepage from "./Components/Homepage/homepage";
import Navbar from "./Components/Homepage/navbar";
import Trending from "./Components/Trending/trending";
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
                <Auth></Auth>
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
