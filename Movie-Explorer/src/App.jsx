import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//VITE_API_KEY=1c12799f
