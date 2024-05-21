import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Router>
          <Navbar />
          <Home />
        </Router>
      </Router>
    </div>
  );
};

export default App;
