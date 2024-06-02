import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Router>
        <NavBar theme={theme} toggleTheme={toggleTheme}  />
        <Home />
      </Router>
    </div>
  );
};
export default App;
