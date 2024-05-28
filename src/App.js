import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
// import Book from "./components/users/Book";


const App = () => {
  return (
    <div className="App">
    {/* <Book /> */}
      <Router>
        <NavBar />
        <Home />
      </Router>
    </div>
  );
};
export default App;
