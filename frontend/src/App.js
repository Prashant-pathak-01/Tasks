import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./Components/Authentication/auth";
// import Discussion from "./Components/Discussion/discussion";
import Explore from "./Components/Explore/explore";
import Footer from "./Components/Homepage/footer";
import Homepage from "./Components/Homepage/homepage";
import Navbar from "./Components/Homepage/navbar";
import Trending from "./Components/Trending/trending";
import Card from "./Components/Discussion/Maincard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          {/* <Route
            path="/discussion"
            element={<Discussion />}
          /> */}
          <Route
            path="/trending"
            element={<Trending />}
          />
          <Route
            path="/explore"
            element={<Explore />}
          />
          <Route
            path="/auth"
            element={<Auth />}
          />
          <Route 
            path="/Discussion"
            element={<Card />} 
            />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
