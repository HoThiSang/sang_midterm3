import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Navbar";
import Home from "./components/layout/Home";


const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home />
      </Router>
    </div>
  );
};
export default App;
